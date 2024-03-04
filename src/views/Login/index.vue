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

import {useUsersStore} from '@/stores/modules/users'

import type { LoginData } from "@/apis/auth/types";

const usersStore = useUsersStore();

/**
 * 登录
 */
const loginData = ref<LoginData>({
    username: "admin",
    password: "admin",
})

const handleLogin = async () => {
    // console.log(loginData.value)

    try {
        await usersStore.login(loginData.value);
        router.push('/home');
    } catch (error) {
        console.log('出错')
    }
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