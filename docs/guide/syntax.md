---
link: https://fountain.io/syntax
---

# 语法

## 概述

Fountain 的黄金法则很简单：让它看起来像一个剧本。
但如果你想得到比这更多的指导，这里有一些非常简单的语法规则要记住。

- Scene Heading（场景标题）以 `INT`、`EXT` 等开头。
- Character（角色）名称是大写字母。
- Dialogue（对话部分）紧跟在角色之后。
- Parentheticals（附加说明）被包裹在（括号）内。
- Transitions（转场）以 `TO:` 结束。

这些都是基本知识。如果你想要更深入一点：

- 任何东西都可以成为场景标题（Scene Heading），只要以句号开头。
- 要使任何行成为过渡段（Transition），以大于符号开始。

您可能需要强调（emphasize）一些文本：

- 下划线使用 `_下划线_` 括起来。
- 斜体字用 `*星号*` 括起来。
- 粗体字用 `**双星号**` 包围。
- 你可以组合强调。例如，`***粗斜体，***` 或 `_在下划线的短语中加入一个*斜体字*_`。

如果你想方便地参考这些规则，在 [如何做](/guide/howto) 页面上有一个可打印的 PDF 文件。
你还可以在那里找到关于如何将 Fountain 文本转化为你可以打印、分享或在传统编剧软件中编辑的想法。

为了更好地了解 Fountain 的语法和高级用户功能的细节，请继续阅读。

## Scene Headings 场景标题

场景标题是指在其后面有一个空行的任何一行，并且以 `INT` 或 `EXT` 或类似的字样开头（完整列表如下）。
场景标题总是在其前面至少有一个空行。

**高级用户**：您可以通过单个句点开始行来“强制”其作为场景标题。

> Power User: [高级用户](https://zh.wikipedia.org/wiki/%E9%AB%98%E7%B4%9A%E7%94%A8%E6%88%B6)

下面是一个普通的场景标题，后面紧跟着一个强制的场景标题。

```md
EXT. BRICK'S POOL - DAY

Steel, in the middle of a heated phone call:

STEEL
They're coming out of the woodwork!
(pause)
No, everybody we've put away!
(pause)
Point Blank Sniper?

.SNIPER SCOPE POV

From what seems like only INCHES AWAY. _Steel's face FILLS the *Leupold Mark 4* scope_.
```

`EXT. BRICK'S POOL - DAY` 因为 `EXT` 而成为一个场景标题，但 `SNIPER SCOPE POV` 需要前面的句号来强制其作为一个场景标题元素。
句号会被从格式化的输出中删除。

请注意，只有一个前导句号和一个字母/数字字符紧随其后，才会强制作为场景标题。
这使得作者可以用省略号开始行动（Action）和对话（Dialogue）元素，而不必担心它们会被理解为场景标题。

```md
EXT. OLYMPIA CIRCUS - NIGHT

...where the second-rate carnival is parked for the moment in an Alabama field.
```

虽然推荐在场景标题中使用大写字母以增加可读性，但这并不是必须的。
这样仍然会被认为是一个场景标题。

```md
ext. brick's pool - day
```

以下列任何一项开头的行，后面有一个点或一个空格，被认为是一个场景标题（除非该行前面有一个惊叹号 `!` ）。不区分大小写。

```md
INT
EXT
EST
INT./EXT
INT/EXT
I/E
```

**高级用户**：场景标题可以有选择地附加上场景编号。场景编号是任何字母数字（加上破折号和句号），用 `#` 包裹。以下所有的都是有效的场景编号。

```md
INT. HOUSE - DAY #1#
INT. HOUSE - DAY #1A#
INT. HOUSE - DAY #1a#
INT. HOUSE - DAY #A1#
INT. HOUSE - DAY #I-1-A#
INT. HOUSE - DAY #1.#
INT. HOUSE - DAY - FLASHBACK (1944) #110A#
```

## Action 动作

行动，或场景描述，是指任何不符合其他元素标准的段落（如场景标题、人物、对话等）。
Fountain 尊重你逐行决定单空格或双空格的决定，把每一个回车都视为故意的。

```md
They drink long and well from the beers.

And then there's a long beat.
Longer than is funny.
Long enough to be depressing.

The men look at each other.
```

**高级用户**：你可以通过在前面加上感叹号 `!` 来强制其作为动作元素。

当 Action 是大写的，并且直接跟在另一行 Action 后面时，这很有帮助，可以防止这两行被解释为角色和对话元素。

关于断行逻辑的更多信息可以在[这里](https://fountain.io/syntax#section-br)找到。

在动作元素中保留了制表符和空格，允许作者在行中进行缩进。
制表符 Tab 会被转换为四个空格。

```md
He opens the card. A simple little number inside of which is hand written:

          Scott --

          Jacob Billups
          Palace Hotel, RM 412
          1:00 pm tomorrow

Scott exasperatedly throws down the card on the table and picks up the phone, hitting speed dial #1...
```

在这里，卡片上的文字前的十个空格被传递到格式化输出。这个例子中的所有行都是 Action。

(注意，当一个行动元素被[居中](https://fountain.io/syntax#section-centered)时，前导空格不会被保留。)

Action 也尊重垂直的空白。Fountain 文件中任何数量的空行都会被忠实地传递到格式化输出中，成为 Action 的空行。

## Character 人物

一个人物（Character）元素是任何完全大写的行，前面有一个空行，后面没有空行。

```md
STEEL
The man's a myth!
```

如果你想用制表符或空格缩进一个人物（Character）元素，你可以这样做，但没有必要。参见[Indenting 缩进](https://fountain.io/syntax#section-indenting)。

“人物扩展”--在同一行的人物名称后面的括号说明--可以用大写或小写。

```md
MOM (O. S.)
Luke! Come down for supper!

HANS (on the radio)
What was it you said?
```

角色名称必须至少包括一个字母字符。"R2D2" 可以，但 "23" 不行。

高级用户：你可以用 "at" 符号 `@` 来强制将其作为一个人物元素。

强制使用人物元素的能力对于需要小写字母的名称和非罗马语言是有帮助的。

```md
@McCLANE
Yippie ki-yay! I got my lower-case C back!
```

Fountain 将删除 `@`，并将 `McCLANE` 作为人物，保留其混合大小写。
