---
title: Android 基础
description: Android 应用结构、生命周期和资源系统的入门说明。
---

# Android 基础

Android 应用由代码、资源、Manifest 和构建配置共同组成。先理解这些边界，再深入组件、界面、架构和性能。

## 应用组成

- `Activity`：承载一个可交互界面的入口。
- `Service`：在后台执行持续任务或被其他组件绑定使用。
- `BroadcastReceiver`：接收系统或应用广播事件。
- `ContentProvider`：向其他应用暴露结构化数据。
- `AndroidManifest.xml`：声明应用组件、权限和入口 Activity。
- `res/`：存放字符串、图片、主题、布局等资源。
- `build.gradle.kts`：配置插件、依赖、SDK 版本和构建参数。

## 生命周期

Activity 会随着用户操作和系统状态变化进入不同阶段。入门阶段先记住这些常见回调：

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
}

override fun onStart() {
    super.onStart()
}

override fun onStop() {
    super.onStop()
}
```

## 学习建议

先用日志观察生命周期，再结合界面旋转、切换后台、返回桌面等操作理解状态变化。不要急着背 API，先看应用什么时候创建、暂停和销毁。

## 下一步

- [工程结构与 Gradle](./project-structure.md)
- [应用组件](./app-components.md)
- [Activity 生命周期](./activity-lifecycle.md)
