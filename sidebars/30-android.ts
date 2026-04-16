import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebar = [
  {
    type: 'category',
    label: '基础篇',
    collapsed: false,
    items: [
      'android/overview',
      'environment/setup',
      'android/fundamentals',
      'android/project-structure',
      'android/app-components',
      'android/activity-lifecycle',
      'android/manifest-intents',
      'android/resources',
    ],
  },
  {
    type: 'category',
    label: '高级 UI',
    collapsed: false,
    items: [
      'android/advanced-ui/overview',
      'android/advanced-ui/view-system',
      'android/advanced-ui/recyclerview',
      'android/advanced-ui/animations-gestures',
      'android/advanced-ui/custom-view',
    ],
  },
  {
    type: 'category',
    label: 'Jetpack 组件',
    collapsed: false,
    items: [
      'android/jetpack/overview',
      'android/jetpack/lifecycle',
      'android/jetpack/viewmodel',
      'android/jetpack/navigation',
      'android/jetpack/room',
      'android/jetpack/datastore',
      'android/jetpack/workmanager',
      'android/background-work',
      'android/data-storage',
    ],
  },
  {
    type: 'category',
    label: '性能优化',
    collapsed: false,
    items: [
      'android/performance-release',
      'android/performance/startup',
      'android/performance/memory',
      'android/performance/rendering',
    ],
  },
  {
    type: 'category',
    label: '应用架构',
    collapsed: false,
    items: [
      'android/architecture',
      'android/architecture/mvvm',
      'android/architecture/layers',
      'android/architecture/repository',
      'android/networking',
    ],
  },
  {
    type: 'category',
    label: 'NDK 开发',
    collapsed: false,
    items: ['android/ndk/overview', 'android/ndk/jni-basics', 'android/ndk/cmake-build'],
  },
  {
    type: 'category',
    label: 'Framework',
    collapsed: false,
    items: [
      'android/framework/overview',
      'android/framework/system-services',
      'android/framework/binder-ipc',
    ],
  },
  {
    type: 'category',
    label: 'Android 车载',
    collapsed: false,
    items: ['android/automotive/overview', 'android/automotive/auto-vs-automotive'],
  },
  {
    type: 'category',
    label: 'Android TV',
    collapsed: false,
    items: ['android/tv/overview', 'android/tv/focus-navigation', 'android/tv/remote-input'],
  },
  {
    type: 'category',
    label: 'Android 穿戴式设备',
    collapsed: false,
    items: ['android/wear/overview', 'android/wear/watch-ui', 'android/wear/health-sensors'],
  },
  {
    type: 'category',
    label: 'Android 专项测试',
    collapsed: false,
    items: [
      'android/testing-debugging',
      'android/testing/unit-testing',
      'android/testing/ui-testing',
      'android/testing/performance-testing',
    ],
  },
  {
    type: 'category',
    label: 'Android 应用安全',
    collapsed: false,
    items: [
      'android/permissions-security',
      'android/security/data-security',
      'android/security/exported-components',
      'android/security/checklist',
      'android/notifications',
    ],
  },
] satisfies SidebarsConfig[string];

export default {
  id: 'androidSidebar',
  sidebar,
};
