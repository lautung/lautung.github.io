---
title: 网络访问
description: Android 网络权限、异步请求、仓库封装和错误处理入门。
---

# 网络访问

网络访问是数据层的一部分。页面不应该直接发请求，而是通过 Repository 获取数据。

## 权限声明

访问网络通常需要声明：

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

## 放在数据层

```kotlin
interface ArticleRepository {
    suspend fun loadArticles(): Result<List<Article>>
}
```

Repository 内部可以使用网络数据源、本地缓存和重试策略，UI 层只关心结果状态。

## 错误处理

常见错误包括：

- 没有网络。
- 请求超时。
- 服务器返回错误状态码。
- 数据格式解析失败。
- 本地缓存为空。

## UI 状态

```kotlin
data class ArticleUiState(
    val articles: List<Article> = emptyList(),
    val isLoading: Boolean = false,
    val error: String? = null,
)
```

## 学习建议

- 网络请求不要阻塞主线程。
- UI 层显示加载中、成功、失败、空数据四类状态。
- 能离线使用的功能，优先考虑本地数据库作为事实来源。
- 不要在日志中打印 token、手机号等敏感信息。
