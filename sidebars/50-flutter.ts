import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebar = [
  {
    type: 'category',
    label: 'Flutter 教程',
    collapsed: false,
    items: [
      'flutter/overview',
      'flutter/setup',
      'flutter/dart-basics',
      'flutter/project-structure',
      'flutter/first-app',
      'flutter/widgets-layout',
      'flutter/state',
      'flutter/provider',
      'flutter/navigation',
      'flutter/networking',
      'flutter/storage',
      'flutter/testing-debugging',
      'flutter/release',
    ],
  },
] satisfies SidebarsConfig[string];

export default {
  id: 'flutterSidebar',
  sidebar,
};
