---
title: RecyclerView
description: RecyclerView、Adapter、ViewHolder、DiffUtil 和列表性能入门。
---

# RecyclerView

RecyclerView 用于高效展示大量列表数据。它通过复用 item View 减少创建成本，是传统 View 体系中的核心列表控件。

## 基本组成

- `RecyclerView`：列表容器。
- `Adapter`：把数据转换成 item View。
- `ViewHolder`：缓存 item View 引用。
- `LayoutManager`：决定列表如何布局。
- `DiffUtil`：计算列表差异，减少无效刷新。

## 学习重点

```kotlin
class LessonViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView)
```

实际项目中，列表卡顿通常来自图片加载、频繁全量刷新、复杂 item 布局或主线程计算过多。

## 学习建议

先掌握 Adapter 和 ViewHolder，再学习 `ListAdapter` 与 `DiffUtil`。列表中不要做耗时计算，图片加载要用成熟库并设置占位图。
