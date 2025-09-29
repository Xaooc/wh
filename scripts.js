const KILL_TEAM_LIBRARY = [
  {
    key: 'necron',
    name: 'Иеротековый Круг',
    originalName: 'Hierotek Circle',
    faction: 'Некроны',
    alignment: 'Ксенос',
    href: 'necron-cheatsheet.html',
    status: 'available',
    navLabel: 'Иеротек Круг (Hierotek Circle)',
    summary: 'Элитный отряд некронов с акцентом на стойкость и контроль поля боя.',
    focus: ['Стойкость', 'Поддержка', 'Стрельба']
  },
  {
    key: 'vespid',
    name: 'Веспид-Стингвинг',
    originalName: 'Vespid Stingwing',
    faction: 'Тау',
    alignment: 'Ксенос',
    href: 'vespid-cheatsheet.html',
    status: 'available',
    navLabel: 'Веспид-Стингвинг (Vespid Stingwing)',
    summary: 'Подвижная команда разведчиков-снайперов Империи Тау, полагающаяся на манёвры.',
    focus: ['Мобильность', 'Стрельба', 'Альфа-удары']
  },
  {
    key: 'pathfinder',
    name: 'Патфайндеры Т\'ау',
    originalName: 'Pathfinder Kill Team',
    faction: 'Империя Т\'ау',
    alignment: 'Ксенос',
    href: 'pathfinder-cheatsheet.html',
    status: 'available',
    navLabel: 'Патфайндеры Т\'ау (Pathfinder Kill Team)',
    summary: 'Разведывательный отряд Т\'ау, сочетающий маркерсветы и поддержку дронов.',
    focus: ['Стрельба', 'Поддержка', 'Маркерсветы']
  },
  {
    key: 'elucidian-starstriders',
    name: 'Элусидианские Старстрайдеры',
    originalName: 'Elucidian Starstriders',
    faction: 'Империум',
    alignment: 'Империум',
    href: 'elucidian-starstriders-cheatsheet.html',
    status: 'available',
    navLabel: 'Элусидианские Старстрайдеры (Elucidian Starstriders)',
    summary: 'Килл-тим вольного торговца с упором на гибкие сделки и орбитальную поддержку.',
    focus: ['Стрельба', 'Поддержка', 'Манёвры']
  },
  {
    key: 'adepta-sororitas-novitiate',
    name: 'Новициаты Сороритас ',
    originalName: 'Adepta Sororitas Novitiate',
    faction: 'Адепта Сороритас',
    alignment: 'Империум',
    href: 'adepta-sororitas-novitiate-cheatsheet.html',
    status: 'available',
    navLabel: 'Новициаты Сороритас (Adepta Sororitas Novitiate)',
    summary: 'Актуализированная версия листа с переработанными профилями и доктринами.',
    focus: ['Поддержка', 'Гибкость', 'Контроль миссий']
  },
  {
    key: 'plague-marines',
    name: 'Чумные морпехи',
    originalName: 'Plague Marines',
    faction: 'Гвардия Смерти',
    alignment: 'Хаос',
    href: 'plague-marines-cheatsheet.html',
    status: 'available',
    navLabel: 'Чумные морпехи (Plague Marines)',
    summary: 'Непробиваемые воины Нургла, доминирующие в затяжных схватках.',
    focus: ['Стойкость', 'Рукопашный бой', 'Зоны заражения']
  },
  {
    key: 'warpcoven',
    name: 'Варпковен',
    originalName: 'Warp Coven',
    faction: 'Тысяча Сынов',
    alignment: 'Хаос',
    href: 'warpcoven-cheatsheet.html',
    status: 'available',
    navLabel: 'Варпковен (Warp Coven)',
    summary: 'Ковен колдунов Тысячи Сынов, сочетающий псионику рубриков и натиск тзаангоров.',
    focus: ['Псионика', 'Стрельба', 'Контроль']
  },
  {
    key: 'nemesis-claw',
    name: 'Коготь Немезиды',
    originalName: 'Nemesis Claw',
    faction: 'Ночные Лорды',
    alignment: 'Хаос',
    href: 'nemesis-claw-cheatsheet.html',
    status: 'available',
    navLabel: 'Коготь Немезиды (Nemesis Claw)',
    summary: 'Культ Ночных Лордов, сочетающий удары из тьмы, давление страхом и гибкое применение Астартес-приёмов.',
    focus: ['Рукопашный бой', 'Психологическое давление', 'Манёвренность']
  },
  {
    key: 'kommandos',
    name: 'Коммандосы',
    originalName: 'Kommandos',
    faction: 'Орки',
    alignment: 'Ксенос',
    href: 'kommandos-cheatsheet.html',
    status: 'available',
    navLabel: 'Коммандосы (Kommandos)',
    summary: 'Грубые, но изобретательные орки-диверсанты с упором на скрытность.',
    focus: ['Маскировка', 'Взрывы', 'Рукопашный бой']
  },
  {
    key: 'wrecka-krew',
    name: 'Разносчики',
    originalName: 'Wrecka Krew',
    faction: 'Орки',
    alignment: 'Ксенос',
    href: 'wrecka-krew-cheatsheet.html',
    status: 'available',
    navLabel: 'Разносчики (Wrecka Krew)',
    summary: 'Орочий отряд танкоубийц, накапливающих очки «Разгрома» и усиливающих взрывы.',
    focus: ['Взрывы', 'Рукопашный бой', 'Синергия очков']
  },
  {
    key: 'hearthkyn-salvagers',
    name: 'Хэрткин-спасатели',
    originalName: 'Hearthkyn Salvagers',
    faction: 'Лиги Вотан',
    alignment: 'Ксенос',
    href: 'hearthkyn-salvagers-cheatsheet.html',
    status: 'available',
    navLabel: 'Хэрткин-спасатели (Hearthkyn Salvagers)',
    summary: 'Команда спасателей Лиг Вотан, полагающаяся на жетоны «обиды» и усиление ближнего боя.',
    focus: ['Стойкость', 'Синергия жетонов', 'Контроль целей']
  },
  {
    key: 'inquisitorial-agents',
    name: 'Инквизиторские агенты',
    originalName: 'Inquisitorial Agents',
    faction: 'Инквизиция',
    alignment: 'Империум',
    status: 'planned',
    navLabel: 'Инквизиторские агенты (Inquisitorial Agents)',
    summary: 'Заготовка для гибкой команды агентов с особыми поручениями Инквизиции.',
    focus: ['Специалисты', 'Контроль угроз', 'Адаптация']
  },
  {
    key: 'voidscarred',
    name: 'Корсары Варпа',
    originalName: 'Voidscarred',
    faction: 'Эльдары',
    alignment: 'Ксенос',
    status: 'planned',
    navLabel: 'Корсары Варпа (Voidscarred)',
    summary: 'Планируемый модуль для подвижных эльдарских рейдеров, делающих ставку на хитрость.',
    focus: ['Мобильность', 'Хитрость', 'Псионика']
  }
];

const REFERENCE_LINKS = [
  { key: 'rules', href: 'rule.html', label: 'Правила (Rules)' },
  { key: 'equipment', href: 'unique-equipment.html', label: 'Уникальное снаряжение (Unique Equipment)' },
  { key: 'tacops', href: 'TACOP.html', label: 'Tac Ops' },
  { key: 'critops', href: 'critop.html', label: 'Критические операции (Crit Ops)' }
];

const PERSONAL_LINKS = [
  { key: 'favorites', href: 'favorites.html', label: 'Избранное (Favorites)' }
];

function buildKillTeamNavLinks(list) {
  const available = [];
  const planned = [];
  list.forEach((team) => {
    if (!team) {
      return;
    }
    if ((team.status || 'available') === 'planned') {
      planned.push(team);
    } else {
      available.push(team);
    }
  });

  const toNavLink = (team) => ({
    key: team.key,
    href: team.href || null,
    label: team.navLabel || `${team.name}${team.originalName ? ` (${team.originalName})` : ''}`,
    status: team.status || 'available',
    badge: (team.status || 'available') === 'planned' ? 'Скоро' : null
  });

  return available.concat(planned).map(toNavLink);
}

const NAV_SECTIONS = [
  {
    label: 'Обзор',
    links: [
      { key: 'home', href: 'index.html', label: 'Обзор Kill Team HQ' }
    ]
  },
  {
    label: 'Kill teams',
    links: buildKillTeamNavLinks(KILL_TEAM_LIBRARY)
  },
  {
    label: 'Справочники',
    links: REFERENCE_LINKS
  },
  {
    label: 'Личное',
    links: PERSONAL_LINKS
  }
];

const collapsibleSectionsRegistry = new Map();
const collapsibleAnchors = new Set();
const collapsibleContentAnchors = new Set();
const pageNavControllers = new Map();
let pageNavIdCounter = 0;
const pageToolbars = new Set();

function registerPageNavController(id, controller) {
  if (!id || !controller) {
    return;
  }
  if (!pageNavControllers.has(id)) {
    pageNavControllers.set(id, new Set());
  }
  pageNavControllers.get(id).add(controller);
}

