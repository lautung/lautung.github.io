import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebar = [
  'flutter/overview',
  {
    type: 'category',
    label: '起步与工具链',
    collapsed: false,
    items: [
      'flutter/getting-started/setup',
      'flutter/getting-started/fvm',
      'flutter/getting-started/dart-basics',
      'flutter/getting-started/project-structure',
      'flutter/getting-started/first-app',
    ],
  },
  {
    type: 'category',
    label: '界面基础',
    collapsed: false,
    items: ['flutter/ui/widgets-layout'],
  },
  {
    type: 'category',
    label: '状态管理',
    collapsed: false,
    items: [
      'flutter/state/state',
      'flutter/state/provider',
      'flutter/state/riverpod',
    ],
  },
  {
    type: 'category',
    label: '应用能力',
    collapsed: false,
    items: ['flutter/app/navigation'],
  },
  {
    type: 'category',
    label: '数据与存储',
    collapsed: false,
    items: [
      'flutter/data/networking',
      'flutter/data/storage',
      'flutter/data/hive',
    ],
  },
  {
    type: 'category',
    label: '测试与发布',
    collapsed: false,
    items: [
      'flutter/quality/testing-debugging',
      'flutter/quality/release',
    ],
  },
] satisfies SidebarsConfig[string];

export default {
  id: 'flutterSidebar',
  sidebar,
};
