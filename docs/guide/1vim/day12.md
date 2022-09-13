# 第十二天

## vim-surround

### NORMAL 模式

1. `c` + `s` + `<existing>` + `<desired>`：改变当前光标的左右符号，常用于`“` → `` ` ``, eg: `` cs"` ``
2. `y` + `s` + `<motion>` + `<desired>`：添加 `motion`（范围）的左右符号，常用于 `import` 的花括号, eg: `ysiw{`
3. `d` + `s` + `<existing>`：删除当前光标的左右符号

### VISUAL 模式

1. `shift + s` + `<desired>`
