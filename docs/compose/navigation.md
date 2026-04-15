---
title: Compose 导航
description: 使用 Navigation Compose 组织页面跳转和参数传递。
---

# Compose 导航

Navigation Compose 用于在 Compose 页面之间跳转。它把页面抽象成 destination，并用 `NavHost` 描述导航图。

## 基本结构

```kotlin
@Composable
fun AppNavHost(navController: NavHostController) {
    NavHost(
        navController = navController,
        startDestination = "home",
    ) {
        composable("home") {
            HomeScreen(
                onOpenDetail = { id -> navController.navigate("detail/$id") },
            )
        }
        composable("detail/{id}") { backStackEntry ->
            DetailScreen(id = backStackEntry.arguments?.getString("id"))
        }
    }
}
```

## 导航原则

- 页面只通过回调表达“我要去哪”，不要直接依赖全局导航对象。
- 参数尽量短小，复杂数据通过仓库或 ViewModel 读取。
- 返回栈行为要明确，例如返回上一页、清空登录页等。

## 与 ViewModel 配合

详情页参数通常从 `SavedStateHandle` 读取，再交给数据层加载详情。

```kotlin
class DetailViewModel(
    savedStateHandle: SavedStateHandle,
) : ViewModel() {
    private val id: String = checkNotNull(savedStateHandle["id"])
}
```

## 学习建议

先掌握简单字符串路由。等页面多起来后，再学习类型安全导航、嵌套导航图和底部导航。

## 参考资料

- [Navigation with Compose](https://developer.android.com/develop/ui/compose/navigation)
