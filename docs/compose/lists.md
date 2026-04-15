---
title: Compose 列表
description: LazyColumn、LazyRow、key、列表状态和性能注意事项。
---

# Compose 列表

Compose 使用 `LazyColumn` 和 `LazyRow` 构建懒加载列表。它们只组合当前可见区域附近的 item，适合大量数据。

## 示例

```kotlin
LazyColumn {
    items(
        items = lessons,
        key = { lesson -> lesson.id },
    ) { lesson ->
        Text(lesson.title)
    }
}
```

## 学习重点

- 为 item 提供稳定 key。
- 避免在 item 中做昂贵计算。
- 图片加载要有占位和缓存。
- 列表状态可用 `rememberLazyListState` 保存。
