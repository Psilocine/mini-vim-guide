# 第十五天

## 窗口操作

`prefix` 键: `ctrl + w`

1. 新建窗口:

- `prefix + s`（上下方向新增）
- `prefix + v`（左右方向新增, 记忆 -> `vertical`）

2. 窗口切换

- `prefix + w`
- `prefix + h/j/k/l`

3. 关闭窗口

- `prefix + c`
- `command + k + w`
- `command + w`（`vscode` 自带，按键更少，推荐）

4. 保留当前高亮窗口，删除其余窗口: `prefix + o`

## 扩展(自定义)

1. 新建窗口

- `command + \` (上下方向新增)
- `command + ctrl + \` (左右方向新增)

2. 关闭窗口: `command + w`
3. 切换: `vscode keybindings` 改键 `shift` + 方向键

```json
// vscode -> keybindings.json
{
   "key": "shift+left",
   "command": "vim.remap",
   "when": "vim.mode == 'Normal'",
   "args": {
   "after": ["<c-w>", "h"]
   }
},
{
   "key": "shift+right",
   "command": "vim.remap",
   "when": "vim.mode == 'Normal'",
   "args": {
   "after": ["<c-w>", "l"]
   }
},
{
   "key": "shift+up",
   "command": "vim.remap",
   "when": "vim.mode == 'Normal'",
   "args": {
   "after": ["<c-w>", "k"]
   }
},
{
   "key": "shift+down",
   "command": "vim.remap",
   "when": "vim.mode == 'Normal'",
   "args": {
   "after": ["<c-w>", "j"]
   }
}
```
