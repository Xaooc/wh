const NAV_SECTIONS = [
  {
    label: 'Kill teams',
    links: [
      { key: 'necron', href: 'necron-cheatsheet.html', label: 'Иеротек Круг (Hierotek Circle)' },
      { key: 'vespid', href: 'vespid-cheatsheet.html', label: 'Веспид-Стингвинг (Vespid Stingwing)' },
      { key: 'adepta-sororitas', href: 'adepta-sororitas-cheatsheet.html', label: 'Новициаты Адепта Сороритас (Adepta Sororitas Novitiate)' },
      { key: 'plague-marines', href: 'plague-marines-cheatsheet.html', label: 'Чумные морпехи (Plague Marines)' },
      { key: 'kommandos', href: 'kommandos-cheatsheet.html', label: 'Коммандосы (Kommandos)' }
    ]
  },
  {
    label: 'Справочники',
    links: [
      { key: 'rules', href: 'rule.html', label: 'Правила (Rules)' },
      { key: 'equipment', href: 'unique-equipment.html', label: 'Уникальное снаряжение (Unique Equipment)' },
      { key: 'tacops', href: 'TACOP.html', label: 'Tac Ops' },
      { key: 'critops', href: 'critop.html', label: 'Критические операции (Crit Ops)' }
    ]
  },
  {
    label: 'Личное',
    links: [
      { key: 'favorites', href: 'favorites.html', label: 'Избранное (Favorites)' }
    ]
  }
];
function renderGlobalNav() {
  const nav = document.querySelector('[data-nav]');
  if (!nav) {
    return;
  }
  nav.innerHTML = '';
  const currentPage = document.body.dataset.page || '';

  NAV_SECTIONS.forEach((section, index) => {
    if (!section || !Array.isArray(section.links) || !section.links.length) {
      return;
    }

    const group = document.createElement('details');
    group.className = 'site-nav__group';

    const shouldOpen = section.links.some((link) => link && link.key === currentPage);
    if (shouldOpen || index === 0) {
      group.open = true;
    }

    const summary = document.createElement('summary');
    summary.className = 'site-nav__summary';
    summary.textContent = section.label || 'Навигация';
    group.appendChild(summary);

    const linksWrapper = document.createElement('div');
    linksWrapper.className = 'site-nav__links';

    section.links.forEach((link) => {
      if (!link) {
        return;
      }
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.textContent = link.label;
      if (link.key) {
        anchor.dataset.navKey = link.key;
        if (link.key === currentPage) {
          anchor.setAttribute('aria-current', 'page');
        }
      }
      linksWrapper.appendChild(anchor);
    });

    if (!linksWrapper.childElementCount) {
      return;
    }

    group.appendChild(linksWrapper);
    nav.appendChild(group);
  });
}
const ruleHandlers = [
  {
    pattern: /^Blast\s+([\d.]+)"$/i,
    describe(match) {
      const range = match[1];
      return `Р’Р·СЂС‹РІ ${range}" вЂ” РїРѕСЃР»Рµ Р°С‚Р°РєРё РїРѕ РѕСЃРЅРѕРІРЅРѕР№ С†РµР»Рё Р°С‚Р°РєСѓР№ РІСЃРµС… РІРёРґРёРјС‹С… РІСЂР°РіРѕРІ РІ РїСЂРµРґРµР»Р°С… ${range}" РѕС‚ РЅРµС‘ РїРѕ РѕС‡РµСЂРµРґРё; РєР°Р¶РґС‹Р№ Р±СЂРѕСЃРѕРє РІС‹РїРѕР»РЅСЏРµС‚СЃСЏ РѕС‚РґРµР»СЊРЅРѕ. Р’С‚РѕСЂРёС‡РЅС‹Рµ С†РµР»Рё РїРѕР»СѓС‡Р°СЋС‚ С‚Р°РєРѕРµ Р¶Рµ СѓРєСЂС‹С‚РёРµ, РєР°Рє Рё РѕСЃРЅРѕРІРЅР°СЏ.`;
    }
  },
  {
    pattern: /^Devastating\s+(\d+)/i,
    describe(match) {
      const damage = match[1];
      return `РћРїСѓСЃС‚РѕС€Р°СЋС‰РёР№ ${damage} вЂ” РєР°Р¶РґРѕРµ СЃРѕС…СЂР°РЅС‘РЅРЅРѕРµ РєСЂРёС‚РёС‡РµСЃРєРѕРµ РїРѕРїР°РґР°РЅРёРµ СЃСЂР°Р·Сѓ РЅР°РЅРѕСЃРёС‚ С†РµР»Рё ${damage} СѓСЂРѕРЅР°. РЈСЃРїРµС… РѕСЃС‚Р°С‘С‚СЃСЏ Рё РјРѕР¶РµС‚ Р±С‹С‚СЊ РёСЃРїРѕР»СЊР·РѕРІР°РЅ РїРѕР·Р¶Рµ; РµСЃР»Рё РїСЂР°РІРёР»Рѕ СѓРєР°Р·Р°РЅРѕ СЃ РґРёСЃС‚Р°РЅС†РёРµР№, РїРѕСЂР°Р¶Р°РµС‚ РІСЃРµС… РІРёРґРёРјС‹С… РІСЂР°РіРѕРІ РІ СЌС‚РѕРј СЂР°РґРёСѓСЃРµ.`;
    }
  },
  {
    pattern: /^Piercing\s+(\d+)/i,
    describe(match) {
      const reduction = match[1];
      return `РџСЂРѕР±РёРІР°СЋС‰РёР№ ${reduction} вЂ” Р·Р°С‰РёС‰Р°СЋС‰РёР№СЃСЏ Р±СЂРѕСЃР°РµС‚ РЅР° ${reduction} РєСѓР±(Р°) Р·Р°С‰РёС‚С‹ РјРµРЅСЊС€Рµ. Р’ РІР°СЂРёР°РЅС‚Рµ В«С‚РѕР»СЊРєРѕ РєСЂРёС‚Р°РјРёВ» РїСЂР°РІРёР»Рѕ СЂР°Р±РѕС‚Р°РµС‚, РµСЃР»Рё С‚С‹ СЃРѕС…СЂР°РЅРёР» РєСЂРёС‚РёС‡РµСЃРєРёРµ СѓСЃРїРµС…Рё.`;
    }
  },
  {
    pattern: /^Range\s+([\d.]+)"$/i,
    describe(match) {
      const distance = match[1];
      return `Р”Р°Р»СЊРЅРѕСЃС‚СЊ ${distance}" вЂ” РјРѕР¶РЅРѕ РІС‹Р±РёСЂР°С‚СЊ С†РµР»Рё С‚РѕР»СЊРєРѕ РІ РїСЂРµРґРµР»Р°С… ${distance}" РѕС‚ Р°РєС‚РёРІРЅРѕРіРѕ РѕРїРµСЂР°С‚РёРІРЅРёРєР°.`;
    }
  },
  {
    pattern: /^Lethal\s+(\d\+?)$/i,
    describe(match) {
      const threshold = match[1];
      return `Р›РµС‚Р°Р»СЊРЅС‹Р№ ${threshold} вЂ” РїРѕРїР°РґР°РЅРёСЏ СЃ СЂРµР·СѓР»СЊС‚Р°С‚РѕРј ${threshold} СЃС‡РёС‚Р°СЋС‚СЃСЏ РєСЂРёС‚РёС‡РµСЃРєРёРјРё СѓСЃРїРµС…Р°РјРё.`;
    }
  },
  {
    pattern: /^Heavy,\s*Dash only$/i,
    describe() {
      return 'РўСЏР¶С‘Р»С‹Р№ (С‚РѕР»СЊРєРѕ Dash) вЂ” РЅРµР»СЊР·СЏ РґРІРёРіР°С‚СЊСЃСЏ РІ Р°РєС‚РёРІР°С†РёРё/РєРѕРЅС‚СЂРґРµР№СЃС‚РІРёРё, РіРґРµ СЃС‚СЂРµР»СЏРµС€СЊ РёР· СЌС‚РѕРіРѕ РѕСЂСѓР¶РёСЏ, Рё РЅР°РѕР±РѕСЂРѕС‚. Р Р°Р·СЂРµС€С‘РЅ С‚РѕР»СЊРєРѕ Dash, РґРµР№СЃС‚РІРёРµ Guard РЅРµ Р±Р»РѕРєРёСЂСѓРµС‚СЃСЏ.';
    }
  }
];

