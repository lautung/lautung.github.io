---
title: 自定义 View
description: 自定义 View 的测量、绘制、触摸和性能注意事项。
---

# 自定义 View

当系统控件和组合布局无法满足需求时，可以创建自定义 View。自定义 View 的重点是测量、绘制和交互。

## 常见步骤

1. 继承 `View` 或已有控件。
2. 处理自定义属性。
3. 在 `onMeasure` 中确定尺寸。
4. 在 `onDraw` 中绘制内容。
5. 在 `onTouchEvent` 中处理交互。

## 最小结构

```kotlin
class ProgressView(context: Context, attrs: AttributeSet?) : View(context, attrs) {
    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
        // 绘制进度
    }
}
```

## 学习建议

先写只绘制、不交互的 View。确认绘制正确后，再加入触摸事件和动画。`onDraw` 中不要频繁创建对象。
