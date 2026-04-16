---
title: 性能分析与工具
description: Flutter profile 模式、DevTools Performance、Performance Overlay 和问题定位流程。
---

# 性能分析与工具

性能优化的第一步是拿到可靠数据。Flutter 的 debug 模式会启用额外检查，不能代表真实性能；分析卡顿、帧耗时、启动和内存时，应尽量使用真机和 profile 模式。

## 使用 profile 模式

```powershell
flutter run --profile
```

如果使用 FVM：

```powershell
fvm flutter run --profile
```

profile 模式保留了性能分析所需信息，性能表现更接近 release。不要用 debug 模式结论去判断最终体验。

## 打开 DevTools

运行应用后，可以打开 DevTools：

```powershell
flutter pub global run devtools
```

也可以在 Android Studio 或 VS Code 的 Flutter 工具窗口中打开。重点关注：

- Performance：查看帧耗时、时间线、耗时事件。
- Memory：观察内存走势、快照和对象数量。
- CPU Profiler：定位 Dart 代码热点。
- Network：分析请求耗时和响应体大小。

## Performance Overlay

在开发阶段可以打开性能叠层：

```dart
MaterialApp(
  showPerformanceOverlay: true,
  home: const HomePage(),
)
```

叠层通常有两条图：

| 图 | 代表 |
| --- | --- |
| UI 线程 | Dart 代码、Widget 构建、布局等耗时。 |
| Raster 线程 | 绘制、合成、图片、图层等耗时。 |

如果 UI 线程高，先查构建和业务逻辑；如果 Raster 线程高，先查绘制复杂度、图片和图层。

## 定位流程

1. 在真机 profile 模式复现问题。
2. 记录具体操作路径，例如“进入首页后首次滚动列表”。
3. 用 Performance 视图找到掉帧区间。
4. 判断主要压力在 UI 线程还是 Raster 线程。
5. 只修改一个疑点，再重复测量。

## 常用开关

```dart
debugProfileBuildsEnabled = true;
debugProfilePaintsEnabled = true;
```

这些调试开关只适合开发分析，不要放进生产代码。使用后如果日志过多，可以缩小复现场景。

## 记录模板

```text
设备：Pixel 6 / Android 15
模式：profile
场景：首页滚动商品列表
问题：快速滚动时偶发掉帧
初始指标：UI 线程多次超过 16ms
修改：将 ListView(children) 改为 ListView.builder
结果：掉帧明显减少
```

有记录，优化才不会变成玄学。

## 资料入口

- [Flutter performance profiling](https://docs.flutter.dev/perf/ui-performance)
- [Use the Performance view](https://docs.flutter.dev/tools/devtools/performance)

