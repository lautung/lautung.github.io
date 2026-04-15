---
title: Compose 动画
description: Compose 动画 API、状态动画和可见性动画入门。
---

# Compose 动画

Compose 动画围绕状态变化展开。状态变化时，动画 API 负责在旧值和新值之间平滑过渡。

## 常见 API

- `animate*AsState`：单个值动画。
- `AnimatedVisibility`：出现和消失动画。
- `updateTransition`：多个属性联动动画。

## 示例

```kotlin
val alpha by animateFloatAsState(
    targetValue = if (visible) 1f else 0f,
)
```

## 学习建议

动画应该帮助用户理解状态变化。列表、大图和复杂页面里要留意动画造成的重组和性能成本。
