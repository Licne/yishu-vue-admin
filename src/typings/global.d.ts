declare global {
    interface Page {
        // 页面标题
        title:string;
        // 页签名称
        name:string;
        // 页签路由
        path:string;
        // 页签激活状态
        isActive:boolean;
        // 组件路径
        iconName:string;
    }
}
export {};
