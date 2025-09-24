'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  highlightActiveNavigation();
  initWeaponTraits();
});

/**
 * Делает верхнюю навигацию адаптивной и удобной для управления как мышью, так и клавиатурой.
 */
function initNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');
  const backdrop = document.querySelector('[data-nav-backdrop]');

  if (!toggle || !nav) {
    return;
  }

  const closeNav = (focusToggle = false) => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    if (backdrop) {
      backdrop.classList.remove('is-visible');
    }
    if (focusToggle) {
      toggle.focus();
    }
  };

  const openNav = () => {
    toggle.setAttribute('aria-expanded', 'true');
    nav.classList.add('is-open');
    document.body.classList.add('nav-open');
    if (backdrop) {
      backdrop.classList.add('is-visible');
    }
  };

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeNav();
    } else {
      openNav();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      closeNav();
    });
  }

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) {
        closeNav();
      }
    });
  });

  window.addEventListener(
    'resize',
    () => {
      if (window.innerWidth > 900) {
        closeNav();
      }
    },
    { passive: true }
  );

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeNav(true);
    }
  });
}

/**
 * Подсветка активного пункта навигации.
 */
function highlightActiveNavigation() {
  const nav = document.querySelector('#primary-nav');
  const activePage = document.body.dataset.page;

  if (!nav || !activePage) {
    return;
  }

  nav.querySelectorAll('a[data-page]').forEach((link) => {
    if (link.dataset.page === activePage) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/**
 * Загружает описания трейтов из rules.html и превращает текстовые записи в таблицах оружия
 * в интерактивные элементы с подсказками.
 */
function initWeaponTraits() {
  const traitCells = Array.from(document.querySelectorAll('.weapon-table tbody tr td:last-child'));
  if (!traitCells.length) {
    return;
  }

  const rulesPath = document.body.dataset.rulesPath || 'rules.html';

  fetch(rulesPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Статус ответа: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      const parser = new DOMParser();
      const rulesDocument = parser.parseFromString(html, 'text/html');
      const definitions = extractTraitDefinitions(rulesDocument);

      if (!definitions.length) {
        return;
      }

      applyTraitsToTables(traitCells, definitions);
    })
    .catch((error) => {
      console.error('Не удалось загрузить описания правил оружия:', error);
    });
}

/**
 * Извлекает определения трейтов из документа правил.
 * @param {Document} doc
 * @returns {Array<Object>}
 */
function extractTraitDefinitions(doc) {
  const nodes = Array.from(doc.querySelectorAll('#special-rules [data-trait-id]'));

  return nodes.map((node) => {
    const id = node.getAttribute('data-trait-id');
    const aliasAttr = node.getAttribute('data-trait-aliases') || '';
    const aliases = aliasAttr
      .split(',')
      .map((alias) => alias.trim())
      .filter(Boolean);
    const titleTemplate = node.getAttribute('data-trait-title-template') || node.getAttribute('data-trait-title');
    const descriptionNode = node.querySelector('[data-trait-description]');
    const descriptionHtml = descriptionNode ? descriptionNode.innerHTML.trim() : '';
    const template = node.getAttribute('data-trait-template') || descriptionHtml;
    const fallbackTitle = node.querySelector('h3') ? node.querySelector('h3').textContent.trim() : id;
    const fallbackText = descriptionNode ? descriptionNode.textContent.trim() : template.replace(/<[^>]+>/g, '');

    if (!aliases.length) {
      aliases.push(fallbackTitle);
    }

    const aliasDefinitions = aliases.map((alias) => {
      if (alias.includes('{{value}}')) {
        const escaped = escapeRegExp(alias);
        const pattern = '^' + escaped.split('\\{\\{value\\}\\}').join('(.+?)') + '$';
        return {
          type: 'pattern',
          value: alias,
          regex: new RegExp(pattern, 'i')
        };
      }

      return {
        type: 'exact',
        value: alias,
        normalized: normalizeTraitLabel(alias)
      };
    });

    return {
      id,
      aliases: aliasDefinitions,
      titleTemplate: titleTemplate || fallbackTitle,
      template: template || fallbackText,
      descriptionHtml,
      fallbackText
    };
  });
}

/**
 * Применяет интерактивные подсказки к ячейкам таблиц с правилами оружия.
 * @param {HTMLElement[]} cells
 * @param {Array<Object>} definitions
 */
function applyTraitsToTables(cells, definitions) {
  const tooltip = createTraitTooltip();
  if (!tooltip) {
    return;
  }

  const matchCache = new Map();
  let activeTrait = null;

  const closeActiveTrait = () => {
    if (!activeTrait) {
      return;
    }
    activeTrait.classList.remove('is-active');
    tooltip.hide();
    activeTrait = null;
  };

  const showTrait = (element, title, bodyHtml) => {
    if (activeTrait && activeTrait !== element) {
      activeTrait.classList.remove('is-active');
    }

    activeTrait = element;
    element.classList.add('is-active');
    tooltip.show(element, title, bodyHtml);
  };

  cells.forEach((cell) => {
    const originalText = cell.textContent.trim();
    if (!originalText || originalText === '—') {
      return;
    }

    const parts = originalText.split(',').map((part) => part.trim()).filter(Boolean);
    if (!parts.length) {
      return;
    }

    cell.textContent = '';

    parts.forEach((part, index) => {
      if (index > 0) {
        cell.appendChild(document.createTextNode(', '));
      }

      const match = findTraitDefinition(part, definitions, matchCache);
      if (!match) {
        cell.appendChild(document.createTextNode(part));
        return;
      }

      const element = document.createElement('span');
      element.className = 'weapon-trait';
      element.textContent = part;
      element.setAttribute('tabindex', '0');
      element.dataset.traitId = match.definition.id;

      const context = {};
      if (match.value) {
        context.value = match.value;
      }

      const title = fillTemplate(match.definition.titleTemplate, context) || match.definition.titleTemplate;
      const bodyHtml = fillTemplate(match.definition.template, context) || match.definition.descriptionHtml;
      const plainDescription = stripHtml(bodyHtml) || match.definition.fallbackText || title;

      element.dataset.tooltipTitle = title;
      element.dataset.tooltipBody = bodyHtml;
      element.setAttribute('aria-label', `${title}. ${plainDescription}`);

      const handleFocus = () => {
        showTrait(element, title, bodyHtml);
      };

      const handleBlur = () => {
        if (activeTrait === element) {
          closeActiveTrait();
        }
      };

      element.addEventListener('mouseenter', handleFocus);
      element.addEventListener('focus', handleFocus);
      element.addEventListener('mouseleave', handleBlur);
      element.addEventListener('blur', handleBlur);

      element.addEventListener('click', (event) => {
        if (window.matchMedia('(hover: none)').matches) {
          event.preventDefault();
          if (activeTrait === element) {
            closeActiveTrait();
          } else {
            showTrait(element, title, bodyHtml);
          }
        }
      });

      cell.appendChild(element);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeActiveTrait();
    }
  });

  window.addEventListener(
    'scroll',
    () => {
      if (activeTrait) {
        closeActiveTrait();
      }
    },
    { passive: true }
  );

  window.addEventListener(
    'resize',
    () => {
      if (activeTrait) {
        closeActiveTrait();
      }
    },
    { passive: true }
  );
}

/**
 * Находит подходящее определение трейта для строки.
 * @param {string} text
 * @param {Array<Object>} definitions
 * @param {Map<string, Object|null>} cache
 * @returns {{definition: Object, value?: string}|null}
 */
function findTraitDefinition(text, definitions, cache) {
  if (cache.has(text)) {
    return cache.get(text);
  }

  const trimmed = text.trim();
  const withoutParentheses = trimmed.replace(/\s*\(.*?\)\s*/g, '').trim();
  const normalized = normalizeTraitLabel(trimmed);
  const normalizedWithoutParens = normalizeTraitLabel(withoutParentheses);

  for (const definition of definitions) {
    for (const alias of definition.aliases) {
      if (alias.type === 'pattern') {
        const candidates = [trimmed, withoutParentheses];
        for (const candidate of candidates) {
          if (!candidate) {
            continue;
          }
          const match = alias.regex.exec(candidate);
          if (match) {
            const value = (match[1] || '').trim();
            const result = { definition, value };
            cache.set(text, result);
            return result;
          }
        }
      } else if (alias.normalized === normalized || alias.normalized === normalizedWithoutParens) {
        const result = { definition };
        cache.set(text, result);
        return result;
      }
    }
  }

  cache.set(text, null);
  return null;
}

/**
 * Создаёт и настраивает всплывающую подсказку.
 */
function createTraitTooltip() {
  const tooltip = document.createElement('div');
  tooltip.className = 'trait-tooltip';
  tooltip.setAttribute('role', 'tooltip');

  const title = document.createElement('div');
  title.className = 'trait-tooltip__title';
  tooltip.appendChild(title);

  const body = document.createElement('div');
  body.className = 'trait-tooltip__body';
  tooltip.appendChild(body);

  document.body.appendChild(tooltip);

  return {
    element: tooltip,
    show(target, tooltipTitle, tooltipBody) {
      title.textContent = tooltipTitle;
      body.innerHTML = tooltipBody;

      tooltip.classList.add('is-visible');
      tooltip.style.visibility = 'hidden';
      tooltip.style.top = '-9999px';
      tooltip.style.left = '-9999px';

      const rect = tooltip.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportWidth = document.documentElement.clientWidth;

      let top = targetRect.top + scrollY - rect.height - 12;
      if (top < scrollY + 12) {
        top = targetRect.bottom + scrollY + 12;
      }

      let left = targetRect.left + scrollX + targetRect.width / 2 - rect.width / 2;
      left = Math.max(scrollX + 12, Math.min(left, scrollX + viewportWidth - rect.width - 12));

      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
      tooltip.style.visibility = '';
    },
    hide() {
      tooltip.classList.remove('is-visible');
    }
  };
}

/**
 * Преобразует HTML-строку в простой текст.
 * @param {string} value
 * @returns {string}
 */
function stripHtml(value) {
  const temp = document.createElement('div');
  temp.innerHTML = value;
  return temp.textContent ? temp.textContent.trim() : '';
}

/**
 * Утилита для подстановки значений в шаблон.
 * @param {string} template
 * @param {Record<string, string>} context
 * @returns {string}
 */
function fillTemplate(template, context) {
  return (template || '').replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) => {
    return Object.prototype.hasOwnProperty.call(context, key) ? context[key] : '';
  });
}

/**
 * Нормализует строку для сопоставления названий трейтов.
 * @param {string} value
 * @returns {string}
 */
function normalizeTraitLabel(value) {
  return value
    .toLowerCase()
    .replace(/\s*\(.*?\)\s*/g, '')
    .replace(/[«»“”]/g, '')
    .replace(/\*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Экранирует спецсимволы для использования в регулярном выражении.
 * @param {string} value
 * @returns {string}
 */
function escapeRegExp(value) {
  return value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\$&');
}
