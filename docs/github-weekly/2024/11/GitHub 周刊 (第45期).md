
> 👋大家好，我是四阿哥！欢迎阅读 GitHub 周刊第 45 期 (2024.11.04-11.10)。【GitHub 周刊】专栏旨在收集每周热门的 GitHub 项目，帮助大家了解最新技术趋势，掌握前沿科技方向，发掘潜在商机！

### 本期看点
1. Docling：IBM 开源的高效文档解析和转换工具，支持 PDF、DOCX、PPTX 等多种格式。
2. OpenHands：释放双手，将编程工作交给 AI，让您的创意轻松转化为现实。
3. JSON Crack：JSON 可视化神器，一键将 JSON 转为直观的树状图或脑图。
4. Kestra ：功能强大且灵活的工作流编排平台 ，让自动化工作变得高效且简单。


### 1. IBM 开源的高效文档（PDF、DOCX、PPTX 等）解析和转换工具

```text
🎯 项 目：DS4SD/docling 
🔨 语 言：Python
⭐ stars：7,633
🍴 fork：364
🔥 本周 stars：1,947
```

Docling 是一个由 IBM 开源的文档解析和转换工具，它能够高效地将多种格式的文档（包括 PDF、DOCX、PPTX、图片和 HTML）解析，并导出为 Markdown 或 JSON 格式。

![](../../attachments/GitHub%20周刊第45期-ibm01.png)

以下是 Docling 的一些核心功能和特点：
- **多格式支持**：Docling 支持读取和解析多种流行的文档格式，包括 PDF、DOCX、PPTX、图像、HTML、AsciiDoc 和 Markdown，并支持将这些文档导出为 Markdown 和 JSON 格式。
- **高级 PDF 理解**：Docling 具备对 PDF 文档的高级理解能力，包括页面布局、阅读顺序和表格结构的识别。
- **统一文档表示**：基于 `DoclingDocument` 格式，Docling 提供一个统一且富有表现力的文档表示格式，表达文档中的文本、表格、图片等内容，及文档的层次结构。
- **OCR 支持**：Docling 支持光学字符识别（OCR），能识别扫描 PDF 中的文字，让 Docling 能处理扫描或手写的文档。
- **与大模型集成**：Docling 易于与 LlamaIndex 和 LangChain 等工具集成，为 RAG（Retrieval-Augmented Generation）/QA（Question Answering）应用提供支持。

待转换的原始 PDF。
![](../../attachments/GitHub%20周刊第45期-ibm01-1.png)

转换后的 Markdown 文件。
![](../../attachments/GitHub%20周刊第45期-ibm02.png)

### 2. 将编程工作交给 AI，让创意轻松转化为现实

```text
🎯 项 目：All-Hands-AI/OpenHands
🔨 语 言：Python
⭐ stars：35,136
🍴 fork：3,960
🔥 本周 stars：1,706
```

OpenHands（原名OpenDevin）是一个由 AI 驱动的软件开发代理，旨在通过 AI 增强软件开发过程。

![](../../attachments/GitHub%20周刊第45期-openhans01.png)

OpenHands 代理可以做任何人类开发人员可以做的事情：修改代码、运行命令、浏览 Web、调用 API，甚至还可以从 StackOverflow 复制代码片段。

![](../../attachments/GitHub%20周刊第45期-openhands02.png)

OpenHands 支持各种大型语言模型（LLM）提供者，开发者可以根据自己的喜好和项目需求，选择最适合的LLM来进行开发。

![](../../attachments/GitHub%20周刊第45期-openhands03.png)


### 3. JSON 可视化神器：一键将 JSON 转为直观的树状图或脑图

```text
🎯 项 目：AykutSarac/jsoncrack.com
🔨 语 言：TypeScript
⭐ stars：33,114
🍴 fork：2,122
🔥 本周 stars：1,654
```

JSON Crack 是一个创新的开源 JSON 可视化工具。它能够将复杂的 JSON 数据转换为易读的树状图或类似脑图的形式，并且支持编辑、搜索、复制、导出等多种功能和操作。
![](../../attachments/GitHub%20周刊第45期-json01.png)

JSON Crack 具有以下功能特点：
- **可视化**：能将 JSON、YAML、CSV、XML 和 TOML 转换为深色或浅色模式下的交互式图形或树。
- **格式转换**：无缝转换数据格式，如 JSON 到 CSV 或 XML 到 JSON，以便于共享。
- **格式化和验证**：美化和验证 JSON、YAML 和 CSV，以获得清晰准确的数据。
- **代码生成**：生成 TypeScript 接口、Golang 结构和 JSON 架构。
- **导出图像**：将可视化效果下载为 PNG、JPEG 或 SVG。

![](../../attachments/GitHub%20周刊第45期-json02.png)


### 4. 强大的工作流编排平台 ，让自动化工作变得简单

```text
🎯 项 目：kestra-io/kestra
🔨 语 言：Java
⭐ stars：12,710
🍴 fork：1,096
🔥 本周 stars：1,190
```

Kestra 是一个开源的、基于 Java 构建的、事件驱动的工作流编排工具，可以帮助用户轻松实现计划工作流和事件驱动工作流。

![](../../attachments/GitHub%20周刊第45期-kestra01.png)

Kestra 提供了友好的用户界面。用户可以通过简单的 YAML 或 JSON 定义工作流，支持复杂的依赖关系和条件逻辑。

![](../../attachments/GitHub%20周刊第45期-kestra02.png)

Kestra 具有以下特点：
- **可视化界面**：Kestra 提供友好的用户界面，支持工作流的可视化设计和监控，便于追踪任务执行情况。
- **工作流编排**：Kestra 允许用户通过 YAML 或 JSON 格式定义工作流，支持复杂的依赖关系和条件逻辑。
- **一切都是代码**：这意味着用户可以通过 Git 来对工作流进行版本控制，方便用户进行回滚和历史版本查询。

![](../../attachments/GitHub%20周刊第45期-kestra03.png)


以上就是本期的全部内容，有感兴趣的赶紧去试试吧！我是四阿哥，关注我不错过每周的【GitHub 周刊】！也可以在我的[主页](https://siage.netlify.app/)查看更多往期的精彩内容！


