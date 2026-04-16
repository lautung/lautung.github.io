import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebar = [
  {
    type: 'category',
    label: 'Jetpack Compose 教程',
    collapsed: false,
    items: [
      'compose/getting-started',
      'compose/state',
      'compose/navigation',
      'compose/layouts',
      'compose/theme',
      'compose/lists',
      'compose/animations',
    ],
  },
] satisfies SidebarsConfig[string];

export default {
  id: 'composeSidebar',
  sidebar,
};
