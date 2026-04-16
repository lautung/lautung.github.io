---
title: GetX 状态管理
description: GetX 的响应式状态、Obx、GetBuilder 和 Controller 生命周期入门。
---

# GetX 状态管理

GetX 状态管理常见两种写法：响应式状态和简单状态。入门阶段优先掌握响应式状态，也就是 `.obs` + `Obx`。

## 响应式状态

创建 controller：

```dart
class CounterController extends GetxController {
  final count = 0.obs;

  void increment() {
    count.value += 1;
  }
}
```

`.obs` 会把普通值变成可观察对象。读取和修改时通常使用 `.value`。

## 在页面中使用 Obx

```dart
class CounterPage extends StatelessWidget {
  const CounterPage({super.key});

  @override
  Widget build(BuildContext context) {
    final controller = Get.put(CounterController());

    return Scaffold(
      body: Center(
        child: Obx(() {
          return Text('点击 ${controller.count.value} 次');
        }),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: controller.increment,
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

`Obx` 会追踪其中读取到的响应式变量。当 `count` 改变时，只有 `Obx` 包住的部分刷新。

## 响应式集合

```dart
class TodoController extends GetxController {
  final todos = <String>[].obs;

  void addTodo(String title) {
    todos.add(title);
  }
}
```

使用：

```dart
Obx(() {
  return ListView(
    children: [
      for (final todo in controller.todos) ListTile(title: Text(todo)),
    ],
  );
})
```

`RxList`、`RxMap`、`RxSet` 可以像普通集合一样使用，但要注意复杂对象内部字段变化时，可能需要调用 `refresh()` 或替换整个对象。

## GetBuilder

`GetBuilder` 是更接近手动刷新的写法。controller 修改状态后调用 `update()`：

```dart
class CounterController extends GetxController {
  int count = 0;

  void increment() {
    count += 1;
    update();
  }
}
```

页面：

```dart
GetBuilder<CounterController>(
  init: CounterController(),
  builder: (controller) {
    return Text('点击 ${controller.count} 次');
  },
)
```

简单规则：

- `Obx` 适合细粒度响应式刷新。
- `GetBuilder` 适合手动控制刷新点，概念更接近 `setState`。

## 生命周期

```dart
class CounterController extends GetxController {
  @override
  void onInit() {
    super.onInit();
    // 初始化请求、监听器、计时器等。
  }

  @override
  void onClose() {
    // 释放资源。
    super.onClose();
  }
}
```

控制器中创建的 `TextEditingController`、`Worker`、`StreamSubscription` 等资源，要在 `onClose` 中释放。

## 常见注意事项

- 不要把所有状态都放成全局 controller，页面局部状态仍可局部管理。
- `Get.put` 不要散落在任意 Widget 中，复杂项目优先使用 Binding。
- `Obx` 内部只放依赖响应式状态的 UI，避免刷新过大。
- controller 中不要直接写大量 Widget 逻辑，保持状态和操作方法为主。

