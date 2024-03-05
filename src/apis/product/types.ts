export interface ProductsSearchData extends Pagination {
    // page:number;
    // pageSize:number;

    // 关键词
    attribute?:string;
    // 用户名
    owner?:string;

}

export interface ProductsData {
    records:[{
        // id 
        id:number;
        // 名称
        name:string;
        // 分类
        categoryName:string;
        // 价格
        price:string;
        // 描述
        description:string;
        // 持有者
        owner:string;
    }]
}