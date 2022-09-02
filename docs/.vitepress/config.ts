import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Mini-vim-guide",
  description: "vim's guide for personal",
  ignoreDeadLinks: true,
  lastUpdated: true,
  base: "/mini-vim-guide/",

  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/psilocine/mini-vim-guide",
      },
    ],
  },
});

function nav() {
  return [
    { text: "首页", link: "/" },
    { text: "简介", link: "/guide/index" },
  ];
}

function sidebar() {
  return [
    {
      text: "Introduction",
      collapsible: true,
      items: [{ text: "简介", link: "/guide/index" }],
    },
    {
      text: "Vim",
      collapsible: true,
      items: [
        { text: "Day01", link: "/guide/1vim/day01.md" },
        { text: "Day02", link: "/guide/1vim/day02.md" },
        { text: "Day03", link: "/guide/1vim/day03.md" },
        { text: "Day04", link: "/guide/1vim/day04.md" },
        { text: "Day05", link: "/guide/1vim/day05.md" },
        { text: "Day06", link: "/guide/1vim/day06.md" },
        { text: "Day07", link: "/guide/1vim/day07.md" },
        { text: "Day08", link: "/guide/1vim/day08.md" },
        { text: "Day09", link: "/guide/1vim/day09.md" },
        { text: "Day10", link: "/guide/1vim/day10.md" },
        { text: "Day11", link: "/guide/1vim/day11.md" },
        { text: "Day12", link: "/guide/1vim/day12.md" },
        { text: "Day13", link: "/guide/1vim/day13.md" },
        { text: "Day14", link: "/guide/1vim/day14.md" },
        { text: "Day15", link: "/guide/1vim/day15.md" },
        { text: "Day16", link: "/guide/1vim/day16.md" },
        { text: "Day17", link: "/guide/1vim/day17.md" },
        { text: "Day18", link: "/guide/1vim/day18.md" },
      ],
    },
    {
      text: "VScode",
      collapsible: true,
      items: [
        { text: "Day19", link: "/guide/2vscode/day19.md" },
        { text: "Day20", link: "/guide/2vscode/day20.md" },
        { text: "Day21", link: "/guide/2vscode/day21.md" },
        { text: "Day22", link: "/guide/2vscode/day22.md" },
        { text: "Day23", link: "/guide/2vscode/day23.md" },
        { text: "Day24", link: "/guide/2vscode/day24.md" },
        { text: "Day25", link: "/guide/2vscode/day25.md" },
        { text: "Day26", link: "/guide/2vscode/day26.md" },
        { text: "Day27", link: "/guide/2vscode/day27.md" },
        { text: "Day28", link: "/guide/2vscode/day28.md" },
        { text: "Day29", link: "/guide/2vscode/day29.md" },
        { text: "Day30", link: "/guide/2vscode/day30.md" },
      ],
    },
    {
      text: "Chrome",
      collapsible: true,
      items: [
        {
          text: "Day31",
          link: "/guide/3chrome/day31.md",
        },
        {
          text: "Day32",
          link: "/guide/3chrome/day32.md",
        },
        {
          text: "Day33",
          link: "/guide/3chrome/day33.md",
        },
        {
          text: "Day34",
          link: "/guide/3chrome/day34.md",
        },
        {
          text: "Day35",
          link: "/guide/3chrome/day35.md",
        },
        {
          text: "Day36",
          link: "/guide/3chrome/day36.md",
        },
        {
          text: "Day37",
          link: "/guide/3chrome/day37.md",
        },
      ],
    },
    {
      text: "ITerm2",
      collapsible: true,
      items: [
        {
          text: "Day38",
          link: "/guide/4iterm/day38.md",
        },
        {
          text: "Day39",
          link: "/guide/4iterm/day39.md",
        },
        {
          text: "Day40",
          link: "/guide/4iterm/day40.md",
        },
        {
          text: "Day41",
          link: "/guide/4iterm/day41.md",
        },
        {
          text: "Day42",
          link: "/guide/4iterm/day42.md",
        },
        {
          text: "Day43",
          link: "/guide/4iterm/day43.md",
        },

        {
          text: "Day44",
          link: "/guide/4iterm/day44.md",
        },
      ],
    },
    {
      text: "Mac",
      collapsible: true,
      items: [
        {
          text: "Day45",
          link: "/guide/5mac/day45.md",
        },
        {
          text: "Day46",
          link: "/guide/5mac/day46.md",
        },
        {
          text: "Day47",
          link: "/guide/5mac/day47.md",
        },
        {
          text: "Day48",
          link: "/guide/5mac/day48.md",
        },
        {
          text: "Day49",
          link: "/guide/5mac/day49.md",
        },
        {
          text: "Day50",
          link: "/guide/5mac/day50.md",
        },
        {
          text: "Day51",
          link: "/guide/5mac/day51.md",
        },
        {
          text: "Day52",
          link: "/guide/5mac/day52.md",
        },
        {
          text: "Day53",
          link: "/guide/5mac/day53.md",
        },
      ],
    },
    {
      text: "Obsidian",
      collapsible: true,
      items: [
        {
          text: "Day54",
          link: "/guide/6obsidian/day54.md",
        },
        {
          text: "Day55",
          link: "/guide/6obsidian/day55.md",
        },
        {
          text: "Day56",
          link: "/guide/6obsidian/day56.md",
        },
        {
          text: "Day57",
          link: "/guide/6obsidian/day57.md",
        },
        {
          text: "Day58",
          link: "/guide/6obsidian/day58.md",
        },
      ],
    },
  ];
}
