<template>
    <div>
        <el-card>
            <span>
                关键字 <el-input v-model="keyword" style="width: 24rem" size='small' placeholder="请输入关键词" class="ml-4" @keydown="keywordSearch"/>
            </span>
            <el-button type="primary" size="small" class="float-end" @click="resetKeyword"><el-icon><Refresh /></el-icon>重置</el-button>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const keyword = ref('');

// 重置输入框
const resetKeyword = () => {
    keyword.value = '';
}

// 关键词搜索
const keywordSearch = (event:any) => {
    if(event.key === 'Enter'){
        console.log('执行商品查询');
    }
}


</script>

<style scoped></style>