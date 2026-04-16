import React, {type ReactNode, useCallback, useRef} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import DocSidebarItems from '@theme/DocSidebarItems';
import type {Props} from '@theme/DocSidebar/Desktop/Content';

import styles from './styles.module.css';

const MAX_EXPAND_PASSES = 8;

function getExpansionControls(
  root: HTMLElement,
  expanded: boolean,
): HTMLElement[] {
  return Array.from(
    root.querySelectorAll<HTMLElement>(
      `.menu__caret[aria-expanded="${expanded}"], ` +
        `.menu__link[role="button"][aria-expanded="${expanded}"]`,
    ),
  );
}

function expandVisibleCategories(root: HTMLElement, remainingPasses: number): void {
  const collapsedControls = getExpansionControls(root, false);

  if (collapsedControls.length === 0 || remainingPasses === 0) {
    return;
  }

  collapsedControls.forEach((control) => control.click());
  window.requestAnimationFrame(() => {
    expandVisibleCategories(root, remainingPasses - 1);
  });
}

function collapseVisibleCategories(root: HTMLElement): void {
  getExpansionControls(root, true)
    .reverse()
    .forEach((control) => control.click());
}

function SidebarExpansionToolbar({
  onExpandAll,
  onCollapseAll,
}: {
  onExpandAll: () => void;
  onCollapseAll: () => void;
}): ReactNode {
  return (
    <div className={styles.sidebarTools} aria-label="侧栏目录操作">
      <button
        type="button"
        className={styles.sidebarToolButton}
        onClick={onExpandAll}>
        {translate({
          id: 'theme.docs.sidebar.expandAll',
          message: '全部展开',
          description: 'Button label to expand all docs sidebar categories',
        })}
      </button>
      <button
        type="button"
        className={styles.sidebarToolButton}
        onClick={onCollapseAll}>
        {translate({
          id: 'theme.docs.sidebar.collapseAll',
          message: '全部折叠',
          description: 'Button label to collapse all docs sidebar categories',
        })}
      </button>
    </div>
  );
}

export default function DocSidebarDesktopContent({
  path,
  sidebar,
  className,
}: Props): ReactNode {
  const navRef = useRef<HTMLElement | null>(null);
  const expandAll = useCallback(() => {
    if (navRef.current) {
      expandVisibleCategories(navRef.current, MAX_EXPAND_PASSES);
    }
  }, []);
  const collapseAll = useCallback(() => {
    if (navRef.current) {
      collapseVisibleCategories(navRef.current);
    }
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label={translate({
        id: 'theme.docs.sidebar.navAriaLabel',
        message: 'Docs sidebar',
        description: 'The ARIA label for the sidebar navigation',
      })}
      className={clsx('menu thin-scrollbar', styles.menu, className)}>
      <SidebarExpansionToolbar
        onExpandAll={expandAll}
        onCollapseAll={collapseAll}
      />
      <ul className={clsx('theme-doc-sidebar-menu', 'menu__list')}>
        <DocSidebarItems items={sidebar} activePath={path} level={1} />
      </ul>
    </nav>
  );
}
