# 第三天

## vim 语法：操作符 + 范围

操作符：

1. 删除 - d
2. 删除(若成功删除，则进入 insert 模式) - c
3. 复制 - y

基于单词的移动：

1. e（jump forwards to the end of a word）
2. b (jump backwards to the start of a word)
3. w (jump forwards to the start of a word)
4. ge (jump backwards to the end of a word)

基于字符串的移动（配置了连发按键后一般不用）

1. E
2. B
3. W
4. gE

## 常见组合键

1. cw - 删除当前光标到该单词结束的位置
2. cb - 删除当前光标到该单词开始的位置
3. ea - 移动到当前单词结尾并 （append）进入 insert 模式