function notifyPageNavControllers(id, expanded) {
  if (!id || !pageNavControllers.has(id)) {
    return;
  }
  const controllers = pageNavControllers.get(id);
  controllers.forEach((controller) => {
    if (typeof controller.setExpanded === 'function') {
      controller.setExpanded(expanded);
    }
  });
}
function renderGlobalNav() {
  const nav = document.querySelector('[data-nav]');
  if (!nav) {
    return;
  }
  nav.innerHTML = '';
  const currentPage = document.body.dataset.page || '';

  if (!nav.id) {
    nav.id = 'global-site-nav';
  }

  const brand = document.querySelector('.brand');
  if (brand && brand.tagName === 'A') {
    brand.setAttribute('href', 'index.html');
  }

  const navParent = nav.parentElement;
  let menuToggle = null;
  if (navParent) {
    menuToggle = navParent.querySelector('[data-nav-toggle]');
    if (!menuToggle) {
      menuToggle = document.createElement('button');
      menuToggle.type = 'button';
      menuToggle.className = 'site-nav__menu-toggle';
      menuToggle.setAttribute('data-nav-toggle', 'true');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-controls', nav.id);
      menuToggle.innerHTML = '<span class="site-nav__menu-icon" aria-hidden="true"></span><span class="site-nav__menu-label">Меню</span>';
      navParent.insertBefore(menuToggle, nav);
    } else {
      menuToggle.setAttribute('aria-controls', nav.id);
    }
  }

  const sectionControllers = [];

  const closeAllSections = (exceptController = null) => {
    sectionControllers.forEach((controller) => {
      if (controller !== exceptController) {
        controller.setOpen(false);
      }
    });
  };

  const closeMobileMenu = () => {
    if (!nav.classList.contains('is-open')) {
      closeAllSections();
      return;
    }
    nav.classList.remove('is-open');
    closeAllSections();
    if (menuToggle) {
      menuToggle.classList.remove('is-active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  };

  if (menuToggle && !menuToggle.dataset.navReady) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (!isOpen) {
        closeAllSections();
      }
    });
    menuToggle.dataset.navReady = 'true';
  }

  const desktopMedia = typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(min-width: 900px)')
    : null;

  if (desktopMedia && !nav.dataset.navMediaBound) {
    const handleViewportChange = (event) => {
      if (event.matches) {
        closeMobileMenu();
      }
    };
    if (typeof desktopMedia.addEventListener === 'function') {
      desktopMedia.addEventListener('change', handleViewportChange);
    } else if (typeof desktopMedia.addListener === 'function') {
      desktopMedia.addListener(handleViewportChange);
    }
    nav.dataset.navMediaBound = 'true';
  }

  if (!nav.dataset.navOutsideBound) {
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && (!menuToggle || event.target !== menuToggle)) {
        closeAllSections();
        if (!nav.classList.contains('is-open')) {
          return;
        }
        if (menuToggle) {
          menuToggle.classList.remove('is-active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
        nav.classList.remove('is-open');
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    });
    nav.dataset.navOutsideBound = 'true';
  }

  NAV_SECTIONS.forEach((section, index) => {
    if (!section || !Array.isArray(section.links) || !section.links.length) {
      return;
    }

    const sectionNode = document.createElement('div');
    sectionNode.className = 'site-nav__section';
    sectionNode.setAttribute('data-nav-section', 'true');

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'site-nav__trigger';
    const panelId = `${nav.id}-panel-${index + 1}`;
    trigger.setAttribute('aria-controls', panelId);
    trigger.setAttribute('aria-expanded', 'false');
    trigger.innerHTML = `<span class="site-nav__trigger-label">${section.label || 'Навигация'}</span><span class="site-nav__trigger-icon" aria-hidden="true"></span>`;
    sectionNode.appendChild(trigger);

    const panel = document.createElement('div');
    panel.className = 'site-nav__panel';
    panel.id = panelId;

    const list = document.createElement('ul');
    list.className = 'site-nav__list';

    section.links.forEach((link) => {
      if (!link) {
        return;
      }
      const item = document.createElement('li');
      item.className = 'site-nav__item';

      const isDisabled = !link.href || link.status === 'planned';
      const node = document.createElement(isDisabled ? 'span' : 'a');
      node.className = 'site-nav__link';
      node.textContent = link.label;
      if (link.key) {
        node.dataset.navKey = link.key;
      }
      if (!isDisabled) {
        node.setAttribute('href', link.href);
        if (link.key === currentPage) {
          node.setAttribute('aria-current', 'page');
        }
        node.addEventListener('click', () => {
          closeMobileMenu();
        });
      } else {
        node.classList.add('site-nav__link--disabled');
        node.setAttribute('aria-disabled', 'true');
      }
      if (link.badge) {
        const badge = document.createElement('span');
        badge.className = 'site-nav__badge';
        badge.textContent = link.badge;
        node.appendChild(badge);
      }
      item.appendChild(node);
      list.appendChild(item);
    });

    if (!list.childElementCount) {
      return;
    }

    panel.appendChild(list);
    sectionNode.appendChild(panel);
    nav.appendChild(sectionNode);

    let isOpen = false;
    const controller = {
      setOpen(open) {
        const shouldOpen = Boolean(open);
        if (isOpen === shouldOpen) {
          return;
        }
        isOpen = shouldOpen;
        sectionNode.classList.toggle('is-open', isOpen);
        trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      },
      isOpen() {
        return isOpen;
      }
    };

    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      const nextState = !controller.isOpen();
      if (nextState) {
        closeAllSections(controller);
      }
      controller.setOpen(nextState);
    });

    sectionControllers.push(controller);

    const shouldAutoOpen = section.links.some((link) => link && link.key === currentPage);
    if (shouldAutoOpen) {
      controller.setOpen(true);
    }
  });
}

function ensureCollapsibleAnchor(heading) {
  if (!heading) {
    return '';
  }
  if (heading.id) {
    collapsibleAnchors.add(heading.id);
    return heading.id;
  }
  const label = (heading.textContent || '').trim();
  const slug = slugify(label || 'section');
  const anchor = generateUniqueValue(slug || 'section', collapsibleAnchors);
  heading.id = anchor;
  return anchor;
}

function initCollapsibleSections() {
  collapsibleSectionsRegistry.clear();
  collapsibleAnchors.clear();
  collapsibleContentAnchors.clear();

  const configs = [
    { scope: '.sheet', triggerSelector: '.section-title', stopSelector: '.section-title', containerSelector: 'section' },
    { scope: '.rules', triggerSelector: 'h2', stopSelector: 'h2' },
    { scope: '.tacops', triggerSelector: '.group-title', stopSelector: '.group-title' }
  ];

  const normalizeSelectors = (selector) => (selector || '')
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);

  configs.forEach((config) => {
    const scope = document.querySelector(config.scope);
    if (!scope) {
      return;
    }
    const triggers = Array.from(scope.querySelectorAll(config.triggerSelector));
    if (!triggers.length) {
      return;
    }
    const stopSelectors = normalizeSelectors(config.stopSelector || config.triggerSelector);

    const matchesStop = (element) => {
      if (!element || element.nodeType !== 1) {
        return false;
      }
      return stopSelectors.some((selector) => {
        try {
          return element.matches(selector);
        } catch (error) {
          return false;
        }
      });
    };

    triggers.forEach((heading) => {
      if (!heading || heading.dataset.collapsibleReady === 'true') {
        return;
      }

      let wrapper = null;
      if (config.containerSelector) {
        const container = heading.closest(config.containerSelector);
        if (container && scope.contains(container)) {
          wrapper = container;
        }
      }

      let content = null;

      if (!wrapper) {
        const parent = heading.parentElement;
        if (!parent) {
          return;
        }
        const nodesToMove = [];
        let node = heading.nextSibling;
        while (node) {
          if (node.nodeType === 1 && matchesStop(node)) {
            break;
          }
          nodesToMove.push(node);
          node = node.nextSibling;
        }
        wrapper = document.createElement('section');
        wrapper.className = 'collapsible-section';
        parent.insertBefore(wrapper, heading);
        wrapper.appendChild(heading);
        content = document.createElement('div');
        content.className = 'collapsible-section__content';
        wrapper.appendChild(content);
        nodesToMove.forEach((nodeToMove) => {
          content.appendChild(nodeToMove);
        });
      } else {
        wrapper.classList.add('collapsible-section');
        if (heading.parentElement !== wrapper) {
          wrapper.insertBefore(heading, wrapper.firstChild);
        }
        content = wrapper.querySelector(':scope > .collapsible-section__content');
        if (!content) {
          content = document.createElement('div');
          content.className = 'collapsible-section__content';
          const nodesToMove = [];
          let node = heading.nextSibling;
          while (node) {
            const next = node.nextSibling;
            nodesToMove.push(node);
            node = next;
          }
          nodesToMove.forEach((nodeToMove) => {
            content.appendChild(nodeToMove);
          });
          wrapper.appendChild(content);
        }
      }

      if (!content) {
        return;
      }

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'collapsible-section__toggle';
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('data-collapsible-toggle', 'true');

      const label = document.createElement('span');
      label.className = 'collapsible-section__label';
      while (heading.firstChild) {
        label.appendChild(heading.firstChild);
      }
      button.appendChild(label);

      const icon = document.createElement('span');
      icon.className = 'collapsible-section__icon';
      icon.setAttribute('aria-hidden', 'true');
      button.appendChild(icon);

      heading.appendChild(button);
      heading.classList.add('collapsible-section__heading');
      heading.dataset.collapsibleReady = 'true';

      const anchorId = ensureCollapsibleAnchor(heading);
      if (!content.id) {
        content.id = generateUniqueValue(`${anchorId}-content`, collapsibleContentAnchors);
      } else {
        collapsibleContentAnchors.add(content.id);
      }
      button.setAttribute('aria-controls', content.id);

      let expanded = true;

      const updateState = (notify = false) => {
        button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        wrapper.classList.toggle('is-collapsed', !expanded);
        content.hidden = !expanded;
        if (notify) {
          document.dispatchEvent(new CustomEvent('collapsible:change', {
            detail: { id: anchorId, expanded }
          }));
        }
      };

      const setExpanded = (value, notify = true) => {
        const next = Boolean(value);
        if (expanded === next) {
          return;
        }
        expanded = next;
        updateState(notify);
      };

      button.addEventListener('click', () => {
        setExpanded(!expanded);
      });

      collapsibleSectionsRegistry.set(anchorId, {
        id: anchorId,
        heading,
        content,
        button,
        isExpanded: () => expanded,
        setExpanded(value) {
          setExpanded(value);
        },
        toggle() {
          setExpanded(!expanded);
        }
      });

      updateState(false);
    });
  });
}

function getCollapsibleSectionsInScope(scope) {
  const sections = [];
  collapsibleSectionsRegistry.forEach((section) => {
    if (!section || !section.heading) {
      return;
    }
    if (!scope) {
      sections.push(section);
      return;
    }
    if (scope.contains(section.heading)) {
      sections.push(section);
    }
  });
  return sections;
}

function initPageToolbar() {
  pageToolbars.clear();
  const toolbars = Array.from(document.querySelectorAll('[data-page-toolbar]'));
  if (!toolbars.length) {
    return;
  }

  toolbars.forEach((toolbar) => {
    if (!toolbar || toolbar.dataset.toolbarReady === 'true') {
      return;
    }

    const scopeSelector = toolbar.getAttribute('data-toolbar-scope');
    let scope = null;
    if (scopeSelector) {
      scope = toolbar.closest(scopeSelector) || document.querySelector(scopeSelector);
    }
    if (!scope) {
      scope = toolbar.parentElement || document;
    }

    const meta = {
      toolbar,
      scope,
      statsNode: toolbar.querySelector('[data-toolbar-stats]'),
      collapseButton: toolbar.querySelector('[data-toolbar-collapse]'),
      expandButton: toolbar.querySelector('[data-toolbar-expand]'),
      compactButton: toolbar.querySelector('[data-toolbar-compact]'),
      printButton: toolbar.querySelector('[data-toolbar-print]'),
      compactTargets: [],
      compactClass: toolbar.getAttribute('data-compact-class') || 'is-compact-mode',
      sections: [],
      sectionIds: new Set()
    };

    const targetSelector = toolbar.getAttribute('data-compact-target');
    if (targetSelector) {
      meta.compactTargets = Array.from(document.querySelectorAll(targetSelector)).filter(Boolean);
    } else {
      meta.compactTargets = [document.body].filter(Boolean);
    }

    const updateSections = () => {
      meta.sections = getCollapsibleSectionsInScope(scope);
      meta.sectionIds = new Set(meta.sections.map((section) => section.id));
    };

    const updateStats = () => {
      if (!meta.statsNode) {
        return;
      }
      const total = meta.sections.length;
      if (!total) {
        const emptyLabel = toolbar.getAttribute('data-toolbar-empty-label');
        meta.statsNode.textContent = emptyLabel || 'Нет секций для сворачивания';
        if (meta.collapseButton) {
          meta.collapseButton.disabled = true;
        }
        if (meta.expandButton) {
          meta.expandButton.disabled = true;
        }
        return;
      }
      const expandedCount = meta.sections.reduce((count, section) => (
        section.isExpanded() ? count + 1 : count
      ), 0);
      meta.statsNode.textContent = `${expandedCount} из ${total} секций раскрыто`;
      if (meta.collapseButton) {
        meta.collapseButton.disabled = expandedCount === 0;
      }
      if (meta.expandButton) {
        meta.expandButton.disabled = expandedCount === total;
      }
    };

    const setCompactState = (active) => {
      const next = Boolean(active);
      if (!meta.compactTargets.length) {
        if (meta.compactButton) {
          meta.compactButton.disabled = true;
        }
        return;
      }
      meta.compactTargets.forEach((target) => {
        if (!target) {
          return;
        }
        target.classList.toggle(meta.compactClass, next);
      });
      if (meta.compactButton) {
        meta.compactButton.classList.toggle('is-active', next);
        meta.compactButton.setAttribute('aria-pressed', next ? 'true' : 'false');
      }
    };

    if (meta.collapseButton) {
      meta.collapseButton.addEventListener('click', () => {
        meta.sections.forEach((section) => section.setExpanded(false));
        updateStats();
      });
    }

    if (meta.expandButton) {
      meta.expandButton.addEventListener('click', () => {
        meta.sections.forEach((section) => section.setExpanded(true));
        updateStats();
      });
    }

    if (meta.printButton) {
      meta.printButton.addEventListener('click', () => {
        window.print();
      });
    }

    if (meta.compactButton) {
      if (!meta.compactTargets.length) {
        meta.compactButton.disabled = true;
      } else {
        const initial = meta.compactTargets.some((target) => target.classList.contains(meta.compactClass));
        setCompactState(initial);
        meta.compactButton.addEventListener('click', () => {
          const current = meta.compactTargets.some((target) => target.classList.contains(meta.compactClass));
          setCompactState(!current);
        });
      }
    }

    updateSections();
    updateStats();

    meta.updateSections = () => {
      updateSections();
      updateStats();
    };
    meta.updateStats = updateStats;
    meta.setCompactState = setCompactState;

    pageToolbars.add(meta);
    toolbar.dataset.toolbarReady = 'true';
  });
}

