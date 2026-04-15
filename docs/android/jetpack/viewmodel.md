---
title: ViewModel
description: ViewModel 的职责、状态保存和 UI 层协作。
---

# ViewModel

ViewModel 用于保存页面状态和处理 UI 事件。它能在配置变更后继续存在，避免旋转屏幕后状态丢失。

## 适合放什么

- 页面 UI 状态。
- 调用 Repository 加载数据的逻辑。
- 用户事件处理。
- 错误、加载中、空状态等状态转换。

## 不适合放什么

- Activity 或 View 的引用。
- Android Context 的长期引用。
- 纯粹的绘制逻辑。

## 示例

```kotlin
class LessonViewModel(
    private val repository: LessonRepository,
) : ViewModel() {
    private val _uiState = MutableStateFlow(LessonUiState())
    val uiState = _uiState.asStateFlow()
}
```

## 学习建议

ViewModel 不负责显示界面，只负责准备界面需要的数据和状态。
