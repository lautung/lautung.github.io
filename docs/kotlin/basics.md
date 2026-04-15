---
title: Kotlin 基础
description: Android 开发中常用 Kotlin 语法的学习入口。
---

# Kotlin 基础

Kotlin 是现代 Android 开发的主要语言。学习时不需要一次吃完全部语法，先掌握写界面、写数据模型和表达业务逻辑最常用的部分。

## 重点主题

- `val` 和 `var`：不可变变量与可变变量。
- 函数：默认参数、命名参数和单表达式函数。
- 类与数据类：普通类、`data class` 和构造函数。
- 集合：`listOf`、`mutableListOf`、`map`、`filter`。
- Lambda：把一段逻辑作为参数传给函数。

## 示例

```kotlin
data class Lesson(
    val title: String,
    val completed: Boolean = false,
)

fun nextLesson(lessons: List<Lesson>): Lesson? {
    return lessons.firstOrNull { lesson -> !lesson.completed }
}
```

## 常用写法

```kotlin
val titles = lessons
    .filter { lesson -> !lesson.completed }
    .map { lesson -> lesson.title }
```

这段代码先筛选未完成课程，再取出课程标题。集合链式调用在 Android 页面列表、状态转换和数据清洗中很常见。

## 练习

创建一个 `Lesson` 列表，写一个函数返回还没有完成的课程标题。如果全部完成，返回 `全部完成`。

下一步阅读 [Kotlin 空安全](./null-safety.md)，把可空类型和默认值处理补上。
