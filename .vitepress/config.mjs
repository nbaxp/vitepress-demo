import { withMermaid } from "vitepress-plugin-mermaid";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "MyDocs",
  description: "我的文档",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  srcDir: "src",
  outDir: "./dist",
  cacheDir: "./cache",
  ignoreDeadLinks: true,
  markdown: {
    math: true,
  },
  // https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults
  mermaid: {},
  // 可选地使用MermaidPluginConfig为插件本身设置额外的配置
  mermaidPlugin: {
    class: "mermaid my-class", // 为父容器设置额外的CSS类
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2024-present'
    // },
    search: {
      provider: "local",
    },
    sidebar: generateSidebar({
      documentRootPath: "/src/",
      useFolderTitleFromIndexFile: true,
      useTitleFromFrontmatter: true,
      sortMenusByFrontmatterOrder: true,
    }),
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/basic/markdown" },
    ],
    // sidebar: {
    //   "/basic/": [
    //     {
    //       text: "基础",
    //       items: [
    //         {
    //           text: "文档",
    //           items: [
    //             { text: "Markdown", link: "/basic/markdown" },
    //             { text: "Mermaid", link: "/basic/mermaid" },
    //           ],
    //         },
    //         { text: "源码管理", link: "/basic/git" },
    //         { text: "容器化", link: "/basic/container" },
    //       ],
    //     },
    //   ],
    //   "/examples/": [
    //     {
    //       text: "示例",
    //       items: [
    //         { text: "前端", link: "/examples/fe" },
    //         { text: "后端", link: "/examples/be" },
    //       ],
    //     },
    //   ],
    //   "/architecture/": [
    //     {
    //       text: "架构",
    //       items: [
    //         { text: "微服务", link: "/architecture/microservice" },
    //         { text: "领域驱动设计", link: "/architecture/ddd" },
    //       ],
    //     },
    //   ],
    // },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