const KILL_TEAM_STATUS_LABELS = {
  available: 'Готово',
  planned: 'Скоро'
};

function createKillTeamCard(team) {
  const card = document.createElement('article');
  card.className = 'killteam-card';
  card.dataset.teamKey = team.key || '';
  card.dataset.status = team.status;
  if (team.status === 'planned') {
    card.classList.add('killteam-card--planned');
  }

  const header = document.createElement('div');
  header.className = 'killteam-card__header';

  const faction = document.createElement('span');
  faction.className = 'killteam-card__faction';
  const factionParts = [team.alignment, team.faction].filter(Boolean);
  faction.textContent = factionParts.join(' • ');
  header.appendChild(faction);

  const statusLabel = document.createElement('span');
  statusLabel.className = 'killteam-card__status';
  statusLabel.textContent = KILL_TEAM_STATUS_LABELS[team.status] || KILL_TEAM_STATUS_LABELS.available;
  if (team.status === 'planned') {
    statusLabel.classList.add('killteam-card__status--planned');
  } else {
    statusLabel.classList.add('killteam-card__status--ready');
  }
  header.appendChild(statusLabel);

  card.appendChild(header);

  const title = document.createElement('h3');
  title.className = 'killteam-card__title';
  const titleMain = document.createElement('span');
  titleMain.className = 'killteam-card__title-main';
  titleMain.textContent = team.name;
  title.appendChild(titleMain);
  if (team.originalName) {
    const subtitle = document.createElement('span');
    subtitle.className = 'killteam-card__subtitle';
    subtitle.textContent = team.originalName;
    title.appendChild(subtitle);
  }
  card.appendChild(title);

  if (team.summary) {
    const summary = document.createElement('p');
    summary.className = 'killteam-card__summary';
    summary.textContent = team.summary;
    card.appendChild(summary);
  }

  if (team.focus && team.focus.length) {
    const tags = document.createElement('ul');
    tags.className = 'killteam-card__tags';
    team.focus.forEach((tagText) => {
      if (!tagText) {
        return;
      }
      const item = document.createElement('li');
      item.textContent = tagText;
      tags.appendChild(item);
    });
    if (tags.childElementCount) {
      card.appendChild(tags);
    }
  }

  const actions = document.createElement('div');
  actions.className = 'killteam-card__actions';
  if (team.status === 'planned') {
    const planned = document.createElement('span');
    planned.className = 'button button--disabled';
    planned.textContent = 'Материалы в разработке';
    planned.setAttribute('aria-disabled', 'true');
    actions.appendChild(planned);
  } else if (team.href) {
    const link = document.createElement('a');
    link.className = 'button button--primary';
    link.href = team.href;
    link.textContent = 'Открыть шпаргалку';
    if (team.key) {
      link.dataset.navKey = team.key;
    }
    link.setAttribute('title', `Открыть шпаргалку для отряда «${team.name}»`);
    actions.appendChild(link);
  } else {
    const note = document.createElement('span');
    note.className = 'button button--disabled';
    note.textContent = 'Ссылка появится позже';
    actions.appendChild(note);
  }
  card.appendChild(actions);

  return card;
}

