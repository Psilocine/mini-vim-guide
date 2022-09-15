# 第十二天

## vim-surround

### NORMAL 模式

- 改变当前光标的左右符号，常用于`"` → `` ` ``,：`c` + `s` + `<existing>` + `<desired>`，eg: `` cs"` ``
- 添加 `motion`（范围）的左右符号，常用于 `import` 的花括号：`y` + `s` + `<motion>` + `<desired>`，eg: `ysiw{`
- 删除当前光标的左右符号：`d` + `s` + `<existing>`

### VISUAL 模式

- `shift + s` + `<desired>`
