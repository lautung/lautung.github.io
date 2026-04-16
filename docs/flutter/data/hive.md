---
title: Hive 本地数据库
description: Hive CE 与原始 Hive 的选择、Flutter 初始化、Box CRUD 和对象存储入门。
---

# Hive 本地数据库

Hive 是 Dart/Flutter 生态中常见的本地 key-value 数据库，适合保存设置、缓存、离线列表和轻量结构化数据。新项目可以优先了解 Hive CE，它是 Hive v2 的社区延续版本。

## 适用场景

- 保存用户设置、草稿、缓存列表。
- 离线读取数据，但不需要复杂 SQL 查询。
- 想用简单的 key-value API 快速持久化数据。
- 数据结构不复杂，主要按 key 读写。

如果需要复杂条件查询、关系建模或 SQL 能力，可以再考虑 SQLite、Drift 等方案。

## Hive CE 与原始 Hive

| 对比项 | Hive CE | 原始 Hive |
| --- | --- | --- |
| 包名 | `hive_ce`、`hive_ce_flutter` | `hive`、`hive_flutter` |
| 定位 | Hive v2 的社区延续版本，适合新项目评估。 | 老项目中更常见，生态资料较多。 |
| 新项目选择 | 推荐优先使用。 | 适合维护已有项目或跟随旧教程。 |
| 迁移风险 | 需要确认依赖包是否都支持 Hive CE。 | 新功能和维护节奏需要谨慎确认。 |
| 教程示例 | 本文以 Hive CE 为主。 | 保留包名和迁移提示。 |

如果你正在维护旧项目，不一定要马上迁移；如果是新项目，先看 Hive CE 能否满足需求。

## 添加依赖

Hive CE：

```powershell
flutter pub add hive_ce hive_ce_flutter
```

原始 Hive：

```powershell
flutter pub add hive hive_flutter
```

下面示例使用 Hive CE。

## 初始化

在 `main` 中初始化 Flutter 版 Hive：

```dart
import 'package:flutter/material.dart';
import 'package:hive_ce_flutter/hive_flutter.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Hive.initFlutter();
  await Hive.openBox('settings');

  runApp(const MyApp());
}
```

`openBox` 会打开或创建一个 box。可以把 box 理解成一个本地 key-value 容器。

## 写入和读取

```dart
final box = Hive.box('settings');

await box.put('theme_mode', 'dark');
final themeMode = box.get('theme_mode', defaultValue: 'system');
```

删除数据：

```dart
await box.delete('theme_mode');
```

清空 box：

```dart
await box.clear();
```

## 保存列表数据

简单列表可以直接保存 Map 或 List：

```dart
final cacheBox = await Hive.openBox('cache');

await cacheBox.put('articles', [
  {'id': 1, 'title': 'Flutter 入门'},
  {'id': 2, 'title': 'Hive 本地数据库'},
]);

final articles = cacheBox.get('articles', defaultValue: []);
```

这种方式适合轻量缓存。真实项目中如果数据结构稳定，建议封装成 repository，避免页面里散落 box 名称和 key。

## 监听数据变化

Hive 的 box 可以配合监听能力刷新 UI。入门阶段可以先把读写逻辑封装到 service 中，再由状态管理方案负责刷新界面。

```dart
final settingsBox = Hive.box('settings');

final subscription = settingsBox.watch(key: 'theme_mode').listen((event) {
  debugPrint('theme changed: ${event.value}');
});

await subscription.cancel();
```

## 对象存储和 Adapter

保存自定义对象时，需要定义对象与二进制数据之间的转换方式，这通常通过 TypeAdapter 完成。入门阶段可以先保存 `String`、`num`、`bool`、`List`、`Map` 等简单类型；等数据模型稳定后，再学习 adapter 和代码生成。

使用 adapter 时要注意：

- 每个类型需要稳定的 type id。
- 字段新增、删除或改名要考虑兼容旧数据。
- adapter 注册要发生在打开 box 之前。

## 项目分层建议

不要在页面中直接到处调用 `Hive.box(...)`。更稳的做法是：

```text
lib/
├── data/
│   ├── local/
│   │   └── settings_local_data_source.dart
│   └── repositories/
│       └── settings_repository.dart
└── presentation/
    └── settings_page.dart
```

页面只关心状态和用户操作，数据层负责 box 名称、key、默认值和迁移细节。

## 常见注意事项

- box 名称和 key 要集中管理，避免拼写错误。
- 不要把敏感信息直接明文保存到普通 box。
- 大量复杂查询不适合 Hive，优先考虑 SQLite/Drift。
- 修改对象结构前先考虑旧数据迁移。
- 写测试时可以把本地数据访问封装起来，方便替换为内存实现。

## 学习建议

- 先用 Hive 保存一个主题设置，理解初始化、打开 box、读写和删除。
- 再做一个离线缓存列表，练习数据层封装。
- 最后再学习对象 adapter、加密 box 和数据迁移。

## 参考资料

- [Hive CE](https://pub.dev/packages/hive_ce)
- [hive_ce_flutter](https://pub.dev/packages/hive_ce_flutter)
- [Hive](https://pub.dev/packages/hive)
- [hive_flutter](https://pub.dev/packages/hive_flutter)
