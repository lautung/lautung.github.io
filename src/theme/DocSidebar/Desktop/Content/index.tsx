import React, {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import DocSidebarItems from '@theme/DocSidebarItems';
import type {Props} from '@theme/DocSidebar/Desktop/Content';

import {
  collapseSiblingTopCategories,
  collapseVisibleCategories,
  expandVisibleCategories,
  findClickedTopCategory,
} from './sidebarDom';
import styles from './styles.module.css';

const MAX_EXPAND_PASSES = 8;
const AUTO_COLLAPSE_STORAGE_KEY = 'docs-sidebar-auto-collapse-current-topic';

function readStoredAutoCollapse(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    return window.localStorage.getItem(AUTO_COLLAPSE_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

function writeStoredAutoCollapse(value: boolean): void {
  try {
    window.localStorage.setItem(AUTO_COLLAPSE_STORAGE_KEY, String(value));
  } catch {
    // Keep the runtime switch usable even when storage is blocked.
  }
}

function SidebarExpansionToolbar({
  onExpandAll,
  onCollapseAll,
  autoCollapseCurrentTopic,
  onAutoCollapseCurrentTopicChange,
}: {
  onExpandAll: () => void;
  onCollapseAll: () => void;
  autoCollapseCurrentTopic: boolean;
  onAutoCollapseCurrentTopicChange: (value: boolean) => void;
}): ReactNode {
  return (
    <div className={styles.sidebarTools} aria-label="侧栏目录操作">
      <div className={styles.sidebarButtonRow}>
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
      <label className={styles.sidebarSwitch}>
        <input
          type="checkbox"
          checked={autoCollapseCurrentTopic}
          onChange={(event) => {
            onAutoCollapseCurrentTopicChange(event.target.checked);
          }}
        />
        <span>{translate({
          id: 'theme.docs.sidebar.autoCollapseCurrentTopic',
          message: '只展开当前专题',
          description: 'Switch label to keep only current topic expanded',
        })}</span>
      </label>
    </div>
  );
}

export default function DocSidebarDesktopContent({
  path,
  sidebar,
  className,
}: Props): ReactNode {
  const navRef = useRef<HTMLElement | null>(null);
  const [autoCollapseCurrentTopic, setAutoCollapseCurrentTopic] =
    useState(false);
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
  const syncCurrentTopic = useCallback(() => {
    if (navRef.current) {
      collapseSiblingTopCategories(navRef.current);
    }
  }, []);
  const updateAutoCollapseCurrentTopic = useCallback((value: boolean) => {
    setAutoCollapseCurrentTopic(value);
    writeStoredAutoCollapse(value);
  }, []);
  const handleSidebarClickCapture = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const root = navRef.current;
      if (!autoCollapseCurrentTopic || !root || !event.nativeEvent.isTrusted) {
        return;
      }

      const category = findClickedTopCategory(root, event.target);
      if (category) {
        window.requestAnimationFrame(() => {
          collapseSiblingTopCategories(root, category);
        });
      }
    },
    [autoCollapseCurrentTopic],
  );

  useEffect(() => {
    setAutoCollapseCurrentTopic(readStoredAutoCollapse());
  }, []);

  useEffect(() => {
    if (autoCollapseCurrentTopic) {
      window.requestAnimationFrame(syncCurrentTopic);
    }
  }, [autoCollapseCurrentTopic, path, syncCurrentTopic]);

  return (
    <nav
      ref={navRef}
      onClickCapture={handleSidebarClickCapture}
      aria-label={translate({
        id: 'theme.docs.sidebar.navAriaLabel',
        message: 'Docs sidebar',
        description: 'The ARIA label for the sidebar navigation',
      })}
      className={clsx('menu thin-scrollbar', styles.menu, className)}>
      <SidebarExpansionToolbar
        onExpandAll={expandAll}
        onCollapseAll={collapseAll}
        autoCollapseCurrentTopic={autoCollapseCurrentTopic}
        onAutoCollapseCurrentTopicChange={updateAutoCollapseCurrentTopic}
      />
      <ul className={clsx('theme-doc-sidebar-menu', 'menu__list')}>
        <DocSidebarItems items={sidebar} activePath={path} level={1} />
      </ul>
    </nav>
  );
}
