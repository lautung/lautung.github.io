---
title: DataStore
description: DataStore 保存偏好设置和轻量配置的入门说明。
---

# DataStore

DataStore 用于保存轻量配置数据，是 SharedPreferences 的现代替代方案之一。

## 适合场景

- 是否开启深色模式。
- 用户选择的排序方式。
- 首次启动标记。
- 简单开关配置。

## 和 Room 的区别

DataStore 适合键值配置；Room 适合结构化数据和复杂查询。

## 学习建议

设置项优先考虑 DataStore。业务列表、离线内容、搜索历史等结构化数据优先考虑 Room。
