---
title: Flutter 网络请求
description: 使用 HTTP 请求数据、解析 JSON 和处理错误。
---

# Flutter 网络请求

Flutter 网络请求通常需要依赖包、异步函数、JSON 解析和错误处理。入门可以先使用 `http` 包。

## 添加依赖

```yaml
dependencies:
  http: ^1.2.0
```

运行：

```powershell
flutter pub get
```

## 请求示例

```dart
import 'dart:convert';

import 'package:http/http.dart' as http;

Future<List<dynamic>> loadPosts() async {
  final uri = Uri.parse('https://jsonplaceholder.typicode.com/posts');
  final response = await http.get(uri);

  if (response.statusCode != 200) {
    throw Exception('请求失败：${response.statusCode}');
  }

  return jsonDecode(response.body) as List<dynamic>;
}
```

## 错误处理

- 网络不可用时要显示可理解的错误提示。
- 服务器返回非 200 状态时不要当作成功数据处理。
- JSON 结构变化时要让解析错误可定位。

## 学习建议

- 先把请求逻辑写成函数，再接入页面状态。
- 页面中至少区分加载中、成功、失败三种状态。
- 真实项目中建议为返回数据创建明确的模型类。
