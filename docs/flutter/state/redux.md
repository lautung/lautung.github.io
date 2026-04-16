---
title: Redux 状态管理
description: Flutter Redux 的 Store、Action、Reducer、StoreProvider 和 StoreConnector 入门。
---

# Redux 状态管理

Redux 是一种强调单向数据流和可预测状态变化的架构。它把全局状态放在一个 store 中，通过 action 描述发生了什么，再由 reducer 计算新状态。

Flutter 中常用两个包：

- `redux`：Dart 版 Redux 核心。
- `flutter_redux`：Flutter 与 Redux store 的 Widget 绑定。

## 适用场景

- 应用需要清晰的全局状态树。
- 状态变化需要日志、回放、调试或严格审计。
- 团队已经熟悉 Web 端 Redux 思路。
- 希望 reducer 保持纯函数，业务状态变化可测试、可预测。

Redux 的模板代码较多。新 Flutter 项目如果没有这些需求，Riverpod、Bloc 或 Provider 通常更轻。

## 添加依赖

```powershell
flutter pub add redux flutter_redux
```

引入：

```dart
import 'package:flutter_redux/flutter_redux.dart';
import 'package:redux/redux.dart';
```

## 定义状态

```dart
class AppState {
  const AppState({required this.count});

  final int count;

  AppState copyWith({int? count}) {
    return AppState(count: count ?? this.count);
  }
}
```

Redux 推荐状态不可变。每次变化都返回一个新的 state。

## 定义 Action

```dart
class IncrementAction {}

class DecrementAction {}
```

Action 只描述“发生了什么”，不要在 action 里直接修改状态。

## 定义 Reducer

```dart
AppState appReducer(AppState state, dynamic action) {
  if (action is IncrementAction) {
    return state.copyWith(count: state.count + 1);
  }

  if (action is DecrementAction) {
    return state.copyWith(count: state.count - 1);
  }

  return state;
}
```

Reducer 是纯函数：输入旧状态和 action，输出新状态。不要在 reducer 中发网络请求、读文件或导航。

## 创建 Store

```dart
void main() {
  final store = Store<AppState>(
    appReducer,
    initialState: const AppState(count: 0),
  );

  runApp(MyApp(store: store));
}
```

## 提供 Store

```dart
class MyApp extends StatelessWidget {
  const MyApp({super.key, required this.store});

  final Store<AppState> store;

  @override
  Widget build(BuildContext context) {
    return StoreProvider<AppState>(
      store: store,
      child: const MaterialApp(home: CounterPage()),
    );
  }
}
```

## 连接 UI

`StoreConnector` 负责把全局 state 转换成页面真正需要的 view model。

```dart
class CounterViewModel {
  const CounterViewModel({
    required this.count,
    required this.onIncrement,
  });

  final int count;
  final VoidCallback onIncrement;
}

class CounterPage extends StatelessWidget {
  const CounterPage({super.key});

  @override
  Widget build(BuildContext context) {
    return StoreConnector<AppState, CounterViewModel>(
      converter: (store) {
        return CounterViewModel(
          count: store.state.count,
          onIncrement: () => store.dispatch(IncrementAction()),
        );
      },
      builder: (context, vm) {
        return Scaffold(
          body: Center(child: Text('点击 ${vm.count} 次')),
          floatingActionButton: FloatingActionButton(
            onPressed: vm.onIncrement,
            child: const Icon(Icons.add),
          ),
        );
      },
    );
  }
}
```

## 异步逻辑放哪里

Redux 的异步逻辑通常放到 middleware 中。middleware 可以拦截 action，执行网络请求，再派发新的 action。

```dart
void loggingMiddleware(
  Store<AppState> store,
  dynamic action,
  NextDispatcher next,
) {
  debugPrint('action: $action');
  next(action);
}
```

创建 store 时接入：

```dart
final store = Store<AppState>(
  appReducer,
  initialState: const AppState(count: 0),
  middleware: [loggingMiddleware],
);
```

## 常见注意事项

- reducer 保持纯函数，不做副作用。
- action 命名要描述业务事件，例如 `LoginSubmitted`、`CartItemRemoved`。
- UI 不要直接读整个 `AppState`，用 view model 缩小依赖范围。
- 全局 store 不等于所有状态都要全局化，页面临时状态仍可局部管理。
- Redux 适合需要强约束的团队，不一定适合所有 Flutter 项目。

## 资料入口

- [redux on pub.dev](https://pub.dev/packages/redux)
- [flutter_redux API 文档](https://pub.dev/documentation/flutter_redux/latest/)
- [redux API 文档](https://pub.dev/documentation/redux/latest/)

