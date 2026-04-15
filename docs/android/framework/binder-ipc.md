---
title: Binder 与 IPC
description: Binder、跨进程通信和系统服务调用的概念入门。
---

# Binder 与 IPC

Binder 是 Android 重要的跨进程通信机制。应用调用系统服务时，经常会通过 Binder 与系统进程通信。

## 核心概念

- IPC：跨进程通信。
- Binder：Android 的 IPC 机制。
- AIDL：定义跨进程接口的一种方式。
- Proxy/Stub：客户端与服务端的调用桥梁。

## 学习建议

先理解“应用和系统服务通常不在同一个进程”，再学习 Binder 如何把方法调用变成跨进程请求。
