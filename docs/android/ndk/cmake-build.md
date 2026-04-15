---
title: CMake 与构建
description: Android NDK 中 CMake、CMakeLists.txt 和 native 库打包入门。
---

# CMake 与构建

Android Studio 通常使用 CMake 构建 native 代码。`CMakeLists.txt` 描述源码、库和链接关系。

## 关注点

- native 源码目录。
- 生成的 so 库名称。
- 依赖的系统库或第三方库。
- ABI 过滤和打包体积。

## 学习建议

先从 Android Studio 的 Native 模板开始，再逐步理解每一行 CMake 配置的作用。
