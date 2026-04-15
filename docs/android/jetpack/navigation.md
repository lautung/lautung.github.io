---
title: Navigation
description: Jetpack Navigation 的导航图、目的地和返回栈概念。
---

# Navigation

Navigation 组件用于统一管理页面跳转、参数和返回栈。传统 View 和 Compose 都可以使用 Navigation 思路组织页面。

## 核心概念

- Destination：一个页面或目的地。
- NavGraph：页面之间的关系图。
- NavController：执行跳转和返回。
- Back stack：返回栈。

## 学习建议

页面少时可以直接跳转；页面变多后，用 Navigation 管理路径更清晰。参数尽量只传 ID，详情数据由目标页加载。
