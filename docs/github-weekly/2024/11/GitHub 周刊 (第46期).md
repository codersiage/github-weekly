# GitHub 周刊（第 46 期）

> 👋大家好，我是四阿哥！欢迎阅读 GitHub 周刊第 46 期 (2024.11.11-11.17)。【GitHub 周刊】专栏旨在收集每周热门的 GitHub 项目，帮助大家了解最新技术趋势，掌握前沿科技方向，发掘潜在商机！

### 本期看点
1. 无限套娃！Docker 一键安装 Windows，全自动化无人值守安装 ，万物皆可 Docker。
2. 15岁初中生开发，赚数百万的开源项目 | Chat Nio：一站式 AI 服务管理平台
3. 开源 AI 代理系统开发框架 AutoGen，构建下一代智能应用。
4. 在家中闲置设备上跑大模型集群 | 使用 iPhone、iPad、Android 打造你的私人 AI 集群。

### 1. Docker 一键安装 Windows

```text
🎯 项 目：dockur/windows
🔨 语 言：Shell
⭐ stars：28,114
🍴 fork：1,944
```

dockur / windows 是一个可以让用户在 Docker 容器中运行 Windows 系统的开源项目。

![](../../attachments/GitHub%20周刊%20(第46期)-windows.png)

项目的主要功能特性包括：
- **全自动安装与配置**：用户只需启动容器并使用web浏览器连接到指定端口（如8006），稍等片刻即可完成整个安装过程。
- **ISO 下载器**：内置 ISO 下载器，自动获取所需 Windows 版本的 ISO 文件。
- **Web 界面控制**：可以通过 Web 浏览器实时查看和控制 Windows 容器的桌面，无需额外插件。
- **硬件加速**：支持使用 Linux KVM 为 Windows 容器提供硬件虚拟化的加速。

可以直接通过浏览器监控 Windows 的安装进度。

![](../../attachments/GitHub%20周刊%20(第46期)-windows01.png)

安装可以直接使用项目提供的 `Docker Compose` 脚本：
```yaml
services:
  windows:
    image: dockurr/windows
    container_name: windows
    environment:
      VERSION: "11"
    devices:
      - /dev/kvm
    cap_add:
      - NET_ADMIN
    ports:
      - 8006:8006
      - 3389:3389/tcp
      - 3389:3389/udp
    stop_grace_period: 2m
```

当然也可以通过修改配置文件来进行自定义安装。比如：
- 更改存储位置
- 更改磁盘大小
- 与主机共享文件
- 安装自定义镜像
- 更改 CPU 或 RAM 的数量
- ……
更多自定义配置，可以参考官方仓库给出的说明，这里就不一一列举了。

![](../../attachments/GitHub%20周刊%20(第46期)-windows02.png)



### 2. 一站式 AI 服务管理平台

```text
🎯 项 目：zmh-program/chatnio
🔨 语 言：TypeScript
⭐ stars：6,788
🍴 fork：884
```

Chat Nio 是一款 AI 一站式服务管理平台，提供面向个人用户 (ToC)、开发者 (ToD) 和企业 (ToB) 的全面解决方案。旨在为用户提供高效、灵活和强大的 AI 服务。

![](../../attachments/GitHub%20周刊%20(第46期)-chatnio01.png)

项目开发的初衷主要是考虑到市面上的 AI 站点，要么是偏向前端轻量部署的项目（基于开源项目 Next Web 二开的），要么就是偏向于 API 分发的（基于开源项目 One API 二开的）。

![](../../attachments/GitHub%20周刊%20(第46期)-chatnio02.png)

作者希望能够提供一套既有强大的 API 分发系统，又有丰富的用户界面设计的项目，能够提供一站式的解决方案。

![](../../attachments/GitHub%20周刊%20(第46期)-chatnio03.png)

值得注意的是，项目的作者仅仅是 15 岁的初中生。

![](../../attachments/GitHub%20周刊%20(第46期)-chatnio04.png)


### 3. 开源 AI 代理系统开发框架

```text
🎯 项 目：microsoft/autogen
🔨 语 言：Jupyter Notebook
⭐ stars：34,034
🍴 fork：4,915
```

AutoGen 是由微软推出的，一个用于构建 AI 代理系统的开源框架。它简化了创建一个事件驱动、分布式、可扩展和弹性代理应用程序的过程。使用 AutoGen，用户可以快速创建一个 AI 代理相互协作，自主或者在人工监督下执行任务的 AI 代理系统。

![](../../attachments/GitHub%20周刊%20(第46期)-autogen01.png)

AutoGen 简化了 AI 开发和研究，支持使用多种大型语言模型 ( LLMs )、集成工具和先进的多智能体设计模式。用户可以在本地开发和测试代理系统，然后根据需求的增长部署到分布式云环境。

![](../../attachments/GitHub%20周刊%20(第46期)-autogen02.png)

官网上也提供了大量关于如何使用 AutoGen 的演示笔记。

![](../../attachments/GitHub%20周刊%20(第46期)-autogen03.png)

### 4. 使用 iPhone、iPad、Android 打造你的私人 AI 集群

```text
🎯 项 目：exo-explore/exo
🔨 语 言：Python
⭐ stars：14,861
🍴 fork：800
```

exo 项目旨在实现使用日常设备在家中运行你自己的 AI 集群。这意味着用户可以将日常设备，如 iPhone、iPad、Android 设备、Mac 和 Linux 电脑等整合成一个强大的 AI 集群，从而实现高性能计算。

![](../../attachments/GitHub%20周刊%20(第46期)-exo01.png)


运行 exo 的唯一要求是确保所有设备上的内存总和足以容纳整个模型。例如，如果你正在运行 llama 3.1 8B（fp16），那么你需要确保在所有设备上总共拥有 16GB 的内存。例如以下的搭配都可以使用，因为它们的内存总计超过 16GB：
- 2 台 8GB M3 MacBook Air
- 2 x Raspberry Pi 400，每个具有 4GB RAM（在 CPU 上运行）+ 1 x 8GB Mac Mini

使用 4 个 M4 的 Mac Mini 和 M4 Max 的 MacBook Pro 运行 Qween 2.5 Coder 32B。
![](../../attachments/GitHub%20周刊%20(第46期)-exo02.png)

使用家中闲置的 MacBook 运行 AI 大模型。

![](../../attachments/GitHub%20周刊%20(第46期)-exo03.png)

使用联想平板运行 AI 集群。

![](../../attachments/GitHub%20周刊%20(第46期)-exo04.png)


以上就是本期的全部内容，有感兴趣的赶紧去试试吧！我是四阿哥，关注我不错过每周的【GitHub 周刊】！也可以在我的[主页](https://siage.netlify.app/)查看更多往期的精彩内容！