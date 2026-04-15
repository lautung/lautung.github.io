---
title: 后台任务
description: Android 异步任务、WorkManager、前台服务和后台限制的选择思路。
---

# 后台任务

后台任务指应用不在前台时仍可能需要执行的工作，例如同步数据、上传日志、处理图片。Android 对后台行为有限制，所以要选对 API。

## 任务类型

| 类型 | 适合场景 |
| --- | --- |
| 异步工作 | 页面可见时发起，离开页面可以中断。 |
| WorkManager | 需要可靠执行的延迟任务或周期任务。 |
| 前台服务 | 用户可感知、必须持续运行的任务。 |

## WorkManager 示例

```kotlin
class SyncWorker(
    appContext: Context,
    params: WorkerParameters,
) : Worker(appContext, params) {
    override fun doWork(): Result {
        return try {
            syncData()
            Result.success()
        } catch (error: Exception) {
            Result.retry()
        }
    }
}
```

提交一次性任务：

```kotlin
val request = OneTimeWorkRequestBuilder<SyncWorker>().build()
WorkManager.getInstance(context).enqueue(request)
```

## 学习建议

- 不需要离开页面继续执行的任务，用协程即可。
- 需要可靠执行的任务优先考虑 WorkManager。
- 前台服务要给用户清晰通知。
- 后台任务要考虑网络、充电、重试和幂等。

## 参考资料

- [Background tasks overview](https://developer.android.com/develop/background-work/background-tasks)
- [Getting started with WorkManager](https://developer.android.com/develop/background-work/background-tasks/persistent/getting-started)
