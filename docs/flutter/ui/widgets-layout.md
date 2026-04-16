---
title: Widget 与布局
description: Flutter Widget、组合、约束模型和常见布局组件入门。
---

# Widget 与布局

Flutter 中几乎一切都是 Widget。页面由小 Widget 组合成大 Widget，布局由父组件给子组件约束来决定。

## 常见布局

```dart
class ProfileCard extends StatelessWidget {
  const ProfileCard({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          Text('学习 Flutter'),
          SizedBox(height: 8),
          Text('从 Widget 和布局开始。'),
        ],
      ),
    );
  }
}
```

## 常用组件

| Widget | 作用 |
| --- | --- |
| `Container` | 设置尺寸、内边距、颜色和装饰。 |
| `Column` / `Row` | 垂直或水平排列子组件。 |
| `Stack` | 让子组件叠放。 |
| `Expanded` | 在 `Row` 或 `Column` 中占用剩余空间。 |
| `ListView` | 构建可滚动列表。 |

## 约束思路

- 父 Widget 给子 Widget 约束。
- 子 Widget 在约束范围内选择自己的尺寸。
- 父 Widget 决定子 Widget 的位置。

## 学习建议

- 布局问题先看父组件约束，再看子组件尺寸。
- 页面变复杂时先拆 Widget，不要把所有内容都写进一个 `build`。
- 列表数据多时优先使用 `ListView.builder`。
