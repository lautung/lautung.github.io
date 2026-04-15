---
title: 权限与安全
description: Android 权限类型、运行时权限、最小权限原则和安全清单。
---

# 权限与安全

权限用于保护用户隐私和系统能力。应用应该只请求完成当前功能真正需要的权限。

## 权限类型

| 类型 | 说明 |
| --- | --- |
| 安装时权限 | 安装时自动授予，风险较低。 |
| 运行时权限 | 涉及敏感数据或能力，需要运行时请求。 |
| 特殊权限 | 系统设置页单独授权，例如悬浮窗等。 |

## 请求原则

- 能不用权限就不用权限。
- 在用户触发具体功能时再请求权限。
- 请求前说明为什么需要。
- 用户拒绝后提供降级体验。

## 运行时权限流程

```kotlin
val launcher = rememberLauncherForActivityResult(
    ActivityResultContracts.RequestPermission(),
) { granted ->
    if (granted) {
        // 使用受保护能力
    } else {
        // 展示降级说明
    }
}
```

## 安全检查

- 不在日志中输出敏感信息。
- 不把密钥写进客户端代码。
- 对导出组件检查 `android:exported` 和权限限制。
- 外部输入都要做校验。

## 参考资料

- [Permissions on Android](https://developer.android.com/training/permissions)
- [Request runtime permissions](https://developer.android.com/training/permissions/requesting)
- [Security checklist](https://developer.android.com/privacy-and-security/security-tips)
