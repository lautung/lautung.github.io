---
title: GetX 路由管理
description: GetX 的 GetMaterialApp、Get.to、命名路由、参数传递和中间件入门。
---

# GetX 路由管理

GetX 路由管理的特点是“不依赖当前 BuildContext”。你可以用 `Get.to`、`Get.back`、`Get.offAll` 等方法完成页面跳转。

如果项目只想使用官方推荐的声明式路由，也可以学习 [GoRouter 框架](../app/go-router.md)。GetX 路由更适合已经采用 GetX 全家桶的项目。

## 启用 GetMaterialApp

```dart
void main() {
  runApp(
    GetMaterialApp(
      initialRoute: AppRoutes.home,
      getPages: AppPages.pages,
    ),
  );
}
```

`GetMaterialApp` 是使用 GetX 路由、Snackbar、Dialog 等能力的入口。

## 路由常量

```dart
abstract class AppRoutes {
  static const home = '/';
  static const detail = '/detail';
  static const login = '/login';
}
```

把路径集中管理，避免页面中到处写字符串。

## 注册页面

```dart
class AppPages {
  static final pages = [
    GetPage(
      name: AppRoutes.home,
      page: () => const HomePage(),
    ),
    GetPage(
      name: AppRoutes.detail,
      page: () => const DetailPage(),
    ),
  ];
}
```

复杂项目可以在 `GetPage` 中继续配置 binding、transition 和 middleware。

## 页面跳转

```dart
Get.toNamed(AppRoutes.detail);
```

返回上一页：

```dart
Get.back();
```

替换当前页：

```dart
Get.offNamed(AppRoutes.home);
```

清空返回栈并进入新页面：

```dart
Get.offAllNamed(AppRoutes.login);
```

## 参数传递

简单参数可以用 `arguments`：

```dart
Get.toNamed(
  AppRoutes.detail,
  arguments: {'id': '42'},
);
```

读取参数：

```dart
final args = Get.arguments as Map<String, dynamic>;
final id = args['id'] as String;
```

也可以使用 query 参数：

```dart
Get.toNamed('/detail?id=42');
```

读取：

```dart
final id = Get.parameters['id'];
```

## 路由中间件

```dart
class AuthMiddleware extends GetMiddleware {
  @override
  RouteSettings? redirect(String? route) {
    final isLoggedIn = Get.find<AuthService>().isLoggedIn;
    if (!isLoggedIn) {
      return const RouteSettings(name: AppRoutes.login);
    }
    return null;
  }
}
```

接入：

```dart
GetPage(
  name: '/profile',
  page: () => const ProfilePage(),
  middlewares: [AuthMiddleware()],
)
```

## 常见注意事项

- 使用 GetX 路由时，页面入口要用 `GetMaterialApp`。
- 路由字符串集中到 `AppRoutes`，不要散落在页面中。
- 登录拦截、权限判断适合放 middleware。
- 参数复杂时优先传 ID，再由页面或 controller 加载数据。
- 不要在领域层或 repository 中直接调用 `Get.to`，避免业务层依赖 UI 路由。

