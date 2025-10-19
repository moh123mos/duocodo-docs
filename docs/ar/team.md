---
layout: page
title: فريقنا
description: تعرف على الأشخاص الذين يقفون وراء هذا المشروع، المكرسين لجعل تعليم البرمجة سهل الوصول وجذاباً للجميع
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
    name: 'محمد مصطفى',
    title: 'قائد الفريق | مطور الواجهة الأمامية',
    links: [
      { icon: 'github', link: 'https://github.com/moh123mos' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mohammed-mostafa-b72804320/' }
    ]
  },
  {
    avatar: 'https://www.github.com/Mohamed5289.png',
    name: 'محمد رجب',
    title: 'مطور الواجهة الخلفية | متخصص .NET',
    links: [
      { icon: 'github', link: 'https://github.com/Mohamed5289' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mohammed-ragab-4327b1317/' }
    ]
  },
  {
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQFT4b2WU-X9kg/profile-displayphoto-scale_200_200/B56ZkLPKuCG4Ac-/0/1756830150981?e=1762387200&v=beta&t=luxyiYoZ06NbhCbIv2EW2LkmPY82Ih0aPnNPuQtw5Rk',
    name: 'عمار عماد',
    title: 'مطور Flutter | متخصص تطبيقات الجوال',
    links: [
      { icon: 'github', link: 'https://github.com/AmmarEmad-2004' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/ammar-emad/' }
    ]
  },
  {
    avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQETy5Fkc4_gnQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731538278215?e=1762387200&v=beta&t=6uLvF6o7gph_5N86vnfHHNHgRDBhazg5P_nBxQGw3gM',
    name: 'ياسين خالد',
    title: 'مطور الواجهة الخلفية | متخصص .NET',
    links: [
      // { icon: 'github', link: 'https://github.com/AmmarEmad-2004' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/yassen-khalid-32035024a/' }
    ]
  },
  {
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQFWsWKAxEgK_w/profile-displayphoto-crop_800_800/B56Zk9fTANG4AI-/0/1757673241017?e=1762387200&v=beta&t=T-qkcBVF-m70bRpgVjxHHGKxLHOAorSvR1zOtNXN2iE',
    name: 'مروة فريد',
    title: 'مهندسة تعلم آلي | متخصصة ذكاء اصطناعي',
    links: [
      { icon: 'github', link: 'https://github.com/marwafarid33' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/marwa-farid-003079384/' }
    ]
  },
  {
    avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQFQ-TVjo2bcBg/profile-displayphoto-scale_200_200/B4DZeuOVa6HkAY-/0/1750974687361?e=1762387200&v=beta&t=pIdZhGTDWI4wVWhamwXAKpOXCGKqz4oKwU3ESxxzYkM',
    name: 'علاء محمد',
    title: 'مصممة واجهات وتجربة المستخدم | مصممة جرافيك',
    links: [
      // { icon: 'github', link: 'https://github.com/AmmarEmad-2004' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/alaa-mohamed-315154317/' }
    ]
  },
  {
    avatar: 'https://www.github.com/BasharMKhalaf.png',
    name: 'بشار خلف',
    title: 'مطور الواجهة الخلفية | متخصص .NET',
    links: [
      { icon: 'github', link: 'https://github.com/BasharMKhalaf' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]

const managers = [
  {
    avatar: '/public/assets/imgs/dr.rehab profile.jpeg',
    name: 'د. رحاب عماد الدين',
    title: 'مستشارة المشروع | أستاذة علوم الحاسوب',
    links: [
      { icon: 'gmail', link: 'mailto:engrehab992@gmail.com' }
    ]
  },
  {
    avatar: 'https://media.licdn.com/dms/image/v2/C4E03AQE9cI03uN_7Yw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1639762684546?e=1762387200&v=beta&t=aouT9RHFIQWbN7SChDw5uX51qzGiQZDNhS2X5K9UcRU',
    name: 'م. محمد فرج',
    title: 'مدير المشروع | مؤسس CIBS Soft',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mohamed-faraj-1b5091123/' },
      { icon: 'gmail', link: 'mailto:CIBSSoft@gmail.com' },
    ]
  },
]
</script>

<VPTeamPage>
<VPTeamPageTitle>
    <template #title>
      مسئولو المشروع
        </template>
        <template #lead>
        خبراؤنا الموجهون وقادة التطوير الذين يوجهون ويدعمون الفريق طوال تطوير المشروع.
        </template>
      </VPTeamPageTitle>
      <VPTeamMembers size="medium" :members="managers" />
      <VPTeamPageTitle>
        <template #title>
      فريقنا
        </template>
        <template #lead>
      تعرف على الأشخاص الذين يقفون وراء هذا المشروع، المكرسين لجعل تعليم البرمجة سهل الوصول وجذاباً للجميع.
        </template>
      </VPTeamPageTitle>
      <VPTeamMembers size="medium" :members="members" />
</VPTeamPage>
