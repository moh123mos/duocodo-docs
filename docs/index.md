---
layout: home
hero:
  name: "DuoCode"
  text: "Graduation Project Documentation"
  tagline: "Brief description of what your project does"
  image:
    src: http://vitepress.dev/vitepress-logo-large.svg
    alt: DuoCode Project
  actions:
    - theme: brand
      text: Get Started
      link: /introduction/overview
    - theme: alt
      text: View on GitHub
      link: https://github.com/moh123mos/duocode-docs
    - theme: alt
      text: 📄 Download PDF
      link: /duocode.pdf
    - theme: alt
      text: 📝 Download DOCX
      link: /duocode.docx

features:
  - icon: 📝
    title: Focus on Your Content
    details: Effortlessly create beautiful documentation sites with just markdown.
  - icon: ⚡
    title: Enjoy the Vite DX
    details: Instant server start, lightning fast hot updates, and leverage Vite ecosystem plugins.
  - icon: 🎨
    title: Customize with Vue
    details: Use Vue syntax and components directly in markdown, or build custom themes with Vue.
  - icon: 🚀
    title: Ship Fast Sites
    details: Fast initial load with static HTML, fast post-load navigation with client-side routing.
---

<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  // This script is used to handle the download of the DOCX file
  const docxLink = document.querySelector('a[href="/duocode.docx.html"]');
  docxLink.setAttribute('href', 'javascript:void(0)');
  if (docxLink) {
   docxLink.addEventListener('click', (event) => {
      event.preventDefault();
      location.href = '/duocode.docx';
    });
  }
});
</script>
