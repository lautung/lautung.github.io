---
title: 应用架构
description: Android 推荐架构、UI 层、数据层、领域层和单向数据流。
---

# 应用架构

应用架构的目标不是套模板，而是让代码更容易扩展、测试和维护。官方推荐至少拆成 UI 层和数据层，复杂项目可以增加领域层。

## 常见分层

| 层 | 职责 |
| --- | --- |
| UI 层 | 显示数据、处理用户事件、暴露页面状态。 |
| 数据层 | 管理业务数据，封装本地数据、网络数据和缓存。 |
| 领域层 | 可选，封装可复用或复杂业务逻辑。 |

## UI 状态

```kotlin
data class LessonUiState(
    val lessons: List<Lesson> = emptyList(),
    val isLoading: Boolean = false,
    val errorMessage: String? = null,
)
```

## ViewModel

```kotlin
class LessonViewModel(
    private val repository: LessonRepository,
) : ViewModel() {
    private val _uiState = MutableStateFlow(LessonUiState())
    val uiState = _uiState.asStateFlow()
}
```

## Repository

Repository 对外暴露数据，对内决定数据来自网络、本地数据库还是缓存。

```kotlin
interface LessonRepository {
    fun observeLessons(): Flow<List<Lesson>>
    suspend fun refreshLessons()
}
```

## 学习建议

- 页面逻辑不要都写在 Activity 或 Composable 中。
- UI 层通过状态驱动界面，不直接操作数据库或网络。
- 数据层尽量提供稳定 API，隐藏数据来源细节。
- 领域层不是必需，只有复用或复杂度明显时再加。

## 参考资料

- [Guide to app architecture](https://developer.android.com/topic/libraries/architecture/guide)
- [Data layer](https://developer.android.com/topic/architecture/data-layer)
