---
title: 资源系统
description: Android res 目录、字符串、颜色、尺寸、图片和主题资源说明。
---

# 资源系统

Android 资源系统把代码和可替换内容分开。文字、颜色、尺寸、图片、主题等都可以放在 `res/` 目录中，方便适配多语言、多屏幕和不同主题。

## 常见资源目录

| 目录 | 内容 |
| --- | --- |
| `res/values/strings.xml` | 字符串资源。 |
| `res/values/colors.xml` | 颜色资源。 |
| `res/values/themes.xml` | 主题和样式。 |
| `res/drawable/` | 矢量图、位图、shape。 |
| `res/mipmap/` | 应用图标。 |

## 字符串资源

```xml
<resources>
    <string name="app_name">全栈学习笔记</string>
    <string name="home_title">首页</string>
</resources>
```

Compose 中可以读取字符串资源：

```kotlin
Text(text = stringResource(R.string.home_title))
```

## 为什么不要硬编码

- 方便国际化。
- 方便统一修改。
- 避免 UI、测试和无障碍场景里出现不一致。

## 学习建议

先把用户可见文本放进 `strings.xml`。如果后续做多语言，再学习 `values-zh`、`values-en` 等限定目录。
