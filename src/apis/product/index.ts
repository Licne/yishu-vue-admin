import request from '@/utils/request'
import type { ProductsSearchData,ProductsData} from './types';
import type { AxiosPromise } from 'axios';

export function productsSearcApi(data:ProductsSearchData):AxiosPromise<ProductsData> {
    return request({
        url:'/goods/page',
        headers: {
            isToken: true
        },
        method:'get',
        params:data
    })
}

export function productsSearchByOwnerApi(data:ProductsSearchData):AxiosPromise<ProductsData> {
    return request({
        url:'/goods/ownerPage',
        headers: {
            isToken: false
        },
        method:'get',
        params:data
    })
}