function initKillTeamLibrary() {
  const list = document.querySelector('[data-killteam-list]');
  if (!list) {
    return;
  }

  const searchInput = document.querySelector('[data-killteam-search]');
  const clearButton = document.querySelector('[data-killteam-clear]');
  const summary = document.querySelector('[data-killteam-summary]');
  const emptyState = document.querySelector('[data-killteam-empty]');
  const filtersContainer = document.querySelector('[data-killteam-filters]');
  const focusWrapper = document.querySelector('[data-library-focus]');
  const focusFiltersContainer = document.querySelector('[data-killteam-focus-filters]');
  const readyCountNode = document.querySelector('[data-killteam-ready-count]');
  const plannedCountNode = document.querySelector('[data-killteam-planned-count]');
  const upcomingListNode = document.querySelector('[data-killteam-upcoming]');

  const previewContainer = document.querySelector('[data-killteam-preview]');
  const previewCard = previewContainer ? previewContainer.querySelector('[data-killteam-preview-card]') : null;
  const previewPlaceholder = previewContainer ? previewContainer.querySelector('[data-killteam-preview-empty]') : null;
  const previewName = previewContainer ? previewContainer.querySelector('[data-killteam-preview-name]') : null;
  const previewOriginal = previewContainer ? previewContainer.querySelector('[data-killteam-preview-original]') : null;
  const previewSummary = previewContainer ? previewContainer.querySelector('[data-killteam-preview-summary]') : null;
  const previewFaction = previewContainer ? previewContainer.querySelector('[data-killteam-preview-faction]') : null;
  const previewAlignment = previewContainer ? previewContainer.querySelector('[data-killteam-preview-alignment]') : null;
  const previewTags = previewContainer ? previewContainer.querySelector('[data-killteam-preview-tags]') : null;
  const previewStatus = previewContainer ? previewContainer.querySelector('[data-killteam-preview-status]') : null;
  const previewActions = previewContainer ? previewContainer.querySelector('[data-killteam-preview-actions]') : null;
  const resetButton = document.querySelector('[data-killteam-reset]');


  const teams = KILL_TEAM_LIBRARY.map((team) => {
    const focus = Array.isArray(team.focus) ? team.focus.filter(Boolean) : [];
    const status = team.status || 'available';
    const searchChunks = [
      team.name,
      team.originalName,
      team.faction,
      team.alignment,
      focus.join(' '),
      team.summary
    ].filter(Boolean);
    return {
      ...team,
      focus,
      status,
      searchableText: searchChunks.join(' ').toLowerCase()
    };
  });


  const teamsByKey = new Map();
  teams.forEach((team) => {
    if (team.key) {
      teamsByKey.set(team.key, team);
    }
  });

  const focusTags = Array.from(new Set(teams.flatMap((team) => team.focus))).filter(Boolean);
  focusTags.sort((a, b) => a.localeCompare(b, 'ru'));


  const plannedTeams = teams.filter((team) => team.status === 'planned');
  const readyCount = teams.filter((team) => team.status !== 'planned').length;
  const plannedCount = plannedTeams.length;
  if (readyCountNode) {
    readyCountNode.textContent = readyCount.toString();
  }
  if (plannedCountNode) {
    plannedCountNode.textContent = plannedCount.toString();
    const plannedWrapper = plannedCountNode.closest('[data-planned-wrapper]');
    if (plannedWrapper) {
      plannedWrapper.classList.toggle('is-hidden', plannedCount === 0);
    }
  }
  if (upcomingListNode) {
    upcomingListNode.innerHTML = '';
    if (!plannedTeams.length) {

      const plannedEmptyState = document.createElement('li');
      plannedEmptyState.className = 'hero__next-up-empty';
      plannedEmptyState.textContent = 'Сейчас все доступные материалы опубликованы. Добавьте готовые команды в избранное, чтобы получить быстрый доступ.';
      upcomingListNode.appendChild(plannedEmptyState);

    } else {
      const formatter = (team) => {
        const item = document.createElement('li');
        item.className = 'hero__next-up-item';
        const title = document.createElement('strong');
        title.textContent = team.name;
        item.appendChild(title);
        const description = document.createElement('span');
        if (team.summary) {
          description.textContent = team.summary;
        } else if (team.focus && team.focus.length) {
          description.textContent = `Ключевые акценты: ${team.focus.slice(0, 3).join(', ')}`;
        } else if (team.faction) {
          description.textContent = team.faction;
        }
        if (description.textContent) {
          item.appendChild(description);
        }
        return item;
      };

      plannedTeams
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name, 'ru'))
        .forEach((team) => {
          upcomingListNode.appendChild(formatter(team));
        });
    }
  }

  let activeAlignment = 'all';
  let activeFocus = 'all';
  let filterButtons = [];
  let focusButtons = [];
  let selectedTeamKey = '';

  function updateSummary(total, searchValue = '') {
    if (!summary) {
      return;
    }
    const parts = [`Показано ${total} из ${teams.length} килл-тимов`];
    if (activeAlignment !== 'all') {
      parts.push(`Альянс: ${activeAlignment}`);
    }
    if (activeFocus !== 'all') {
      parts.push(`Акцент: ${activeFocus}`);
    }
    if (searchValue) {
      parts.push(`Поиск: «${searchValue}»`);
    }
    summary.textContent = parts.join(' • ');
  }

  function updateClearButton(value) {
    if (!clearButton) {
      return;
    }
    const hasValue = Boolean(value);
    clearButton.hidden = !hasValue;
    clearButton.disabled = !hasValue;
  }

  function updateFilterButtons() {
    filterButtons.forEach((button) => {
      const value = button.dataset.filterValue || 'all';
      const isActive = (value === 'all' && activeAlignment === 'all') || (value !== 'all' && activeAlignment === value);
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function updateFocusButtons() {
    focusButtons.forEach((button) => {
      const value = button.dataset.focusValue || 'all';
      const isActive = value === activeFocus;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function renderFilters() {
    if (!filtersContainer) {
      return;
    }
    const alignments = Array.from(new Set(teams.map((team) => team.alignment).filter(Boolean)));
    filtersContainer.innerHTML = '';
    if (!alignments.length) {
      filtersContainer.hidden = true;
      return;
    }
    filtersContainer.hidden = false;
    filterButtons = [];

    const createButton = (value, label) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'chip';
      button.dataset.filterValue = value;
      button.textContent = label;
      button.addEventListener('click', () => {
        if (value === 'all') {
          activeAlignment = 'all';
        } else {
          activeAlignment = activeAlignment === value ? 'all' : value;
        }
        updateFilterButtons();
        applyFilters();
      });
      filterButtons.push(button);
      filtersContainer.appendChild(button);
    };

    createButton('all', 'Все');
    alignments
      .sort((a, b) => a.localeCompare(b, 'ru'))
      .forEach((alignment) => {
        createButton(alignment, alignment);
      });

    updateFilterButtons();
  }

  function renderFocusFilters() {
    if (!focusFiltersContainer) {
      return;
    }
    focusFiltersContainer.innerHTML = '';
    focusButtons = [];
    if (focusWrapper) {
      focusWrapper.hidden = focusTags.length === 0;
    }
    if (!focusTags.length) {
      return;
    }

    const createButton = (value, label) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'chip chip--soft';
      button.dataset.focusValue = value;
      button.textContent = label;
      button.addEventListener('click', () => {
        if (value === 'all') {
          activeFocus = 'all';
        } else {
          activeFocus = activeFocus === value ? 'all' : value;
        }
        updateFocusButtons();
        applyFilters();
      });
      focusButtons.push(button);
      focusFiltersContainer.appendChild(button);
    };

    createButton('all', 'Все акценты');
    focusTags.forEach((tag) => {
      createButton(tag, tag);
    });
    updateFocusButtons();
  }

  function createLibraryFavoriteItem(team) {
    const slug = team.key || slugify(team.name || team.originalName || 'killteam');
    const title = team.name || team.originalName || 'Kill Team';
    const pageTitle = 'Библиотека Kill Team HQ';
    const url = team.href || 'index.html';
    const metaParts = [team.faction, team.alignment].filter(Boolean);
    const meta = metaParts.length ? `<p class="favorite-preview__meta">${metaParts.join(' • ')}</p>` : '';
    const summaryHTML = team.summary ? `<p>${team.summary}</p>` : '';
    const tagsHTML = team.focus && team.focus.length
      ? `<p class="favorite-preview__tags">${team.focus.join(', ')}</p>`
      : '';
    const previewHTML = `
      <div class="favorite-preview favorite-preview--library">
        <strong>${title}</strong>
        ${team.originalName ? `<p class="favorite-preview__subtitle">${team.originalName}</p>` : ''}
        ${meta}
        ${summaryHTML}
        ${tagsHTML}
      </div>
    `;
    return {
      id: `library-${slug}`,
      title,
      sectionTitle: 'Библиотека',
      pageKey: 'library',
      pageTitle,
      url,
      previewHTML
    };
  }

  function clearPreview() {
    if (previewPlaceholder) {
      previewPlaceholder.hidden = false;
    }
    if (previewCard) {
      previewCard.hidden = true;
    }
    if (previewName) {
      previewName.textContent = '';
    }
    if (previewOriginal) {
      previewOriginal.textContent = '';
      previewOriginal.hidden = true;
    }
    if (previewSummary) {
      previewSummary.textContent = '';
    }
    if (previewFaction) {
      previewFaction.textContent = '—';
    }
    if (previewAlignment) {
      previewAlignment.textContent = '—';
    }
    if (previewTags) {
      previewTags.innerHTML = '';
    }
    if (previewStatus) {
      previewStatus.textContent = '';
    }
    if (previewActions) {
      previewActions.innerHTML = '';
    }
  }

  function showPreview(team) {
    if (!previewContainer || !previewCard) {
      return;
    }
    if (!team) {
      clearPreview();
      return;
    }
    if (previewPlaceholder) {
      previewPlaceholder.hidden = true;
    }
    previewCard.hidden = false;

    if (previewName) {
      previewName.textContent = team.name || '';
    }
    if (previewOriginal) {
      previewOriginal.textContent = team.originalName || '';
      previewOriginal.hidden = !team.originalName;
    }
    if (previewSummary) {
      previewSummary.textContent = team.summary || 'Краткое описание будет добавлено позже.';
    }
    if (previewFaction) {
      previewFaction.textContent = team.faction || '—';
    }
    if (previewAlignment) {
      previewAlignment.textContent = team.alignment || '—';
    }
    if (previewStatus) {
      const label = KILL_TEAM_STATUS_LABELS[team.status] || 'Готово';
      previewStatus.textContent = `Статус: ${label}`;
    }
    if (previewTags) {
      previewTags.innerHTML = '';
      if (team.focus && team.focus.length) {
        team.focus.forEach((tag) => {
          const chip = document.createElement('span');
          chip.className = 'killteam-preview__tag';
          chip.textContent = tag;
          previewTags.appendChild(chip);
        });
      } else {
        const chip = document.createElement('span');
        chip.className = 'killteam-preview__tag killteam-preview__tag--muted';
        chip.textContent = 'Без отмеченных акцентов';
        previewTags.appendChild(chip);
      }
    }
    if (previewActions) {
      previewActions.innerHTML = '';
      if (team.status === 'planned' || !team.href) {
        const planned = document.createElement('span');
        planned.className = 'button button--disabled';
        planned.textContent = 'Материалы в разработке';
        planned.setAttribute('aria-disabled', 'true');
        previewActions.appendChild(planned);
      } else {
        const link = document.createElement('a');
        link.className = 'button button--primary';
        link.href = team.href;
        link.textContent = 'Открыть шпаргалку';
        if (team.key) {
          link.dataset.navKey = team.key;
        }
        previewActions.appendChild(link);

        const favoriteButton = document.createElement('button');
        favoriteButton.type = 'button';
        favoriteButton.className = 'button button--ghost';
        const item = createLibraryFavoriteItem(team);
        const updateFavoriteButton = () => {
          const isActive = isFavoriteItem(item.id);
          favoriteButton.classList.toggle('is-active', isActive);
          favoriteButton.textContent = isActive ? 'Убрать из избранного' : 'Добавить в избранное';
          favoriteButton.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        };
        favoriteButton.addEventListener('click', () => {
          toggleFavorite(item);
          updateFavoriteButton();
        });
        updateFavoriteButton();
        previewActions.appendChild(favoriteButton);
      }
    }
  }

  function updateCardSelection() {
    const cards = list.querySelectorAll('.killteam-card');
    cards.forEach((card) => {
      const key = card.dataset.teamKey || '';
      const isSelected = key && key === selectedTeamKey;
      card.classList.toggle('is-selected', isSelected);
      card.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    });
  }

  function setSelectedTeam(key, options = {}) {
    if (!key) {
      selectedTeamKey = '';
      clearPreview();
      updateCardSelection();
      return;
    }
    const team = teamsByKey.get(key);
    if (!team) {
      selectedTeamKey = '';
      clearPreview();
      updateCardSelection();
      return;
    }
    selectedTeamKey = key;
    showPreview(team);
    updateCardSelection();
    if (options.focusCard) {
      const cards = Array.from(list.querySelectorAll('.killteam-card'));
      const match = cards.find((card) => card.dataset.teamKey === key);
      if (match) {
        match.focus();
      }
    }
    if (options.ensureVisible && previewContainer) {
      previewContainer.scrollIntoView({ block: 'nearest' });
    }
  }

  function renderList(items) {
    list.innerHTML = '';
    if (!items.length) {
      if (emptyState) {
        emptyState.hidden = false;
      }
      return;
    }
    if (emptyState) {
      emptyState.hidden = true;
    }
    const fragment = document.createDocumentFragment();
    items.forEach((team) => {
      const card = createKillTeamCard(team);
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-pressed', team.key === selectedTeamKey ? 'true' : 'false');
      if (team.key === selectedTeamKey) {
        card.classList.add('is-selected');
      }
      fragment.appendChild(card);
    });
    list.appendChild(fragment);
    updateCardSelection();
  }

  function applyFilters() {
    const rawSearch = searchInput ? searchInput.value.trim() : '';
    const searchValue = rawSearch.toLowerCase();
    updateClearButton(rawSearch);
    const filtered = teams.filter((team) => {
      const matchesSearch = !searchValue || team.searchableText.includes(searchValue);
      const matchesAlignment = activeAlignment === 'all' || team.alignment === activeAlignment;
      const matchesFocus = activeFocus === 'all' || team.focus.includes(activeFocus);
      return matchesSearch && matchesAlignment && matchesFocus;
    });
    renderList(filtered);
    updateSummary(filtered.length, rawSearch);
    if (selectedTeamKey) {
      const stillVisible = filtered.some((team) => team.key === selectedTeamKey);
      if (stillVisible) {
        const currentTeam = teamsByKey.get(selectedTeamKey);
        showPreview(currentTeam);
      } else {
        selectedTeamKey = '';
        clearPreview();
      }
    }
    if (!selectedTeamKey && filtered.length) {
      setSelectedTeam(filtered[0].key || '', { ensureVisible: false });
    } else if (!filtered.length) {
      clearPreview();
    }
  }

  if (!list.dataset.cardHandlersBound) {
    list.addEventListener('click', (event) => {
      const card = event.target.closest('.killteam-card');
      if (!card || !list.contains(card)) {
        return;
      }
      if (event.target.closest('.killteam-card__actions')) {
        return;
      }
      const key = card.dataset.teamKey;
      if (key) {
        setSelectedTeam(key, { ensureVisible: true });
      }
    });
    list.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }
      const card = event.target.closest('.killteam-card');
      if (!card || !list.contains(card)) {
        return;
      }
      if (event.target.closest('.killteam-card__actions')) {
        return;
      }
      event.preventDefault();
      const key = card.dataset.teamKey;
      if (key) {
        setSelectedTeam(key, { ensureVisible: true });
      }
    });
    list.dataset.cardHandlersBound = 'true';
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      applyFilters();
    });
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        searchInput.value = '';
        applyFilters();
      }
    });
  }

  if (clearButton && searchInput) {
    clearButton.addEventListener('click', () => {
      if (!searchInput.value) {
        searchInput.focus();
        return;
      }
      searchInput.value = '';
      searchInput.focus();
      applyFilters();
    });
  }

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
      }
      activeAlignment = 'all';
      activeFocus = 'all';
      selectedTeamKey = '';
      clearPreview();
      updateFilterButtons();
      updateFocusButtons();
      applyFilters();
      if (searchInput) {
        searchInput.focus();
      }
    });
  }

  renderFilters();
  renderFocusFilters();
  applyFilters();
}


const SPECIAL_RULES_SOURCE = 'rule.html';
let specialRulesIndexPromise = null;
let ruleResolverPromise = null;

