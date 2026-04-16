---
title: GetX 依赖注入
description: GetX 的 Get.put、Get.lazyPut、Get.find、Bindings 和 Service 生命周期入门。
---

# GetX 依赖注入

GetX 内置依赖管理能力。它可以注册 controller、service、repository，然后在需要的地方用 `Get.find<T>()` 取出同一个实例。

依赖注入的重点不是“少写代码”，而是让对象创建位置清晰、生命周期可控。

## 基础注册

```dart
Get.put(CounterController());
```

获取：

```dart
final controller = Get.find<CounterController>();
```

`Get.put` 会立即创建对象。适合当前页面马上要用的 controller。

## 懒加载

```dart
Get.lazyPut<CounterController>(() => CounterController());
```

`Get.lazyPut` 会等第一次 `Get.find<CounterController>()` 时再创建对象。适合当前路由可能用到，但不一定马上用的依赖。

## 异步依赖

```dart
await Get.putAsync<SettingsService>(() async {
  final service = SettingsService();
  await service.init();
  return service;
});
```

适合需要初始化的服务，例如本地存储、数据库、配置读取。

## Bindings

复杂项目不建议在页面 `build` 中到处 `Get.put`。更好的方式是使用 Binding，把某个路由需要的依赖集中注册。

```dart
class CounterBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<CounterController>(() => CounterController());
  }
}
```

路由中接入：

```dart
GetPage(
  name: '/counter',
  page: () => const CounterPage(),
  binding: CounterBinding(),
)
```

页面中读取：

```dart
class CounterPage extends GetView<CounterController> {
  const CounterPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Text('${controller.count.value}');
  }
}
```

`GetView<T>` 会帮你通过 `Get.find<T>()` 获取 controller。

## Service

长期存在的服务可以继承 `GetxService`：

```dart
class AuthService extends GetxService {
  var isLoggedIn = false;

  Future<AuthService> init() async {
    // 读取 token、初始化客户端等。
    return this;
  }
}
```

注册：

```dart
await Get.putAsync<AuthService>(() => AuthService().init());
```

`GetxService` 通常用于应用级依赖，例如认证、本地存储、远程配置。不要把页面临时状态放进 service。

## 常见注意事项

- 页面 controller 放 Binding，应用级 service 放启动初始化。
- `Get.find` 失败通常说明依赖没有注册，或注册时机晚于使用时机。
- 除非确实需要全局常驻，不要随意使用 `permanent: true`。
- 测试时可以用 `Get.reset()` 清理依赖容器，避免测试之间互相影响。
- repository 和 service 仍然建议面向接口设计，避免未来替换困难。

