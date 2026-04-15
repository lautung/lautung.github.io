---
title: WorkManager
description: WorkManager 的可靠后台任务、约束和重试机制。
---

# WorkManager

WorkManager 用于执行需要可靠完成的后台任务，例如同步数据、上传日志或清理缓存。

## 适合场景

- 任务可以延迟执行。
- 任务需要在应用退出后仍有机会执行。
- 任务需要网络、充电等约束。
- 任务失败后需要重试。

## 学习建议

WorkManager 不是所有异步任务的默认选择。页面内短任务用协程即可；可靠后台任务再使用 WorkManager。

相关内容见 [后台任务](../background-work.md)。
