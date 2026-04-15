---
title: JNI 基础
description: JNI 方法声明、native 调用和数据类型映射入门。
---

# JNI 基础

JNI 是 Java/Kotlin 与 C/C++ 互相调用的桥梁。Android NDK 开发通常从 JNI 开始。

## 基本流程

1. 在 Kotlin/Java 中声明 `external` 方法。
2. 加载 native 库。
3. 在 C/C++ 中实现对应方法。

```kotlin
external fun stringFromNative(): String
```

## 学习建议

先写一个返回字符串的最小 JNI 示例，再学习数组、对象、线程和异常处理。