function normalizeWhitespace(value) {
  return (value || '')
    .replace(/ /g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildSpecialRulesIndexFromDocument(doc) {
  if (!doc) {
    return null;
  }
  const table = doc.querySelector('#special-rules + table');
  if (!table) {
    return null;
  }

  const rows = Array.from(table.querySelectorAll('tbody tr'));
  if (!rows.length) {
    return null;
  }

  const map = new Map();

  rows.forEach((row) => {
    const cells = row.querySelectorAll('td');
    if (cells.length < 2) {
      return;
    }
    const nameCell = normalizeWhitespace(cells[0].textContent);
    const descriptionCell = normalizeWhitespace(cells[1].textContent);
    if (!nameCell || !descriptionCell) {
      return;
    }
    const match = nameCell.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
    const russianName = match ? normalizeWhitespace(match[1]) : nameCell;
    const englishName = match ? normalizeWhitespace(match[2]) : nameCell;
    const entry = {
      russianName,
      englishName,
      description: descriptionCell
    };
    const keys = [];
    if (englishName) {
      keys.push(englishName.toLowerCase());
    }
    if (russianName) {
      keys.push(russianName.toLowerCase());
    }
    keys.forEach((key) => {
      if (key && !map.has(key)) {
        map.set(key, entry);
      }
    });
  });

  return map;
}

function fetchSpecialRulesIndex() {
  if (typeof fetch !== 'function' || typeof DOMParser !== 'function') {
    return Promise.resolve(null);
  }
  return fetch(SPECIAL_RULES_SOURCE)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ответ ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      return buildSpecialRulesIndexFromDocument(doc);
    });
}

function loadSpecialRulesIndex() {
  if (!specialRulesIndexPromise) {
    if (document && document.body && document.body.dataset.page === 'rules') {
      specialRulesIndexPromise = Promise.resolve(buildSpecialRulesIndexFromDocument(document));
    } else {
      specialRulesIndexPromise = fetchSpecialRulesIndex().catch((error) => {
        console.warn('Не удалось загрузить раздел Special Rules:', error);
        return null;
      });
    }
  }
  return specialRulesIndexPromise;
}

const FALLBACK_RULES_DATA = [
  {
    englishName: 'Accurate x',
    russianName: 'Точный x',
    description:
      'Можно сохранить до x кубов атаки как обычные успехи без броска. Если оружие получает это правило несколько раз, считайте, что оно даёт только Точный 2 — это перекрывает другие значения x.'
  },
  {
    englishName: 'Balanced',
    russianName: 'Сбалансированный',
    description: 'Можно перебросить один куб атаки.'
  },
  {
    englishName: 'Blast x',
    russianName: 'Взрыв x',
    description:
      'После атаки по основной цели атакуйте этим оружием всех других видимых врагов в пределах x от неё по очереди; каждую последовательность бросков выполняйте отдельно. Вторичные цели получают такое же укрытие, как и основная.'
  },
  {
    englishName: 'Brutal',
    russianName: 'Жестокий',
    description: 'Противник может блокировать только критическими успехами.'
  },
  {
    englishName: 'Ceaseless',
    russianName: 'Неослабевающий',
    description: 'Можно перебросить все кубы атаки с выбранным значением (например, все результаты «2»).'
  },
  {
    englishName: 'Devastating x',
    russianName: 'Опустошающий x',
    description:
      'Каждый сохранённый критический успех немедленно наносит цели x урона. Если правило начинается с дистанции (например, 1" Опустошающий x), нанесите x урона цели и всем другим видимым оперативам в пределах этой дистанции. Успех остаётся и может быть использован позже.'
  },
  {
    englishName: 'Heavy',
    russianName: 'Тяжёлый',
    description:
      'Оперативник не может использовать это оружие в активации или контрдействии, где двигался, и не может двигаться там, где использовал это оружие. Если указано «Тяжёлый (только X)», разрешено лишь указанное действие, например Dash. Правило не мешает действию Guard.'
  },
  {
    englishName: 'Hot',
    russianName: 'Перегрев',
    description:
      'После атаки бросьте 1D6. Если результат меньше характеристики Попадание, оператив получает урон, равный результату, умноженному на два. При нескольких атаках в рамках одного действия бросок делается один раз.'
  },
  {
    englishName: 'Lethal x+',
    russianName: 'Летальный x+',
    description: 'Успехи с результатом x или выше считаются критическими успехами.'
  },
  {
    englishName: 'Limited x',
    russianName: 'Ограниченный x',
    description:
      'После того как оператив использовал это оружие x раз за сражение, оно считается потерянным. Если оружие атакует несколько раз в рамках одного действия, это считается одним использованием.'
  },
  {
    englishName: 'Piercing x',
    russianName: 'Пробивающий x',
    description:
      'Защищающийся бросает на x кубов защиты меньше. Если указано «Пробивающий критами x (Piercing Crits x)», правило применяется только при сохранении критических успехов.'
  },
  {
    englishName: 'Punishing',
    russianName: 'Карающий',
    description:
      'Если вы сохранили критические успехи, можете сохранить один провальный результат как обычный успех вместо того, чтобы сбросить его.'
  },
  {
    englishName: 'Range x',
    russianName: 'Дальность x',
    description: 'Целью могут быть только оперативы в пределах x от активного оперативника.'
  },
  {
    englishName: 'Relentless',
    russianName: 'Безжалостный',
    description: 'Можно перебрасывать любые кубы атаки.'
  },
  {
    englishName: 'Rending',
    russianName: 'Раздирающий',
    description:
      'Если вы сохранили критические успехи, можете повысить один обычный успех до критического.'
  },
  {
    englishName: 'Saturate',
    russianName: 'Плотный огонь',
    description: 'Защищающийся не может сохранять спасброски от укрытия.'
  },
  {
    englishName: 'Seek',
    russianName: 'Поиск',
    description:
      'При выборе цели оперативы не могут использовать местность как укрытие. Если указано «Поиск (лёгкий)», нельзя использовать лёгкую местность. Это позволяет выбирать такие цели при условии видимости, но не отменяет их спасброски от укрытия.'
  },
  {
    englishName: 'Severe',
    russianName: 'Суровый',
    description:
      'Если вы не сохранили критические успехи, можете превратить один обычный успех в критический. Правила Опустошающий и Пробивающий критами продолжают действовать, а Карающий и Раздирающий — нет.'
  },
  {
    englishName: 'Shock',
    russianName: 'Шок',
    description:
      'При первом ударе критическим успехом в каждой последовательности дополнительно сбросьте один неразрешённый обычный успех противника (или критический, если обычных нет).'
  },
  {
    englishName: 'Silent',
    russianName: 'Бесшумный',
    description: 'Оператив может выполнить действие Shoot этим оружием, оставаясь под приказом Conceal.'
  },
  {
    englishName: 'Stun',
    russianName: 'Оглушающий',
    description: 'Если вы сохранили критические успехи, уменьшите характеристику APL цели на 1 до конца её следующей активации.'
  },
  {
    englishName: 'Torrent x',
    russianName: 'Поток x',
    description:
      'Выберите основную цель, затем любое количество других допустимых целей в пределах x от неё, но вне контроля дружеских оперативов, как вторичные. Атакуйте все выбранные цели в любом порядке, каждую последовательность бросков выполняйте отдельно.'
  }
];

function buildFallbackRulesMap() {
  const map = new Map();
  FALLBACK_RULES_DATA.forEach((entry) => {
    const normalizedEntry = {
      russianName: entry.russianName,
      englishName: entry.englishName,
      description: entry.description
    };
    const englishKey = entry.englishName ? entry.englishName.toLowerCase() : '';
    const russianKey = entry.russianName ? entry.russianName.toLowerCase() : '';
    if (englishKey && !map.has(englishKey)) {
      map.set(englishKey, normalizedEntry);
    }
    if (russianKey && !map.has(russianKey)) {
      map.set(russianKey, normalizedEntry);
    }
  });
  return map;
}

const FALLBACK_RULES_MAP = buildFallbackRulesMap();
const EXTRA_RULE_DESCRIPTIONS = new Map([
  [
    'psychic',
    'Псионика (PSYCHIC) — атака считается псионической. Она взаимодействует с эффектами, которые ссылаются на ключевые слова PSYCHIC или PSYKER, и обычно доступна только оперативам с ключевым словом PSYKER.'
  ]
]);

function applyRuleTemplate(text, replacements = {}) {
  if (!text) {
    return '';
  }
  let result = text;
  if (replacements['x+']) {
    const value = replacements['x+'];
    result = result.replace(/x\+/gi, value);
  }
  if (replacements.x) {
    const value = replacements.x;
    result = result.replace(/x(?!\+)/gi, value);
  }
  return result;
}

function composeRuleText(russianName, englishName, description) {
  const namePart = russianName && englishName
    ? `${russianName} (${englishName})`
    : (russianName || englishName || '');
  if (namePart && description) {
    return `${namePart} — ${description}`;
  }
  if (description) {
    return description;
  }
  return namePart;
}

function findLocalRuleNote(ruleKey, contextNode) {
  const hasMarker = (ruleKey && ruleKey.includes('*')) || (contextNode && contextNode.textContent && contextNode.textContent.includes('*'));
  if (!hasMarker) {
    return '';
  }
  const searchTerms = new Set();
  const baseKey = normalizeWhitespace((ruleKey || '').replace(/\*/g, ''));
  if (baseKey) {
    searchTerms.add(baseKey.toLowerCase());
  }
  if (contextNode) {
    const displayText = normalizeWhitespace(contextNode.textContent || '');
    if (displayText) {
      searchTerms.add(displayText.replace(/\*/g, '').toLowerCase());
      displayText
        .replace(/\*/g, '')
        .split(/[()]/)
        .forEach((part) => {
          const fragment = normalizeWhitespace(part);
          if (fragment) {
            searchTerms.add(fragment.toLowerCase());
          }
        });
    }
  }

  const notes = Array.from(document.querySelectorAll('.note'));
  for (const note of notes) {
    const noteText = normalizeWhitespace(note.textContent || '');
    if (!noteText) {
      continue;
    }
    const lower = noteText.toLowerCase();
    for (const term of searchTerms) {
      if (term && lower.includes(term)) {
        return noteText;
      }
    }
  }
  return '';
}

