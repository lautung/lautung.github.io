---
title: 性能与发布
description: Android 性能关注点、Profiler、启动速度、卡顿、内存和发布前检查。
---

# 性能与发布

性能不是最后才做的优化，而是贯穿开发过程的质量要求。用户最容易感知启动慢、滑动卡顿、耗电和崩溃。

## 性能关注点

| 方向 | 典型问题 |
| --- | --- |
| 启动 | 冷启动慢、启动页停留太久。 |
| 渲染 | 列表滑动卡顿、动画掉帧。 |
| 内存 | 内存泄漏、图片占用过大。 |
| 电量 | 频繁定位、后台任务过多。 |
| 网络 | 请求过多、无缓存、失败重试失控。 |

## 常用工具

- Android Studio Profiler：观察 CPU、内存、网络、能耗。
- Layout Inspector：检查界面结构。
- Benchmark：测量启动、滚动等性能场景。
- Play Console：观察线上崩溃和性能数据。

## 发布前检查

- Debug 日志和测试入口已关闭。
- 版本号、应用名、图标、签名配置正确。
- 隐私政策、权限说明、目标 SDK 符合要求。
- 关键页面在不同屏幕尺寸上可用。
- 崩溃、卡顿和主要业务流程已验证。

## 学习建议

先学会用 Profiler 定位问题，再谈优化方案。没有测量数据时，不要凭感觉改性能。

## 参考资料

- [App performance guide](https://developer.android.com/topic/performance/overview)
- [Profile your app performance](https://developer.android.com/studio/profile/android-profiler)
