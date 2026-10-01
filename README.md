# 方木饮食与训练计划生成网站

这是方木饮食与训练计划生成器的静态网站代码。

## 文件

- `index.html`：页面结构与入口。
- `styles.css`：页面样式。
- `app.js`：饮食、训练、BMI、保存图片等业务逻辑。
- `vendor/html2canvas.min.js`：方案图片生成组件。

## 本地预览

在当前目录运行：

```bash
python3 -m http.server 4324
```

浏览器打开 `http://127.0.0.1:4324/`。

## 发布到腾讯云 CloudBase

确认 CloudBase CLI 已登录后，分别上传改动文件：

```bash
npx --yes -p @cloudbase/cli@3.8.4 cloudbase hosting deploy ./app.js app.js -e fangmu-d5gbsw6ml95689af7
npx --yes -p @cloudbase/cli@3.8.4 cloudbase hosting deploy ./styles.css styles.css -e fangmu-d5gbsw6ml95689af7
npx --yes -p @cloudbase/cli@3.8.4 cloudbase hosting deploy ./index.html index.html -e fangmu-d5gbsw6ml95689af7
```

线上地址：<https://fangmu-d5gbsw6ml95689af7-1420508596.tcloudbaseapp.com/>

## 协作

修改前先同步最新代码。修改完成后提交到独立分支并发起 Pull Request，确认无误后再合并到 `main`。
