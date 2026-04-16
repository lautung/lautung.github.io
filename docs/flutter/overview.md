---
title: Flutter 专题导读
description: Flutter 学习专题的知识地图和推荐学习顺序。
---

# Flutter 专题导读

Flutter 用 Dart 语言和 Widget 体系构建跨平台应用。它适合希望用一套代码覆盖 Android、iOS、Web 或桌面端的学习者。

## 知识地图

| 分类 | 要解决的问题 |
| --- | --- |
| 起步与工具链 | 环境搭建、FVM 版本管理、Dart 基础、工程结构和第一个应用。 |
| 界面基础 | 用 Widget 描述界面，并理解约束、组合和常见布局。 |
| 状态管理 | `setState`、Provider、Riverpod、Bloc、MobX、Redux 和状态边界。 |
| GetX 专题 | GetX 的状态管理、路由管理和依赖注入。 |
| 应用能力 | 页面导航、GoRouter、参数传递和返回栈。 |
| 数据与存储 | 网络请求、本地存储、Hive 和 JSON 错误处理。 |
| 性能优化 | profile 模式、DevTools、重建渲染、列表图片、启动内存和包体积。 |
| 测试与发布 | 编写测试、调试问题、构建安装包并做发布检查。 |

## 推荐顺序

1. 完成 [Flutter 环境搭建](./getting-started/setup.md)，再用 [FVM 版本管理](./getting-started/fvm.md) 固定项目 Flutter 版本。
2. 学习 [Dart 基础](./getting-started/dart-basics.md)，再看 [Flutter 工程结构](./getting-started/project-structure.md)。
3. 跑通 [第一个 Flutter 应用](./getting-started/first-app.md)，理解热重载和入口文件。
4. 学习 [Widget 与布局](./ui/widgets-layout.md)、[状态管理入门](./state/state.md)、[Provider 状态管理](./state/provider.md)、[Riverpod 状态管理](./state/riverpod.md)、[Bloc 状态管理](./state/bloc.md) 和 [页面导航](./app/navigation.md)。
5. 如果项目选择 GetX，继续看 [GetX 专题导读](./getx/overview.md)；如果项目需要声明式路由，继续看 [GoRouter 框架](./app/go-router.md)。
6. 补齐 [网络请求](./data/networking.md)、[本地存储](./data/storage.md) 和 [Hive 本地数据库](./data/hive.md)。
7. 进入 [Flutter 性能优化导读](./performance/overview.md)，学习 profile 模式、重建渲染、列表图片、启动内存和包体积。
8. 最后完成 [测试与调试](./quality/testing-debugging.md) 和 [构建发布](./quality/release.md)。

## 学习建议

- 先用最小页面验证知识点，再拆成组件。
- 不急着引入复杂状态管理库，先理解 Widget、状态和数据流；需要跨组件共享状态时再学习 Provider、Riverpod、Bloc 或 GetX。
- 每次遇到环境问题，都记录 `flutter doctor`、`fvm doctor` 输出、系统版本和最终解决方法。
