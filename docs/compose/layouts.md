---
title: Compose 布局
description: Compose 中 Column、Row、Box、LazyColumn 和 Modifier 的布局基础。
---

# Compose 布局

Compose 使用组合函数描述布局。常见布局包括 `Column`、`Row`、`Box` 和懒加载列表。

## 常见布局

- `Column`：垂直排列。
- `Row`：水平排列。
- `Box`：叠放内容。
- `LazyColumn`：垂直懒加载列表。
- `Modifier`：描述大小、间距、背景、点击等修饰。

## 示例

```kotlin
Column(modifier = Modifier.padding(16.dp)) {
    Text("标题")
    Text("正文")
}
```

## 学习建议

先理解 Modifier 的顺序，再学习复杂布局。列表必须设置稳定 key，避免滚动状态和重组问题。
