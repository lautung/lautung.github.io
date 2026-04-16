---
title: Flutter 测试与调试
description: Flutter 单元测试、Widget 测试和常用调试工具。
---

# Flutter 测试与调试

Flutter 测试常见类型包括单元测试和 Widget 测试。调试时可以结合日志、断点和 Flutter DevTools。

## 运行测试

```powershell
flutter test
```

## Widget 测试示例

```dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('显示标题', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(
        home: Text('Hello Flutter'),
      ),
    );

    expect(find.text('Hello Flutter'), findsOneWidget);
  });
}
```

## 调试工具

- `debugPrint`：输出调试信息。
- 断点调试：检查变量、调用栈和执行路径。
- Flutter DevTools：查看布局、性能、内存和日志。

## 学习建议

- 先为纯函数写单元测试，再为关键页面写 Widget 测试。
- UI 测试要验证用户看得见的文字和交互结果。
- 复现问题时记录设备、系统版本、操作步骤和日志。
