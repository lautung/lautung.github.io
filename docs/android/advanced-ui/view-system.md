---
title: 传统 View 体系
description: Android View、ViewGroup、XML 布局和渲染流程入门。
---

# 传统 View 体系

View 是 Android 传统 UI 的基础。一个页面通常由 ViewGroup 组织多个 View，最终形成树状结构。

## 核心概念

| 概念 | 说明 |
| --- | --- |
| View | 最小显示和交互单元，例如 TextView、Button。 |
| ViewGroup | 容器，用于测量和摆放子 View。 |
| LayoutParams | 子 View 告诉父容器自己希望如何布局。 |
| XML 布局 | 用声明式 XML 描述 View 树。 |

## 渲染流程

传统 View 渲染通常经历三步：

1. `measure`：测量大小。
2. `layout`：确定位置。
3. `draw`：绘制内容。

## 学习建议

初学时先会用 ConstraintLayout 和常见控件。等遇到布局错位、性能问题或自定义控件时，再深入测量和绘制。
