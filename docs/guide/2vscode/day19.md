# 第十九天

## vscode 操作文件

- 主编辑区域：`editor`
- 资源管理器侧边栏：`files explorer`

### 切换

- 切换到 `files explorer` 区域：`ctrl + ;`
- 切换到 `editor` 区域：`ctrl + '`

### 操作文件

- `editor`：
  1. 创建文件: `<Leader>` + `n + f`
  2. 创建文件夹: `<Leader>` + `n + d`
- `files explorer`：
  1.  重命名：`r`
  2.  删除：`d`
  3.  创建文件：`a`
  4.  创建文件夹：`shift + a`

```json
// keybindings.json
{
   "key": "a",
   "command": "explorer.newFile",
   "when": "filesExplorerFocus && !inputFocus"
},
{
   "key": "shift+a",
   "command": "explorer.newFolder",
   "when": "filesExplorerFocus && !inputFocus"
},
{
   "key": "r",
   "command": "renameFile",
   "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
},
{
   "key": "d",
   "command": "deleteFile",
   "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus"
},
{
   "key": "ctrl+;",
   "command": "workbench.view.explorer",
   "when": "viewContainer.workbench.view.explorer.enabled"
},
{
   "key": "ctrl+'",
   "command": "workbench.action.focusFirstEditorGroup"
},
```

```json
// settings.json
{
  "before": ["<Leader>", "n", "f"],
  "commands": ["explorer.newFile"]
},
{
  "before": ["<Leader>", "n", "d"],
  "commands": ["explorer.newFolder"]
},
```
