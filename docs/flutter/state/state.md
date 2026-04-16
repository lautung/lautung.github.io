---
title: Flutter 状态管理入门
description: setState、状态提升和入门阶段的状态管理边界。
---

# Flutter 状态管理入门

状态决定界面显示什么。入门阶段先掌握 `StatefulWidget`、`setState` 和状态提升，再考虑引入状态管理库。

## setState 示例

```dart
class CounterPage extends StatefulWidget {
  const CounterPage({super.key});

  @override
  State<CounterPage> createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  int count = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('点击 $count 次'),
        ElevatedButton(
          onPressed: () {
            setState(() {
              count += 1;
            });
          },
          child: const Text('增加'),
        ),
      ],
    );
  }
}
```

## 状态提升

当多个 Widget 需要共享同一份状态时，把状态放到它们共同的父组件中，再通过构造参数和回调传递。

## 何时升级方案

- 页面内部临时状态：优先使用 `setState`。
- 多个页面共享状态：再考虑 `InheritedWidget`、[Provider](./provider.md)、[Riverpod](./riverpod.md)、[Bloc](./bloc.md)、[GetX](../getx/overview.md) 等方案。
- 异步数据状态：至少要同时处理 loading、data 和 error。

## 常见方案对比

| 方案 | 适合场景 |
| --- | --- |
| [Provider](./provider.md) | 入门共享状态，理解 `ChangeNotifier` 和 `BuildContext` 读取方式。 |
| [Riverpod](./riverpod.md) | 更强的 provider 模型、异步状态、测试和依赖覆盖。 |
| [Bloc](./bloc.md) | 明确事件/状态流、团队协作和复杂业务流程。 |
| [GetX](../getx/overview.md) | 想同时使用状态、路由和依赖注入的一体化方案。 |
| [MobX](./mobx.md) | 响应式 observable、computed 和 action 模型。 |
| [Redux](./redux.md) | 单一全局状态树、纯 reducer 和强约束数据流。 |

## 学习建议

- `setState` 里只修改状态，不写耗时逻辑。
- 能局部管理的状态不要过早全局化。
- 状态来源要清晰：来自用户输入、网络、本地存储，还是父组件。

## 下一步

当状态需要被多个页面或组件读取时，可以继续学习 [Provider 状态管理](./provider.md)；如果希望状态逻辑更容易测试、复用和处理异步数据，再学习 [Riverpod 状态管理](./riverpod.md)。中大型项目可以继续比较 [Bloc 状态管理](./bloc.md)、[GetX 专题](../getx/overview.md)、[MobX 状态管理](./mobx.md) 和 [Redux 状态管理](./redux.md)。
