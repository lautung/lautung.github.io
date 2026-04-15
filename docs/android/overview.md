---
title: Android 专题导读
description: Android 学习专题的知识地图和推荐学习顺序。
---

# Android 专题导读

Android 专题按教程站结构组织，从基础篇到 Framework、多设备和安全测试，逐步覆盖 Android 应用开发的主要知识面。第一轮先建立稳定目录和入口页，后续每个分类都可以继续扩写成完整教程。

## 知识地图

| 分类 | 要解决的问题 |
| --- | --- |
| 基础篇 | 环境、工程结构、应用组件、生命周期、Manifest、资源系统。 |
| 高级 UI | 传统 View、RecyclerView、动画手势、自定义 View。 |
| Jetpack 组件 | Lifecycle、ViewModel、Navigation、Room、DataStore、WorkManager。 |
| Jetpack Compose UI | Compose 入门、状态、导航、布局、主题、列表、动画。 |
| 性能优化 | 启动、内存、渲染、发布前性能检查。 |
| 应用架构 | MVVM、分层架构、Repository、数据层和网络访问。 |
| NDK 开发 | JNI、CMake、Native 库和 so 打包。 |
| Framework | 系统服务、Binder/IPC 和应用层与系统层关系。 |
| Android 车载 | Android Auto、Android Automotive OS 和车载交互约束。 |
| Android TV | 大屏布局、焦点导航和遥控器交互。 |
| Android 穿戴式设备 | Wear OS、小屏 UI、健康与传感器能力。 |
| Android 专项测试 | 单元测试、UI 测试、性能测试和调试工具。 |
| Android 应用安全 | 权限、数据安全、组件暴露和发布前安全清单。 |

## 推荐顺序

1. 从基础篇开始，完成 [开发环境](../environment/setup.md)、[Android 基础](./fundamentals.md) 和 [工程结构与 Gradle](./project-structure.md)。
2. 学习 UI：先看 [高级 UI 导读](./advanced-ui/overview.md)，再进入 [Compose 入门](../compose/getting-started.md)。
3. 学习 Jetpack 组件和 [应用架构](./architecture.md)，把页面状态、数据层和后台任务组织起来。
4. 补齐 [性能优化](./performance-release.md)、[Android 专项测试](./testing-debugging.md) 和 [Android 应用安全](./permissions-security.md)。
5. 根据方向选择 NDK、Framework、Android 车载、Android TV 或 Android 穿戴式设备。

## 学习原则

- 先让应用跑起来，再追求架构漂亮。
- 先理解生命周期和状态，再写复杂页面。
- 先把 Jetpack 组件、权限、后台任务、通知等能力写成最小示例，再放进真实项目。
- NDK、Framework 和多设备专题属于进阶方向，建议在基础篇和架构篇之后学习。
- 所有知识点都尽量绑定一个可验证练习。

## 参考资料

- [Application fundamentals](https://developer.android.com/guide/topics/fundamentals.html)
- [Guide to app architecture](https://developer.android.com/topic/libraries/architecture/guide)
- [Jetpack Compose](https://developer.android.com/develop/ui/compose)
