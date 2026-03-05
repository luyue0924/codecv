<script setup lang="ts">
import navMenu from './nav.vue'
import ThemeToggle from '@/components/themeToggle.vue'
import { useFile } from './hook'
import { ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import useEditorStore from '@/store/modules/editor'

const emit = defineEmits([
  'download-dynamic',
  'download-native',
  'download-md',
  'import-md',
  'download-picture'
])

const { exportFile, importFile, fileName } = useFile(emit)

const saved = ref(false)
const editorStore = useEditorStore()
const showSaved = useDebounceFn(() => {
  saved.value = true
  setTimeout(() => (saved.value = false), 2000)
}, 800)
watch(() => editorStore.MDContent, showSaved)
</script>

<template>
  <div id="header" class="noto-sans-sc">
    <el-tooltip content="返回上一页">
      <i class="iconfont icon-back font-20 hover" @click="$router.back()"></i>
    </el-tooltip>
    <input id="resume-name-input" type="text" v-model="fileName" />
    <nav-menu
      @export-md="exportFile('md')"
      @import-md="importFile"
      @export-picture="exportFile('picture')"
    />
    <span class="save-status" :class="{ visible: saved }">✓ 已自动保存</span>
    <button class="exporter local-export btn" @click="exportFile('native')">导出简历</button>
    <div class="operator">
      <theme-toggle />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#header {
  z-index: 9;
  height: 60px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  text-align: center;
  color: var(--font-color);
  background: var(--background);
  font-weight: 600;

  #resume-name-input {
    border: none;
    outline: none;
    padding: 8px 10px;
    border-radius: 5px;
    background: var(--body-background);
    font-family: var(--font-noto-sans-sc);

    &:focus {
      outline: 2px solid var(--theme);
    }
  }

  .exporter {
    outline: none;
    border: none;
    padding: 8px 10px;
    border-radius: 6px;
    margin-right: 10px;
    cursor: pointer;
    background: var(--theme);
    color: white;

    &:last-of-type {
      margin-right: 25px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  .save-status {
    font-size: 12px;
    color: #67c23a;
    font-weight: normal;
    margin-right: 10px;
    opacity: 0;
    transition: opacity 0.3s;
    &.visible {
      opacity: 1;
    }
  }
  .problem,
  .github,
  .icon-back {
    cursor: pointer;
    margin-right: 18px;
    font-weight: normal;
  }
}
</style>
