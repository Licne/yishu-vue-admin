<template>
  <div class="dashboard-container h-[100vh] w-full">
    <el-container class="!h-full">
      <el-aside width="20rem" style="border: 1px solid #fff;">
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header height="5rem"><Header /></el-header>
        <el-main class="bg-slate-100">
          <RouterView/>
        </el-main>
      </el-container>
    </el-container>
    </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/Sidebar/index.vue";
import Header from '@/components/Header/index.vue'
</script>

<style scoped>

</style>