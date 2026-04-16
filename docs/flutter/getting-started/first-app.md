---
title: 第一个 Flutter 应用
description: 创建、运行和修改第一个 Flutter 应用，理解热重载。
---

# 第一个 Flutter 应用

第一个应用的目标是创建项目、启动设备、运行页面，并用热重载观察修改效果。

## 创建项目

```powershell
flutter create hello_flutter
cd hello_flutter
flutter run
```

如果有多个设备，可以先查看设备 ID：

```powershell
flutter devices
flutter run -d 设备ID
```

## 最小入口

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: Center(child: Text('Hello Flutter')),
      ),
    );
  }
}
```

## 热重载

运行中修改 `Text` 内容后，在终端按 `r` 触发 hot reload。热重载适合快速调整 UI，但入口、依赖和原生配置变化可能需要重新运行。

## 学习建议

- 第一次先用默认模板跑通，不要急着清空所有文件。
- 改一行、运行一次，熟悉错误提示和刷新方式。
- 如果设备启动失败，回到 `flutter doctor` 和 `flutter devices` 排查。
