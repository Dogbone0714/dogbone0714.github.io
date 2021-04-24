---
title: 教你如何在Typora內部上傳圖片
copyright: true
date: 2021-04-22 15:51:48
tags:
- 教學
- Typora
categories:
- 教學
---

 是否總是在外部連結，如：imgur、ppt.cc上傳圖片後，再丟進Typora裡。不用那麼麻煩，今天教你如何在Typora內部設定自動上傳圖片至自己的圖庫！

<!-- more -->

![](https://i.loli.net/2021/04/22/bvafR6FHeq4mAod.png)

**Typora** 一直都是我覺得最好用的 Markdown 文字編輯器（目前沒有之一），除了所見即所得的功能之外，也可以在 markdown 原始碼間自由切換，而且因為我平常有自己備份 markdown 文件的習慣，因此也不太習慣使用第三方的軟體（例如：Evernote、Notion 等等）來做編輯，一來想要把所有內容備份到本機時比較麻煩、二來也比較難快速轉移發布到雲端空間的自由度。此外，還可以透過 CSS 直接調整成自己喜歡的樣式。

大約從 2020 年 2 月開始 Typora 就支援將拉進 Markdown 的圖片自動上傳到雲端空間（imgur, Github, ...等）的服務，覺得這功能真的超級方便的：

![Imgur](https://imgur.com/zyp3NdP.gif)

# 設定 Typora

## Step 1 

點選Typora上方列表的檔案裡的偏好設定。

## Step 2 

然後選取圖片選項。

將 When Insert....(當圖片插入時)，選項勾選 「Upload Image」

![](https://i.loli.net/2021/04/22/9scDewFgW1XYTSh.png)

## Step 3

接著圖片上傳者，我們使用內建的PicGo系統，你也可以使用別的系統，但我沒用過，各位可以查查看，或等我哪天發教學再說哈哈XDD

![](https://i.loli.net/2021/04/22/Wk9hHgpcmNvzQ8S.png)

## Step 4

 打開上圖的「Open Config File」，我們這裡使用的是一款中國的免費圖床(有Pro版，但我們需求暫時沒那麼大，免費版有5GB的空間) - [SM.MS](https://sm.ms/) 。

首先讓我們註冊個帳號。

![](https://i.loli.net/2021/04/22/4d2C5JhnlFzcafu.png)

然後按照指示到個人頁面(Dashboard)。

![](https://i.loli.net/2021/04/22/X432iIB7AVuELZQ.png)

之後產生個人的 API Token並複製下來，之後會用到。

![](https://i.loli.net/2021/04/22/oFYDfza9MuKJpQh.png)

## Step 5

開啟剛剛步驟4所說的「Open Config File」，讓我們貼上剛剛複製的Token就大功告成了！

![](https://i.loli.net/2021/04/22/vM4pIemHLf58RCK.png)

------

### Config 內的程式碼

Config.json 的程式碼我放在這，以免有人不知道東西怎麼填。

```json
{
"picBed": {
"uploader": "smms", 
"smms": {
"token": "XXXXXXXXXXXXXXX"//這裡面的token換成剛剛生成的 sm.ms 的token
}
},
"picgoPlugins": {}
}
```

