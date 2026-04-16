---
title: Flutter 专题导读
description: Flutter 学习专题的知识地图和推荐学习顺序。
---

# Flutter 专题导读

Flutter 用 Dart 语言和 Widget 体系构建跨平台应用。它适合希望用一套代码覆盖 Android、iOS、Web 或桌面端的学习者。

## 知识地图

| 分类 | 要解决的问题 |
| --- | --- |
| 环境搭建 | 安装 Flutter SDK、配置编辑器、检查模拟器和真机。 |
| Dart 基础 | 语法、空安全、集合、类和异步编程。 |
| 工程结构 | 理解 `lib/`、`pubspec.yaml`、资源和平台目录。 |
| Widget 与布局 | 用 Widget 描述界面，并理解约束、组合和常见布局。 |
| 状态与导航 | 处理页面状态、Provider 共享状态、页面跳转和参数传递。 |
| 数据能力 | 网络请求、本地存储、JSON 和错误处理。 |
| 测试与发布 | 编写测试、调试问题、构建安装包并做发布检查。 |

## 推荐顺序

1. 完成 [Flutter 环境搭建](./setup.md)，确保 `flutter doctor` 没有关键错误。
2. 学习 [Dart 基础](./dart-basics.md)，再看 [Flutter 工程结构](./project-structure.md)。
3. 跑通 [第一个 Flutter 应用](./first-app.md)，理解热重载和入口文件。
4. 学习 [Widget 与布局](./widgets-layout.md)、[状态管理入门](./state.md)、[Provider 状态管理](./provider.md) 和 [页面导航](./navigation.md)。
5. 补齐 [网络请求](./networking.md)、[本地存储](./storage.md)、[测试与调试](./testing-debugging.md) 和 [构建发布](./release.md)。

## 学习建议

- 先用最小页面验证知识点，再拆成组件。
- 不急着引入复杂状态管理库，先理解 Widget、状态和数据流；需要跨组件共享状态时再学习 Provider。
- 每次遇到环境问题，都记录 `flutter doctor` 输出、系统版本和最终解决方法。
