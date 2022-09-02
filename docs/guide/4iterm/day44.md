# 第四十四天

## bindkey

查看：bindkey

查看某一个按键： bindkey `<keystroke>`

添加：

绑定到已有的 widget：bindkey `<keystroke>` `<widget>`

把 a 绑定到 b 快捷键上：bindkey -s `<keystroke>` `<widget>`

绑定到具体模式：bindkey -M `<keymap>` `<keystroke>` eg: bindkey -M viins u `<widget>`

删除：bindkey -r `<keystroke>`

widgets

查看内置 widgeets zle -la

添加：zle -N `<widget name>`

keymap：emacs viins vicmd viopp visual
