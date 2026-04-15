---
title: Java 面向对象
description: Java 封装、继承、多态和接口的轻量入门。
---

# Java 面向对象

面向对象不是为了把代码写复杂，而是把数据和行为放到合适的位置。读 Android 老项目时，Activity、Adapter、Repository、ViewModel 往往都会用到这些概念。

## 封装

封装把字段保护起来，通过方法表达允许外部做什么。

```java
class StudyTask {
    private final String title;
    private boolean completed;

    StudyTask(String title) {
        this.title = title;
    }

    void markDone() {
        completed = true;
    }

    boolean isCompleted() {
        return completed;
    }
}
```

## 继承

继承表示“是一种”的关系。子类可以复用父类能力，也可以覆盖父类方法。

```java
class Lesson {
    String title() {
        return "普通课程";
    }
}

class VideoLesson extends Lesson {
    @Override
    String title() {
        return "视频课程";
    }
}
```

## 多态

多态让同一个类型变量在运行时指向不同实现。

```java
Lesson lesson = new VideoLesson();
System.out.println(lesson.title());
```

## 接口

接口描述能力，具体类负责实现。

```java
interface Trackable {
    boolean isCompleted();
}

class ReadingTask implements Trackable {
    @Override
    public boolean isCompleted() {
        return false;
    }
}
```

## 学习建议

先理解“封装”和“接口”，再看继承。实际项目里，接口常用于解耦；继承要谨慎使用，避免层级过深。
