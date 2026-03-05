<script setup lang="ts">
import ThemeToggle from '@/components/themeToggle.vue'
</script>

<template>
  <div class="header-out noto-sans-sc">
    <div class="header">
      <span class="site-name" @click="$router.push('/template')">简历工具</span>
      <ThemeToggle />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-out {
  width: 100%;
  background: var(--background);
  color: var(--font-color);
  height: 60px;
  z-index: 9;
  position: sticky;
  top: 0;
  overflow: hidden;
  font-weight: 600;

  .header {
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .site-name {
    font-size: 18px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
}

@media screen and (max-width: 800px) {
  .header-out .header {
    display: none;
  }

  .header-out .header-800 {
    display: block;
  }
}
</style>
