const EXPANSION_CONTROL_SELECTOR =
  '.menu__caret[aria-expanded="{expanded}"], ' +
  '.menu__link[role="button"][aria-expanded="{expanded}"]';
const TOP_CATEGORY_SELECTOR = '.theme-doc-sidebar-item-category-level-1';

function getExpansionControls(
  root: HTMLElement,
  expanded: boolean,
): HTMLElement[] {
  return Array.from(
    root.querySelectorAll<HTMLElement>(
      EXPANSION_CONTROL_SELECTOR.replaceAll('{expanded}', String(expanded)),
    ),
  );
}

function getTopCategories(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(TOP_CATEGORY_SELECTOR));
}

function getCategoryHeader(category: HTMLElement): HTMLElement | null {
  return category.querySelector<HTMLElement>(
    ':scope > .menu__list-item-collapsible',
  );
}

function getTopCategoryControl(
  category: HTMLElement,
  expanded: boolean,
): HTMLElement | null {
  return getCategoryHeader(category)?.querySelector<HTMLElement>(
    EXPANSION_CONTROL_SELECTOR.replaceAll('{expanded}', String(expanded)),
  ) ?? null;
}

function setTopCategoryExpanded(category: HTMLElement, expanded: boolean): void {
  getTopCategoryControl(category, !expanded)?.click();
}

function getActiveTopCategory(root: HTMLElement): HTMLElement | null {
  const activeLink = root.querySelector<HTMLElement>(
    '.theme-doc-sidebar-menu .menu__link--active',
  );
  return activeLink?.closest<HTMLElement>(TOP_CATEGORY_SELECTOR) ?? null;
}

export function expandVisibleCategories(
  root: HTMLElement,
  remainingPasses: number,
): void {
  const collapsedControls = getExpansionControls(root, false);

  if (collapsedControls.length === 0 || remainingPasses === 0) {
    return;
  }

  collapsedControls.forEach((control) => control.click());
  window.requestAnimationFrame(() => {
    expandVisibleCategories(root, remainingPasses - 1);
  });
}

export function collapseVisibleCategories(root: HTMLElement): void {
  getExpansionControls(root, true)
    .reverse()
    .forEach((control) => control.click());
}

export function findClickedTopCategory(
  root: HTMLElement,
  eventTarget: EventTarget,
): HTMLElement | null {
  if (!(eventTarget instanceof Element)) {
    return null;
  }

  const category = eventTarget.closest<HTMLElement>(TOP_CATEGORY_SELECTOR);
  return category && root.contains(category) ? category : null;
}

export function collapseSiblingTopCategories(
  root: HTMLElement,
  targetCategory: HTMLElement | null = getActiveTopCategory(root),
): void {
  if (!targetCategory) {
    return;
  }

  setTopCategoryExpanded(targetCategory, true);
  getTopCategories(root)
    .filter((category) => category !== targetCategory)
    .forEach((category) => setTopCategoryExpanded(category, false));
}
