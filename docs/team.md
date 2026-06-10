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
    title: 'Team Lead | Full Stack Developer',
    links: [
      { 
        icon: {
          // كود SVG يعرض حروف M.M في المنتصف
          svg: `<svg xmlns="http://www.w3.org/2000/svg" aria-label="dev.to" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%"/><path fill="#ffffff" d="M140.47 203.94h-17.44v104.47h17.45c10.155-.545 17.358-8.669 17.47-17.41v-69.65c-.696-10.364-7.796-17.272-17.48-17.41zm45.73 87.25c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H233.6v38.42h32.57v29.57H233.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"/></svg>`
        },
        link: 'https://muhamed-mustafa.dev'
      },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mhamed-mstafa/' }
    ]
  },
   {
    avatar: '/assets/imgs/alaa.jpeg',
    name: 'Alaa Mohamed',
    title: 'UI/UX Designer | Graphic Designer',
    links: [
      { icon: 'behance', link: 'https://www.behance.net/alaamohamed417' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/alaa-mohamed-315154317/' }
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
    avatar: '/assets/imgs/mohamed-ragab.png',
    name: 'Mohamed Ragab',
    title: 'Backend Developer | .NET Specialist',
    links: [
      { icon: 'github', link: 'https://github.com/Mohamed5289' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mohammed-ragab-4327b1317/' }
    ]
  },
  {
    avatar: '/assets/imgs/yasso.jpg',
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
      { icon: 'gmail', link: 'mailto:rehab.mohamed@mu.edu.eg' }
    ]
  },
  {
    avatar: '/assets/imgs/mohamed sha3ban.jpg',
    name: 'Eng. Mohammed Shaaban',
    title: 'Teaching Assistant',
    links: [
      { icon: 'gmail', link: 'mailto:mohamed.shaban@mu.edu.eg' }
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
