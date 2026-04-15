---
title: Activity 生命周期
description: Activity 创建、可见、前台、暂停和销毁阶段的学习笔记。
---

# Activity 生命周期

Activity 生命周期描述页面从创建到销毁的状态变化。理解生命周期，是处理初始化、资源释放、配置变更和后台返回的基础。

## 常见回调

| 回调 | 说明 |
| --- | --- |
| `onCreate()` | 创建 Activity，做一次性初始化。 |
| `onStart()` | Activity 对用户可见。 |
| `onResume()` | Activity 进入前台，可以交互。 |
| `onPause()` | Activity 部分不可交互，适合暂停轻量任务。 |
| `onStop()` | Activity 不再可见。 |
| `onDestroy()` | Activity 即将销毁。 |

## 观察生命周期

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    Log.d("MainActivity", "onCreate")
}

override fun onResume() {
    super.onResume()
    Log.d("MainActivity", "onResume")
}

override fun onStop() {
    super.onStop()
    Log.d("MainActivity", "onStop")
}
```

## 常见场景

- 首次打开页面：`onCreate()` → `onStart()` → `onResume()`。
- 切到后台：`onPause()` → `onStop()`。
- 从后台回来：`onStart()` → `onResume()`。
- 旋转屏幕：通常会销毁并重建 Activity。

## 学习建议

页面状态优先放到 `ViewModel` 或可保存状态中，不要只依赖 Activity 字段。生命周期回调里避免写大量业务逻辑。

## 参考资料

- [The activity lifecycle](https://developer.android.com/guide/components/activities/activity-lifecycle)
