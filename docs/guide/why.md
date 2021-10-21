# 为什么有 Fountain CN?

Fountain 的剧本语法让编剧可以快速编写自己的剧本，而不用太过担心剧本的排版格式。

我在开发 [ADV.JS](https://github.com/YunYouJun/advjs)（一个面向未来与前端的文字冒险游戏引擎）时，需要设计一种语言以便能够将剧本快速转换为视觉小说的形式。

我们先假设这种语言叫做 `AdvScript`，它应当是剧本优先的，任何附加的配置、逻辑不影响作者编写剧本的体验。
所以我希望它是基于 Markdown 的语法扩展。
在草案进行的过程中，我幸运地发现了 [Fountain](https://fountain.io/)，它基本可以说是一种剧本业界的标准之一，不少剧本软件也基于此进行实现。

Fountain 本身便是基于 Markdown 的扩展语法规范，并可通过解析器编译为好莱坞剧本的事实标准格式。

因此，我们只需要基于此去做一些程序交互上的扩展语法，就可以实现不需要大幅度修改剧本的同时来生成对应的视觉小说。

而剧本的一些配置则可以放到 Front matter 里，这与平时写博客非常相似。需要多个页面分割，这部分则可以参考 [slidev](https://github.com/slidevjs/slidev)。

即:

`Fountain` + `Markdown 的代码块（实现扩展交互语法）` + `front matter（文件头部配置语法）`= `AdvScript`

> [gray-matter](https://github.com/jonschlinkert/gray-matter): Front Matter 解析器。

可惜的是，Fountain 目前的官方实现只有 Object-C 的版本。

> [nyousefi/Fountain)](https://github.com/nyousefi/Fountain)

毫无疑问，为了实现我的最终目标，我需要一个 TypeScript 编写的类型提示友好的 Fountain 解析器。
而为了体现开源精神，Fountain 的解析器应当是与基于 Fountain 的 AdvScript 的解析器是解耦的，可以为不同的用户群所使用。

既然要编写解析器了，那么必然需要先完整彻底地了解一下 Fountain 语法，但 Fountain 的中文资源少之又少。
不得不啃英文文档，而这般，又不如借此机会，将此翻译一遍，~~也算是共产主义精神的体现~~。

那么开始吧？
