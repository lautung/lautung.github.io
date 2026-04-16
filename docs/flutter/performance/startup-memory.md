---
title: 启动、内存与包体积优化
description: Flutter 启动耗时、初始化任务、内存泄漏、图片缓存和应用体积优化。
---

# 启动、内存与包体积优化

启动、内存和包体积影响的是应用的第一印象和长期稳定性。它们不像某个动画卡顿那样明显，但会直接影响留存、耗电和低端设备体验。

## 启动优化思路

启动阶段少做同步重活。入口尽量保持轻：

```dart
Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await AppBootstrap.init();
  runApp(const MyApp());
}
```

`AppBootstrap.init()` 中只放首屏必须依赖的初始化。不是首屏必须的任务，可以延后到首页渲染后执行。

## 延后非关键任务

```dart
WidgetsBinding.instance.addPostFrameCallback((_) {
  analyticsService.start();
  preloadConfig();
});
```

首帧之后再做非关键任务，可以减少白屏和首屏等待时间。

## 避免启动阶段同步 I/O

启动阶段尽量避免：

- 大文件同步读取。
- 大 JSON 同步解析。
- 一次性初始化太多 SDK。
- 首屏前加载大量图片或配置。

大 JSON 可以考虑放到 isolate 中解析，或者改成分页、懒加载。

## 内存常见来源

| 来源 | 检查点 |
| --- | --- |
| 图片 | 原图过大、缓存过多、列表中重复加载。 |
| Controller | `TextEditingController`、`AnimationController` 未释放。 |
| Stream | 订阅后没有 cancel。 |
| Timer | 页面销毁后仍在运行。 |
| 全局单例 | 持有页面、context 或大对象引用。 |

## 正确释放资源

```dart
class SearchPageState extends State<SearchPage> {
  final controller = TextEditingController();

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }
}
```

只要对象有 `dispose`、`cancel`、`close` 这类方法，就要想清楚生命周期归谁负责。

## 图片缓存压力

Flutter 有全局图片缓存。图片很多时，先从源头控制尺寸，再考虑缓存策略。

```dart
PaintingBinding.instance.imageCache.maximumSizeBytes = 100 << 20;
```

不要一上来就盲目调大缓存。缓存越大，内存压力也越大。

## 包体积优化

构建 release 包后分析体积：

```powershell
flutter build apk --analyze-size
```

或分析 App Bundle：

```powershell
flutter build appbundle --analyze-size
```

常见优化方向：

- 删除不用的资源文件。
- 使用合适尺寸的图片资源。
- 避免引入只用到一点点功能的大型依赖。
- Android 使用 App Bundle 分发。
- 字体、音频、视频等资源按需整理。

## 常见检查清单

- `main()` 中是否初始化了太多东西？
- 首屏是否等待了不必要的网络请求？
- 大 JSON 是否阻塞 UI 线程？
- 页面 controller、stream、timer 是否释放？
- 图片资源是否按显示尺寸准备？
- release 包体积是否经过 `--analyze-size` 检查？

## 资料入口

- [Flutter Performance](https://docs.flutter.dev/perf)
- [Measuring your app's size](https://docs.flutter.dev/perf/app-size)
- [DevTools Memory view](https://docs.flutter.dev/tools/devtools/memory)

