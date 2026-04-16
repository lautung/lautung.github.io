---
title: Flutter 工程结构
description: Flutter 项目目录、pubspec.yaml、资源和平台目录说明。
---

# Flutter 工程结构

Flutter 项目由 Dart 代码、资源配置和各平台目录组成。入门阶段重点看 `lib/` 和 `pubspec.yaml`。

## 常见目录

```text
my_app/
├── android/
├── ios/
├── lib/
│   └── main.dart
├── test/
├── pubspec.yaml
└── analysis_options.yaml
```

## 关键文件

| 文件或目录 | 作用 |
| --- | --- |
| `lib/main.dart` | 应用入口，通常从 `runApp` 开始。 |
| `pubspec.yaml` | 声明依赖、资源、版本和项目元数据。 |
| `android/` | Android 平台工程，用于配置包名、权限和构建。 |
| `ios/` | iOS 平台工程，用于配置签名、权限和原生能力。 |
| `test/` | 单元测试和 Widget 测试。 |

## 依赖与资源

```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^1.2.0

flutter:
  assets:
    - assets/images/
```

修改 `pubspec.yaml` 后运行：

```powershell
flutter pub get
```

## 学习建议

- 先把页面代码放在 `lib/` 下，等文件变多后再按 feature 或 layer 拆分。
- 不要直接删除平台目录，很多构建配置依赖它们。
- 资源路径必须在 `pubspec.yaml` 中声明后才能使用。
