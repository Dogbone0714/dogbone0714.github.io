---
title: 如何讓 Hexo 發布 免手動登入github
copyright: true
date: 2021-03-27 15:18:22
tags: 
- 教學
- Hexo 部落格
categories:
- Hexo 部落格
---

是否每次 `hexo g -d` 時要登入github帳號密碼，讓你時常感到厭煩？

在這裡簡單教學你，一個步驟，輕鬆省去手動登入的繁雜。

<!-- more -->

# 緣由

康康我在每次 `hexo g -d` 時 cmd都會跳出 github的登入視窗，但往往打完密碼後，卻會顯示出 login failed :

![](https://i.loli.net/2021/03/27/gdTyVprkauQM248.png)

每次都只能在cmd上登入 (目前仍未知原因)，雖然不是個大問題，但打久了，還是會感到厭煩。

# 解決方式

我在這邊找到一個方法可以解決這個問題，也可以省去每次 deploy都要登入的困擾。

## Step 1

修改_config.yml站點檔案,在repo值的https://後加 (Github)**使用者名稱:密碼@** 即可。

![](https://i.loli.net/2021/03/27/8GWyeCvZbocdJzB.jpg)

恭喜完成！