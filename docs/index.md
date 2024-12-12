---
layout: home

hero:
    name: "BX Team"
    text: "Documentation"
    tagline: "Documentation for all BX Team projects."
    image:
        src: /assets/logo.png
        alt: BX Team
    actions:
        - theme: brand
          text: Get Started
          link: /documentation/introduction/projects
        - theme: alt
          text: Visit our GitHub
          link: https://github.com/BX-Team

features:
    - icon: 🪨
      title: DivineMC
      details: DivineMC is the fork of Purpur compatible with Spigot plugins, offering the best performance for your server.
      link: /documentation/divinemc/about
    - icon: 💵
      title: NDailyRewards
      details: NDailyRewards gives you ability to give daily rewards for your players for playing on your server.
      link: /documentation/ndailyrewards/
    - icon: ☁️
      title: RealWorldSync
      details: Synchronizes time and weather from the real world to the game.
      link: /documentation/realworldsync/
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPDocAsideSponsors,
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/76615486?v=4',
    name: 'NONPLAYT',
    title: 'Java Developer & Owner',
    links: [
      { icon: 'github', link: 'https://github.com/NONPLAYT' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/81859776?v=4',
    name: 'wiyba',
    title: 'Java Developer',
    links: [
        { icon: 'github', link: 'https://github.com/wiyba' },
    ]
  }
]
</script>

<VPTeamPage style='padding-bottom: 0'>
  <VPTeamPageTitle>
    <template is #title>
      BX Team Developers
    </template>
    <template #lead>
        We are a small team of developers that create open-source projects for the Minecraft community.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members"></VPTeamMembers>
</VPTeamPage>
