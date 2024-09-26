import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {parseToken} from "@/utils/parseToken";
import {userInfoApi} from "@/api/user_api";
import {ElMessage} from "element-plus";

interface userInfoType {
    exp: number
    nickname: string
    role: number
    userID: number
    token: string
    avatar: string
}

const userInfo: userInfoType = {
    exp: 0,
    nickname: "",
    role: 0,
    userID: 0,
    token: "",
    avatar: "",
}


export const useStore = defineStore('counter', {
    state: () => {
        return {
            userInfo: userInfo,
        }
    },
    actions: {
        async setToken(token: string) {
            const payload = parseToken(token)
            this.userInfo.token = token
            this.userInfo.exp = payload.exp
            this.userInfo.nickname = payload.nickname
            this.userInfo.role = payload.role
            this.userInfo.userID = payload.userID
            //去fetch用户信息
            const res = await userInfoApi()
            if(res.code) {
                ElMessage.error(res.msg)
                return
            }
            this.userInfo.avatar = res.data.avatar
            // 调一下持久化
            this.saveToken()
        },
        saveToken() {
            localStorage.setItem("userInfo", JSON.stringify(this.userInfo))
        },
        loadToken() {
            const val = localStorage.getItem("userInfo")
            if (!val) {
                // 没有登陆，或者登陆失效
                return
            }
            try {
                this.userInfo = JSON.parse(val)
            } catch (e) {
                localStorage.removeItem("userInfo")
                return;
            }
        }
    },
    getters: {
        //是否登录
        isLogin():boolean {
            return this.userInfo.token != ""
        }
    }
})