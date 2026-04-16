---
title: Provider 状态管理
description: Flutter Provider 的 ChangeNotifierProvider、Consumer、context.watch 和 context.read 入门。
---

# Provider 状态管理

Provider 是 Flutter 常用的状态共享方案。它基于 `InheritedWidget` 思路，帮我们把状态对象放到 Widget 树上，让下层 Widget 可以读取并在状态变化时刷新。

## 适用场景

- 多个 Widget 需要共享同一份状态。
- 页面状态已经超过 `setState` 容易管理的范围。
- 希望把业务状态从 Widget 中拆出来，减少页面里的状态代码。

Provider 适合入门阶段理解状态共享。项目变复杂后，也可以继续学习 Riverpod、Bloc 等方案。

## 添加依赖

推荐用命令添加依赖，避免手写版本号过期：

```powershell
flutter pub add provider
```

然后在 Dart 文件中引入：

```dart
import 'package:provider/provider.dart';
```

## 定义状态对象

最常见的入门写法是让状态类继承 `ChangeNotifier`。当状态变化时调用 `notifyListeners()`，依赖它的 Widget 会重新构建。

```dart
import 'package:flutter/foundation.dart';

class CounterModel extends ChangeNotifier {
  int _count = 0;

  int get count => _count;

  void increment() {
    _count += 1;
    notifyListeners();
  }
}
```

## 提供状态

用 `ChangeNotifierProvider` 把状态对象放到 Widget 树上。新建对象时使用 `create`，Provider 会在不需要时帮它释放。

```dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CounterModel(),
      child: const MyApp(),
    ),
  );
}
```

如果有多个状态对象，可以使用 `MultiProvider`：

```dart
void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => CounterModel()),
      ],
      child: const MyApp(),
    ),
  );
}
```

## 读取状态

`context.watch<T>()` 会监听状态变化，适合在 `build` 中读取用于显示的数据。

```dart
class CounterText extends StatelessWidget {
  const CounterText({super.key});

  @override
  Widget build(BuildContext context) {
    final count = context.watch<CounterModel>().count;
    return Text('点击 $count 次');
  }
}
```

`context.read<T>()` 只读取一次，不监听变化，适合按钮点击、表单提交等回调。

```dart
ElevatedButton(
  onPressed: () {
    context.read<CounterModel>().increment();
  },
  child: const Text('增加'),
)
```

## Consumer 写法

如果只想让页面中的一小块区域刷新，可以使用 `Consumer` 包住需要响应状态的部分。

```dart
Consumer<CounterModel>(
  builder: (context, counter, child) {
    return Text('点击 ${counter.count} 次');
  },
)
```

当页面很大时，`Consumer` 能帮助减少不必要的重建范围。

## 完整示例

```dart
class CounterPage extends StatelessWidget {
  const CounterPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Provider 示例')),
      body: const Center(child: CounterText()),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          context.read<CounterModel>().increment();
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

## 常见注意事项

- 新建 `ChangeNotifier` 对象时使用 `ChangeNotifierProvider(create: ...)`。
- 复用已经存在的 `ChangeNotifier` 对象时，才使用 `ChangeNotifierProvider.value(...)`。
- 在回调中使用 `context.read`，不要用 `context.watch`。
- 在 `build` 中显示状态时使用 `context.watch`、`Consumer` 或 `Selector`。
- 状态变化后必须调用 `notifyListeners()`，否则界面不会更新。

## 学习建议

- 先用计数器练习 Provider 的完整数据流：创建状态、提供状态、读取状态、修改状态。
- 状态对象只放业务状态和操作方法，不要直接依赖具体页面 Widget。
- 组件刷新范围太大时，再学习 `Consumer`、`Selector` 或 `context.select`。
