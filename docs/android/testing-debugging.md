---
title: 测试与调试
description: Android 单元测试、仪器测试、Compose UI 测试和调试工具。
---

# 测试与调试

好的测试策略能更早发现问题。入门阶段先区分本地单元测试、设备测试和 UI 测试。

## 测试类型

| 类型 | 运行位置 | 适合内容 |
| --- | --- | --- |
| 本地单元测试 | JVM | 纯 Kotlin/Java 逻辑、ViewModel、UseCase。 |
| 仪器测试 | 设备或模拟器 | 需要 Android Framework 的代码。 |
| UI 测试 | 设备或模拟器 | 页面交互、导航和可见性。 |

## ViewModel 测试思路

```kotlin
@Test
fun loadLessons_success_updatesState() = runTest {
    // Given: 仓库返回课程列表
    // When: 触发加载
    // Then: uiState 更新为成功状态
}
```

## Compose UI 测试思路

```kotlin
composeTestRule
    .onNodeWithText("Java 基础")
    .assertIsDisplayed()
```

## 调试工具

- Logcat：查看日志和崩溃信息。
- Layout Inspector：检查界面层级。
- App Inspection：检查数据库、后台任务等。
- Profiler：分析 CPU、内存、网络和能耗。

## 学习建议

- 业务逻辑优先写本地单元测试。
- 关键用户路径补 UI 测试。
- 测试数据要稳定，不依赖真实网络。
- 调试日志不要包含敏感信息。

## 参考资料

- [Testing strategies](https://developer.android.com/training/testing/fundamentals/strategies)
- [AndroidJUnitRunner](https://developer.android.com/training/testing/junit-runner.html)
