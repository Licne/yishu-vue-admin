import request from '@/utils/request'
import type { LoginData, LoginResult } from './types';
import type { AxiosPromise } from 'axios';

export function loginApi(data:LoginData):AxiosPromise<LoginResult> {
    return request({
        url:'/login/userLogin',
        headers: {
            isToken: false
        },
        method:'post',
        data:data
    })
}

