import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebar = [
  {
    type: 'category',
    label: 'Kotlin 教程',
    collapsed: false,
    items: ['kotlin/basics', 'kotlin/null-safety'],
  },
] satisfies SidebarsConfig[string];

export default {
  id: 'kotlinSidebar',
  sidebar,
};
