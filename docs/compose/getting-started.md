---
title: Compose 入门
description: Jetpack Compose 的组合函数、状态和预览入门。
---

# Jetpack Compose 入门

Jetpack Compose 用 Kotlin 代码描述界面。它的核心是组合函数、状态驱动和可预览的 UI。

## 最小界面

```kotlin
@Composable
fun Greeting(name: String) {
    Text(text = "Hello $name")
}
```

## 状态示例

```kotlin
@Composable
fun Counter() {
    var count by remember { mutableIntStateOf(0) }

    Button(onClick = { count += 1 }) {
        Text(text = "点击 $count 次")
    }
}
```

## 学习重点

- 组合函数只描述界面，不直接保存长期业务状态。
- 状态变化会触发相关界面重新组合。
- 预览用于快速检查界面，但最终仍要在模拟器或真机验证。

## 下一步

把 `Greeting` 和 `Counter` 放进一个 Empty Activity 项目，观察预览和模拟器运行效果是否一致。
