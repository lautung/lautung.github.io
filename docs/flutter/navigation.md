---
title: Flutter 页面导航
description: Flutter 基础路由、参数传递和返回栈入门。
---

# Flutter 页面导航

Flutter 可以用 `Navigator` 管理页面栈。入门阶段先掌握 push、pop 和参数传递。

## 跳转页面

```dart
Navigator.of(context).push(
  MaterialPageRoute(
    builder: (context) => const DetailPage(title: '详情页'),
  ),
);
```

## 返回页面

```dart
Navigator.of(context).pop();
```

## 接收参数

```dart
class DetailPage extends StatelessWidget {
  const DetailPage({super.key, required this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: const Center(child: Text('详情内容')),
    );
  }
}
```

## 学习建议

- 简单应用先用 `Navigator` 和 `MaterialPageRoute`。
- 页面变多后再整理命名路由或路由库。
- 跳转前确认当前 `context` 仍然有效，异步后尤其要注意。
