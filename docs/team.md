---
layout: page
title: Our Team
description: Meet the people behind this project, dedicated to making programming education accessible and engaging for everyone
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const members = [
  {
    avatar: '/assets/imgs/mohamed-mostafa.png',
    name: 'Mohamed Mostafa',
    title: 'Team Lead | Frontend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/moh123mos' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mohammed-mostafa-b72804320/' }
    ]
  },
   {
    avatar: '/assets/imgs/alaa.png',
    name: 'Alaa Mohamed',
    title: 'UI/UX Designer | Graphic Designer',
    links: [
      { icon: 'behance', link: 'https://www.behance.net/alaamohamed417' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/alaa-mohamed-315154317/' }
    ]
  },
  {
    avatar: '/assets/imgs/mohamed-ragab.png',
    name: 'Mohamed Ragab',
    title: 'Backend Developer | .NET Specialist',
    links: [
      { icon: 'github', link: 'https://github.com/Mohamed5289' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mohammed-ragab-4327b1317/' }
    ]
  },
  {
    avatar: '/assets/imgs/ammar.png',
    name: 'Ammar Emad',
    title: 'Flutter Developer | Mobile Specialist',
    links: [
      { icon: 'github', link: 'https://github.com/AmmarEmad-2004' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/ammar-emad/' }
    ]
  },
  {
    avatar: '/assets/imgs/yasso.png',
    name: 'Yassen Khaled',
    title: 'Backend Developer | .NET Specialist',
    links: [
      // { icon: 'github', link: 'https://github.com/AmmarEmad-2004' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/yassen-khalid-32035024a/' }
    ]
  },
  {
    avatar: '/assets/imgs/marwa.png',
    name: 'Marwa Farid',
    title: 'ML Engineer | AI Specialist',
    links: [
      { icon: 'github', link: 'https://github.com/marwafarid33' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/marwa-farid-003079384/' }
    ]
  },
  {
    avatar: '/assets/imgs/bashar.png',
    name: 'Bashar Khalaf',
    title: 'Backend Developer | .NET Specialist',
    links: [
      { icon: 'github', link: 'https://github.com/BasharMKhalaf' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]

const managers = [
  {
    avatar: '/assets/imgs/dr.rehab profile.jpeg',
    name: 'Dr. Rehab Emad El-Dein',
    title: 'Project Advisor | Computer Science Professor',
    links: [
      { icon: 'gmail', link: 'mailto:engrehab992@gmail.com' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Project Managers
    </template>
    <template #lead>
        Our experienced mentors and industry leaders who guide and support the team throughout the project development.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="managers" />
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      Meet the people behind this project, dedicated to making programming education accessible and engaging for everyone.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members />
</VPTeamPage>