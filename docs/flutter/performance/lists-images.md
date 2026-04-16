---
title: 列表与图片优化
description: Flutter ListView.builder、Sliver、itemExtent、图片尺寸、缓存和预加载优化。
---

# 列表与图片优化

长列表和图片是 Flutter 应用最常见的性能热点。列表要避免一次性构建太多子项，图片要避免解码过大、缓存失控和首屏突然加载。

## 使用懒加载列表

不要把大量 item 直接放进 `ListView(children: ...)`：

```dart
ListView(
  children: products.map(ProductTile.new).toList(),
)
```

推荐使用 `ListView.builder`：

```dart
ListView.builder(
  itemCount: products.length,
  itemBuilder: (context, index) {
    return ProductTile(product: products[index]);
  },
)
```

`builder` 只构建屏幕附近需要显示的 item。

## 固定 item 高度

如果每个 item 高度固定，可以提供 `itemExtent`：

```dart
ListView.builder(
  itemExtent: 72,
  itemCount: messages.length,
  itemBuilder: (context, index) {
    return MessageTile(message: messages[index]);
  },
)
```

固定高度能减少列表计算成本。高度不固定时，可以用 `prototypeItem` 提供一个参考 item。

## 避免 shrinkWrap 滥用

`shrinkWrap: true` 会让列表根据内容计算自身高度，长列表中成本很高。常见替代方式：

- 外层使用 `Expanded`。
- 用 `CustomScrollView` + `SliverList` 组合滚动内容。
- 避免在滚动容器里再放完整滚动列表。

## Sliver 组合页面

复杂滚动页面可以用 `CustomScrollView`：

```dart
CustomScrollView(
  slivers: [
    const SliverAppBar(title: Text('商品')),
    SliverList.builder(
      itemCount: products.length,
      itemBuilder: (context, index) {
        return ProductTile(product: products[index]);
      },
    ),
  ],
)
```

Sliver 能把头部、列表、网格、加载更多等内容放进同一个滚动体系。

## 图片按显示尺寸加载

如果接口返回的图片很大，但页面只显示 80x80，应尽量请求缩略图，或设置缓存解码尺寸：

```dart
Image.network(
  imageUrl,
  width: 80,
  height: 80,
  fit: BoxFit.cover,
  cacheWidth: 160,
  cacheHeight: 160,
)
```

`cacheWidth` 和 `cacheHeight` 可以减少解码后的内存占用。数值可以按设备像素比估算。

## 预加载关键图片

页面进入前可以预加载首屏关键图片：

```dart
@override
void didChangeDependencies() {
  super.didChangeDependencies();
  precacheImage(NetworkImage(heroImageUrl), context);
}
```

预加载不要滥用。只预加载用户马上会看到的图片，否则会增加内存压力。

## 常见检查清单

- 长列表是否使用 `builder` 或 Sliver？
- 是否在 item 的 `build` 中做复杂计算？
- item 是否可以固定高度？
- 是否滥用 `shrinkWrap: true`？
- 图片是否远大于实际显示尺寸？
- 是否需要缩略图、占位图或预加载？

## 学习建议

- 列表先解决“构建数量”，再解决“单个 item 成本”。
- 图片先解决“尺寸”，再考虑缓存策略。
- 滚动性能问题优先用 profile 模式真机复现。

