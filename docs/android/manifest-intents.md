---
title: Manifest 与 Intent
description: AndroidManifest.xml、组件声明、权限声明和 Intent 跳转入门。
---

# Manifest 与 Intent

`AndroidManifest.xml` 是应用与系统之间的声明文件。Intent 则用于表达“我要执行某个动作”或“我要跳转到某个组件”。

## Manifest 常见内容

- 应用包名和组件声明。
- Activity、Service、Receiver、Provider 的导出规则。
- 权限声明。
- 应用主题、图标、入口页面。

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:theme="@style/Theme.App">
        <activity
            android:name=".MainActivity"
            android:exported="true" />
    </application>
</manifest>
```

## 显式 Intent

显式 Intent 直接指定目标组件。

```kotlin
val intent = Intent(this, DetailActivity::class.java)
startActivity(intent)
```

## 隐式 Intent

隐式 Intent 描述动作，由系统匹配能处理的应用。

```kotlin
val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://developer.android.com"))
startActivity(intent)
```

## 学习建议

- 组件暴露给其他应用时，认真检查 `android:exported`。
- 隐式 Intent 可能没有可处理应用，真实项目需要做兼容判断。
- 权限只声明真正需要的能力。
