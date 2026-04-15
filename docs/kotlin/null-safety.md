---
title: Kotlin 空安全
description: Kotlin 可空类型、安全调用、智能转换和 Elvis 运算符入门。
---

# Kotlin 空安全

空安全是 Kotlin 最值得优先掌握的特性之一。它把“这个值可能为空吗”写进类型里，减少运行时空指针问题。

## 可空类型

普通类型不能保存 `null`，可空类型需要在类型后面加 `?`。

```kotlin
val title: String = "Kotlin 基础"
val note: String? = null
```

## 安全调用

安全调用 `?.` 表示：如果左边不是 `null`，才继续访问右边。

```kotlin
val noteLength = note?.length
```

这里 `noteLength` 的类型是 `Int?`，因为 `note` 为空时结果也为空。

## Elvis 运算符

Elvis 运算符 `?:` 用于提供默认值。

```kotlin
val displayNote = note ?: "暂无笔记"
```

这在显示 UI 文案、处理接口字段缺失时很常用。

## 智能转换

经过空判断后，Kotlin 可以自动把可空类型当作非空类型使用。

```kotlin
fun printTitle(title: String?) {
    if (title == null) {
        return
    }

    println(title.length)
}
```

## 练习

写一个 `formatLessonTitle(title: String?): String` 函数：

- `title` 为空时返回 `未命名课程`。
- `title` 不为空时返回原文。
- 不使用 `!!`。
