# 第五十四天

## obsidian 的 vim 使用

打开 vim：设置-编辑器-vim 键绑定

查看 ob 命令：:obcommand 打开调试模式，然后 ctrl + shift + i 控制台即可看到所有命令

通过 vim 执行 ob 命令：控制台找到所需命令通过映射模式改键，eg：exmap dailyNotes obcommand daily-notes

通过 Leader 定义命令：nmap Space nn :dailyNotes

添加 [[]] 来进行 surround
