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
    avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQGhKaxL60Sh8w/profile-displayphoto-shrink_200_200/B4EZXQeBTqGwAY-/0/1742959287361?e=1762387200&v=beta&t=HpINvcdZDkDVA3SdBT1MjbdBuZ21L2DgtRBPQ6evH7U',
    name: 'Mohamed Mostafa',
    title: 'Team Lead | Frontend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/moh123mos' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mohammed-mostafa-b72804320/' }
    ]
  },
  {
    avatar: 'https://www.github.com/Mohamed5289.png',
    name: 'Mohamed Ragab',
    title: 'Backend Developer | .NET Specialist',
    links: [
      { icon: 'github', link: 'https://github.com/Mohamed5289' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mohammed-ragab-4327b1317/' }
    ]
  },
  {
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQFT4b2WU-X9kg/profile-displayphoto-scale_200_200/B56ZkLPKuCG4Ac-/0/1756830150981?e=1762387200&v=beta&t=luxyiYoZ06NbhCbIv2EW2LkmPY82Ih0aPnNPuQtw5Rk',
    name: 'Ammar Emad',
    title: 'Flutter Developer | Mobile Specialist',
    links: [
      { icon: 'github', link: 'https://github.com/AmmarEmad-2004' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/ammar-emad/' }
    ]
  },
  {
    avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQETy5Fkc4_gnQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731538278215?e=1762387200&v=beta&t=6uLvF6o7gph_5N86vnfHHNHgRDBhazg5P_nBxQGw3gM',
    name: 'Yassen Khaled',
    title: 'Backend Developer | .NET Specialist',
    links: [
      // { icon: 'github', link: 'https://github.com/AmmarEmad-2004' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/yassen-khalid-32035024a/' }
    ]
  },
  {
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQFWsWKAxEgK_w/profile-displayphoto-crop_800_800/B56Zk9fTANG4AI-/0/1757673241017?e=1762387200&v=beta&t=T-qkcBVF-m70bRpgVjxHHGKxLHOAorSvR1zOtNXN2iE',
    name: 'Marwa Farid',
    title: 'ML Engineer | AI Specialist',
    links: [
      { icon: 'github', link: 'https://github.com/marwafarid33' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/marwa-farid-003079384/' }
    ]
  },
  {
    avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQFQ-TVjo2bcBg/profile-displayphoto-scale_200_200/B4DZeuOVa6HkAY-/0/1750974687361?e=1762387200&v=beta&t=pIdZhGTDWI4wVWhamwXAKpOXCGKqz4oKwU3ESxxzYkM',
    name: 'Alaa Mohamed',
    title: 'UI/UX Designer | Graphic Designer',
    links: [
      // { icon: 'github', link: 'https://github.com/AmmarEmad-2004' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/alaa-mohamed-315154317/' }
    ]
  },
  {
    avatar: 'https://www.github.com/BasharMKhalaf.png',
    name: 'Bashar Khalaf',
    title: 'Backend Developer | .NET Specialist',
    links: [
      { icon: 'github', link: 'https://github.com/BasharMKhalaf' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]

const partners = [
  
  
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      Meet the people behind this project, dedicated to making programming education accessible and engaging for everyone.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members />

   <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>Partners who support our mission.</template>
    <template #members>
      <VPTeamMembers :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>