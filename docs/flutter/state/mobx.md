---
title: MobX 状态管理
description: Flutter MobX 的 observable、computed、action、Observer 和代码生成入门。
---

# MobX 状态管理

MobX 是一种响应式状态管理方案。它的核心思路是：把数据声明为 observable，UI 用 `Observer` 读取这些数据，数据变化时相关 UI 自动刷新。

MobX 常用包：

- `mobx`：核心响应式能力。
- `flutter_mobx`：Flutter 的 `Observer` Widget。
- `mobx_codegen`：用注解生成 store 代码。
- `build_runner`：执行代码生成。

## 适用场景

- 喜欢“声明数据，自动追踪依赖”的响应式模型。
- 表单、筛选、列表状态很多，手写通知逻辑容易散。
- 状态之间有派生值，例如总价、是否可提交、过滤后的列表。
- 团队能接受代码生成流程。

如果项目不想引入 codegen，Provider、Riverpod 或 GetX 可能更直接。

## 添加依赖

```powershell
flutter pub add mobx flutter_mobx
flutter pub add --dev build_runner mobx_codegen
```

引入：

```dart
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:mobx/mobx.dart';
```

## 定义 Store

创建 `counter_store.dart`：

```dart
import 'package:mobx/mobx.dart';

part 'counter_store.g.dart';

class CounterStore = CounterStoreBase with _$CounterStore;

abstract class CounterStoreBase with Store {
  @observable
  int count = 0;

  @computed
  bool get isEven => count.isEven;

  @action
  void increment() {
    count += 1;
  }
}
```

几个核心注解：

| 注解 | 作用 |
| --- | --- |
| `@observable` | 可被追踪的状态。 |
| `@computed` | 根据 observable 推导出的派生状态。 |
| `@action` | 修改状态的操作。 |

## 生成代码

```powershell
dart run build_runner build --delete-conflicting-outputs
```

开发时可以使用 watch：

```powershell
dart run build_runner watch --delete-conflicting-outputs
```

生成后会出现 `counter_store.g.dart`。这个文件不要手写修改。

## 在 UI 中使用 Observer

```dart
final counterStore = CounterStore();

class CounterPage extends StatelessWidget {
  const CounterPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Observer(
          builder: (context) {
            return Text('点击 ${counterStore.count} 次');
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: counterStore.increment,
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

`Observer` 只会追踪它的 `builder` 中读取到的 observable。没有读取 observable 时，MobX 会提示这个 `Observer` 可能没有意义。

## Reactions

MobX 还可以在状态变化时执行副作用，例如日志、提示或持久化：

```dart
late final ReactionDisposer disposer;

void setupReaction(CounterStore store) {
  disposer = reaction<int>(
    (_) => store.count,
    (count) {
      debugPrint('count changed: $count');
    },
  );
}

void disposeReaction() {
  disposer();
}
```

副作用要记得释放，尤其是在页面或 service 生命周期结束时。

## 常见注意事项

- 修改 observable 的逻辑放进 `@action`，不要散落在 UI 中。
- `Observer` 包得越小，刷新范围越精准。
- `*.g.dart` 加入版本控制通常没问题，但不要手动编辑。
- 状态依赖关系复杂时，用 `@computed` 统一派生值。
- 生成失败时先检查 `part` 文件名、类名和 `build_runner` 输出。

## 资料入口

- [mobx on pub.dev](https://pub.dev/packages/mobx)
- [flutter_mobx on pub.dev](https://pub.dev/packages/flutter_mobx)
- [mobx_codegen on pub.dev](https://pub.dev/packages/mobx_codegen)

