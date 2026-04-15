---
title: 单元测试
description: Android 本地单元测试、ViewModel 测试和业务逻辑测试。
---

# 单元测试

单元测试运行快，适合验证纯逻辑、ViewModel 和 UseCase。它不应该依赖真实网络或设备状态。

## 适合测试

- 格式化函数。
- 数据转换。
- ViewModel 状态变化。
- Repository 的策略逻辑。

## 学习建议

先测最稳定的业务逻辑。需要 Android Framework 的代码，放到仪器测试或做抽象隔离。
