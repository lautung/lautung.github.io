---
title: Lifecycle
description: LifecycleOwner、LifecycleObserver 和生命周期感知组件入门。
---

# Lifecycle

Lifecycle 让对象能够感知 Activity 或 Fragment 的生命周期，避免在页面不可见或销毁后继续执行 UI 操作。

## 核心概念

- `LifecycleOwner`：拥有生命周期的对象，例如 Activity、Fragment。
- `Lifecycle`：生命周期状态集合。
- `DefaultLifecycleObserver`：观察生命周期变化。

## 示例

```kotlin
class PlayerObserver : DefaultLifecycleObserver {
    override fun onResume(owner: LifecycleOwner) {
        // 恢复播放
    }

    override fun onPause(owner: LifecycleOwner) {
        // 暂停播放
    }
}
```

## 学习建议

当一个对象需要跟随页面启动、暂停、释放时，优先考虑 Lifecycle，而不是手动在 Activity 中散落调用。
