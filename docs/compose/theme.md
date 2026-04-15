---
title: Compose 主题
description: MaterialTheme、颜色、字体和暗色模式入门。
---

# Compose 主题

主题负责统一应用的颜色、字体、形状和组件风格。Compose 通常使用 `MaterialTheme` 管理视觉系统。

## 主题包含什么

- ColorScheme：颜色。
- Typography：字体层级。
- Shapes：圆角形状。
- 组件默认样式。

## 示例

```kotlin
MaterialTheme(
    colorScheme = lightColorScheme(),
) {
    AppContent()
}
```

## 学习建议

不要在每个页面里到处写固定颜色。先建立主题，再让组件从主题读取颜色和文字样式。
