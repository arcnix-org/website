---
title: "安装与更新"
description: "按操作系统选择安装包，了解便携版和版本更新方式。"
order: 2
---

## Windows x64

首次安装选 **Windows → 下载安装器**。用当前 Windows 账户运行安装器，之后从开始菜单打开 Arcnix。需要便携使用时，选**便携版 ZIP**，完整解压到可写目录，再运行 `arcnix.exe`。两种方式都需要 WebView2 Runtime。[下载 Windows 版](https://arcnix.org/zh-cn/#downloads)

## macOS

macOS 13 及以上的 Apple Silicon 电脑请选择对应压缩包。解压后将 `Arcnix.app` 移到“应用程序”并打开。当前发布包采用临时签名，尚未经过 Apple 公证。[下载 macOS 版](https://arcnix.org/zh-cn/#downloads)

## Linux

按本机处理器选择压缩包。运行 `uname -m`，显示 `x86_64` 选 x64，显示 `aarch64` 选 ARM64。在图形桌面中解压，进入解压目录，运行 `./arcnix`。客户端依赖 glibc 2.39 或更高版本、GTK 3 和 WebKitGTK 4.1。Ubuntu 24.04 对应的运行库包名是 `libgtk-3-0t64` 和 `libwebkit2gtk-4.1-0`。[下载 Linux 版](https://arcnix.org/zh-cn/#downloads)

## 更新已安装的客户端

在 Windows x64 上，打开**设置 → 软件更新**可检查稳定版。0.3.2 及以上版本会下载并校验便携 ZIP，待 SSH 断开、任务完成后替换程序。使用 0.3.1 或更早版本时，请用安装器或便携 ZIP 手动升级至 0.3.4。

macOS 和 Linux 用户可下载新版对应的压缩包。官网下载区也提供各包的 SHA-256 校验文件。
