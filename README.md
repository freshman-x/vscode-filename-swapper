# VSCode 文件名交换工具 (VSCode Filename Swapper)

一款简单实用的 VSCode 扩展，允许用户快速交换两个选中文件的文件名，保持文件内容不变。

## 功能特点

- 通过资源管理器右键菜单轻松交换两个文件的文件名
- 保持文件内容不变，只交换文件名
- 操作完成后显示成功通知，包含已交换的文件名
- 仅在选择两个文件时才可用

## 使用方法

1. 在 VSCode 资源管理器中按住 Ctrl (Windows/Linux) 或 Cmd (Mac) 同时选择两个文件
2. 右键点击选中的文件
3. 在上下文菜单中选择 "交换选中文件名（优化版）"
4. 文件名将被立即交换

## 安装

1. 下载 `.vsix` 文件
2. 在 VSCode 中按下 `Ctrl+Shift+P`（或 `Cmd+Shift+P`）
3. 输入 "Install from VSIX" 并选择下载的文件
4. 重启 VSCode

## 开发

```bash
# 克隆仓库
git clone https://github.com/freshman-x/vscode-filename-swapper.git

# 安装依赖
npm install

# 打包扩展
npm install -g @vscode/vsce
vsce package
```

## 许可证

[MIT](LICENSE)

---

*Made with ❤️ by freshman-x*
