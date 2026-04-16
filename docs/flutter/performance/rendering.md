---
title: 重建、布局与渲染优化
description: Flutter Widget 重建、const、布局成本、Opacity、Clip 和动画刷新范围优化。
---

# 重建、布局与渲染优化

Flutter 的 Widget 重建本身并不可怕，真正的问题是每一帧做了太多无效工作。优化重点是缩小刷新范围、减少昂贵布局和绘制、避免动画每帧重建大子树。

## 控制 build 成本

优先使用 `const`：

```dart
class EmptyState extends StatelessWidget {
  const EmptyState({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text('暂无数据');
  }
}
```

能 `const` 的 Widget，Flutter 可以跳过很多重复创建和比较工作。

## 拆成 Widget，而不是函数

不推荐：

```dart
Widget buildTitle(String title) {
  return Text(title);
}
```

推荐：

```dart
class TitleText extends StatelessWidget {
  const TitleText({super.key, required this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    return Text(title);
  }
}
```

独立 Widget 更容易使用 `const`、缓存子树，也更容易观察重建范围。

## 缩小动画重建范围

`AnimatedBuilder` 的 `child` 参数可以避免静态子树每帧重建：

```dart
AnimatedBuilder(
  animation: controller,
  child: const Icon(Icons.favorite),
  builder: (context, child) {
    return Transform.scale(
      scale: controller.value,
      child: child,
    );
  },
)
```

如果把 `Icon` 写进 `builder`，动画每一帧都会重新构建它。

## 谨慎使用 Opacity

`Opacity` 在某些场景会触发额外图层，动画中尤其要谨慎。淡入淡出优先使用：

```dart
AnimatedOpacity(
  opacity: visible ? 1 : 0,
  duration: const Duration(milliseconds: 200),
  child: const Text('Hello'),
)
```

如果只是让颜色半透明，优先直接使用带透明度的颜色，而不是包一层 `Opacity`。

## 谨慎使用 Clip 和 saveLayer

圆角、裁剪、阴影、透明混合都可能增加绘制成本。原则是：

- 能不用裁剪就不用。
- 能固定尺寸就固定尺寸。
- 复杂圆角图片优先在资源阶段处理好。
- 不要在长列表 item 中堆叠复杂阴影和透明层。

## 避免昂贵布局

`IntrinsicHeight`、`IntrinsicWidth` 这类 intrinsic 布局可能触发额外测量。长列表和复杂页面中要谨慎使用。

替代思路：

- 尽量给子项明确尺寸。
- 使用 `AspectRatio`、`SizedBox`、`ConstrainedBox` 约束布局。
- 重复 item 保持固定高度，便于列表优化。

## 常见检查清单

- 是否有大页面因为一个小状态变化全部重建？
- 是否在 `build` 中做排序、过滤、JSON 解析或复杂计算？
- 是否在动画 builder 中构建了静态子树？
- 是否长列表 item 中有复杂阴影、透明、裁剪？
- 是否用了 `IntrinsicHeight`、`shrinkWrap: true` 或嵌套滚动导致额外布局？

## 资料入口

- [Performance best practices](https://docs.flutter.dev/perf/best-practices)
- [Improving rendering performance](https://docs.flutter.dev/perf/rendering-performance)

