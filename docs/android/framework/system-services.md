---
title: 系统服务
description: Android 系统服务的作用和应用层访问方式。
---

# 系统服务

系统服务为应用提供系统级能力，例如通知、窗口、包管理、传感器和剪贴板。

## 常见服务

- ActivityManager
- PackageManager
- WindowManager
- NotificationManager
- SensorManager

## 学习建议

先从应用层 API 使用系统服务，再逐步追踪到 Framework 层实现。不要一开始就陷入源码细节。
