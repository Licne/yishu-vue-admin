<template>
  <div class="sidebar-container">
    <el-menu :background-color="variables.menuBg" :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText" class="w-full menu-container h-full">
      <!-- 标题 -->
      <div class="sidebar-header h-[5rem] font-bold text-[1.4rem] text-center p-[1.4rem]">
      <span>易书后台管理系统</span>
      </div>
      <!-- 菜单 -->
      <el-menu-item @click="handleSelect(page)" :index="page.name" v-for="page in pagesStore.pages" :key="page.name">
        <div class="flex justify-center items-center">
          <el-icon>
            <component :is="page.iconName"/>
          </el-icon>
          <span>{{ page.title }}</span>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import variables from "@/styles/variables.module.scss";

import { usePagesStore } from "@/stores/modules/pages";
// import {pageChange} from '@/utils/routerManager'

const pagesStore = usePagesStore();

const router = useRouter();

const handleSelect = (page:any) => {
  // pageChange(page.name,page.path);
  
  pagesStore.changePageActive(page.name)
  router.push(page.path);
  // console.log(pagesStore.pages);
}


</script>

<style lang="scss" scoped>
.sidebar-container {
  // background-color: $menuBg;
  width: 100%;
  height: 100%;
}

.sidebar-header {
  background-color: $menuHover;
  color: #fff;
}

.menu-container {
  // height: calc(100% - 5rem);
  :hover{
    background-color: $menuHover;
  }
}


</style>