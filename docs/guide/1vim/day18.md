# 第十八天

## vim 调用 vscode 命令

`commands` 字段

1. 格式化文档（`<Leader>` + `f + d`）
2. 重命名（`<Leader>` + `r + n`）
3. 折叠文档（`fold`）
   1. `<Leader>` + `[`
   2. 恢复（`fold`） `<Leader>` + `]`

```json
// settings.json
"vim.normalModeKeyBindingsNonRecursive": [
   {
   "before": ["<Leader>", "f", "d"],
   "commands": ["editor.action.formatDocument"]
   },
   {
   "before": ["<Leader>", "r", "n"],
   "commands": ["editor.action.rename"]
   },
   {
   "before": ["<Leader>", "["],
   "commands": [
      {
         "command": "editor.fold"
      },
      {
         "command": "vim.remap",
         "args": {
         "after": ["$", "%"]
         }
      }
   ]
   },
   {
   "before": ["<Leader>", "]"],
   "commands": [
      {
         "command": "editor.unfold"
      }
   ]
   },
],
```