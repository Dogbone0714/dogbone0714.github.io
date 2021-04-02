---
title: 撰寫 Hexo 文章 - Markdown 語法大全
date: 2021-03-23 23:55:47
categories: Hexo 部落格
copyright: true
---

Markdown 的目標是實現「易讀易寫」，並強調它的「可讀性」，因此 Markdown 的語法全由標點符號所組成，並經過嚴謹慎選，是為了讓它們看起來就像所要表達的意思；以下是 Markdown 大部分的語法。

<!-- more -->

# **<font color=#0000FF>常用語法 - 文字樣式 </font>**

##  **<font color=#FF6600>文字字體</font>**

| **類別** | **語法**           | **顯示結果**     |
| -------- | ------------------ | ---------------- |
| 粗體     | `**我是粗體**`     | **我是粗體**     |
| 斜體     | `*我是斜體*`       | *我是斜體*       |
| 粗斜體   | `***我是粗斜體***` | ***我是粗斜體*** |
| 刪除線   | `~~我是刪除線~~`   | ~~我是刪除線~~   |
| 底線     | `<u>我是底線<u>`   | <u>我是底線</u>  |

## **<font color=#FF6600>文字顏色</font>**

Markdown 並沒有更改文字顏色的語法，因此只能我們靠自己加入 HTML 語法來修改文字顏色，只要在欲更改文字顏色的地方加入 `<font color=#008000>我是深綠色</font>` ：<font color=#008000>我是深綠色</font>。