function createRuleResolver(index) {
  const lookupEntry = (key) => {
    if (!key) {
      return null;
    }
    const normalized = key.trim().toLowerCase();
    if (index && index.has(normalized)) {
      return index.get(normalized);
    }
    if (FALLBACK_RULES_MAP.has(normalized)) {
      return FALLBACK_RULES_MAP.get(normalized);
    }
    return null;
  };

  const formatEntry = (entry, replacements = {}, overrideNames = {}) => {
    if (!entry) {
      return '';
    }
    const russianName = overrideNames.russianName !== undefined
      ? overrideNames.russianName
      : applyRuleTemplate(entry.russianName, replacements);
    const englishName = overrideNames.englishName !== undefined
      ? overrideNames.englishName
      : applyRuleTemplate(entry.englishName, replacements);
    const description = applyRuleTemplate(entry.description, replacements);
    return composeRuleText(russianName, englishName, description);
  };

  const handlers = [
    {
      pattern: /^Blast\s+([\d.]+)"$/i,
      describe(match) {
        const entry = lookupEntry('blast x');
        return formatEntry(entry, { x: `${match[1]}"` });
      }
    },
    {
      pattern: /^Devastating\s+(\d+)/i,
      describe(match) {
        const entry = lookupEntry('devastating x');
        return formatEntry(entry, { x: match[1] });
      }
    },
    {
      pattern: /^Piercing\s+Crits\s+(\d+)/i,
      describe(match) {
        const entry = lookupEntry('piercing x');
        const value = match[1];
        return formatEntry(entry, { x: value }, {
          russianName: `Пробивающий критами ${value}`,
          englishName: `Piercing Crits ${value}`
        });
      }
    },
    {
      pattern: /^Piercing\s+(\d+)/i,
      describe(match) {
        const entry = lookupEntry('piercing x');
        return formatEntry(entry, { x: match[1] });
      }
    },
    {
      pattern: /^Range\s+([\d.]+)"$/i,
      describe(match) {
        const entry = lookupEntry('range x');
        return formatEntry(entry, { x: `${match[1]}"` });
      }
    },
    {
      pattern: /^Lethal\s+(\d\+?)$/i,
      describe(match) {
        const entry = lookupEntry('lethal x+');
        const value = match[1];
        return formatEntry(entry, { 'x+': value, x: value });
      }
    },
    {
      pattern: /^Limited\s+(\d+)/i,
      describe(match) {
        const entry = lookupEntry('limited x');
        return formatEntry(entry, { x: match[1] });
      }
    },
    {
      pattern: /^Torrent\s+([\d.]+)"$/i,
      describe(match) {
        const entry = lookupEntry('torrent x');
        return formatEntry(entry, { x: `${match[1]}"` });
      }
    },
    {
      pattern: /^Heavy\s*(?:,|\()\s*Dash\s+only\)?$/i,
      describe() {
        const entry = lookupEntry('heavy');
        const base = formatEntry(entry);
        return base ? `${base} Дополнительно: разрешено только действие Dash.` : '';
      }
    }
  ];

  return {
    describe(ruleKey, contextNode) {
      const original = normalizeWhitespace(ruleKey);
      if (!original) {
        return '';
      }

      for (const handler of handlers) {
        const match = original.match(handler.pattern);
        if (match) {
          const text = handler.describe(match, original);
          if (text) {
            return text;
          }
        }
      }

      const entry = lookupEntry(original);
      if (entry) {
        return formatEntry(entry);
      }

      const stripped = original.replace(/\*/g, '');
      if (stripped !== original) {
        const strippedEntry = lookupEntry(stripped);
        if (strippedEntry) {
          return formatEntry(strippedEntry);
        }
      }

      const note = findLocalRuleNote(original, contextNode);
      if (note) {
        return note;
      }

      const fallback = EXTRA_RULE_DESCRIPTIONS.get(original.toLowerCase())
        || EXTRA_RULE_DESCRIPTIONS.get(stripped.toLowerCase());
      if (fallback) {
        return fallback;
      }

      return '';
    }
  };
}

function loadRuleResolver() {
  if (!ruleResolverPromise) {
    ruleResolverPromise = loadSpecialRulesIndex()
      .then((index) => createRuleResolver(index))
      .catch((error) => {
        console.warn('Не удалось создать справочник правил оружия:', error);
        return createRuleResolver(null);
      });
  }
  return ruleResolverPromise;
}

(function initWeaponTooltips() {
  document.addEventListener('DOMContentLoaded', () => {
    const ruleNodes = Array.from(document.querySelectorAll('.weapon-rule'));
    if (!ruleNodes.length) {
      return;
    }

    loadRuleResolver()
      .then((resolver) => {
        if (!resolver) {
          return;
        }

        const nodesWithDescriptions = [];

        ruleNodes.forEach((node) => {
          const ruleKey = node.dataset.rule || '';
          const description = resolver.describe(ruleKey, node);
          if (!description) {
            return;
          }
          node.setAttribute('data-description', description);
          node.setAttribute('aria-label', description);
          nodesWithDescriptions.push(node);
        });

        if (!nodesWithDescriptions.length) {
          return;
        }

        const tooltip = document.createElement('div');
        tooltip.id = 'weapon-rule-tooltip';
        tooltip.className = 'weapon-tooltip';
        tooltip.setAttribute('role', 'tooltip');
        document.body.appendChild(tooltip);

        let activeNode = null;

        const hideTooltip = () => {
          tooltip.classList.remove('is-visible');
          tooltip.style.left = '-9999px';
          tooltip.style.top = '-9999px';
          activeNode = null;
        };

        const placeTooltip = (x, y) => {
          const tooltipRect = tooltip.getBoundingClientRect();
          const margin = 14;
          let left = x + margin;
          let top = y + margin;

          if (left + tooltipRect.width > window.innerWidth - 8) {
            left = x - tooltipRect.width - margin;
          }
          if (left < 8) {
            left = 8;
          }

          if (top + tooltipRect.height > window.innerHeight - 8) {
            top = y - tooltipRect.height - margin;
          }
          if (top < 8) {
            top = 8;
          }

          tooltip.style.left = `${left}px`;
          tooltip.style.top = `${top}px`;
        };

        const showTooltip = (node, event) => {
          const text = node.getAttribute('data-description');
          if (!text) {
            return;
          }
          tooltip.textContent = text;
          tooltip.classList.add('is-visible');
          activeNode = node;
          if (event && event.type.startsWith('mouse')) {
            placeTooltip(event.clientX, event.clientY);
          } else {
            const rect = node.getBoundingClientRect();
            placeTooltip(rect.left + rect.width / 2, rect.top);
          }
        };

        const moveTooltip = (event) => {
          if (!activeNode) {
            return;
          }
          placeTooltip(event.clientX, event.clientY);
        };

        nodesWithDescriptions.forEach((node) => {
          node.setAttribute('aria-describedby', 'weapon-rule-tooltip');
          node.addEventListener('mouseenter', (event) => {
            showTooltip(node, event);
          });
          node.addEventListener('mouseleave', hideTooltip);
          node.addEventListener('mousemove', moveTooltip);
          node.addEventListener('focus', (event) => {
            showTooltip(node, event);
          });
          node.addEventListener('blur', hideTooltip);
        });

        document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape') {
            hideTooltip();
          }
        });
      })
      .catch((error) => {
        console.warn('Не удалось инициализировать подсказки по правилам оружия:', error);
      });
  });
})();

const FAVORITES_STORAGE_KEY = 'kt-favorites-v1';
const DEFAULT_FAVORITE_SELECTORS = [
  '[data-favorite-item]',
  '.card',
  '.card-critop',
  '.equipment-card',
  '.Columns2 .stratWrapper'
];
const FAVORITES_CONFIG = new Map();

function registerFavoritesConfig(pageKey, config = {}) {
  if (!pageKey) {
    return;
  }
  FAVORITES_CONFIG.set(pageKey, {
    selectors: Array.isArray(config.selectors) ? config.selectors.slice() : [],
    exclude: Array.isArray(config.exclude) ? config.exclude.slice() : [],
    filter: typeof config.filter === 'function' ? config.filter : null,
    extend: config.extend !== false
  });
}

function getFavoritesConfig(pageKey) {
  const config = FAVORITES_CONFIG.get(pageKey);
  const extend = !config || config.extend !== false;
  const selectors = extend
    ? Array.from(new Set(DEFAULT_FAVORITE_SELECTORS.concat(config ? config.selectors : [])))
    : (config ? config.selectors.slice() : []);
  return {
    selectors,
    exclude: config ? config.exclude.slice() : [],
    filter: config ? config.filter : null
  };
}

let favoritesState = loadFavoritesState();
const favoriteButtonsRegistry = new Map();
let favoritesPageRenderer = null;

function loadFavoritesState() {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) {
      return {};
    }
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return parsed;
    }
  } catch (error) {
    console.warn('Не удалось загрузить избранное:', error);
  }
  return {};
}

function saveFavoritesState() {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoritesState));
  } catch (error) {
    console.warn('Не удалось сохранить избранное:', error);
  }
}

function isFavoriteItem(id) {
  return Object.prototype.hasOwnProperty.call(favoritesState, id);
}

function updateButtonState(button, isActive) {
  const label = isActive ? 'Убрать из избранного' : 'Добавить в избранное';
  button.textContent = isActive ? '★' : '☆';
  button.classList.toggle('is-active', isActive);
  button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  button.setAttribute('aria-label', label);
  button.setAttribute('title', label);
}

function registerFavoriteButton(item, button) {
  let buttons = favoriteButtonsRegistry.get(item.id);
  if (!buttons) {
    buttons = new Set();
    favoriteButtonsRegistry.set(item.id, buttons);
  }
  buttons.add(button);
  updateButtonState(button, isFavoriteItem(item.id));
}

function updateButtonsFor(id) {
  const buttons = favoriteButtonsRegistry.get(id);
  if (!buttons) {
    return;
  }
  const isActive = isFavoriteItem(id);
  buttons.forEach((button) => {
    if (!button.isConnected) {
      buttons.delete(button);
      return;
    }
    updateButtonState(button, isActive);
  });
  if (!buttons.size) {
    favoriteButtonsRegistry.delete(id);
  }
}

function storeFavorite(item) {
  favoritesState[item.id] = {
    id: item.id,
    title: item.title,
    sectionTitle: item.sectionTitle,
    pageKey: item.pageKey,
    pageTitle: item.pageTitle,
    url: item.url,
    previewHTML: item.previewHTML
  };
  saveFavoritesState();
  updateButtonsFor(item.id);
  if (typeof favoritesPageRenderer === 'function') {
    favoritesPageRenderer();
  }
}

function removeFavorite(id) {
  if (!isFavoriteItem(id)) {
    return;
  }
  delete favoritesState[id];
  saveFavoritesState();
  updateButtonsFor(id);
  if (typeof favoritesPageRenderer === 'function') {
    favoritesPageRenderer();
  }
}

function toggleFavorite(item) {
  if (isFavoriteItem(item.id)) {
    removeFavorite(item.id);
  } else {
    storeFavorite(item);
  }
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9а-яё_-]+/gi, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'item';
}

function generateUniqueValue(base, existing) {
  let value = base;
  let counter = 2;
  while (existing.has(value)) {
    value = `${base}-${counter}`;
    counter += 1;
  }
  existing.add(value);
  return value;
}

function findHeadingForElement(element) {
  if (/^H[1-6]$/.test(element.tagName)) {
    return element;
  }
  return element.querySelector('h3, h2, .title, .stratName span, .stratName, h4');
}

function findSectionTitle(element) {
  if (/^H[1-6]$/.test(element.tagName)) {
    return element.textContent.trim();
  }
  let node = element;
  while (node) {
    let sibling = node.previousElementSibling;
    while (sibling) {
      if (/^H[1-3]$/.test(sibling.tagName)) {
        return sibling.textContent.trim();
      }
      sibling = sibling.previousElementSibling;
    }
    node = node.parentElement;
  }
  const mainHeading = document.querySelector('main h1, h1');
  return mainHeading ? mainHeading.textContent.trim() : document.title;
}

