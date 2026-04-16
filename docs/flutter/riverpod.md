---
title: Riverpod 状态管理
description: Flutter Riverpod 的 ProviderScope、ConsumerWidget、ref.watch、ref.read 和 AsyncValue 入门。
---

# Riverpod 状态管理

Riverpod 是 Flutter 中常用的状态管理方案。它把状态声明成 provider，让 Widget 通过 `ref` 读取状态，适合处理共享状态、异步数据和可测试的业务逻辑。

## 适用场景

- 多个页面或组件需要共享状态。
- 页面中有网络请求、缓存、加载中和错误状态。
- 想把状态逻辑从 Widget 中拆出来，方便复用和测试。
- 想减少对 `BuildContext` 的依赖，用更明确的 `ref.watch` 和 `ref.read` 管理数据流。

如果只是页面内部的临时开关、输入框状态或简单计数器，`setState` 仍然可以先用；状态跨组件后再引入 Riverpod。

## 添加依赖

使用命令添加 Flutter 版 Riverpod：

```powershell
flutter pub add flutter_riverpod
```

然后在 Dart 文件中引入：

```dart
import 'package:flutter_riverpod/flutter_riverpod.dart';
```

## 挂载 ProviderScope

Riverpod 应用需要在根部包一层 `ProviderScope`。它负责创建状态容器，让下面的 Widget 可以读取 provider。

```dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

void main() {
  runApp(
    const ProviderScope(
      child: MyApp(),
    ),
  );
}
```

## 定义 Provider

最简单的 provider 可以返回一个只读值：

```dart
final appNameProvider = Provider<String>((ref) {
  return 'Flutter 学习笔记';
});
```

在 Widget 中使用 `ConsumerWidget` 和 `WidgetRef` 读取：

```dart
class HomePage extends ConsumerWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final appName = ref.watch(appNameProvider);

    return Text(appName);
  }
}
```

`ref.watch` 会订阅状态变化。provider 的值变化时，使用它的 Widget 会重新构建。

## 可变状态

入门阶段可以用 `StateProvider` 管理简单可变状态，例如计数器：

```dart
final counterProvider = StateProvider<int>((ref) => 0);
```

读取和修改：

```dart
class CounterPage extends ConsumerWidget {
  const CounterPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final count = ref.watch(counterProvider);

    return Column(
      children: [
        Text('点击 $count 次'),
        ElevatedButton(
          onPressed: () {
            ref.read(counterProvider.notifier).state += 1;
          },
          child: const Text('增加'),
        ),
      ],
    );
  }
}
```

这里 `ref.watch(counterProvider)` 用于显示并响应刷新；按钮回调里用 `ref.read(counterProvider.notifier)` 做一次性修改，避免回调本身订阅状态。

## 异步数据

网络请求、文件读取这类异步数据可以用 `FutureProvider`。Riverpod 会把结果包装成 `AsyncValue`，方便统一处理加载中、成功和失败。

```dart
final messageProvider = FutureProvider<String>((ref) async {
  await Future.delayed(const Duration(seconds: 1));
  return '加载完成';
});
```

页面中处理三种状态：

```dart
class MessagePage extends ConsumerWidget {
  const MessagePage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final message = ref.watch(messageProvider);

    return message.when(
      loading: () => const CircularProgressIndicator(),
      error: (error, stackTrace) => Text('加载失败：$error'),
      data: (value) => Text(value),
    );
  }
}
```

## ref.watch、ref.read 和 ref.listen

| 方法 | 适用场景 |
| --- | --- |
| `ref.watch` | 在 `build` 中读取状态，并希望状态变化时刷新 UI。 |
| `ref.read` | 在按钮点击、提交表单等回调中读取或修改状态。 |
| `ref.listen` | 监听状态变化并触发一次性副作用，例如弹出提示或跳转页面。 |

常见规则是：显示数据用 `watch`，事件回调用 `read`，副作用用 `listen`。

## 与 Provider 的区别

| 方案 | 读取方式 | 适合阶段 |
| --- | --- | --- |
| Provider | `context.watch` / `context.read` | 入门共享状态，理解 `ChangeNotifier`。 |
| Riverpod | `ref.watch` / `ref.read` | 更复杂状态、异步数据、测试和复用。 |

Provider 更贴近 Flutter 的 `BuildContext`，Riverpod 更强调 provider 与 Widget 解耦。学习路线可以先理解 [Provider 状态管理](./provider.md)，再进入 Riverpod。

## 常见注意事项

- 应用根部必须包 `ProviderScope`。
- 不要在按钮回调中使用 `ref.watch`，回调里优先用 `ref.read`。
- 异步数据要处理 loading、error 和 data，不要只写成功分支。
- provider 名称建议以 `Provider` 结尾，例如 `counterProvider`。
- 简单局部状态可以继续使用 `setState`，不要为了很小的状态过度抽象。

## 学习建议

- 先用 `StateProvider` 写计数器，理解 `watch` 和 `read`。
- 再用 `FutureProvider` 写一个假网络请求，练习 `AsyncValue.when`。
- 页面变复杂后，再学习 `NotifierProvider`、代码生成和 provider override 测试。
