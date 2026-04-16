---
title: Flutter 环境搭建
description: 安装 Flutter SDK、配置编辑器、模拟器和 flutter doctor。
---

# Flutter 环境搭建

Flutter 环境的目标是让 `flutter doctor` 能识别 SDK、Android 工具链、编辑器和可运行设备。

## 安装步骤

1. 下载 Flutter SDK，并把 `flutter/bin` 加入系统 `PATH`。
2. 安装 Android Studio，确认 Android SDK、Platform Tools 和模拟器可用。
3. 在 Android Studio 或 VS Code 中安装 Flutter 和 Dart 插件。
4. 打开一个终端，运行检查命令：

```powershell
flutter doctor
```

## 常用命令

```powershell
flutter --version
flutter doctor
flutter devices
flutter emulators
```

## 检查重点

- `Flutter` 项显示绿色，说明 SDK 和 PATH 正常。
- `Android toolchain` 项没有缺失 SDK 或 license。
- `Connected device` 至少能看到一个模拟器、真机或桌面设备。

## 学习建议

- 遇到 license 问题时先运行 `flutter doctor --android-licenses`。
- 遇到设备识别问题时先确认 Android Studio 能启动模拟器。
- 环境修好后再进入第一个应用，不要带着红色 doctor 项继续学习。
