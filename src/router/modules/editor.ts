import Layout from '@/layout/main.vue'

export default {
  path: '/editor',
  component: Layout,
  children: [
    {
      path: '/editor',
      name: 'editor',
      component: () => import('@/views/editor/editor.vue')
    }
  ]
}
