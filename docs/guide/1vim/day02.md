# 第二天

## 移动

我们知道 `NORMAL` 模式移动是 `h / l` 进行单字符移动，效率不高。
所以我们需要移动至行首行尾的命令

行首

- `shift + o`
- `^ (shift + 6)`
- `shift + h`(改键)

行尾

- `$ (shift + 4)`
- `g + _`
- `shift + l`(改键)

```json
// vscode -> settings.json
"vim.normalModeKeyBindings": [
  {
    "before": ["H"],
    "after": ["^"]
  },
  {
    "before": ["L"],
    "after": ["g", "_"]
  },
]
```

## 插入

在 `NORMAL` 模式下，输入下述命令，即可根据不同需求键入 `INSERT` 模式

- 光标处前面插入：`i`
- 光标处后方插入：`a`
- 行首：`I (shift + i)`
- 行尾：`A`
- 行前（新增一行）：`O`
- 行后（新增一行）：`o`

## 复制粘贴

复制当前行：`yy`

剪切当前行：`dd`

粘贴：`p`（`yy`、`dd` 通用）

> TIPS: 值得注意的是，`vim` 的暂存器和系统的不打通，即 `p` 与 `ctrl + v` 各自独立
