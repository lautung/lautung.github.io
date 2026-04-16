---
title: Flutter 构建发布
description: Flutter Android 构建、版本号和发布前检查。
---

# Flutter 构建发布

发布前要确认版本号、应用标识、图标、权限、签名、测试和构建产物。

## 版本配置

`pubspec.yaml` 中的版本通常写成：

```yaml
version: 1.0.0+1
```

`1.0.0` 是用户看到的版本名，`+1` 是构建号。

## Android 构建

```powershell
flutter build apk --release
flutter build appbundle --release
```

APK 适合直接安装测试，App Bundle 通常用于 Google Play 发布。

## 发布前检查

- `flutter test` 通过。
- `flutter analyze` 没有需要处理的问题。
- 应用名称、图标、版本号和包名正确。
- 权限声明与真实功能一致。
- 真机上验证关键流程。

## 学习建议

- 第一次发布先构建 APK，在本机安装验证。
- 签名配置要妥善保存，丢失后会影响后续升级。
- 每次发布记录版本号、变更内容和已验证设备。
