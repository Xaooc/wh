from pathlib import Path
import re

path = Path('scripts.js')
text = path.read_text(encoding='utf-8-sig')

# Replace renderGlobalNav
render_pattern = re.compile(r"function renderGlobalNav\(\) \{[\s\S]*?\n\}\n", re.MULTILINE)
new_render = "function renderGlobalNav() {\n  const nav = document.querySelector('[data-nav]');\n  if (!nav) {\n    return;\n  }\n  nav.innerHTML = '';\n  const currentPage = document.body.dataset.page || '';\n\n  NAV_SECTIONS.forEach((section, index) => {\n    if (!section || !Array.isArray(section.links) || !section.links.length) {\n      return;\n    }\n\n    const group = document.createElement('details');\n    group.className = 'site-nav__group';\n\n    const shouldOpen = section.links.some((link) => link && link.key === currentPage);\n    if (shouldOpen || index === 0) {\n      group.open = true;\n    }\n\n    const summary = document.createElement('summary');\n    summary.className = 'site-nav__summary';\n    summary.textContent = section.label || 'Навигация';\n    group.appendChild(summary);\n\n    const linksWrapper = document.createElement('div');\n    linksWrapper.className = 'site-nav__links';\n\n    section.links.forEach((link) => {\n      if (!link) {\n        return;\n      }\n      const anchor = document.createElement('a');\n      anchor.href = link.href;\n      anchor.textContent = link.label;\n      if (link.key) {\n        anchor.dataset.navKey = link.key;\n        if (link.key === currentPage) {\n          anchor.setAttribute('aria-current', 'page');\n        }\n      }\n      linksWrapper.appendChild(anchor);\n    });\n\n    if (!linksWrapper.childElementCount) {\n      return;\n    }\n\n    group.appendChild(linksWrapper);\n    nav.appendChild(group);\n  });\n}\n"
text, count = render_pattern.subn(new_render, text)
if count != 1:
    raise SystemExit('Failed to replace renderGlobalNav')

# Insert helper functions after ensureAnchor
ensure_anchor_pattern = re.compile(r"function ensureAnchor\([\s\S]*?\n\}\n\n", re.MULTILINE)
match = ensure_anchor_pattern.search(text)
if not match:
    raise SystemExit('ensureAnchor not found')
insert_pos = match.end()
helpers = """function createFavoritePreview(element) {\n  if (!element || element.dataset.favoritePreview === 'false') {\n    return '';\n  }\n  const explicit = element.getAttribute('data-favorite-preview');\n  if (explicit) {\n    return explicit;\n  }\n  const isHeading = /^H[1-6]$/.test(element.tagName);\n  if (isHeading) {\n    return '';\n  }\n  const clone = element.cloneNode(true);\n  clone.removeAttribute('data-favorite-id');\n  clone.removeAttribute('id');\n  clone.querySelectorAll('[id]').forEach((node) => node.removeAttribute('id'));
  clone.querySelectorAll('[data-favorite-id]').forEach((node) => node.removeAttribute('data-favorite-id'));
  clone.querySelectorAll('.favorite-toggle').forEach((node) => node.remove());
  const wrapper = document.createElement('div');
  wrapper.className = 'favorite-preview';
  wrapper.appendChild(clone);
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

"""
text = text[:insert_pos] + helpers + text[insert_pos:]
...
