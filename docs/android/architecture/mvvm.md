---
title: MVVM
description: Android MVVM 中 Model、View、ViewModel 的职责划分。
---

# MVVM

MVVM 是 Android 常见架构模式。它把界面显示和状态逻辑分开，让页面更容易测试和维护。

## 职责划分

- View：Activity、Fragment 或 Compose 页面，只负责显示和用户事件。
- ViewModel：保存 UI 状态，处理用户事件，调用数据层。
- Model：业务数据和数据来源。

## 学习建议

不要让 ViewModel 持有 View 引用。页面通过观察状态刷新 UI，用户操作通过事件回调交给 ViewModel。
