<template>
    <div class="login-container">
        <el-card class="w-[40rem] !border-none !rounded-3xl p-2">
            <div class="text-center text-[2rem] font-bold mb-8 ">
                <h2>易书后台管理系统</h2>
            </div>
            <el-form :model="loginData" class="font-semibold">
                <el-form-item label="账户">
                    <el-input size="large" v-model="loginData.username" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input 
                    size="large" 
                    v-model="loginData.password"
                    type="password"
                    />
                </el-form-item>

                <el-button type="primary" class="w-full" @click.prevent="handleLogin">登录
                </el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router';

import type { LoginData } from "@/apis/auth/types";



/**
 * 登录
 */
const loginData = ref<LoginData>({
    username: "admin",
    password: "114514",
})

const handleLogin = () => {
    console.log('1');
    router.push('/dashboard');
}

</script>

<style lang="scss" scoped>
.login-container {
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(to bottom, #cffafe, #ecfeff);

}
</style>