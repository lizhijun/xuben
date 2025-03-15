# 序本影像XUBEN - 摄影工作室官方网站

## 项目概述

这是序本影像XUBEN摄影工作室的官方网站，专注于展示工作室的摄影作品、服务和联系方式。网站采用移动优先（Mobile-first）的响应式设计，确保在各种设备上都能提供良好的用户体验。

## 特点

- **移动优先设计**：优先设计移动设备界面，然后逐步扩展到更大屏幕
- **响应式布局**：适应各种设备尺寸的屏幕
- **Tailwind CSS**：使用Tailwind CSS通过CDN方式实现快速开发和样式设计
- **现代UI**：干净、简约的设计风格，突出展示摄影作品
- **交互式功能**：作品集过滤、联系表单、图片预览等功能

## 技术栈

- HTML5
- CSS3 (通过Tailwind CSS)
- JavaScript (原生)
- Tailwind CSS (通过CDN)
- Font Awesome 图标

## 网站结构

网站包含三个主要页面：

1. **首页 (index.html)**
   - 英雄区域（工作室介绍）
   - 关于我们
   - 服务
   - 作品集预览
   - 客户推荐

2. **作品集 (portfolio.html)**
   - 分类过滤
   - 摄影作品展示
   - 图片预览功能

3. **联系我们 (contact.html)**
   - 联系信息
   - 联系表单
   - 地图位置

## 移动优先设计说明

本网站采用移动优先的设计理念，意味着我们首先为移动设备设计界面，然后通过媒体查询和Tailwind的响应式工具类逐步增强桌面体验。具体实现包括：

- 使用Tailwind CSS的响应式前缀（如`md:`, `lg:`等）来定义不同屏幕尺寸的样式
- 移动设备上采用堆叠布局，桌面设备上转为多列布局
- 为移动设备优化的导航菜单（汉堡菜单）
- 适合触摸操作的按钮和交互元素
- 优化的图片加载和显示

## 使用Tailwind CSS (CDN方式)

我们选择通过CDN方式使用Tailwind CSS，避免了复杂的构建步骤，同时仍然保持了Tailwind的强大功能：

1. 通过CDN链接加载Tailwind CSS
2. 使用自定义的tailwind-config.js文件来扩展默认配置
3. 利用内联的style标签定义自定义工具类

## 运行项目

由于项目是纯静态HTML/CSS/JS网站，运行非常简单：

1. 将项目文件下载到本地
2. 在浏览器中直接打开index.html文件

或者通过简单的HTTP服务器运行：

```bash
# 如果你安装了Python
python -m http.server

# 或使用Node.js的http-server（需要先安装）
npx http-server
```

## 维护与更新

更新网站内容只需编辑相应的HTML文件：

- 修改文字内容：直接编辑HTML文件中的文本
- 更换图片：替换images目录中的图片文件，确保在HTML中引用的文件名保持一致
- 添加新的作品：在portfolio.html中添加新的作品条目
- 样式调整：利用Tailwind工具类直接在HTML元素上修改

## 联系方式

序本影像XUBEN摄影工作室
- 地址：贵州省贵阳市花溪区板桥艺术村C区95-1号
- 电话：18798007944（微信同号）

## 文件结构

```
website/
│
├── css/
│   ├── reset.css          # CSS Reset 样式
│   └── styles.css         # 已废弃，使用Tailwind CSS取代
│
├── js/
│   ├── main.js            # 主要JavaScript功能文件
│   └── tailwind-config.js # Tailwind配置文件
│
├── images/                # 通用图片资源目录
│   ├── logo.png
│   ├── logo-white.png
│   ├── hero-bg.jpg
│   └── studio.jpg
│
├── portfolio/             # 作品集图片目录
│   ├── 外景系列/           # 外景系列照片
│   ├── 光影系列/           # 光影系列照片
│   ├── 少女系列/           # 少女系列照片
│   ├── 花语系列/           # 花语系列照片
│   └── 生日系列/           # 生日系列照片
│
├── tailwind.config.js     # Tailwind CSS配置文件
├── index.html             # 首页
├── portfolio.html         # 作品集页面
├── contact.html           # 联系我们页面
├── 404.html               # 404错误页面
└── README.md              # 项目说明文件
```

## 浏览器兼容性

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- 移动端浏览器 (iOS Safari, Android Chrome)

## 自定义修改

- 可以通过修改 `css/styles.css` 文件来调整网站样式
- 在 `images/` 目录下替换图片资源
- 在 `portfolio/` 目录下可以添加或替换作品集图片

## 联系信息

序本影像XUBEN
- 电话: 18798007944 (微信同号)
- 地址: 贵州省贵阳市花溪区板桥艺术村C区95-1号 