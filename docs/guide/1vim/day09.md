# 第九天

## vim-easymotion

配合 `<Leader>` 使用，`<Leader>` 是 `vim` 的前缀键）

- 基于单词移动，eg: `<Leader>` + `<Leader>` + `w/b/e/ge`
- 基于移动移动，eg: `<Leader>` + `<Leader>` + `h/j/k/l`

其实和之前的单词移动是一个逻辑，只不过通过 `easymotion` 的步进可以自行控制

```json
// settings.json
"vim.easymotion": true,
"vim.leader": "<Space>", // 我把 leader 键设为空格
```

## vim-sneak

是 `f` 的增强版，我觉得 `f` 的 `range` 是单行挺鸡肋的，改键把 `s` 映射给 `f`，就可以单文件非严格匹配。缺点是只能匹配大于等于两个字符。

```json
// settings.json
"vim.sneak": true,
```
