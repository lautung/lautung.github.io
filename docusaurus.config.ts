import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '全栈学习笔记',
  tagline: '像查教程一样系统学习编程与应用开发',
  favicon: 'img/android-learning.png',

  future: {
    v4: true,
  },

  url: 'https://fullstack-notes.example.com',
  baseUrl: '/',

  organizationName: 'fullstack-notes',
  projectName: 'fullstack-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/android-learning.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '全栈学习笔记',
      items: [
        {
          to: '/docs/intro',
          position: 'left',
          label: '学习路线',
        },
        {
          type: 'docSidebar',
          sidebarId: 'javaSidebar',
          position: 'left',
          label: 'Java',
        },
        {
          type: 'docSidebar',
          sidebarId: 'kotlinSidebar',
          position: 'left',
          label: 'Kotlin',
        },
        {
          type: 'docSidebar',
          sidebarId: 'androidSidebar',
          position: 'left',
          label: 'Android',
        },
        {
          type: 'docSidebar',
          sidebarId: 'composeSidebar',
          position: 'left',
          label: 'Compose',
        },
        {
          type: 'docSidebar',
          sidebarId: 'flutterSidebar',
          position: 'left',
          label: 'Flutter',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习路线',
          items: [
            {
              label: '开始学习',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Java',
          items: [
            {
              label: 'Java 基础',
              to: '/docs/java/basics',
            },
            {
              label: 'Java 面向对象',
              to: '/docs/java/oop',
            },
          ],
        },
        {
          title: 'Kotlin',
          items: [
            {
              label: 'Kotlin 基础',
              to: '/docs/kotlin/basics',
            },
            {
              label: 'Kotlin 空安全',
              to: '/docs/kotlin/null-safety',
            },
          ],
        },
        {
          title: 'Android',
          items: [
            {
              label: '专题导读',
              to: '/docs/android/overview',
            },
            {
              label: '应用架构',
              to: '/docs/android/architecture',
            },
            {
              label: 'Jetpack Compose',
              to: '/docs/compose/getting-started',
            },
            {
              label: '测试与调试',
              to: '/docs/android/testing-debugging',
            },
          ],
        },
        {
          title: 'Compose',
          items: [
            {
              label: 'Compose 入门',
              to: '/docs/compose/getting-started',
            },
            {
              label: 'Compose 状态',
              to: '/docs/compose/state',
            },
          ],
        },
        {
          title: 'Flutter',
          items: [
            {
              label: 'Flutter 导读',
              to: '/docs/flutter/overview',
            },
            {
              label: '环境搭建',
              to: '/docs/flutter/setup',
            },
          ],
        },
        {
          title: '参考资源',
          items: [
            {
              label: 'Android Developers',
              href: 'https://developer.android.com/',
            },
            {
              label: 'Flutter Docs',
              href: 'https://docs.flutter.dev/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 全栈学习笔记。Android is a trademark of Google LLC. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
