# 第十二天

## vim-surround

normal 模式

1. c s `<existing>` `<desired>`：改变当前光标的左右符号，常用于“ → `
2. y s `<motion>` `<desired>`：添加 motion（范围）的左右符号，常用于 import 的花括号 (y s iw {)
3. d s `<existing>`：删除当前光标的左右符号

visual 模式

1. shift + s `<desired>`
