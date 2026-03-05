<script setup lang="ts">
import { type TemplateType } from '@/templates/config'
import { useRouter } from 'vue-router'

defineProps<{ theme: TemplateType }>()
const router = useRouter()

const edit = (type: string) => {
  router.push({ path: '/editor', query: { type } })
}
</script>

<template>
  <div class="resume-card" data-aos="zoom-in" @click="edit(theme.type)">
    <p class="template-hot" v-show="theme.hot">
      <i class="iconfont icon-hot font-20"></i> {{ theme.hot }}
    </p>
    <div class="card-body">
      <span class="template-name">{{ theme.name }}</span>
      <div class="resume-card-mask">
        <button class="btn center pointer">使用模板</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resume-card {
  margin: 5px 20px 20px 0;
  width: 185px;
  height: 100px;
  position: relative;
  text-align: center;
  transition: transform 0.4s;
  color: var(--font-color);
  cursor: pointer;

  .template-hot {
    height: 25px;
    background: var(--background);
    font-size: 12px;
    top: -25px;
    position: absolute;
    text-align: left;
    i {
      color: orangered;
    }
  }

  .card-body {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: var(--background);

    .template-name {
      font-size: 13px;
      padding: 10px;
      line-height: 1.4;
    }
  }

  .resume-card-mask {
    border-radius: 8px;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: none;
    background: rgba(0, 0, 0, 0.5);

    button {
      border-radius: 3px;
      color: white;
      background: var(--theme);
    }
  }

  &:hover {
    transform: translateY(-4px);
    .resume-card-mask {
      display: block;
    }
  }
}
</style>
