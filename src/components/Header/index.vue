<template>
    <div class="header-container flex justify-between text-[1.2rem]">
        <div class="self-center">
            <span>仪表盘</span>
            <el-icon v-show="pagesStore.currentPageTitle"><ArrowRight /></el-icon>
            <span>{{ pagesStore.currentPageTitle }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
// import {useRoute} from 'vue-router'
import { usePagesStore } from "@/stores/modules/pages";

// const route = useRoute();
const pagesStore = usePagesStore();

</script>

<style lang="scss" scoped>
.header-container {
    width: 100%;
    height: 100%;
}

</style>