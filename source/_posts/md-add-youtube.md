---
title: 如何在 Hexo 裡面插入 YouTube 連結 
copyright: true
date: 2021-03-25 18:06:24
tags: 
- 教學
- Hexo 部落格
- Markdown
categories:
- Hexo 部落格
---

你是否曾想在 Hexo 裡插入 [YouTube](https://www.youtube.com/) 連結，但怎麼試，卻發現YouTube沒辦法播放，這是因為 markdown 語法並不支援插入影片的格式。但在這裡我教你一個簡單的小方法也可以同樣達到你想要的效果。

<!-- more -->

## Youtube 影片

雖然你無法直接置入 Youtube 影片，但可以採用圖片連結的模式：

```markdown
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg"
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
```

你也可以直接在 Markdown 這樣寫，但會失去尺寸與邊線的設定：

```markdown
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```

將 YouTube 封面照片顯示出來，再將圖片超連結至影片連結，這樣就能快速達到跳轉哦 !