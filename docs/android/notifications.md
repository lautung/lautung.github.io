---
title: 通知
description: Android 通知渠道、通知权限、基础通知和更新通知。
---

# 通知

通知用于在应用不被用户主动使用时，提供及时、简短的信息。通知越打扰用户，越需要谨慎设计。

## 基础概念

- Android 8.0 及以上需要通知渠道。
- Android 13 及以上发送非豁免通知需要运行时权限。
- 通知应该有清晰标题、内容和点击行为。

## 权限声明

```xml
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
```

## 创建通知

```kotlin
val notification = NotificationCompat.Builder(context, channelId)
    .setSmallIcon(R.drawable.ic_notification)
    .setContentTitle("学习提醒")
    .setContentText("今天继续完成 Android 生命周期练习")
    .setPriority(NotificationCompat.PRIORITY_DEFAULT)
    .build()
```

## 学习建议

- 先创建通知渠道，再发送通知。
- 通知内容要短，点击后能回到相关页面。
- 频繁更新同一个通知时使用相同 ID。
- 不要用通知替代应用内普通提示。

## 参考资料

- [Create a notification](https://developer.android.com/training/notify-user/managing)
