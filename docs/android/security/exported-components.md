---
title: 组件暴露
description: Android exported 组件、Intent 注入和组件权限保护。
---

# 组件暴露

组件暴露指 Activity、Service、Receiver、Provider 是否允许其他应用访问。错误暴露可能带来安全风险。

## 关注点

- `android:exported` 是否符合预期。
- 暴露组件是否需要权限保护。
- Intent 参数是否校验。
- Provider 是否限制数据访问。

## 学习建议

默认不暴露组件。确实需要跨应用访问时，明确调用方、权限和参数校验。
