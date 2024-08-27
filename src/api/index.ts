import axios from "axios";
import {useStore} from "@/stores";
import { ElMessage } from 'element-plus'
import type {optionType} from "@/types";

export const useAxios = axios.create({
    baseURL: "", // 注意这里要留空，方便我们去配置前端代理
})
export interface baseResponse<T> {
    code: number
    data: T
    msg: string
}
export interface listDataType<T> {
    count: number
    list: T[]
}
useAxios.interceptors.request.use((config) => {
    const store = useStore()
    config.headers["token"] = store.userInfo.token
    return config
})
useAxios.interceptors.response.use((response) => {
    if (response.status !== 200) {
        // 失败的
        console.log("服务失败", response.status)
        ElMessage.error(response.statusText)
        return Promise.reject(response.statusText)
    }
    return response.data
}, (err) => {
    console.log("服务错误", err)
    ElMessage.error(err.message)
    return Promise.reject(err.message)
})
