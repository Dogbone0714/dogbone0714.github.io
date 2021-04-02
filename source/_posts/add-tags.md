---
title: Hexo 全攻略 - 如何新增多個標籤及分類
copyright: true
date: 2021-03-25 15:50:37
tags:
- Hexo 部落格
- 教學 
categories:
- Hexo 部落格
---

本教程針對的是Windows環境下，Next主題的文章分類和標籤設置，其他主題也應該是類似的。添加成功後會在側邊欄或導航欄生成“分類”和“標籤”這兩個選項，看下圖：

<!-- more -->

![](https://i.loli.net/2021/03/25/T9p28IBmJQCyPrj.png)

點擊「分類」後的頁面：

![](https://i.loli.net/2021/03/25/7DUFadJQO3Z5Tks.png)

點擊「標籤」後的頁面：

![](https://i.loli.net/2021/03/25/HdhS2Dj6aBvbGE5.png)

### 創建「分類」選項

#### 生成「分類」頁並添加type屬性

打開命令行，進入博客所在文件夾。執行命令

```
hexo new page categories
```

成功後會提示：

```
INFO Created: ~/Documents/blog/source/categories/index.md
```

根據上面的路徑，找到`index.md`這個文件，打開後默認內容是這樣的：

```
---
title: 文章分類
date: 2017-05-27 13:47:40
---
```

添加`type: "categories"`到內容中，添加後是這樣的：

```
---
title: 文章分類
date: 2017-05-27 13:47:40
type: "categories"
---
```

保存並關閉文件。

#### 給文章添加“categories”屬性

打開需要添加分類的文章，為其添加categories屬性。下方的`categories: Hexo 部落格`表示添加這篇文章到「Hexo 部落格」這個分類。注意：hexo一篇文章只能屬於一個分類，也就是說如果在「- Hexo 部落格」下方添加「-xxx」，hexo不會產生兩個分類，而是把分類嵌套（即該文章屬於「- Hexo 部落格」下的「-xxx」分類）。

```
---
title: 從文組生到闖進資服競賽全國前三名 - 24屆 Innoserve競賽全紀錄
copyright: true
date: 2021-03-24 22:03:18
tags: 
- 經驗分享
- 資訊競賽
categories: 資訊競賽
---
```

至此，成功給文章添加分類，點擊首頁的“分類”可以看到該分類下的所有文章。當然，只有添加了`categories: xxx`的文章才會被收錄到首頁的“分類”中。

### 創建「標籤」選項

#### 生成「標籤」頁並添加type屬性

打開命令行，進入博客所在文件夾。執行命令

```
hexo new page tags
```

成功後會提示：

```
INFO Created: ~/Documents/blog/source/tags/index.md
```

根據上面的路徑，找到`index.md`這個文件，打開後默認內容是這樣的：

```
---
title: 標籤
date: 2017-05-27 14:22:08
---
```

添加`type: "tags"`到內容中，添加後是這樣的：

```
---
title: 文章分類
date: 2017-05-27 13:47:40
type: "tags"
---
```

保存並關閉文件。

#### 給文章添加「tags」屬性

打開需要添加標籤的文章，為其添加tags屬性。下方的`tags:`下方的`- 經驗分享` `- 資訊競賽`就是這篇文章的標籤了

```
---
title: 從文組生到闖進資服競賽全國前三名 - 24屆 Innoserve競賽全紀錄
copyright: true
date: 2021-03-24 22:03:18
tags: 
- 經驗分享
- 資訊競賽
categories: 資訊競賽
---
```

至此，成功給文章添加分類，點擊首頁的「標籤」可以看到該標籤下的所有文章。當然，只有添加了`tags: xxx`的文章才會被收錄到首頁的「標籤」中。

細心的朋友可能已經發現，這兩個的設置幾乎一模一樣！是的，沒錯，思路都是一樣的。所以我們可以打開scaffolds/post.md文件，在tages:上面加入categories:,保存後，之後執行`hexo new 文章名`命令生成的文件，頁面裡就有`categories:`項了。

scaffolds目錄下，是新建頁面的模板，執行新建命令時，是根據這裡的模板頁來完成的，所以可以在這裡根據你自己的需求添加一些默認值。

## 參考資料

[Issue：如何設置多標籤??](https://github.com/hexojs/hexo/issues/351)