在此附上一些常用的顏色，使用者也可以到 [常用顏色表](https://www.ifreesite.com/color/web-color-code.htm) 這個網站來找尋自己喜歡的顏色。

| 語法                                | 顯示結果                          | 語法                                | 顯示結果                          |
| :---------------------------------- | :-------------------------------- | :---------------------------------- | :-------------------------------- |
| `<font color=#800000>酒紅色</font>` | <font color=#800000>酒紅色</font> | `<font color=#FF0000>紅色</font>`   | <font color=#FF0000>紅色</font>   |
| `<font color=#FF6600>橘色</font>`   | <font color=#FF6600>橘色</font>   | `<font color=#FFD700>金色</font>`   | <font color=#FFD700>金色</font>   |
| `<font color=#FFFF00>黃色</font>`   | <font color=#FFFF00>黃色</font>   | `<font color=#00FF00>綠色</font>`   | <font color=#00FF00>綠色</font>   |
| `<font color=#008000>墨綠色</font>` | <font color=#008000>墨綠色</font> | `<font color=#00FFFF>青色</font>`   | <font color=#00FFFF>青色</font>   |
| `<font color=#0000FF>深藍色</font>` | <font color=#0000FF>深藍色</font> | `<font color=#FF00FF>粉紅色</font>` | <font color=#FF00FF>粉紅色</font> |
| `<font color=#800080>紫色</font>`   | <font color=#800080>紫色</font>   | `<font color=#808080>灰色</font>`   | <font color=#808080>灰色</font>   |

## **<font color=#FF6600>標題</font>**

使用 `#` 來表示等級一的標題，總共有六個等級，且 # 字符號和文字間**要空一格**。語法依此類推：

```markdown
# 等級一標題
## 等級二標題
### 等級三標題
#### 等級四標題
##### 等級五標題
###### 等級六標題
```

其結果顯示如下圖：

![](https://i.loli.net/2021/03/24/jmgKkYVIx7vbFT4.png)

## **<font color=#FF6600>程式碼</font>**

- **<font color=#008000>文字間程式碼</font>**

**插入在文字間**的程式碼請使用以下語法，也就是用鍵盤 Tab 鍵上方的反引號來包住：

```
C語言的輸入請使用 `scanf()` 函式。
```

其結果顯示如下：

C語言的輸入請使用 `scanf()` 函式。

- **<font color=#008000>段落程式碼</font>**

若要以整行或整段來顯示程式碼，請使用也就是用鍵盤 Tab 上方的三個反引號來包住，且可以**<font color=#800080>在第一列最後方指定程式語言類型(也能不指定)，這樣會在特殊函式或語法上標示特殊顏色</font>**。

例如使用 C 語言：

![](https://i.loli.net/2021/03/24/WzI2tvr5NmEMaAF.png)

其結果顯示如下：

```c
// HelloWorld 程式
#include <stdio.h>
#include <stdlib.h>

int main( )
{
    printf("HelloWorld\n");
}
```

作者查到支援的程式碼列表如下，在反引號後輸入下面括弧前的文字（[參考網站](https://support.codebasehq.com/articles/tips-tricks/syntax-highlighting-in-markdown)）：

- Cucumber (‘*.feature’)
- abap (‘*.abap’)
- ada (‘*.adb’, ‘*.ads’, ‘*.ada’)
- ahk (‘*.ahk’, ‘*.ahkl’)
- apacheconf (‘.htaccess’, ‘apache.conf’, ‘apache2.conf’)
- applescript (‘*.applescript’)
- as (‘*.as’)
- as3 (‘*.as’)
- asy (‘*.asy’)
- bash (‘*.sh’, ‘*.ksh’, ‘*.bash’, ‘*.ebuild’, ‘*.eclass’)
- bat (‘*.bat’, ‘*.cmd’)
- befunge (‘*.befunge’)
- blitzmax (‘*.bmx’)
- boo (‘*.boo’)
- brainfuck (‘*.bf’, ‘*.b’)
- c (‘*.c’, ‘*.h’)
- cfm (‘*.cfm’, ‘*.cfml’, ‘*.cfc’)
- cheetah (‘*.tmpl’, ‘*.spt’)
- cl (‘*.cl’, ‘*.lisp’, ‘*.el’)
- clojure (‘*.clj’, ‘*.cljs’)
- cmake (‘*.cmake’, ‘CMakeLists.txt’)
- coffeescript (‘*.coffee’)
- console (‘*.sh-session’)
- control (‘control’)
- cpp (‘*.cpp’, ‘*.hpp’, ‘*.c++’, ‘*.h++’, ‘*.cc’, ‘*.hh’, ‘*.cxx’, ‘*.hxx’, ‘*.pde’)
- csharp (‘*.cs’)
- css (‘*.css’)
- cython (‘*.pyx’, ‘*.pxd’, ‘*.pxi’)
- d (‘*.d’, ‘*.di’)
- delphi (‘*.pas’)
- diff (‘*.diff’, ‘*.patch’)
- dpatch (‘*.dpatch’, ‘*.darcspatch’)
- duel (‘*.duel’, ‘*.jbst’)
- dylan (‘*.dylan’, ‘*.dyl’)
- erb (‘*.erb’)
- erl (‘*.erl-sh’)
- erlang (‘*.erl’, ‘*.hrl’)
- evoque (‘*.evoque’)
- factor (‘*.factor’)
- felix (‘*.flx’, ‘*.flxh’)
- fortran (‘*.f’, ‘*.f90’)
- gas (‘*.s’, ‘*.S’)
- genshi (‘*.kid’)
- glsl (‘*.vert’, ‘*.frag’, ‘*.geo’)
- gnuplot (‘*.plot’, ‘*.plt’)
- go (‘*.go’)
- groff (‘*.(1234567)’, ‘*.man’)
- haml (‘*.haml’)
- haskell (‘*.hs’)
- html (‘*.html’, ‘*.htm’, ‘*.xhtml’, ‘*.xslt’)
- hx (‘*.hx’)
- hybris (‘*.hy’, ‘*.hyb’)
- ini (‘*.ini’, ‘*.cfg’)
- io (‘*.io’)
- ioke (‘*.ik’)
- irc (‘*.weechatlog’)
- jade (‘*.jade’)
- java (‘*.java’)
- js (‘*.js’)
- jsp (‘*.jsp’)
- lhs (‘*.lhs’)
- llvm (‘*.ll’)
- logtalk (‘*.lgt’)
- lua (‘*.lua’, ‘*.wlua’)
- make (‘*.mak’, ‘Makefile’, ‘makefile’, ‘Makefile.*‘, ‘GNUmakefile’)
- mako (‘*.mao’)
- maql (‘*.maql’)
- mason (‘*.mhtml’, ‘*.mc’, ‘*.mi’, ‘autohandler’, ‘dhandler’)
- markdown (‘*.md’)
- modelica (‘*.mo’)
- modula2 (‘*.def’, ‘*.mod’)
- moocode (‘*.moo’)
- mupad (‘*.mu’)
- mxml (‘*.mxml’)
- myghty (‘*.myt’, ‘autodelegate’)
- nasm (‘*.asm’, ‘*.ASM’)
- newspeak (‘*.ns2’)
- objdump (‘*.objdump’)
- objectivec (‘*.m’)
- objectivej (‘*.j’)
- ocaml (‘*.ml’, ‘*.mli’, ‘*.mll’, ‘*.mly’)
- ooc (‘*.ooc’)
- perl (‘*.pl’, ‘*.pm’)
- php (‘*.php’, ‘*.php(345)’)
- postscript (‘*.ps’, ‘*.eps’)
- pot (‘*.pot’, ‘*.po’)
- pov (‘*.pov’, ‘*.inc’)
- prolog (‘*.prolog’, ‘*.pro’, ‘*.pl’)
- properties (‘*.properties’)
- protobuf (‘*.proto’)
- py3tb (‘*.py3tb’)
- pytb (‘*.pytb’)
- python (‘*.py’, ‘*.pyw’, ‘*.sc’, ‘SConstruct’, ‘SConscript’, ‘*.tac’)
- rb (‘*.rb’, ‘*.rbw’, ‘Rakefile’, ‘*.rake’, ‘*.gemspec’, ‘*.rbx’, ‘*.duby’)
- rconsole (‘*.Rout’)
- rebol (‘*.r’, ‘*.r3’)
- redcode (‘*.cw’)
- rhtml (‘*.rhtml’)
- rst (‘*.rst’, ‘*.rest’)
- sass (‘*.sass’)
- scala (‘*.scala’)
- scaml (‘*.scaml’)
- scheme (‘*.scm’)
- scss (‘*.scss’)
- smalltalk (‘*.st’)
- smarty (‘*.tpl’)
- sourceslist (‘sources.list’)
- splus (‘*.S’, ‘*.R’)
- sql (‘*.sql’)
- sqlite3 (‘*.sqlite3-console’)
- squidconf (‘squid.conf’)
- ssp (‘*.ssp’)
- tcl (‘*.tcl’)
- tcsh (‘*.tcsh’, ‘*.csh’)
- tex (‘*.tex’, ‘*.aux’, ‘*.toc’)
- text (‘*.txt’)
- v (‘*.v’, ‘*.sv’)
- vala (‘*.vala’, ‘*.vapi’)
- vbnet (‘*.vb’, ‘*.bas’)
- velocity (‘*.vm’, ‘*.fhtml’)
- vim (‘*.vim’, ‘.vimrc’)
- xml (‘*.xml’, ‘*.xsl’, ‘*.rss’, ‘*.xslt’, ‘*.xsd’, ‘*.wsdl’)
- xquery (‘*.xqy’, ‘*.xquery’)
- xslt (‘*.xsl’, ‘*.xslt’)
- yaml (‘*.yaml’, ‘*.yml’)

# **<font color=#0000FF>常用語法 - 其它 </font>**

## **<font color=#FF6600>分隔線</font>**

一整列中輸入三個以上的 `***` 或三個以上的 `---`，且<font color=#800080>整列**不能有其它文字**</font>，結果顯示如下：

------

## **<font color=#FF6600>項目符號/編號</font>**

**<font color=#v3509>項目符號</font>**可以用 `*`、`+` 或 `-`，放在整列的開頭當作項目符號，且符號和文字間<font color=#800080>**要空一格**</font>，語法範例如下：

```
+ aaa
+ bbb
+ ccc
```

其結果顯示如下：

- aaa

- bbb

- ccc

而**<font color=#v3509>編號</font>**就是使用數字在加上 `.`，且 `.` 和文字間<font color=#800080>**要空一格**</font>，語法範例如下：

```
1. aaa
2. bbb
3. ccc
```

其結果顯示如下：

1. aaa
2. bbb
3. ccc

若使用**<font color=#008000>「階層式」的項目符號/編號</font>**，只要記得空的格數要整齊即可。

```
+ 益者三友
  + 友直
  + 友諒
  + 友多聞
     + 益矣
+ 損者三友
  + 友便辟
  + 友善柔
  + 友便佞
     + 損矣
```

其結果顯示如下：

- 益者三友
  - 友直
  - 友諒
  - 友多聞
    - 益矣
- 損者三友
  - 友便辟
  - 友善柔
  - 友便佞
    - 損矣

## **<font color=#FF6600>代辦事項</font>**

代辦事項的語法如下，若要在框框中打勾，則需在 [ ] 中輸入 `x`。

```
- [ ] 空心菜
- [x] 玉米
- [x] 醬油
- [ ] 豬肉
```

其結果顯示如下：

-  空心菜
-  玉米
-  醬油
-  豬肉

## **<font color=#FF6600>引用區塊</font>**

使用 `>` 放在整列的開頭當作引用區塊，<font color=#800080>且 `>` 和文字間**要空一格**</font>，語法範例如下：

```
> 人遠比自己想象的要堅強
> 特別是當你回頭看看的時候
> 你會發現自己走了一段自己都沒想到的路
```

其結果顯示如下：

> 人遠比自己想象的要堅強
> 特別是當你回頭看看的時候
> 你會發現自己走了一段自己都沒想到的路

而”引用”也支援「階層式」顯示：

```
> 人生就像一杯茶
> > 不會苦一輩子
> > > 但總會苦一陣子
```

其結果顯示如下：

> 人生就像一杯茶
>
> > 不會苦一輩子
> >
> > > 但總會苦一陣子

## **<font color=#FF6600>文字超連結</font>**

```markdown
[奇摩首頁](https://tw.yahoo.com/)
[Google首頁](https://www.google.com/)
[Facebook](https://www.facebook.com/)
```

其結果顯示如下：

[奇摩首頁](https://tw.yahoo.com/)
[Google首頁](https://www.google.com/)
[Facebook](https://www.facebook.com/)

## **<font color=#FF6600>圖片</font>**

圖片的語法和文字超連結很像，只是在語法開頭再加上 `!`，中括弧內指的是圖片的”替代文字”(當圖片連結失效後會顯示的文字，如下面的 FB Logo)：

```markdown
![奇摩首頁Logo](https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png)
![Google首頁Logo](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)
![FB Logo](123.png)
```

其結果顯示如下：

[![奇摩首頁Logo](https://i.loli.net/2021/03/24/Z4HBulkyeSmEPKI.png)](https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png)

[奇摩首頁Logo](https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png)

[![Google首頁Logo](https://i.loli.net/2021/03/24/3Js7OKap2CMDZIQ.png)Google首頁Logo](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)
[![FB Logo](123.png)FB Logo](123.png)

## **<font color=#FF6600>表格</font>**

表格的基本語法如下，第一列是表格的標題列，然後第二列固定要是以 `---` 做區隔，加欄位都是使用 `|` 來添加。注意表格的每欄寬度會**自動分配**，所以可以忽略一切的空格(也就是每列的 `|` **沒有對齊也沒關係**，且加多少空格也不會影響每欄的寬度)。

```
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Text1 | Text2 | Text3 |
| Text4    | Text5    | Text6    |
```

其結果顯示如下：

| Column 1 | Column 2 | Column 3 |
| :------- | :------- | :------- |
| Text1    | Text2    | Text3    |
| Text4    | Text5    | Text6    |

而每欄可以決定要如何對齊，對齊方式取決於第二列的 `---`，再加上 `:` 符號：

- `:---` 靠左對齊。
- `---:` 靠右對齊。
- `:---:` 置中對齊。

```
| 預設對齊 | 靠左對齊 | 靠右對齊 | 置中對齊 |
| ----- | :----- | -----: | :-----: |
| Text1 | Text2 | Text3 | Text4 |
| Text5 | Text6 | Text7 | Text8 |
| Text9 | Text10 | Text11 | Text12 |
```

其結果顯示如下：

| 預設對齊 | 靠左對齊 | 靠右對齊 | 置中對齊 |
| :------- | :------- | :------- | :------- |
| Text1    | Text2    | Text3    | Text4    |
| Text5    | Text6    | Text7    | Text8    |
| Text9    | Text10   | Text11   | Text12   |

# <font color=#0000FF>**注意事項** </font>

- 某些語法的外觀樣式如：引用、分隔線、項目符號等，<font color=#800080>會因為使用者套用的 Hexo 主題而有不同</font>。
- 圖片可以放在 Hexo 資料夾一併上傳到 GitHub，例如圖片 123.jpg 放到 **myblog/source/images** 路徑下，然後圖片語法連結的地方輸入 **/images/123.jpg** ，就會顯示該圖片。
  不過這種方法**作者不建議**(<font color=#800080>也就是不建議把 GitHub 當作圖床用</font>)，因為當文章一多，會有機會達到 GitHub Pages 的使用限制；因此可以搜尋各大免費圖床來使用，如 [Imgur](https://imgur.com/), [Upload.cc](https://upload.cc/) 等。
- **HTML 語法盡量包在 Markdown 語法裡面**，否則可能會造成一些顯示上的錯誤，舉例如下：

```
語法撰寫範例一：將「今天天氣真好。」顯示粗體並更改為紅色
**<font color=#FF0000>今天天氣真好。</font>**

語法撰寫範例二：將「Title」設定成等級一標題並更改為藍色
# <font color=#0000FF>Title</font>
```

- 呈上，因為 HTML 語法和 Markdown 語法交錯使用，在 hexo-admin 文章後台的編輯區和預覽區可能會有顯示問題，請先 publish 後，以 **localhost 的文章頁面顯示為準**。