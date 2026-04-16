---
title: FVM 版本管理
description: 使用 FVM 管理 Flutter SDK 版本、固定项目版本和配置编辑器。
---

# FVM 版本管理

FVM 是 Flutter Version Management 的缩写，用来在一台机器上安装多个 Flutter SDK，并为每个项目固定一个版本。团队协作时，FVM 可以减少“我这里能跑，你那里不能跑”的环境差异。

## 适用场景

- 多个 Flutter 项目需要使用不同 Flutter 版本。
- 团队希望把项目 Flutter 版本记录到仓库。
- 升级 Flutter 前想先在本地验证，不影响其他项目。
- CI 或本地脚本希望明确使用项目指定的 Flutter SDK。

## 安装 FVM

使用 Dart 全局命令安装：

```powershell
dart pub global activate fvm
```

确认命令可用：

```powershell
fvm --version
fvm doctor
```

如果终端找不到 `fvm`，先检查 Dart 全局包目录是否已经加入 `PATH`。

## 安装 Flutter 版本

安装稳定版：

```powershell
fvm install stable
```

也可以安装具体版本：

```powershell
fvm install 3.24.5
```

查看本机已有版本：

```powershell
fvm list
```

## 为项目固定版本

进入 Flutter 项目根目录后运行：

```powershell
fvm use stable
```

这会在项目中写入 FVM 配置。当前 FVM 版本主要使用 `.fvmrc` 记录项目选择的 Flutter 版本。

常见 `.fvmrc` 内容类似：

```json
{
  "flutter": "stable"
}
```

建议提交 `.fvmrc`，让团队共享同一个 Flutter 版本；`.fvm/` 目录通常属于本地链接和缓存，建议加入 `.gitignore`。

```gitignore
.fvm/
```

## 使用项目 Flutter

项目中优先通过 `fvm flutter` 执行 Flutter 命令：

```powershell
fvm flutter doctor
fvm flutter pub get
fvm flutter run
fvm flutter test
```

如果要执行 Dart 命令：

```powershell
fvm dart --version
```

## 编辑器配置

### VS Code

可以让 VS Code 指向 FVM 管理的 SDK 路径。常见配置放在 `.vscode/settings.json`：

```json
{
  "dart.flutterSdkPath": ".fvm/versions/stable"
}
```

如果项目固定的是具体版本，把 `stable` 改成对应版本目录。

### Android Studio

在 Flutter SDK path 中选择项目下的 FVM SDK 路径，例如：

```text
项目目录/.fvm/versions/stable
```

配置后重新打开项目，让 IDE 重新索引 SDK。

## 常见问题

| 问题 | 处理方式 |
| --- | --- |
| `fvm` 命令找不到 | 检查 Dart 全局包目录是否在 `PATH` 中。 |
| IDE 仍使用系统 Flutter | 手动把 Flutter SDK path 指向 `.fvm/versions/...`。 |
| 团队版本不一致 | 提交 `.fvmrc`，并约定使用 `fvm flutter ...`。 |
| 升级 Flutter 后异常 | 先 `fvm use 新版本`，跑完测试和构建后再提交 `.fvmrc`。 |

## 学习建议

- 单人学习项目可以先用系统 Flutter，遇到多项目版本冲突时再引入 FVM。
- 团队项目建议从第一天就提交 `.fvmrc`。
- README 中最好写清楚常用命令使用 `fvm flutter`，避免新成员误用系统 Flutter。

## 参考资料

- [FVM 官网](https://fvm.app/)
- [FVM pub.dev](https://pub.dev/packages/fvm)
