import type {baseResponse} from "@/api/index";
import {useAxios} from "@/api/index";
export interface authLoginRequest {
    username: string;
    password: string;
}
export interface authLoginResponse {
    token: string;
}

export function authLoginApi(data: authLoginRequest): Promise<baseResponse<authLoginResponse>> {
    return useAxios.post("/api/auth/login", data)
}