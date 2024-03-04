import { defineStore } from "pinia";
// import { ref } from "vue";
import { useStorage } from "@vueuse/core";
import type { LoginData } from "@/apis/auth/types";
import { loginApi } from "@/apis/auth";
import { store } from "@/stores";

export const useUsersStore = defineStore('users',() => {

    const token = useStorage("accessToken", "");

    const login = async (loginData : LoginData) => {
        const data : any = {
            userName : loginData.username,
            password : loginData.password
        }

        try {
            const res = await loginApi(data);
            token.value = res.data.Authorization;
            console.log("登录成功");        
        } catch (error) {
            token.value = '';
            console.log(error);
            return Promise.reject(error)
        }


    }


    return {
        login,
        token,
    }
})

// 非setup
export function useUsersStoreHook() {
    return useUsersStore(store);
  }