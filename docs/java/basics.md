---
title: Java 基础
description: Java 变量、类型、流程控制、方法、类与对象的入门笔记。
---

# Java 基础

Java 仍然是理解很多 Android 老项目、开源库和平台 API 的重要语言。第一阶段先掌握能读懂代码、能写小练习的语法。

## 变量与类型

Java 是静态类型语言。变量声明时需要写清楚类型，常见类型包括基本类型和引用类型。

```java
int lessonCount = 6;
double progress = 0.5;
boolean completed = false;
String title = "Android 学习笔记";
```

## 流程控制

条件判断和循环是读写业务逻辑的基础。

```java
if (completed) {
    System.out.println("继续复习");
} else {
    System.out.println("开始下一节");
}

for (int index = 0; index < lessonCount; index++) {
    System.out.println("第 " + (index + 1) + " 节");
}
```

## 方法

方法把一段逻辑命名，并声明输入和输出。

```java
static String formatProgress(int done, int total) {
    return done + "/" + total;
}
```

## 类与对象

类描述结构，对象保存具体数据。

```java
class Lesson {
    String title;
    boolean completed;

    Lesson(String title, boolean completed) {
        this.title = title;
        this.completed = completed;
    }
}

Lesson lesson = new Lesson("Java 基础", false);
```

## 练习

创建一个 `Lesson` 类，包含 `title` 和 `minutes` 两个字段。再写一个方法，根据学习分钟数返回 `短课` 或 `长课`。
