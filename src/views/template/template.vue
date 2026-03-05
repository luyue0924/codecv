<script setup lang="ts">
import NavBar from '@/components/navBar.vue'
import resumeCard from './components/resumeCard.vue'
import Empty from '@/components/empty.vue'
import { templateCategory } from './constant'
import { useCategory } from './hook'

const { queryCategory, data } = useCategory()
</script>

<template>
  <div class="resume-container content-card" data-aos="fade-right">
    <NavBar button="创作模板" :tabs="templateCategory" @tab-click="queryCategory" />
    <div class="resume-card-container" v-if="data.length">
      <resume-card v-for="theme in data" :key="theme.id" :theme="theme" />
    </div>
    <Empty v-else title="暂时没有这类模板" />
  </div>
</template>

<style lang="scss" scoped>
.resume-container {
  max-width: var(--max-width);
  margin: 20px auto;

  .resume-card-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }
}
@media screen and (max-width: 800px) {
  .resume-container {
    margin: 10px;
    .resume-card-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
