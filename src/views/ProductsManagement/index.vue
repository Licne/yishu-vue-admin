<template>
    <div>
        <!-- 搜索框 -->
        <el-card class="mb-8">
            <span>
                关键字 <el-input v-model="keyword" style="width: 24rem" size='small' placeholder="请输入关键词" class="ml-4"
                    @keydown="handleSearchByEnter" />
            </span>
            <span class="ml-4">
                卖家名称 <el-input v-model="owner" style="width: 24rem" size='small' placeholder="请输入关键词" class="ml-4"
                    @keydown="handleSearchByEnter" />
            </span>

            <span class="float-end">
                <el-button type="primary" size="small" @click="resetKeyword">
                    <el-icon>
                        <Search />
                    </el-icon>查询
                </el-button>

                <el-button type="info" size="small" @click="resetKeyword">
                    <el-icon>
                        <Refresh />
                    </el-icon>重置
                </el-button>
            </span>
            <!-- 列表区 -->
        </el-card>

        <el-table :data="productsData" border style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type {ProductsSearchData,ProductsData} from "@/apis/product/types"
import {productsSearchByOwnerApi} from "@/apis/product"

// 防抖定时器
const queryTimeOut = ref();

const keyword = ref('');
const owner = ref('');
const productsData = ref();

// 重置输入框
const resetKeyword = () => {
    keyword.value = '';
    owner.value = '';
}
// 处理Enter键搜索
const handleSearchByEnter = (event: any) => {
    if (event.key === 'Enter') {

        ProductsSearch();
        console.log('执行搜索');
        
    }
}

const ProductsSearch = () => {
    //清除定时器
    clearTimeout(queryTimeOut.value);
    queryTimeOut.value = setTimeout(async () => {
        try {
            const data:ProductsSearchData = {
                page:1,
                pageSize:5,
                // attribute:keyword.value,
                // owner:owner.value
            }

            const res = await productsSearchByOwnerApi(data);
            productsData.value = res.data.records;
            console.log(res);

        } catch (error) {
            console.log(111);
        }
    },500)
}

</script>

<style scoped></style>