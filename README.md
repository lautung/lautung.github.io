# 全栈学习笔记

这是一个使用 [Docusaurus](https://docusaurus.io/) 创建的中文静态文档站，目标是逐步建设成类似菜鸟教程的全栈学习文档站。当前先记录 Java、Kotlin 和 Android 应用开发内容。

## 本地开发

安装依赖：

```powershell
pnpm install
```

启动开发服务器：

```powershell
pnpm start
```

默认地址通常是 `http://localhost:3000/`。修改文档或页面后，开发服务器会自动刷新。

## 构建

```powershell
pnpm build
```

构建产物会输出到 `build/`，可以部署到任意静态站点托管服务。

## 文档编写约定

- 文档放在 `docs/` 目录。
- 每篇文档聚焦一个主题，先写可执行步骤，再补充概念说明。
- 代码片段尽量保持短小，并标明语言。
- 文件内容使用 UTF-8 编码读写，避免中文乱码。
- 如果一次维护或学习记录超过 1 小时，需要更新项目文档，记录进度、问题和下一步。

## 当前结构

- 学习路线：`docs/intro.md`
- Java 专题：`docs/java/basics.md`、`docs/java/oop.md`
- Kotlin 专题：`docs/kotlin/basics.md`、`docs/kotlin/null-safety.md`
- Android 专题：
  - 基础篇：`docs/android/overview.md`、`docs/environment/setup.md`、`docs/android/fundamentals.md`、`docs/android/project-structure.md`
  - 高级 UI：`docs/android/advanced-ui/overview.md`
  - Jetpack 组件：`docs/android/jetpack/overview.md`
  - Jetpack Compose UI：`docs/compose/getting-started.md`、`docs/compose/state.md`、`docs/compose/navigation.md`
  - 性能优化：`docs/android/performance-release.md`、`docs/android/performance/startup.md`
  - 应用架构：`docs/android/architecture.md`、`docs/android/architecture/mvvm.md`
  - NDK 开发：`docs/android/ndk/overview.md`
  - Framework：`docs/android/framework/overview.md`
  - Android 车载：`docs/android/automotive/overview.md`
  - Android TV：`docs/android/tv/overview.md`
  - Android 穿戴式设备：`docs/android/wear/overview.md`
  - Android 专项测试：`docs/android/testing-debugging.md`、`docs/android/testing/unit-testing.md`
  - Android 应用安全：`docs/android/permissions-security.md`、`docs/android/security/checklist.md`

## 常用命令

```powershell
pnpm start
pnpm build
pnpm serve
pnpm typecheck
```
