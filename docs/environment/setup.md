---
title: 开发环境
description: Android 学习环境的基础安装和验证流程。
---

# 开发环境

先把工具链装稳，再开始写代码。环境问题越早处理，后面的学习越顺。

## 必备工具

- Android Studio：用于创建项目、管理 SDK、运行模拟器和调试应用。
- Android SDK：至少安装一个稳定 API 版本，以及对应的 Build Tools。
- JDK：优先使用 Android Studio 内置 JDK，避免多个 JDK 版本互相干扰。
- Git：用于记录练习项目和学习笔记的版本。

## 初次检查

1. 打开 Android Studio。
2. 进入 SDK Manager，确认 Android SDK Platform 和 Android SDK Build-Tools 已安装。
3. 进入 Device Manager，创建一个模拟器。
4. 新建 Empty Activity 项目。
5. 点击 Run，确认应用能在模拟器启动。

## 常见问题

| 现象 | 处理思路 |
| --- | --- |
| Gradle 下载很慢 | 检查网络代理、镜像源和 Gradle JDK 配置。 |
| 模拟器启动失败 | 检查虚拟化支持、显卡驱动和可用内存。 |
| SDK 路径找不到 | 在 Android Studio 的 SDK Manager 中重新确认 SDK Location。 |

## 记录模板

```text
日期：
Android Studio 版本：
JDK 版本：
SDK 版本：
遇到的问题：
解决方法：
```
