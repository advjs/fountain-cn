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
- Parentheticals（旁白）被包裹在（括号）内。
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

## Dialogue 对话

对话是指字符或括号元素之后的任何文本。

```md
SANBORN
A good 'ole boy. You know, loves the Army, blood runs green. Country boy. Seems solid.
```

对话中允许手动换行，也允许故意 "空 "行--参见[Line Breaks 换行](https://fountain.io/syntax#section-br) 部分。

```md
DAN
Then let's retire them.
_Permanently_.
```

## Parenthetical 旁白

旁白跟在人物（Character）或对话（Dialogue）元素后面，使用圆括号 `()` 包裹。

```md
STEEL
(starting the engine)
So much for retirement!
```

## Lyrics 歌词

你创建一句歌词的方法是以一个带波浪号 `~` 的行开始。

```md
~Willy Wonka! Willy Wonka! The amazing chocolatier!
~Willy Wonka! Willy Wonka! Everybody give a cheer!
```

Fountain 将去掉 `~`，并让应用程序对歌词进行适当的调整。歌词总是被强制的。没有“自动”的方式来获得它们。

## Transition 转场

对转场元素的要求是：

- 大写字母
- 前面是空行，后面是空行
- 以 `TO:` 结尾

例如：

```md
Jack begins to argue vociferously in Vietnamese (?), But mercifully we...

CUT TO:

EXT. BRICK'S POOL - DAY
```

**高级用户**：你可以用大于符号 `>` 开始，强制任何一行作为一个过渡元素。

```md
Brick and Steel regard one another. A job well done.

> Burn to White.
```

**高级用户**: 如果一行符合过渡规则，但你希望它被解释为别的东西，你有两个选择。

- 在它前面加一个句号 `.`，以强制作为一个场景标题，或者...
- 在冒号后添加一个或多个空格，使该行被解释为行动（因为该行不再以冒号结束）。

## Centered Text 居中文本

居中的文本构成一个行动元素，并以大于/小于的方式置于括号内。

`>THE END<`

前导空格在 Action 中通常会被保留，但对于居中的文本则不然，所以如果你愿意，你可以在文本和 `><` 之间添加空格。

```md
> THE END <
```

## Emphasis 强调

Fountain 遵循 Markdown 的强调规则，但它保留了下划线的使用，这与剧本中的斜体字是不能互换的。

```txt
*italics*
**bold**
***bold italics***
_underline_
```

通过这种方式，作者可以混合搭配粗体、斜体和下划线，就像编剧经常做的那样。

```md
From what seems like only INCHES AWAY. _Steel's face FILLS the *Leupold Mark 4* scope_.
```

如果你需要逐字逐句地使用任何强调语法，你可以使用 Markdown 约定的反斜杠来转义这些字符。

```md
Steel enters the code on the keypad: **\*9765\***
```

信不信由你，这变成了：

> Steel enters the code on the keypad: **\*9765\***

与 Markdown 一样，强调字符周围的空格是有意义的。在这个例子中，星号不会在它们之间触发斜体，因为两者的左边都有一个空格。

```md
He dialed *69 and then *23, and then hung up.
```

但在这种情况下，星号之间的文字将被斜体化。

```txt
He dialed *69 and then 23*, and then hung up.
```

作者需要使得一个或两个星号逃逸，以避免意外的斜体。

```md
He dialed \*69 and then 23\*, and then hung up.
```

与 Markdown 一样，强调也不会跨越换行符。因此，在这个例子的格式化输出中没有斜体字，只有星号。

```txt
As he rattles off the long list, Brick and Steel *share a look.

This is going to be BAD.*
```

## Title Page 标题页

Fountain 文档中首页之事总是可选的标题。
信息的编码格式为 `key: value`。键值可以有空格（例如：Draft date），但必须以冒号结束。

```txt
Title:
    _**BRICK & STEEL**_
    _**FULL RETIRED**_
Credit: Written by
Author: Stu Maschwitz
Source: Story by KTM
Draft date: 1/20/2012
Contact:
    Next Level Productions
    1588 Mission Dr.
    Solvang, CA 93463
```

建议标题（Title）、版权（Credit）、作者（Author）（或 Authors，两者都是有效的关键语法）和来源（Source）在格式化的输出中会被放在页面的中央。
联系人 `Contact` 和起草日期 `Draft date` 将被放在左下方。

数值可以与键合在一起，也可以缩进到键下面的换行上（如上面的联系）。缩进是 3 个或更多的空格，或一个制表符。缩进模式允许同一个键有多个值（多个作者，多个地址行）。

键值可能会改变，但上面列出的那些键值构成了一个最小的有用集合。如果你将不支持的键值添加到你的文档中，它们将被忽略，但你可能会发现它们作为元数据是有用的。

所有标题页部分都是可选的。如：

```md
Draft date: 6/23/2012
```

...本身就是一个有效的标题页。

分页符是隐含在标题页之后。只需放下两行并开始编写剧本。

## Page Breaks 分页符

分页符是指包含三个或更多连续等号的一行，仅此而已。
分页符对电视脚本很有用，因为在电视脚本中，分页符是明确标示的，也可以用来创建具有引言或序幕文字的“虚荣浮华”的首页。

```md
The General Lee flies through the air. FREEZE FRAME.

NARRATOR
Shoot, to the Dukes that's about like taking Grandma for a Sunday drive.

> **End of Act One** <

===

> **Act Two** <

The General Lee hangs in the air, right where we left it. The NARRATOR'S voice kicks in.
```

## Punctuation 标点

一些 Markdown 解释器将普通文本中常见的标点符号的简写转换为它们的排版对应物。
例如，三个连续的破折号变成了 em-dash，三个连续的句号变成了省略号，直引号变成了曲引号。

Fountain 不做这些，因为剧本的排版惯例是模仿打字机。
无论你如何输入撇号、引号、破折号和圆点，那就是它们在剧本中的最终样子。

## Line Breaks 换行符

与一些标记语言不同，Fountain 把每一个回车都当作是故意地。
这使得作者可以控制 Action 元素中段落之间的间距，正如这个经典的例子中所看到的。

```md
Murtaugh, springing hell bent for leather -- and folks, grab your hats ... because just then, a BELL COBRA HELICOPTER crests the edge of the bluff.

An explosion of sound...
As it rises like an avenging angel ...
Hovers, shattering the air with turbo-throb, sandblasting the hillside with a roto-wash of loose dirt, tables, chairs, everything that's not nailed down ...

Screaming, chaos, frenzy.
Three words that apply to this scene.
```

所有这些行都被解释为 Action，而作者的单空格和双空格的决定将被保留。

在一些不寻常的情况下，这将会失败。如果你写了这样的东西：

```md
INT. CASINO - NIGHT

THE DEALER eyes the new player warily.

SCANNING THE AISLES...
Where is that pit boss?

No luck. He has no choice to deal the cards.
```

## Indenting 缩进

除 Action 外，其他元素中的前导制表符或空格将被忽略。
如果你选择使用它们，你的 Fountain 文本文件可能看起来更像一个电影剧本。

在这个例子中，过渡部分前面有四个制表符 `⇥`，角色名称有三个，旁白有两个，对话部分有一个。

```md
                CUT TO:

INT. GARAGE - DAY

BRICK and STEEL get into Mom's PORSCHE, Steel at the wheel. They pause for a beat, the gravity of the situation catching up with them.

            BRICK
    This is everybody we've ever put away.

            STEEL
        (starting the engine)
    So much for retirement!

They speed off. To destiny!
```

Tabs 不会为 Fountain ”提示“格式化。
它们会被忽略，并且这些行会被解释为不存在。
但在 Action 中是个例外，它保留前面的制表符和空格。
这使得作者可以手动缩进行。
关于这一点，请见 [Action](#action-动作)。

## Notes 注释

注释是通过用双括号包围一些文本来创建的。注释可以插在行与行之间，或插在行的中间。

```txt
INT. TRAILER HOME - DAY

This is the home of THE BOY BAND, AKA DAN and JACK[[Or did we think of actual names for these guys?]].  They too are drinking beer, and counting the take from their last smash-and-grab.  Money, drugs, and ridiculous props are strewn about the table.

[[It was supposed to be Vietnamese, right?]]

JACK
(in Vietnamese, subtitled)
*Did you know Brick and Steel are retired?*
```

在解析过程中，注释周围的空行将被删除。

注释可以包含回车，但如果你希望一个注释包含一个空行，你必须在那里放置两个空格，将元素“连接”成一个。

```txt
His hand is an inch from the receiver when the phone RINGS.  Scott pauses for a moment, suspicious for some reason.[[This section needs work.
Either that, or I need coffee.
{two spaces}
Definitely coffee.]] He looks around.  Phone ringing.
```

注释被设计成与编剧软件中常见的插入式注释类型兼容，例如 Final Draft 的 Scriptnotes。要隐藏或"注释"文本的部分，请使用 [boneyard](https://fountain.io/syntax#section-bone) 语法。

> 译者注：事实上基于 Markdown 实现的 Fountain 解析，如果支持 html 时，使用 `<!-- -->` 的注释方式也不失为一个好的办法。

## Boneyard 墓地

> 这个「墓地」翻译有点奇怪，不知道有没有别的术语。

如果你想让 Fountain 忽略一些文本，就用 `/*一些文本*/` 来包裹它。在这个例子中，整个场景被放到了 boneyard 中。在格式化的输出中，它将被完全忽略。

```txt
COGNITO
Everyone's coming after you mate!  Scorpio, The Boy Band, Sparrow, Point Blank Sniper...

As he rattles off the long list, Brick and Steel share a look.  This is going to be BAD.

CUT TO:
/*
INT. GARAGE - DAY

BRICK and STEEL get into Mom's PORSCHE, Steel at the wheel.  They pause for a beat, the gravity of the situation catching up with them.

BRICK
This is everybody we've ever put away.

STEEL
(starting the engine)
So much for retirement!

They speed off.  To destiny!

CUT TO:
*/
EXT. PALATIAL MANSION - DAY

An EXTREMELY HANDSOME MAN drinks a beer.  Shirtless, unfortunately.
```

Boneyard 是语法不跨行的例外。只要你愿意，你的 `/* ... */` 对可以横跨你的剧本。

## Sections and Synopses 章节和概要

_Sections_ 是管理故事结构的可选标记。
一些剧本应用使用这些标记，类似于导航视图中的嵌套文件夹。

Fountain 的 Sections 类似于 Markdown 的 ATX 风格标题，但不同的是，它们不会出现在格式化的输出中。

通过在一行前面加上一个或多个英镑符号 `#` 字符来创建一个章节。

```md
CUT TO:

# This is a Section

INT. PALACE HALLWAY - NIGHT
```

你可以通过添加更多的 `#` 字符来嵌套 Sections。

```md
# Act

## Sequence

### Scene

## Another Sequence

# Another Act
```

如果你使用一个能识别 Markdown 标题的应用（比如 Mac 上的 [MultiMarkdown Composer](http://bit.ly/mmdcomposer) 或 iPad 上的 [Writing Kit](http://bit.ly/writing_kit)）来用 Fountain 写作，你就能轻松地浏览你的剧本，就像浏览 Markdown 文档一样。

Fountain 的 Sections 纯粹是作者的工具--它们在格式化输出中被完全忽略。在这方面，它们很像 Movie Magic Screenwriter 中提供的结构工具。

Synopses 梗概是描述章节或场景的可选文本块。

梗概是以等号 `=` 为前缀的单行，它们可以位于剧本的任何地方。

```md
# ACT I

= Set up the characters and the story.

EXT. BRICK'S PATIO - DAY

= This scene sets up Brick & Steel's new life as retirees. Warm sun, cold beer, and absolutely nothing to do.

A gorgeous day. The sun is shining. But BRICK BRADDOCK, retired police detective, is sitting quietly, contemplating -- something.
```

与 Sections（章节） 一样，Synopses（概要）纯粹是作家在提纲和组织过程中的可选工具。它们在格式化的输出中被忽略。

并非所有的编剧应用程序都支持提要或章节，但大多数都支持某种无形的标记，比如 Notes（笔记）。
这些应用程序可能会选择导入 Fountain 的概要和章节作为注释。
有些应用程序支持由单一场景标题定义的 “场景” 概要。这类应用可能会正确地导入场景标题概要，但需要导入章节概要作为注释。

## Error Handling 错误处理

Fountain 会尽力将文本文件合理地解释为剧本格式。
当有歧义时，Fountain 将文本返回为 Action。
与其跳过格式错误的文本，不如「以错误的格式」向作者展示他们所写的内容。

Fountain 对格式错误的最好防范措施是，它不会在双换行处寻找结尾的句法元素，防止你把一半的剧本变成评论，或斜体字。
这条规则的例外是 `/* boneyard */` 包装器，它被允许跨越多行。
