---
title: 数据存储
description: SharedPreferences、DataStore、Room、文件和缓存的选择思路。
---

# 数据存储

Android 应用常见数据包括设置项、结构化业务数据、文件和缓存。不同数据应该选不同存储方式。

## 存储选择

| 数据类型 | 推荐方式 |
| --- | --- |
| 少量配置 | DataStore 或 SharedPreferences。 |
| 结构化数据 | Room 数据库。 |
| 应用私有文件 | App-specific files。 |
| 临时缓存 | Cache directory。 |

## 应用私有文件

应用私有目录适合保存只给当前应用使用的文件。

```kotlin
val file = File(context.filesDir, "note.txt")
file.writeText("Android 学习记录")
```

## Room 的定位

Room 适合保存结构化、本地可查询的数据，例如课程列表、离线文章、用户草稿。

```kotlin
@Entity
data class LessonEntity(
    @PrimaryKey val id: String,
    val title: String,
)
```

## 学习建议

- 设置项不要放数据库。
- 大对象不要硬塞进 SharedPreferences。
- 数据层最好定义单一事实来源，减少网络和本地数据互相打架。
- 缓存可以丢，业务数据要考虑备份和迁移。

## 参考资料

- [Access app-specific files](https://developer.android.com/training/data-storage/app-specific)
- [Data layer](https://developer.android.com/topic/architecture/data-layer)
