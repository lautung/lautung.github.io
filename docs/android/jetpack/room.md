---
title: Room
description: Room 数据库、Entity、Dao 和本地数据访问入门。
---

# Room

Room 是 SQLite 的抽象层，用于更安全地访问本地结构化数据。

## 基本组成

- `Entity`：数据库表。
- `Dao`：数据访问接口。
- `Database`：数据库入口。

## 示例

```kotlin
@Entity
data class LessonEntity(
    @PrimaryKey val id: String,
    val title: String,
)
```

## 学习建议

Room 适合保存离线数据、列表缓存、草稿和历史记录。不要把大量临时缓存或简单配置都放进数据库。
