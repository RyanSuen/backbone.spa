# 移动端单面应用解决方案
基于zepto.js, underscore.js, backbone.js, mustache.s, animate.css, webpack的移动端单面应用解决方案

===

# 静态资源版本更新缓存问题
## js css 以及 css中背景图片已自动化解决
## ps: 模板中用到的图片需要上线前改配置date，再编译
## RANDOM: '?date=2016072101'（例如）

===

# 项目整合到后端静态资源路径修改
## 纯前端开发的时候，和整合到后端的时候静态资源的路径不同
## 请在build/js/common/config.js 和 build/less/common/config.less 中修改