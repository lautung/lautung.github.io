---
title: NDK 开发导读
description: Android NDK、Native 代码、JNI 和 CMake 的学习入口。
---

# NDK 开发导读

NDK 用于在 Android 中编写 C/C++ 代码。常见场景包括复用已有 C/C++ 库、性能敏感模块、音视频处理和底层能力接入。

## 学习路线

1. 理解 Java/Kotlin 与 Native 代码如何通过 JNI 调用。
2. 学习 CMake 和 native 库构建。
3. 了解 ABI、so 文件和打包方式。
4. 学习 native 崩溃定位和符号表。

## 学习建议

普通业务优先使用 Kotlin/Java。只有在确实需要 native 能力时，再引入 NDK。