function generateAnchorId(base, existing, options = {}) {
  const sanitized = (base || '').replace(/[^a-z0-9а-яё_-]+/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  const prefix = options.prefix ? options.prefix.replace(/[^a-z0-9_-]/gi, '').replace(/-+/g, '-') : '';
  const candidateBase = sanitized ? (prefix ? `${prefix}-${sanitized}` : sanitized) : (prefix || 'anchor');
  return generateUniqueValue(candidateBase, existing);
}

function ensureAnchor(element, heading, slug, existingAnchors, options = {}) {
  const anchorSet = existingAnchors || new Set();
  if (heading && heading.id) {
    anchorSet.add(heading.id);
    return heading.id;
  }
  if (element.id) {
    anchorSet.add(element.id);
    return element.id;
  }
  const target = heading || element;
  const candidate = generateAnchorId(slug, anchorSet, options);
  target.id = candidate;
  return candidate;
}

function cleanupPreviewNode(node) {
  if (!node || node.nodeType !== 1) {
    return;
  }
  if (node.hasAttribute('data-favorite-id')) {
    node.removeAttribute('data-favorite-id');
  }
  if (node.hasAttribute('id')) {
    node.removeAttribute('id');
  }
  if (node.hasAttribute && node.hasAttribute('data-favorite-preview')) {
    node.removeAttribute('data-favorite-preview');
  }
  node.querySelectorAll('[id]').forEach((child) => child.removeAttribute('id'));
  node.querySelectorAll('[data-favorite-id]').forEach((child) => child.removeAttribute('data-favorite-id'));
  node.querySelectorAll('.favorite-toggle').forEach((child) => child.remove());
}

function cloneNodeForPreview(node) {
  if (!node) {
    return null;
  }
  const clone = node.cloneNode(true);
  cleanupPreviewNode(clone);
  return clone;
}

function buildHeadingPreview(element) {
  const wrapper = document.createElement('div');
  wrapper.className = 'favorite-preview';
  const headingClone = cloneNodeForPreview(element);
  if (headingClone) {
    wrapper.appendChild(headingClone);
  }
  const level = parseInt(element.tagName.slice(1), 10) || 2;
  let sibling = element.nextElementSibling;
  while (sibling) {
    const tagName = sibling.tagName || '';
    if (/^H[1-6]$/.test(tagName)) {
      const siblingLevel = parseInt(tagName.slice(1), 10) || level;
      if (siblingLevel <= level) {
        break;
      }
    }
    const copy = cloneNodeForPreview(sibling);
    if (copy) {
      wrapper.appendChild(copy);
    }
    sibling = sibling.nextElementSibling;
  }
  return wrapper.innerHTML.trim();
}

function createFavoritePreview(element) {
  if (!element || element.dataset.favoritePreview === 'false') {
    return '';
  }
  const explicit = element.getAttribute('data-favorite-preview');
  if (explicit) {
    return explicit;
  }
  if (/^H[1-6]$/.test(element.tagName)) {
    return buildHeadingPreview(element);
  }
  const wrapper = document.createElement('div');
  wrapper.className = 'favorite-preview';
  const clone = cloneNodeForPreview(element);
  if (clone) {
    wrapper.appendChild(clone);
  }
  return wrapper.innerHTML.trim();
}

function ensureFavoriteMetadata(item) {
  if (!item || !item.id) {
    return;
  }
  const stored = favoritesState[item.id];
  if (!stored) {
    return;
  }
  let changed = false;
  if (item.sectionTitle && item.sectionTitle !== stored.sectionTitle) {
    stored.sectionTitle = item.sectionTitle;
    changed = true;
  }
  if (item.pageTitle && item.pageTitle !== stored.pageTitle) {
    stored.pageTitle = item.pageTitle;
    changed = true;
  }
  if (item.previewHTML && item.previewHTML !== stored.previewHTML) {
    stored.previewHTML = item.previewHTML;
    changed = true;
  }
  if (changed) {
    favoritesState[item.id] = { ...stored };
    saveFavoritesState();
    if (typeof favoritesPageRenderer === 'function') {
      favoritesPageRenderer();
    }
  }
}

function extractItemData(element, seenIds, seenAnchors) {
  if (element.dataset.favoriteIgnore === 'true') {
    return null;
  }
  const pageKey = document.body.dataset.page || window.location.pathname;
  const pageTitle = document.title;
  const heading = findHeadingForElement(element);
  const rawTitle = heading ? heading.textContent.trim() : (element.dataset.favoriteTitle || '').trim();
  if (!rawTitle) {
    return null;
  }
  const titleSlug = slugify(rawTitle);
  const baseId = `${pageKey || 'page'}-${titleSlug}`;
  const itemId = generateUniqueValue(baseId, seenIds);
  const anchorId = ensureAnchor(element, heading, titleSlug, seenAnchors, { prefix: 'fav' });
  const sectionTitle = findSectionTitle(element);
  const path = window.location.pathname.split('/').pop() || window.location.pathname;
  const url = anchorId ? `${path}#${anchorId}` : path;
  const previewHTML = createFavoritePreview(element);
  return {
    id: itemId,
    title: rawTitle,
    sectionTitle,
    pageKey,
    pageTitle,
    url,
    previewHTML
  };
}

function createFavoriteButton(item, options = {}) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'favorite-toggle';
  if (options.variant === 'inline') {
    button.classList.add('favorite-toggle--inline');
  }
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleFavorite(item);
  });
  registerFavoriteButton(item, button);
  return button;
}

function attachFavoriteControl(element, item, options = {}) {
  if (element.querySelector('.favorite-toggle')) {
    return;
  }
  element.dataset.favoriteId = item.id;
  element.classList.add('favorite-target');
  const isHeading = /^H[1-6]$/.test(element.tagName);
  if (isHeading) {
    element.classList.add('favorite-heading');
  }
  const button = createFavoriteButton(item, {
    variant: isHeading ? 'inline' : options.variant
  });
  element.appendChild(button);
  ensureFavoriteMetadata(item);
}

function collectFavoritableElements() {
  const pageKey = document.body.dataset.page || '';
  const config = getFavoritesConfig(pageKey);
  if (!config.selectors.length) {
    return [];
  }
  const excludeSelectors = config.exclude;
  const seen = new Set();
  const elements = [];
  config.selectors.forEach((selector) => {
    const nodes = document.querySelectorAll(selector);
    nodes.forEach((element) => {
      if (!element || seen.has(element)) {
        return;
      }
      if (element.dataset.favoriteIgnore === 'true') {
        return;
      }
      if (excludeSelectors.some((excludeSelector) => element.matches(excludeSelector))) {
        return;
      }
      seen.add(element);
      elements.push(element);
    });
  });
  if (typeof config.filter === 'function') {
    return elements.filter((element) => {
      try {
        return config.filter(element);
      } catch (error) {
        console.error('Ошибка фильтра избранного', error);
        return true;
      }
    });
  }
  return elements;
}


function renderFavoritesPage() {
  const container = document.querySelector('[data-favorites-list]');
  if (!container) {
    return;
  }
  const items = Object.values(favoritesState);
  if (!items.length) {
    container.innerHTML = '<p class="favorites-empty">Вы ещё не добавили элементы в избранное.</p>';
    renderFavoritesNavigation([]);
    return;
  }

  const grouped = new Map();
  items.sort((a, b) => a.title.localeCompare(b.title, 'ru'));

  items.forEach((item) => {
    let pageGroup = grouped.get(item.pageTitle);
    if (!pageGroup) {
      pageGroup = new Map();
      grouped.set(item.pageTitle, pageGroup);
    }
    const sectionKey = item.sectionTitle || 'Без раздела';
    const list = pageGroup.get(sectionKey) || [];
    list.push(item);
    pageGroup.set(sectionKey, list);
  });

  container.innerHTML = '';
  const pageEntries = Array.from(grouped.entries()).sort((a, b) => a[0].localeCompare(b[0], 'ru'));
  const navData = [];
  const usedAnchors = new Set();

  pageEntries.forEach(([pageTitle, sections]) => {
    const pageSection = document.createElement('section');
    pageSection.className = 'favorites-group';
    const pageAnchor = generateUniqueValue(`favorites-page-${slugify(pageTitle || 'страница')}`, usedAnchors);
    pageSection.id = pageAnchor;

    const pageHeading = document.createElement('h2');
    pageHeading.textContent = pageTitle;
    pageSection.appendChild(pageHeading);

    const pageNavNode = {
      label: pageTitle,
      anchorId: pageAnchor,
      children: []
    };

    const sectionEntries = Array.from(sections.entries()).sort((a, b) => a[0].localeCompare(b[0], 'ru'));

    sectionEntries.forEach(([sectionTitle, sectionItems]) => {
      sectionItems.sort((a, b) => a.title.localeCompare(b.title, 'ru'));

      const sectionBlock = document.createElement('div');
      sectionBlock.className = 'favorite-section';
      const sectionAnchor = generateUniqueValue(`favorites-section-${slugify(pageTitle || 'страница')}-${slugify(sectionTitle || 'раздел')}`, usedAnchors);
      sectionBlock.id = sectionAnchor;

      const sectionHeading = document.createElement('h3');
      sectionHeading.textContent = sectionTitle;
      sectionBlock.appendChild(sectionHeading);

      const sectionNavNode = {
        label: sectionTitle,
        anchorId: sectionAnchor,
        children: []
      };

      const list = document.createElement('div');
      list.className = 'favorite-items';

      sectionItems.forEach((item) => {
        const itemCard = document.createElement('article');
        itemCard.className = 'favorite-item favorite-target';
        itemCard.dataset.favoriteId = item.id;
        const itemAnchor = generateUniqueValue(`favorites-item-${item.id}`, usedAnchors);
        itemCard.id = itemAnchor;

        const header = document.createElement('div');
        header.className = 'favorite-item-header';

        const link = document.createElement('a');
        link.className = 'favorite-item-link';
        link.href = item.url;
        link.textContent = item.title;
        header.appendChild(link);

        const button = createFavoriteButton(item, { variant: 'inline' });
        header.appendChild(button);

        itemCard.appendChild(header);

        const meta = document.createElement('div');
        meta.className = 'favorite-item-meta';
        const metaParts = [];
        metaParts.push(item.sectionTitle || 'Без раздела');
        if (item.pageTitle) {
          metaParts.push(item.pageTitle);
        }
        meta.textContent = metaParts.join(' • ');
        itemCard.appendChild(meta);

        if (item.previewHTML) {
          const preview = document.createElement('div');
          preview.className = 'favorite-item-preview';
          preview.innerHTML = item.previewHTML;
          itemCard.appendChild(preview);
        }

        list.appendChild(itemCard);
        sectionNavNode.children.push({ label: item.title, anchorId: itemAnchor, children: [] });
      });

      sectionBlock.appendChild(list);
      pageSection.appendChild(sectionBlock);
      pageNavNode.children.push(sectionNavNode);
    });

    container.appendChild(pageSection);
    navData.push(pageNavNode);
  });

  renderFavoritesNavigation(navData);
}

function createFavoritesNavItem(node) {
  const item = document.createElement('li');
  const link = document.createElement('a');
  link.href = `#${node.anchorId}`;
  link.textContent = node.label;
  item.appendChild(link);

  if (node.children && node.children.length) {
    const sublist = document.createElement('ul');
    sublist.className = 'page-nav-sublist';
    node.children.forEach((child) => {
      sublist.appendChild(createFavoritesNavItem(child));
    });
    item.appendChild(sublist);
  }

  return item;
}

