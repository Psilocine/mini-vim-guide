# 第四天：

## 处理单字符

- 删除光标所有字符：`x` (重点掌握)
- 删除光标前字符：`X`
- 删除当前光标的字符并进入 `INSERT` 模式：`s`(重点掌握)
- 删除当前光标所在行并进入 `INSERT` 模式：`S`(重点掌握)
- 替换当前光标所在的字符：`r`(重点掌握)
- 替换多个字符：`R` （和 `dd` 的区别，`dd` 直接把行删除，`R` 只删除到有字符的地方，如果有缩进，缩进不会被删除）

## undo/redo

- `undo`：`u`
- `redo`：`ctrl + r`(`r` 被 `replace` 占用)
