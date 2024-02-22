import { defineStore } from "pinia";
import { ref } from "vue";

export const usePagesStore = defineStore('pages',() => {
    // 页面列表
    const pages = ref<Page[]>([
        {
            title:'测试页面1',
            name:'testPage1',
            path:'/testPage1',
            isActive:false,
            iconName:'setting'
        },
        {
            title:'测试页面2',
            name:'testPage2',
            path:'/testPage2',
            isActive:false,
            iconName:'setting'
        },
        {
            title:'测试页面3',
            name:'testPage3',
            path:'/testPage3',
            isActive:false,
            iconName:'setting'
        },
        {
            title:'测试页面4',
            name:'testPage4',
            path:'/testPage4',
            isActive:false,
            iconName:'setting'
        },
        {
            title:'测试页面5',
            name:'testPage5',
            path:'/testPage5',
            isActive:false,
            iconName:'setting'
        },
        
    ]);

    return{
        pages,
    }
})