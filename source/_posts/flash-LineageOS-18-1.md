---
title: HTC LineageOS 18.1 刷機教學
copyright: true
date: 2021-04-24 21:35:51
tags:
- 教學
categories:
- 教學
---

# 刷機教學
**<font color=#FF0530>注意事項</font>**
**<font color=#FF0000>Upgrade to Stock Oreo Rom!</font>**

<!-- more -->

## Step 1
解鎖手機 off(??)
Unlock Bootloader
開發者模式打開USB連線
## Step 2
下載 Recovery.img (刷機資源#1)
下載 ADB工具 (刷機資源#2)
## Step 3 
手機USB連結電腦
開啟 ADB資料夾 -> 用 CMD模式
輸入「adb reboot bootloader」指令
輸入「fastboot flash recovery *映像檔路徑*」指令
輸入「fastboot reboot」
## Step 4
雙清你的手機
關機狀態按著音量鍵+跟開機鍵開機，就會看到雙清的選項。
## Step 5
手機USB連結電腦
開啟 ADB資料夾 -> 用 CMD模式
輸入「adb reboot bootloader」指令
輸入「fastboot flash boot *映像檔路徑*」指令 (刷機資源#3)
輸入「fastboot reboot」


#### 刷機資源
1. [Recovery.img](https://androidfilehost.com/?w=files&flid=280838&sort_by=date&sort_dir=DESC)
2. [ADB](https://developer.android.com/studio/command-line/adb)
3. [boot.img](https://androidfilehost.com/?w=files&flid=318536&sort_by=date&sort_dir=DESC)
#### 資料參考
* [朋朋給我的教程](https://forum.xda-developers.com/t/rom-11-0-unofficial-oce-lineageos-18-1-stable.4175765/)

* [ADB TWRP 教學](https://www.moonlol.com/adb-fastboot%E5%B7%A5%E5%85%B7%E7%B7%9A%E5%88%B7twrp-recovery-5954.html)

* [ADB ROM boot 教學](https://tedliou.com/archives/zenfone-5z-unlock-and-root/)