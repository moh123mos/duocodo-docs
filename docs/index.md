---
layout: home
hero:
  name: "duocodo"
  text: "Graduation Project Documentation"
  tagline: "Brief description of what your project does"
  image:
    src: /hero.jpg
    alt: duocodo Project
  actions:
    - theme: brand
      text: Get Started
      link: /introduction/overview
    - theme: alt
      text: View on GitHub
      link: https://github.com/moh123mos/duocodo-docs
    - theme: alt
      text: 📄 Download PDF
      link: /duocodo.pdf
    - theme: alt
      text: 📝 Download DOCX
      link: /duocodo.docx

features:
  - icon: 🎯
    title: Progressive Learning Path
    details: Duolingo-style lessons structured in path format with levels, checkpoints, and clear progression tracking.
  - icon: 🎮
    title: Gamified Experience
    details: Earn badges, maintain streaks, gain experience points, and compete on leaderboards to stay motivated.
  - icon: 💻
    title: Hands-on Coding Practice
    details: Integrated problem-solving with instant feedback, model answers, and full solution breakdowns.
  - icon: 📊
    title: Code Complexity Analysis
    details: Each solution includes performance discussions and complexity analysis to deepen understanding.
  - icon: 🏗️
    title: Modular Curriculum
    details: Covers programming fundamentals and specialized modules like OOP, algorithms, and web development.
  - icon: 👥
    title: Community Engagement
    details: Share solutions, view others' approaches, and participate in coding challenges to promote peer learning.
---

<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  // This script is used to handle the download of the DOCX file
  let docxLinks = document.querySelectorAll('a[href="/duocodo.docx.html"]');
  docxLinks.forEach((link) => {
      link.setAttribute('href', 'javascript:void(0)');
      link.addEventListener('click', (event) => {
        location.href = '/duocodo.docx';
      });
  })
});
</script>
