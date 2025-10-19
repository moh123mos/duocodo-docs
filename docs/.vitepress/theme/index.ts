import type { Theme } from 'vitepress'
import { useRoute } from 'vitepress'
import imageViewer from 'vitepress-plugin-image-viewer'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Layout from './Layout.vue'

import 'viewerjs/dist/viewer.min.css'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout)
  },
  setup() {
    const route = useRoute()
    imageViewer(route)
  },
} satisfies Theme