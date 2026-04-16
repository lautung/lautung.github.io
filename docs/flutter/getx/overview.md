---
title: GetX 专题导读
description: Flutter GetX 的状态管理、路由管理、依赖注入和使用边界。
---

# GetX 专题导读

GetX 是 Flutter 中一个“一体化”框架。它把状态管理、路由管理、依赖注入、弹窗、国际化等能力放在同一个包里，写法简洁，上手速度快。

GetX 的优势是开发效率高；代价是框架能力覆盖面很大，项目需要约定清楚边界，避免所有代码都依赖全局 API。

## 学习地图

| 章节 | 学什么 |
| --- | --- |
| [GetX 状态管理](./state.md) | `GetxController`、`.obs`、`Obx`、`GetBuilder`。 |
| [GetX 路由管理](./routing.md) | `GetMaterialApp`、`Get.to`、命名路由、参数传递。 |
| [GetX 依赖注入](./dependency.md) | `Get.put`、`Get.lazyPut`、`Get.find`、Bindings。 |

## 适合人群

- 想快速搭建中小型 Flutter 应用。
- 喜欢把状态、路由和依赖管理放在同一套 API 中。
- 需要少写模板代码，快速验证业务页面。
- 团队已经约定好 GetX 的目录结构和生命周期规则。

如果项目更强调严格分层、可替换架构和状态流审计，可以同时比较 [Bloc 状态管理](../state/bloc.md)、[Riverpod 状态管理](../state/riverpod.md) 和 [Redux 状态管理](../state/redux.md)。

## 添加依赖

```powershell
flutter pub add get
```

引入：

```dart
import 'package:get/get.dart';
```

## GetMaterialApp

如果只使用 GetX 状态管理，可以不替换 `MaterialApp`。如果要使用 GetX 的路由、Snackbar、Dialog、国际化等能力，需要使用 `GetMaterialApp`。

```dart
void main() {
  runApp(
    GetMaterialApp(
      title: 'GetX Demo',
      home: const HomePage(),
    ),
  );
}
```

## 推荐目录

```text
lib/
  app/
    routes/
      app_pages.dart
      app_routes.dart
  features/
    counter/
      bindings/
        counter_binding.dart
      controllers/
        counter_controller.dart
      pages/
        counter_page.dart
```

GetX 项目很容易写得很快，但更需要目录约束。建议按业务模块组织 controller、page 和 binding。

## 使用边界

- 页面状态可以用 GetX，领域层逻辑不要直接依赖 `Get.context`。
- 控制器里少写 UI 细节，页面跳转和弹窗可以封装成协调层。
- 依赖注册集中到 Binding，避免到处 `Get.put`。
- 控制器生命周期要清楚，长期存在的服务才使用 `permanent` 或 `GetxService`。

## 资料入口

- [get on pub.dev](https://pub.dev/packages/get)
- [GetX 官方站点](https://getx.site/)