const staticRuleDescriptions = {
  'Rending': 'Р Р°Р·РґРёСЂР°СЋС‰РёР№ вЂ” РµСЃР»Рё СЃРѕС…СЂР°РЅРёР» РєСЂРёС‚РёС‡РµСЃРєРёР№ СѓСЃРїРµС…, РјРѕР¶РµС€СЊ РїРѕРІС‹СЃРёС‚СЊ РѕРґРёРЅ РѕР±С‹С‡РЅС‹Р№ СѓСЃРїРµС… РґРѕ РєСЂРёС‚РёС‡РµСЃРєРѕРіРѕ.',
  'Severe': 'РЎСѓСЂРѕРІС‹Р№ вЂ” РµСЃР»Рё РЅРµ СЃРѕС…СЂР°РЅРёР» РєСЂРёС‚РёС‡РµСЃРєРёР№ СѓСЃРїРµС…, РјРѕР¶РµС€СЊ РїСЂРµРІСЂР°С‚РёС‚СЊ РѕРґРёРЅ РѕР±С‹С‡РЅС‹Р№ СѓСЃРїРµС… РІ РєСЂРёС‚РёС‡РµСЃРєРёР№. РћРїСѓСЃС‚РѕС€Р°СЋС‰РёР№ Рё РџСЂРѕР±РёРІР°СЋС‰РёР№ РєСЂРёС‚Р°РјРё РІСЃС‘ РµС‰С‘ РґРµР№СЃС‚РІСѓСЋС‚, Р° РљР°СЂР°СЋС‰РёР№ Рё Р Р°Р·РґРёСЂР°СЋС‰РёР№ вЂ” РЅРµС‚.',
  'Shock': 'РЁРѕРє вЂ” РїСЂРё РїРµСЂРІРѕРј СѓРґР°СЂРµ РєСЂРёС‚РёС‡РµСЃРєРёРј СѓСЃРїРµС…РѕРј РІ РєР°Р¶РґРѕР№ РїРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕСЃС‚Рё РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ СЃР±СЂРѕСЃСЊ РѕРґРёРЅ РЅРµСЂР°Р·СЂРµС€С‘РЅРЅС‹Р№ РѕР±С‹С‡РЅС‹Р№ СѓСЃРїРµС… РїСЂРѕС‚РёРІРЅРёРєР° (РёР»Рё РєСЂРёС‚РёС‡РµСЃРєРёР№, РµСЃР»Рё РѕР±С‹С‡РЅС‹С… РЅРµС‚).',
  'Stun': 'РћРіР»СѓС€Р°СЋС‰РёР№ вЂ” РµСЃР»Рё СЃРѕС…СЂР°РЅРёР» РєСЂРёС‚РёС‡РµСЃРєРёР№ СѓСЃРїРµС…, СѓРјРµРЅСЊС€Р°Р№ APL С†РµР»Рё РЅР° 1 РґРѕ РєРѕРЅС†Р° РµС‘ СЃР»РµРґСѓСЋС‰РµР№ Р°РєС‚РёРІР°С†РёРё.',
  'Magnify*': 'Magnify* вЂ” РѕСЂСѓР¶РёРµ РїРѕР»СѓС‡Р°РµС‚ Р±РѕРЅСѓСЃС‹, РєРѕРіРґР° РЅР° РЅРµРіРѕ Р°РєС‚РёРІРёСЂРѕРІР°РЅ СЌС„С„РµРєС‚ Magnify (СЃРј. РѕРїРёСЃР°РЅРёРµ СЃРїРѕСЃРѕР±РЅРѕСЃС‚Рё Magnify).',
  'Devastating': 'РћРїСѓСЃС‚РѕС€Р°СЋС‰РёР№ вЂ” РєР°Р¶РґРѕРµ СЃРѕС…СЂР°РЅС‘РЅРЅРѕРµ РєСЂРёС‚РёС‡РµСЃРєРѕРµ РїРѕРїР°РґР°РЅРёРµ СЃСЂР°Р·Сѓ РЅР°РЅРѕСЃРёС‚ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Р№ СѓСЂРѕРЅ С†РµР»Рё Рё РјРѕР¶РµС‚ Р±С‹С‚СЊ РёСЃРїРѕР»СЊР·РѕРІР°РЅРѕ РґР°Р»СЊС€Рµ.'
};

