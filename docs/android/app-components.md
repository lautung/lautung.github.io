---
title: 应用组件
description: Activity、Service、BroadcastReceiver 和 ContentProvider 的职责。
---

# 应用组件

Android 应用不是从一个固定的 `main()` 函数开始，而是由系统根据用户操作或系统事件启动对应组件。

## 四类组件

| 组件 | 主要职责 | 常见场景 |
| --- | --- | --- |
| Activity | 提供一个可交互界面 | 首页、详情页、登录页 |
| Service | 执行长期任务或提供绑定能力 | 音乐播放、前台服务 |
| BroadcastReceiver | 响应广播事件 | 开机、网络变化、通知点击 |
| ContentProvider | 共享结构化数据 | 通讯录、媒体库、自定义数据共享 |

## Activity

Activity 通常是用户进入页面的入口。现代项目可以在 Activity 中承载 Compose 页面，也可以承载传统 View。

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Text("Hello Android")
        }
    }
}
```

## Manifest 声明

系统启动组件前，需要先从 `AndroidManifest.xml` 知道组件存在。

```xml
<activity
    android:name=".MainActivity"
    android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>
```

## 学习建议

先重点掌握 Activity。Service、BroadcastReceiver 和 ContentProvider 等到具体需求出现时再深入。

## 参考资料

- [Application fundamentals](https://developer.android.com/guide/topics/fundamentals.html)
