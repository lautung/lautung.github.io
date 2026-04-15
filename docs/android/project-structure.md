---
title: 工程结构与 Gradle
description: Android 项目目录、模块、构建脚本和常见配置说明。
---

# 工程结构与 Gradle

Android 项目通常由一个根工程和一个或多个模块组成。入门阶段先理解 `app` 模块，后续再学习多模块拆分。

## 常见目录

```text
app/
├── build.gradle.kts
├── src/
│   ├── main/
│   │   ├── AndroidManifest.xml
│   │   ├── java/ 或 kotlin/
│   │   └── res/
│   ├── test/
│   └── androidTest/
settings.gradle.kts
build.gradle.kts
gradle.properties
```

## 关键文件

| 文件 | 作用 |
| --- | --- |
| `settings.gradle.kts` | 声明工程包含哪些模块。 |
| 根 `build.gradle.kts` | 配置全局插件和仓库。 |
| `app/build.gradle.kts` | 配置应用模块、SDK、依赖和构建类型。 |
| `AndroidManifest.xml` | 声明组件、权限和应用入口。 |
| `res/` | 存放字符串、图片、颜色、主题和其他资源。 |

## 常见配置

```kotlin
android {
    namespace = "com.example.app"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.example.app"
        minSdk = 24
        targetSdk = 35
        versionCode = 1
        versionName = "1.0"
    }
}
```

## 学习建议

- 先学会修改 `minSdk`、`targetSdk`、依赖和 `applicationId`。
- 遇到构建失败时，先看 Gradle 控制台第一条真正的错误。
- 依赖版本尽量集中管理，后续可以使用 Version Catalog。
