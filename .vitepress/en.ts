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

    footer: {
      copyright: `CopyRight © 2022-${new Date().getFullYear()} woa-msmnile`
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
        { text: 'UEFI Porting Status', link: '/PortingStatus/PortingStatus.md'}
      ]
    },
    {
      text: 'Installation',
      items: [
        { text: 'Simple Installation Guide', link: '/InstallationGuides/WindowsInstallation' },
        { text: 'Install Drivers', link: '/InstallationGuides/InstallDrivers.md'},
      ]
    },
    {
      text: 'Porting UEFI',
      items: [
        { text: 'Simple Guide', link: '/PortingGuides/SimpleGuide.md'},
        { text: 'Find Protocol Addresses For Kailua', link: '/PortingGuides/FindProtocolAddressesForKailua.md'},
      ]
    },
    {
      text: 'Reference Tables',
      items: [
        { text: "QC Silicons' Codenames Reference", link: "/ReferenceTables/QCSiliconCodenameReferenceTable.md"},
        { text: "Devices' Codenames Reference", link: "/ReferenceTables/DeviceCodenameReferenceTable.md"},
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