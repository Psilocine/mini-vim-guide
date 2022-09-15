# 第十四天

## 悬浮显示

1. 进入 - `gh` (`hover`)
2. 退出 - `esc`

## 大小写切换

1. `NORMAL` 模式
   - `gU [range]` - 大写 eg: `gU iw`
   - `gu [range]` - 小写 eg: `gu iw`
2. `VISUAL` 模式 省略 `g` 按键
3. 大小写互换 `` shift + ` ``
   1. eg：`serializeElement` → `viw + ~` → `SERIALIZEeLEMENT`

## 注释

1. 单行注释：`gc [range]`
2. 多行注释：`gC [range]`

问题：

注释在 `NORMAL` 模式下使用顺序有点奇怪，在 `VISUAL` 模式下毕竟符合平时的注释操作，先通过 `shift + v` 高亮需要注释的行/块，再通过 `gc/gC` 注释
