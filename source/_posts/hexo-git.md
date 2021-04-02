---
title: 如何使用 Hexo + GitHub Pages 架設部落格
copyright: true
date: 2021-03-24 22:04:25
tags:
- Hexo 部落格
- 教學
- git
categories: 
- Hexo 部落格
---

## 前言

本篇主要介紹如何使用 Hexo 並搭配 GitHub 來快速架設網誌。從介紹什麼是 Hexo 框架，該如何安裝、建立環境，接著介紹一些常用指令，以及如何部署到 GitHub 上。

<!-- more -->

文章可分為下列幾個部分：

- 什麼是 Hexo？
- 前置作業
  - 安裝需求
- Hexo 環境建置
- 常用指令
- 部署到 GitHub
  - 建立 GitHub 專案
  - 將檔案發布到 GitHub

## 什麼是 Hexo？

> 引用[官網介紹](https://github.com/hexojs/hexo)：A fast, simple & powerful blog framework, powered by Node.js.

[Hexo](https://hexo.io/zh-tw/) 其實就是一個基於 Node.js 開發的網誌框架，具有下列幾項特點：

- 編譯速度非常快
- 能夠支援 Markdown 語法解析文章，並透過主題渲染靜態檔案
- 具有豐富的外掛套件
- 支援一鍵部署到 GitHub Pages 或 Heroku 等支援靜態網頁的空間

## 前置作業

### 安裝需求

在開始安裝 Hexo 之前，必須先在電腦安裝下列工具：

- #### [Node.js](https://nodejs.org/en/)：提供 npm 來安裝所需的套件。這裡可選擇安裝左側 14.16.0 LTS 版本

> Hexo 官網建議使用 Node.js 10.0 及以上版本，若不確定下載哪個版本，可在終端機輸入 `npm versin` 查看版本號。

![](https://i.loli.net/2021/03/25/VmRfF23iavugDAw.png)

- #### [Git](https://git-scm.com/)：用來將檔案發布到 GitHub Page

![](https://i.loli.net/2021/03/25/q3NSDMxYzvVR9Ff.png)

## Hexo 環境建置
完成前置作業後，接著就要來建立 Hexo 環境，步驟如下：

> 若對 CLI 不熟悉，可參考：Command Line 入門 & 基本指令

### Step1. 安裝 Hexo

![](https://i.loli.net/2021/03/25/FmozyeT9AnMaHP1.png)

開啟 CLI 介面（例如 cmd、git-bash 等終端機），並輸入下列指令安裝 Hexo：

```
npm install hexo-cli -g
```

![](https://i.loli.net/2021/03/25/NQj4z1pdt2VBHrs.png)

安裝完後，可輸入 `hexo version` 或 `hexo -v` 查看 Hexo 版本，確認是否有安裝成功：

![](https://i.loli.net/2021/03/25/1e2a3U68gdVGbju.png)

### Step2. 初始化 Hexo

接著要初始化 Hexo，這裡有兩種做法：

1. 直接輸入下面指令，會自動於所在目錄建立一個新資料夾以操作 Hexo。記得將括號內修改成自己的資料夾名稱，若不指定資料夾名稱，則會直接初始化當前目錄：

```
hexo init <資料夾名稱>
```

![](https://i.loli.net/2021/03/25/lsItXzkNq7WSAFM.png)

1. 也可以先建立好資料夾，並在該資料夾輸入上述指令，同樣能進行初始化。可使用 cd 指令來切換路徑：

```
cd <資料夾名稱 or 資料夾路徑>
```

![](https://i.loli.net/2021/03/25/qC9bK3YujxiXvnB.png)

### Step3. 在資料夾安裝所需檔案

確認 CLI 上的路徑是在資料夾中，接著執行下列指令，安裝所需的 npm 套件：

```
npm install
```

> 也可以直接在資料夾目錄輸入 cmd，按下 enter 後就會在這個路徑開啟終端機。

安裝完成後，進入資料夾會看到下方這些檔案和資料夾：

```
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

#### _config.yml

- 有關網站配置的檔案，可修改各種配置設定。例如：網站標題、網站的網址、使用主題名稱等等
- 詳細內容可以參考[官方文件](https://hexo.io/zh-tw/docs/configuration)

#### package.json

記錄所有載入的應用程式資料，也就是專案中需要的所有模組。

#### scaffolds 模板

- 當我們建立新文章時，Hexo 會根據 scaffolds 中的模板建立相對應的檔案
- 資料夾中有三種預設[佈局](https://hexo.io/zh-tw/docs/writing.html)：post、page 和 draft，分別對應：要發布的文章、頁面、草稿

#### themes 主題

- 用來存放主題的資料夾
- Hexo 會根據主題來解析 scouce 資料夾中的檔案並產生靜態頁面。預設主題為 [landscape](https://github.com/hexojs/hexo-theme-landscape)

#### source 資源

- 用來存放原始檔案的地方，例如 Markdown 檔、圖片、各種頁面（分頁、關於等）
- 通常資料夾命名開頭會加上底線 `_`，例如 `_imgs`
- 以 `_` 開頭的檔案、資料夾或隱藏檔案會被忽略，除了 `_posts` 資料夾以外
- Markdown 檔和 HTML 檔會被解析，並放到 public 資料夾，而其他檔案則會被拷貝過去

#### source & public & .deploy_git 的差別

- 執行 `$ hexo generate` 之後，會將 scorce 文件夾中的 Markdown 檔和 HTML 檔進行解析，再結合主題進行渲染，生成我們看到的靜態網站
- 執行 `$ hexo deploy` 之後，則會將 public 文件夾中的內容部署到 GitHub，並生成 .deploy_git 資料夾，因此內容與 public 幾乎相同
- 這三者的關係可想成：

```
source -> public -> .deploy_git
```

------

## 常用指令

接著介紹一些 Hexo 常會用到的相關指令語法，更多詳細指令可參考[官方文件](https://hexo.io/zh-tw/docs/commands)。

### new 新增文章

```
hexo new post <title>
```

- 如果標題有包含空格，需使用引號括住，例如`" title"`
- 接著可直接到 `/source/_posts/title.md` 中編輯文章內容
- 檔案名稱盡量以英文命名，避免出現亂碼

> 若是對 Markdown 相關語法不熟悉，可參考這篇筆記：[Markdown 格式介紹](https://hhk.one/2021/03/23/hexo-markdown/)

### clean 清除靜態檔案與快取

```
hexo clean
```

在每次儲存修正後的檔案之前，會建議先輸入此指令，清除快取檔案 （db.json）和已產生的靜態檔案（public）。

### generate 產生靜態檔案

```
hexo generate
```

可簡寫成 `hexo g`，生成靜態檔案。

### server 啟動伺服器

- 在本地端啟動 Hexo 伺服器，預設路徑為：`http://localhost:4000/`
- 可在自己電腦上預覽設定結果，按 Ctrl + C 即可關閉

> localhost：代表只能從本地瀏覽此網站，無法從外部瀏覽

```
hexo server
```

可簡寫成 `hexo s`

![](https://i.loli.net/2021/03/25/WcfavZCA5ltITuY.png)

## 部署到 GitHub

### 建立 GitHub 專案

在架設網誌之前，還必須準備一個存放網站的空間，例如架設主機，或是選擇現有的平台，例如 GitHub Pages 或 Heroku 等，本篇以 GitHub 作為範例。

接著可依照下列步驟在 GitHub 新增專案：

#### Step1. 註冊 [GitHub](https://github.com/) 帳號並登入

#### Step2. 點選 New 新增一個 Repository（專案）

![](https://i.loli.net/2021/03/25/JvsiS43cBn7bFZw.png)

#### Step3. 將專案名稱命名為 `username.github.io`，username 記得改成自己的帳號名稱

![](https://i.loli.net/2021/03/25/Tda6HWPFlDNKMSf.png)

這樣就成功建立了一個網域：`username.github.io`

### 將檔案發布到 GitHub

#### Step1. 安裝 Git 相關套件

回到 hexo 資料夾，在終端機輸入下列指令安裝部署所需套件：

```javascript
npm install hexo-deployer-git --save
```

#### Step2. 修改 _config.yml 檔案的 Deployment 設定

接著是修改 _config.yml 設定檔中，有關 deploy 的設定。

> 需注意這裡指的 _config.yml 檔案是根目錄的，而不是 themes 主題中的。

```
deploy:
  type: git
  repo: https://github.com/username/username.github.io.git
  branch: master
```

- type：選擇部屬模式，這裡填 git
- repo：GitHub repository 的連結，記得將 username 修改成自己的帳號名稱
- branch：選擇分支，預設為 master

![](https://i.loli.net/2021/03/25/j8HONvCiuUlsx13.png)

#### Step3. 輸入部署指令

使用下列指令即可部署檔案到網站上，第一次輸入可能會要求登入 GitHub 帳號：

```
hexo deploy
```

通常在完成每次修改後，會依序輸入 clean -> generate -> deploy 三行指令，避免更新不完全：

```
hexo cl    // 清除之前建立的靜態檔案
hexo g     // 建立靜態頁面
hexo d     // 部署至 GitHub
```

或是合併第二、三行指令：`hexo g -d` 即可在產生靜態頁面後立刻部署。

這樣就完成部署網誌到 GitHub 了！可在個人頁面 `https://username.github.io` 確認是否有發布成功，預設畫面如下：

![](https://i.loli.net/2021/03/25/IEUTxA3uLGJscfY.png)

------

## 結語

這篇算是簡單介紹了 Hexo 的安裝過程，整體來說不難，照著步驟一步一步操作，基本上是沒問題的。Hexo 的主題及插件非常之多，大家可以多多去玩看看。之後找時間再整理一篇關於更換主題，及我在過程中遇到的問題之之後的解法。



參考資料：

- [架設 Hexo+GitHub](https://ed521.github.io/2019/07/hexo-install/)
- [Hexo+GitHub，新手也可以快速建立部落格](https://blackmaple.me/hexo-tutorial/)
- [hexo的next主题个性化教程:打造炫酷网站](http://shenzekun.cn/hexo%E7%9A%84next%E4%B8%BB%E9%A2%98%E4%B8%AA%E6%80%A7%E5%8C%96%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B.html)