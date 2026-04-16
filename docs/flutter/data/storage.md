---
title: Flutter 本地存储
description: SharedPreferences、文件和数据库的选择思路。
---

# Flutter 本地存储

本地存储用于保存用户设置、缓存数据或离线内容。不同数据规模适合不同方案。

## 选择方案

| 场景 | 推荐方式 |
| --- | --- |
| 主题、开关、登录标记 | SharedPreferences |
| 文本、图片、导出文件 | 文件存储 |
| 列表、关系数据、离线查询 | SQLite 或封装库 |

## SharedPreferences 示例

```dart
import 'package:shared_preferences/shared_preferences.dart';

Future<void> saveThemeMode(String mode) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString('theme_mode', mode);
}

Future<String?> loadThemeMode() async {
  final prefs = await SharedPreferences.getInstance();
  return prefs.getString('theme_mode');
}
```

## 注意事项

- 不要把敏感信息直接明文存入普通偏好设置。
- 缓存数据要考虑过期和清理。
- 本地数据结构变化时要考虑迁移。

## 学习建议

- 入门先保存一个设置项，确认读写流程。
- 数据量变大后再学习数据库方案。
- 存储逻辑尽量从页面中抽出，方便测试。
