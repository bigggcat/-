# 中国最新行政区域划分代码 🇨🇳

数据来源：中国民政部2026最新数据
https://zwfw.mca.gov.cn/appsv2/xzqhcx/detail.html?searchStr=110000000000&searchType=2
这是一个用 JavaScript 编写的行政区域划分数据项目，包含最新的中国行政区域代码与信息，方便开发者查找和集成。

---

## 📌 项目简介

这个项目整理了中国最新的行政区域划分数据，适用于前端、后端、数据分析等多种场景，可以快速查询省市区县的代码、名称等信息。
也可以直接插入数据库
---

## 🛠 技术栈

- 💡 JavaScript  
- 📦 npm / Node.js  
- 📊 数据 JSON 文件  

---

## 🚀 快速开始
使用用例：

```bash
import { getCityList } from './index.js';

const result = getCityList('440000');
console.log(result);
