import { defineStore } from "pinia";
import { ref } from "vue";

export const usePagesStore = defineStore('pages',() => {
    // 页面列表
    const pages = ref<Page[]>([
        {
            title:'主页',
            name:'home',
            path:'/home',
            isActive:false,
            iconName:'setting'
        },
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

    // 当前页面标题
    const currentPageTitle = ref<string>('');

    // 取得当前打开页面
    const findPageActive = (name:string):Page | undefined => {
        return pages.value.find((page => page.name === name))
    }

    // 修改页面状态
    const changePageActive = (name:string) => {
        const curPage = findPageActive(name);

        if (curPage) {
            pages.value.forEach(page => {
              if (page.name !== name) {
                page.isActive = false; // 修改其他页面的 isActive 属性为 false
              } else {
                page.isActive = true; // 修改当前页面的 isActive 属性为 true
                currentPageTitle.value = page.title
              }
            });
          }
        
    }

    return{
        pages,
        currentPageTitle,
        changePageActive,

    }
})