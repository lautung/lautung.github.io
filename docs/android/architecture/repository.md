---
title: Repository 模式
description: Repository 在 Android 数据层中的职责和使用方式。
---

# Repository 模式

Repository 负责为上层提供稳定的数据 API，并隐藏数据来自网络、本地数据库还是缓存。

## 职责

- 统一数据来源。
- 处理缓存策略。
- 转换数据模型。
- 对外暴露 Flow 或 suspend API。

## 示例

```kotlin
interface LessonRepository {
    fun observeLessons(): Flow<List<Lesson>>
    suspend fun refreshLessons()
}
```

## 学习建议

不要在页面里直接访问网络或数据库。先定义 Repository 接口，再实现数据来源。
