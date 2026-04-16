---
title: Bloc 状态管理
description: Flutter Bloc 的 Cubit、BlocProvider、BlocBuilder、BlocListener 和事件驱动状态流入门。
---

# Bloc 状态管理

Bloc 是一种强调“可预测状态流”的 Flutter 状态管理方案。它把 UI 事件、业务逻辑和状态输出拆开，适合中大型项目、多人协作和需要清晰测试边界的页面。

Bloc 生态常用两个包：

- `bloc`：核心状态流、`Cubit`、`Bloc`。
- `flutter_bloc`：Flutter 侧的 `BlocProvider`、`BlocBuilder`、`BlocListener` 等 Widget。

## 适用场景

- 页面状态复杂，并且有明确的加载、成功、失败状态。
- 想把业务逻辑从 Widget 中完全拆出来。
- 团队需要统一状态流写法，减少“状态从哪里改的”这类问题。
- 状态变化需要测试、日志、监控或复盘。

如果只是页面内部一个开关或计数器，`setState` 或 Provider 会更轻。Bloc 的优势在复杂流程里才明显。

## 添加依赖

```powershell
flutter pub add flutter_bloc
```

引入：

```dart
import 'package:flutter_bloc/flutter_bloc.dart';
```

## Cubit 入门

`Cubit` 是 Bloc 生态里更轻量的状态对象。它没有 event，直接通过方法发出新状态。

```dart
class CounterCubit extends Cubit<int> {
  CounterCubit() : super(0);

  void increment() {
    emit(state + 1);
  }

  void decrement() {
    emit(state - 1);
  }
}
```

`emit` 会输出一个新的状态。Widget 订阅这个状态后会刷新。

## 提供 Cubit

用 `BlocProvider` 把 Cubit 放到 Widget 树上：

```dart
void main() {
  runApp(
    BlocProvider(
      create: (context) => CounterCubit(),
      child: const MyApp(),
    ),
  );
}
```

当 `BlocProvider` 负责创建 Cubit 时，它也会在不需要时自动关闭。

## 构建 UI

`BlocBuilder` 负责监听状态并重建 UI：

```dart
class CounterText extends StatelessWidget {
  const CounterText({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<CounterCubit, int>(
      builder: (context, count) {
        return Text('点击 $count 次');
      },
    );
  }
}
```

按钮回调中使用 `context.read` 调用 Cubit 方法：

```dart
FloatingActionButton(
  onPressed: () {
    context.read<CounterCubit>().increment();
  },
  child: const Icon(Icons.add),
)
```

## BlocListener

当状态变化后需要弹提示、跳转页面、打开弹窗时，用 `BlocListener`。这些副作用不要写在 `BlocBuilder` 里。

```dart
BlocListener<AuthCubit, AuthState>(
  listener: (context, state) {
    if (state is AuthFailure) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(state.message)),
      );
    }
  },
  child: const LoginForm(),
)
```

规则很简单：显示 UI 用 `BlocBuilder`，一次性副作用用 `BlocListener`。

## Bloc 与事件

当状态变化需要先描述“发生了什么”，再由 Bloc 统一处理时，可以使用完整的 `Bloc<Event, State>`。

```dart
sealed class CounterEvent {}

class CounterIncremented extends CounterEvent {}

class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0) {
    on<CounterIncremented>((event, emit) {
      emit(state + 1);
    });
  }
}
```

触发事件：

```dart
context.read<CounterBloc>().add(CounterIncremented());
```

入门阶段可以先用 `Cubit`，当你需要事件建模、并发控制或复杂业务流程时，再升级到完整 Bloc。

## 常见注意事项

- `BlocBuilder` 的 `builder` 应该只返回 UI，不要写网络请求或跳转。
- 副作用放进 `BlocListener`，不要混在构建函数里。
- 页面级状态用页面级 Cubit，全局状态才放到更高层。
- 复杂 state 建议用不可变类，避免直接修改已有对象。
- 多个 Bloc 可以用 `MultiBlocProvider` 减少嵌套。

## 资料入口

- [flutter_bloc on pub.dev](https://pub.dev/packages/flutter_bloc)
- [bloc on pub.dev](https://pub.dev/packages/bloc)
- [Bloc 官方文档](https://bloclibrary.dev/)

