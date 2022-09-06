# 第十三天

## 替换命令：substitute

### 公式：`:` `[range]` `s` `/` `pattern` `/` `string` `/` `[flags]`

1. `range`
   1. `$` - 尾部
   2. `%` - 全文
   3. `start, end` - `start` 到 `end` 的行数
   4. `start, $` - `start` 到最后一行
2. `flags`
   1. `g` - 每行的全文匹配，否则只匹配每行第一个
   2. `c` - 命令面板选择 `y/n/a/q/l` 是否替换

eg: `:%s/flags/hello/c`

### 多选操作

1. `gb` - 多光标编辑（一次 `gb` 增加一次当前光标的 `word` 光标）
