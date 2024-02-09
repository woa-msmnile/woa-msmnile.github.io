import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid"
import { en } from './en'
import { zh } from './zh'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "woa-msmnile",
    lastUpdated: true,
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: 'images/Logov2.2.svg' }],
      ['link', { rel: 'icon', type: 'image/png', href: 'images/Logov2.2.png' }],
    ],

    locales: {
      root: { label: 'English', ...en },
      zh: { label: '简体中文', ...zh }
    },

    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: 'https://avatars.githubusercontent.com/u/118143494',
      search: {
        provider: 'local',
        options: {
          locales: {
            zh: {
              translations: {
                button: {
                  buttonText: '搜索文档',
                  buttonAriaLabel: '搜索文档'
                },
                modal: {
                  noResultsText: '无法找到相关结果',
                  resetButtonTitle: '清除查询条件',
                  footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭'
                  }
                }
              }
            }
          }
        }
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/woa-msmnile' },
        { icon: 'discord', link: 'https://discord.gg/zfh6RxYwb5' }
      ],
    },
  })
)