function renderFavoritesNavigation(navData) {
  const nav = document.querySelector('[data-favorites-nav]');
  if (!nav) {
    return;
  }
  const list = nav.querySelector('[data-favorites-nav-list]');
  if (!list) {
    return;
  }
  if (!Array.isArray(navData) || navData.length === 0) {
    nav.hidden = true;
    list.innerHTML = '';
    return;
  }

  nav.hidden = false;
  list.innerHTML = '';
  nav.scrollTop = 0;
  const fragment = document.createDocumentFragment();
  navData.forEach((node) => {
    fragment.appendChild(createFavoritesNavItem(node));
  });
  list.appendChild(fragment);
}

function initFavoritesModule() {
  const seenIds = new Set();
  const seenAnchors = new Set();
  const pageKey = document.body.dataset.page || '';

  if (pageKey === 'favorites') {
    favoritesPageRenderer = renderFavoritesPage;
    renderFavoritesPage();
    return;
  }

  const elements = collectFavoritableElements();
  elements.forEach((element) => {
    const item = extractItemData(element, seenIds, seenAnchors);
    if (!item) {
      return;
    }
    attachFavoriteControl(element, item);
  });
}

function parseTocLevelMap(mapText) {
  if (!mapText) {
    return [];
  }
  return mapText.split(';')
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) => {
      const parts = chunk.split(':');
      const selector = parts[0] ? parts[0].trim() : '';
      const level = parts[1] ? parseInt(parts[1], 10) : NaN;
      if (!selector || Number.isNaN(level)) {
        return null;
      }
      return { selector, level };
    })
    .filter(Boolean);
}

function resolveTocLevel(node, nav, levelMap, defaultLevel) {
  const attrLevel = node.getAttribute('data-toc-level') || node.dataset.tocLevel;
  if (attrLevel) {
    const parsed = parseInt(attrLevel, 10);
    if (!Number.isNaN(parsed)) {
      return parsed;
    }
  }
  for (const entry of levelMap) {
    try {
      if (node.matches(entry.selector)) {
        return entry.level;
      }
    } catch (error) {
      // ignore invalid selector
    }
  }
  const headingMatch = node.tagName && /^H([1-6])$/.exec(node.tagName);
  if (headingMatch) {
    return parseInt(headingMatch[1], 10);
  }
  const navDefault = nav.getAttribute('data-toc-default-level');
  const navLevel = navDefault ? parseInt(navDefault, 10) : NaN;
  if (!Number.isNaN(navLevel)) {
    return navLevel;
  }
  return defaultLevel;
}

function buildTocTree(entries, minLevel) {
  const tree = [];
  const stack = [];

  entries.forEach((entry) => {
    let level = entry.level;
    if (Number.isNaN(level)) {
      level = minLevel;
    }
    while (stack.length && level <= stack[stack.length - 1].level) {
      stack.pop();
    }
    const parentLevel = stack.length ? stack[stack.length - 1].level : minLevel - 1;
    if (level > parentLevel + 1) {
      level = parentLevel + 1;
    }
    const current = { ...entry, level, children: [] };
    if (stack.length) {
      stack[stack.length - 1].children.push(current);
    } else {
      tree.push(current);
    }
    stack.push(current);
  });

  return tree;
}

function renderTocTree(items, list) {
  items.forEach((item) => {
    if (!item) {
      return;
    }
    const li = document.createElement('li');
    li.className = 'page-nav__item';
    if (item.anchorId) {
      li.dataset.anchorId = item.anchorId;
    }

    const row = document.createElement('div');
    row.className = 'page-nav__row';
    li.appendChild(row);

    const link = document.createElement('a');
    link.href = `#${item.anchorId}`;
    link.textContent = item.label;
    row.appendChild(link);

    const collapsible = item.anchorId ? collapsibleSectionsRegistry.get(item.anchorId) : null;
    const hasChildren = Array.isArray(item.children) && item.children.length > 0;

    let childList = null;
    if (hasChildren) {
      childList = document.createElement('ul');
      childList.className = 'page-nav-sublist';
      pageNavIdCounter += 1;
      const childListId = `${item.anchorId || 'toc'}-sublist-${pageNavIdCounter}`;
      childList.id = childListId;
      renderTocTree(item.children, childList);
      li.appendChild(childList);
    }

    if (hasChildren || collapsible) {
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'page-nav__toggle';
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Переключить раздел');
      const icon = document.createElement('span');
      icon.className = 'page-nav__toggle-icon';
      icon.setAttribute('aria-hidden', 'true');
      toggle.appendChild(icon);
      row.appendChild(toggle);

      if (childList && childList.id) {
        toggle.setAttribute('aria-controls', childList.id);
      } else if (collapsible && collapsible.content && collapsible.content.id) {
        toggle.setAttribute('aria-controls', collapsible.content.id);
      }

      const controller = {
        setExpanded(expanded) {
          const isExpanded = Boolean(expanded);
          toggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
          li.classList.toggle('is-collapsed', !isExpanded);
          if (hasChildren && childList) {
            childList.hidden = !isExpanded;
          }
        }
      };

      const getCurrentState = () => {
        if (collapsible) {
          return collapsible.isExpanded();
        }
        if (hasChildren && childList) {
          return !childList.hidden;
        }
        return !li.classList.contains('is-collapsed');
      };

      toggle.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const next = !getCurrentState();
        if (collapsible) {
          collapsible.setExpanded(next);
        } else {
          controller.setExpanded(next);
        }
      });

      if (collapsible) {
        registerPageNavController(item.anchorId, controller);
        controller.setExpanded(collapsible.isExpanded());
      } else {
        controller.setExpanded(true);
      }
    }

    list.appendChild(li);
  });
}

function initPageTocFromMarkup() {
  const navs = Array.from(document.querySelectorAll('[data-page-toc]'));
  if (!navs.length) {
    return;
  }
  pageNavControllers.clear();
  pageNavIdCounter = 0;
  const globalAnchors = new Set();

  navs.forEach((nav) => {
    const targetSelector = nav.getAttribute('data-toc-target');
    if (!targetSelector) {
      nav.hidden = true;
      return;
    }
    const scopeSelector = nav.getAttribute('data-toc-scope');
    let scope = null;
    if (scopeSelector) {
      scope = nav.closest(scopeSelector) || document.querySelector(scopeSelector);
    }
    if (!scope) {
      scope = nav.parentElement || document;
    }
    const nodes = Array.from(scope.querySelectorAll(targetSelector));
    if (!nodes.length) {
      nav.hidden = true;
      return;
    }

    let list = nav.querySelector('[data-page-toc-list]');
    if (!list) {
      list = document.createElement('ul');
      list.className = 'page-nav-list';
      nav.appendChild(list);
    }
    list.innerHTML = '';

    const prefix = nav.getAttribute('data-toc-prefix') || 'toc';
    const labelSelector = nav.getAttribute('data-toc-title');
    const levelMap = parseTocLevelMap(nav.getAttribute('data-toc-levels'));
    const defaultLevelAttr = nav.getAttribute('data-toc-default-level');
    const defaultLevel = defaultLevelAttr ? parseInt(defaultLevelAttr, 10) : 2;
    const minLevelAttr = nav.getAttribute('data-toc-min-level');
    const minLevel = minLevelAttr ? parseInt(minLevelAttr, 10) : 1;
    const seenNodes = new Set();
    const entries = [];

    nodes.forEach((node) => {
      if (!node || seenNodes.has(node)) {
        return;
      }
      seenNodes.add(node);

      let labelNode = null;
      if (labelSelector) {
        if (node.matches(labelSelector)) {
          labelNode = node;
        } else {
          labelNode = node.querySelector(labelSelector);
        }
      }
      if (!labelNode) {
        labelNode = node;
      }

      let labelText = '';
      if (labelNode) {
        labelText = (labelNode.textContent || '').trim();
      }
      const explicitLabel = node.getAttribute('data-toc-label');
      if (explicitLabel) {
        labelText = explicitLabel.trim();
      }
      if (!labelText) {
        return;
      }

      const slug = slugify(labelText);
      const heading = /^H[1-6]$/.test(node.tagName) ? node : null;
      const anchorId = ensureAnchor(node, heading, slug, globalAnchors, { prefix });
      const level = resolveTocLevel(node, nav, levelMap, Number.isNaN(defaultLevel) ? 2 : defaultLevel);

      entries.push({ label: labelText, anchorId, level });
    });

    if (!entries.length) {
      nav.hidden = true;
      return;
    }

    const tree = buildTocTree(entries, Number.isNaN(minLevel) ? 1 : minLevel);
    list.innerHTML = '';
    renderTocTree(tree, list);
    nav.hidden = false;
    nav.scrollTop = 0;
  });
}

document.addEventListener('collapsible:change', (event) => {
  if (!event || !event.detail) {
    return;
  }
  const { id, expanded } = event.detail;
  notifyPageNavControllers(id, expanded);
  pageToolbars.forEach((meta) => {
    if (!meta || !meta.sectionIds) {
      return;
    }
    if (!id || meta.sectionIds.has(id)) {
      if (typeof meta.updateStats === 'function') {
        meta.updateStats();
      }
    }
  });
});

const PAGE_INITIALIZERS = (() => {
  const registry = new Map();

  function add(keys, fn) {
    if (!fn) {
      return;
    }
    const list = Array.isArray(keys) ? keys : [keys];
    list.forEach((key) => {
      if (!registry.has(key)) {
        registry.set(key, []);
      }
      registry.get(key).push(fn);
    });
  }

  function run(pageKey) {
    const queue = [];
    const common = registry.get('common');
    if (common) {
      queue.push(...common);
    }
    if (pageKey && pageKey !== 'common') {
      const specific = registry.get(pageKey);
      if (specific) {
        queue.push(...specific);
      }
    }
    queue.forEach((fn) => {
      try {
        fn({ pageKey });
      } catch (error) {
        console.error('Не удалось выполнить модуль страницы:', error);
      }
    });
  }

  return { add, run };
})();

registerFavoritesConfig('necron', { selectors: ['.sheet .section-title'] });
registerFavoritesConfig('equipment', { selectors: ['.equipment-card'] });
registerFavoritesConfig('critops', { selectors: ['.critop .card-critop'] });
registerFavoritesConfig('tacops', { selectors: ['.tacops .card'] });
registerFavoritesConfig('rules', { selectors: ['.rules h2'] });

PAGE_INITIALIZERS.add('common', initCollapsibleSections);
PAGE_INITIALIZERS.add('common', initFavoritesModule);
PAGE_INITIALIZERS.add('common', initPageTocFromMarkup);
PAGE_INITIALIZERS.add('common', initPageToolbar);
PAGE_INITIALIZERS.add('home', initKillTeamLibrary);

document.addEventListener('DOMContentLoaded', () => {
  renderGlobalNav();
  const pageKey = document.body.dataset.page || '';
  PAGE_INITIALIZERS.run(pageKey);
});






