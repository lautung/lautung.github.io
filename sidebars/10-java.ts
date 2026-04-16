import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebar = [
  {
    type: 'category',
    label: 'Java 教程',
    collapsed: false,
    items: ['java/basics', 'java/oop'],
  },
] satisfies SidebarsConfig[string];

export default {
  id: 'javaSidebar',
  sidebar,
};