function getRuleDescription(rule) {
  const normalized = (rule || '').trim();
  if (!normalized) {
    return '';
  }

  for (const handler of ruleHandlers) {
    const match = normalized.match(handler.pattern);
    if (match) {
      return handler.describe(match);
    }
  }

  if (staticRuleDescriptions[normalized]) {
    return staticRuleDescriptions[normalized];
  }

  return '';
}

(function initWeaponTooltips() {
  document.addEventListener('DOMContentLoaded', () => {
    const ruleNodes = Array.from(document.querySelectorAll('.weapon-rule'));
    if (!ruleNodes.length) {
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

    ruleNodes.forEach((node) => {
      const ruleKey = node.dataset.rule || '';
      const description = getRuleDescription(ruleKey);
      if (!description) {
        return;
      }
      node.setAttribute('data-description', description);
      node.setAttribute('aria-label', description);
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
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${item.anchorId}`;
    link.textContent = item.label;
    li.appendChild(link);
    if (item.children && item.children.length) {
      const childList = document.createElement('ul');
      childList.className = 'page-nav-sublist';
      renderTocTree(item.children, childList);
      li.appendChild(childList);
    }
    list.appendChild(li);
  });
}

function initPageTocFromMarkup() {
  const navs = Array.from(document.querySelectorAll('[data-page-toc]'));
  if (!navs.length) {
    return;
  }
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

PAGE_INITIALIZERS.add('common', initFavoritesModule);
PAGE_INITIALIZERS.add('common', initPageTocFromMarkup);

document.addEventListener('DOMContentLoaded', () => {
  renderGlobalNav();
  const pageKey = document.body.dataset.page || '';
  PAGE_INITIALIZERS.run(pageKey);
});






