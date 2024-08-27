import {defineStore} from "pinia";
import {parseToken} from "@/utils/parseToken";

interface userInfoType {
    exp: number
    nickname: string
    role: number
    userID: number
    token: string
}

const userInfo: userInfoType = {
    exp: 0,
    nickname: '',
    role: 0,
    userID: 0,
    token: ''
}
export const useStore = defineStore('counter', {
    state: (): userInfoType => {
        return {
            userInfo: userInfo
        }
    },
    getters: {
    },
    actions: {
        setToken(token: string) {
            const payload = parseToken(token)
            this.userInfo.token = token
            this.userInfo.exp = payload.exp
            this.userInfo.role = payload.role
            this.userInfo.nickname = payload.nickname
            this.userInfo.userID = payload.userID
            this.saveToken()
        },
        saveToken() {
            localStorage.setItem("userInfo", JSON.stringfy(this.userInfo))
        },
        loadToken() {
            let val = localStorage.getItem("userInfo")
            if(!val){
                return
            }
            try{
                this.userInfo = JSON.parse(val)
            }catch (err) {
                localStorage.removeItem("userInfo")
                return;
            }
        }
    }
})