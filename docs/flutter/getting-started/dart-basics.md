---
title: Dart 基础
description: Flutter 学习所需的 Dart 变量、函数、空安全、集合和异步基础。
---

# Dart 基础

Dart 是 Flutter 的开发语言。入门阶段先掌握变量、函数、类、空安全、集合和 `async`/`await`。

## 变量和函数

```dart
void main() {
  final name = 'Flutter';
  print(greet(name));
}

String greet(String name) {
  return 'Hello $name';
}
```

## 空安全

```dart
String? nickname;

final displayName = nickname ?? '未设置昵称';
```

`String` 表示不能为空，`String?` 表示可能为空。读取可空值时要处理默认值或先判断。

## 集合

```dart
final names = ['Android', 'Compose', 'Flutter'];
final upperNames = names.map((name) => name.toUpperCase()).toList();
```

## 异步

```dart
Future<String> loadMessage() async {
  await Future.delayed(const Duration(seconds: 1));
  return '加载完成';
}
```

## 学习建议

- 写 Flutter 前先能读懂 Dart 的类型和空安全提示。
- 看到 `Future` 时先理解它表示“稍后得到的值”。
- 复杂语法不需要一次学完，遇到真实代码再回来看。
