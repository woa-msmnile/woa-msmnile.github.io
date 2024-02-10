import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  description: "Bring a New Life to Your Phone",
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Documents', link: '/Introduction/msmnilePkg' },
      { text: 'Videos', link: '/Videos/Introduction/Introduction' },
    ],
    sidebar: {
      '/Videos/': { base: '/Videos', items: sidebarVideos() },
      '/': { base: '', items: sidebarDocs() },
    },
    editLink: {
      text: 'Edit this page on Github',
      pattern: 'https://github.com/woa-msmnile/woa-msmnile.github.io/edit/main/:path'
    },
    footer: {
      copyright: `Site CC BY-NC-SA 4.0 | CopyRight © 2022-${new Date().getFullYear()} woa-msmnile`
    },
  }
})

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'woa-msmnile', link: '/Introduction/organization'},
        { text: 'msmnilePkg', link: '/Introduction/msmnilePkg'},
        { text: 'UEFI Porting Status', link: '/PortingStatus/PortingStatus'}
      ]
    },
    {
      text: 'Installation',
      items: [
        { text: 'Guides Collection', link: '/InstallationGuides/GuidesCollection'},
        { text: 'Simple Installation Guide', link: '/InstallationGuides/WindowsInstallation' },
        { text: 'Install Drivers', link: '/InstallationGuides/InstallDrivers'},
      ]
    },
    {
      text: 'Dual Boot',
      items: [
        { text: 'Introduction', link: '/DualBoot/Introduction'},
        { text: 'Config', link: '/DualBoot/Config'},
        { text: 'Shell Code', link: '/DualBoot/ShellCode'},
      ]
    },
    {
      text: 'Porting UEFI',
      items: [
        { text: 'UEFI Porting Guide', link: '/PortingGuides/SimpleGuide'},
        { text: 'Definitions', link: '/PortingGuides/DefinesGuidance'},
        { text: 'Find Protocol Addresses For Kailua', link: '/PortingGuides/FindProtocolAddressesForKailua'},
      ]
    },
    {
      text: 'Reference Tables',
      items: [
        { text: "QC Silicons' Codenames Reference", link: "/ReferenceTables/QCSiliconCodenameReferenceTable"},
        { text: "Devices' Codenames Reference", link: "/ReferenceTables/DeviceCodenameReferenceTable"},
      ]
    },
  ]
}

function sidebarVideos(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'About Videos', link: '/Introduction/Introduction'}
      ]
    },
    {
      text: 'Trouble Shooting',
      items: [
        { text: 'example', link: '/Guide/TroubleShoot/example'},
    ]},
    {
      text: 'Installation Guide',
      items: [
        { text: 'example', link: '/Guide/WindowsInstallation/example'},
    ]}
  ]
}