import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid"

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "woa-msmnile",
    description: "Bring a New Life to Your Phone",
    lastUpdated: true,
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: '/images/Logov2.1.svg',

      search: {
        provider: 'local'
      },

      editLink: {
        text: 'Edit this page on Github',
        pattern: 'https://github.com/woa-msmnile/woa-msmnile.github.io/edit/main/:path'
      },

      nav: [
        { text: 'Home', link: '/' },
        { text: 'Documents', link: '/Introduction/msmnilePkg' }
      ],

      sidebar: [
        {
          text: 'Introduction',
          items: [
            { text: 'woa-msmnile', link: '/Introduction/organization'},
            { text: 'msmnilePkg', link: '/Introduction/msmnilePkg'},
            { text: 'UEFI Porting Status', link: 'https://github.com/woa-msmnile/msmnilePkg#target-list'}
          ]
        },
        {
          text: 'Installation',
          items: [
            { text: 'Simple Installation Guide', link: '/InstallationGuides/WindowsInstallation' },
          ]
        },
        {
          text: 'Porting UEFI',
          items: [
            { text: 'Simple Guide', link: '/PortingGuides/SimpleGuide.md'},
            { text: 'Find Protocol Addresses For Kailua', link: '/PortingGuides/FindProtocolAddressesForKailua.md'},
          ]
        }
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/woa-msmnile' }
      ],
    }
  })
)
