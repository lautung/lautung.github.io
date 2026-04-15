---
title: Compose 状态
description: Jetpack Compose 中 remember、rememberSaveable、状态提升和 ViewModel 状态。
---

# Compose 状态

Compose 是声明式 UI。界面显示什么，取决于传入的状态；状态变化后，相关组合函数会重新组合。

## 本地状态

```kotlin
@Composable
fun Counter() {
    var count by remember { mutableIntStateOf(0) }

    Button(onClick = { count += 1 }) {
        Text("点击 $count 次")
    }
}
```

`remember` 能跨重组保存值，但不能自动跨配置变更保存。

## 可保存状态

```kotlin
var name by rememberSaveable { mutableStateOf("") }
```

`rememberSaveable` 适合保存可以放入 `Bundle` 的简单状态，例如输入框内容。

## 状态提升

把状态放到调用方，让组件只负责显示和回调。

```kotlin
@Composable
fun NameInput(
    name: String,
    onNameChange: (String) -> Unit,
) {
    OutlinedTextField(
        value = name,
        onValueChange = onNameChange,
        label = { Text("Name") },
    )
}
```

## ViewModel 状态

复杂页面状态通常放进 `ViewModel`，再暴露给 Compose。

```kotlin
val uiState by viewModel.uiState.collectAsStateWithLifecycle()
```

## 学习建议

- 小组件内部状态用 `remember`。
- 需要保存输入内容用 `rememberSaveable`。
- 页面级状态用 `ViewModel`。
- 可复用组件优先做成无状态组件。

## 参考资料

- [State and Jetpack Compose](https://developer.android.com/develop/ui/compose/state)
- [Compose UI Architecture](https://developer.android.com/develop/ui/compose/architecture)
