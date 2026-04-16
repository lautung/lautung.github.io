---
title: Flutter 性能优化导读
description: Flutter 性能优化的分析顺序、核心指标和学习路线。
---

# Flutter 性能优化导读

Flutter 性能优化不要从“猜哪里慢”开始，而要先测量。常见流程是：确认场景、用 profile 模式复现、看帧耗时，再定位是 UI 线程、Raster 线程、内存、网络还是启动阶段的问题。

## 先记住三个原则

1. 不用 debug 模式判断性能。
2. 优先在真机上测，尤其是目标用户可能使用的低端设备。
3. 优化前后都要记录指标，否则很容易“感觉变快了”。

## 关注什么指标

| 指标 | 说明 |
| --- | --- |
| 帧耗时 | 60Hz 屏幕下每帧大约 16ms，超过就可能掉帧。 |
| UI 线程耗时 | Dart 构建、布局、业务逻辑过重会影响这里。 |
| Raster 线程耗时 | 绘制、图层、图片、特效过重会影响这里。 |
| 启动耗时 | 从点击图标到首屏可交互的时间。 |
| 内存占用 | 图片、列表、缓存和长生命周期对象都可能造成压力。 |
| 包体积 | 影响下载、安装和首次启动体验。 |

## 推荐学习顺序

1. 先学 [性能分析与工具](./profiling.md)，掌握 profile 模式、DevTools 和 Performance Overlay。
2. 再学 [重建、布局与渲染优化](./rendering.md)，处理卡顿和不必要重建。
3. 接着学 [列表与图片优化](./lists-images.md)，解决长列表、图片解码和缓存问题。
4. 最后学 [启动、内存与包体积优化](./startup-memory.md)，优化真实应用体验。

## 常见问题定位

| 现象 | 优先检查 |
| --- | --- |
| 滚动卡顿 | 列表构建方式、图片大小、item 重建范围。 |
| 动画卡顿 | `AnimatedBuilder` 子树、Opacity、裁剪、Shader 或复杂绘制。 |
| 页面切换慢 | 首次加载数据、图片预缓存、路由构建成本。 |
| 首屏慢 | 初始化任务、同步 I/O、启动阶段插件调用。 |
| 内存上涨 | 图片缓存、未释放 controller、stream 订阅、全局单例。 |

## 学习建议

- 先用 DevTools 观察，再改代码。
- 每次只改一个变量，方便判断优化是否有效。
- 不要为了性能牺牲清晰结构，除非已经测到具体瓶颈。
- 列表、图片、动画、启动初始化是最常见的优化入口。

## 资料入口

- [Flutter Performance](https://docs.flutter.dev/perf)
- [Performance best practices](https://docs.flutter.dev/perf/best-practices)
- [Flutter performance profiling](https://docs.flutter.dev/perf/ui-performance)

