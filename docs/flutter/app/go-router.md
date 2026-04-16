---
title: GoRouter 框架
description: Flutter go_router 的声明式路由、参数、命名路由、重定向和 ShellRoute 入门。
---

# GoRouter 框架

GoRouter 是 Flutter 官方生态中的声明式路由包。它基于 Router API，使用 URL 风格的路径描述页面，适合移动端、Web、深链接和嵌套路由。

与 `Navigator.push` 相比，GoRouter 更适合把路由集中配置，让页面跳转、参数、重定向和错误页都有统一入口。

## 适用场景

- 应用有多页面、多层级路由。
- 需要支持 Web URL、深链接或浏览器前进后退。
- 登录状态会影响可访问页面。
- 底部导航栏需要多个独立页面栈。

如果项目已经全面使用 GetX，也可以看 [GetX 路由管理](../getx/routing.md)。两者不要在同一个模块里混用路由主流程。

## 添加依赖

```powershell
flutter pub add go_router
```

引入：

```dart
import 'package:go_router/go_router.dart';
```

## 创建路由

```dart
final router = GoRouter(
  initialLocation: '/',
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => const HomePage(),
    ),
    GoRoute(
      path: '/detail/:id',
      builder: (context, state) {
        final id = state.pathParameters['id']!;
        return DetailPage(id: id);
      },
    ),
  ],
);
```

路径参数用 `:id` 这种模板语法声明，再从 `state.pathParameters` 读取。

## 接入 MaterialApp

```dart
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: router,
    );
  }
}
```

使用 GoRouter 后，应用入口使用 `MaterialApp.router`。

## 页面跳转

```dart
context.go('/detail/42');
```

`go` 会跳转到目标地址，适合底部导航、登录后进入首页这类“切换位置”的场景。

```dart
context.push('/detail/42');
```

`push` 会把页面压入栈中，适合详情页、编辑页这类需要返回的场景。

返回：

```dart
context.pop();
```

## 命名路由

```dart
GoRoute(
  name: 'detail',
  path: '/detail/:id',
  builder: (context, state) {
    final id = state.pathParameters['id']!;
    return DetailPage(id: id);
  },
)
```

跳转：

```dart
context.goNamed(
  'detail',
  pathParameters: {'id': '42'},
);
```

命名路由能减少手写路径字符串，适合多人维护。

## Query 参数

```dart
context.go('/search?keyword=flutter');
```

读取：

```dart
final keyword = state.uri.queryParameters['keyword'];
```

路径参数适合资源 ID，query 参数适合搜索、筛选、分页这类可选条件。

## 登录重定向

```dart
final router = GoRouter(
  redirect: (context, state) {
    final isLoggedIn = authService.isLoggedIn;
    final isGoingLogin = state.matchedLocation == '/login';

    if (!isLoggedIn && !isGoingLogin) {
      return '/login';
    }

    if (isLoggedIn && isGoingLogin) {
      return '/';
    }

    return null;
  },
  routes: [
    GoRoute(path: '/', builder: (context, state) => const HomePage()),
    GoRoute(path: '/login', builder: (context, state) => const LoginPage()),
  ],
);
```

`redirect` 返回新的路径表示重定向，返回 `null` 表示不处理。

## ShellRoute

底部导航栏常用 `ShellRoute`。它可以让外层壳页面保持不变，内部内容随路由切换。

```dart
ShellRoute(
  builder: (context, state, child) {
    return MainShell(child: child);
  },
  routes: [
    GoRoute(
      path: '/home',
      builder: (context, state) => const HomePage(),
    ),
    GoRoute(
      path: '/settings',
      builder: (context, state) => const SettingsPage(),
    ),
  ],
)
```

`MainShell` 中可以放 `Scaffold`、`BottomNavigationBar` 和公共布局。

## 常见注意事项

- 路由配置集中维护，不要在页面里到处拼路径。
- `go` 和 `push` 语义不同，底部 Tab 切换优先用 `go`。
- 登录重定向要避免循环跳转，先判断当前是否已经在登录页。
- 参数尽量保持简单，复杂对象建议传 ID 后重新加载。
- Web 或深链接场景要认真设计 URL，而不是只把路径当内部字符串。

## 资料入口

- [go_router on pub.dev](https://pub.dev/packages/go_router)
- [Flutter navigation 文档](https://docs.flutter.dev/ui/navigation)

