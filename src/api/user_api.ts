import {type baseResponse, useAxios} from "@/api/index";

export interface verificationQuestionType {
    problem1?: string,
    problem2?: string,
    problem3?: string,
    answer1?: string,
    answer2?: string,
    answer3?: string,
}

export interface userInfoType {
    userID: number,
    nickname: string,
    abstract: string,
    avatar: string, //头像url;
    recallMessage?: string, //撤回消息的提示词
    friendOnline: boolean, //好友上线提醒是否开启
    sound: boolean, //是否开启声音提醒
    secureLink: boolean, //是否开启安全链接
    savePwd: boolean, //是否记住密码
    searchUser: number, //别人搜索我(userid)的方式，0表示不允许别人查找到我，1表示可以通过用户号找到我，2表示可以通过我的昵称找到我
    verification: number, //好友验证，0表示不允许任何人添加，1表示允许任何人添加，2表示需要验证消息，3表示需要回答问题，4表示需要正确回答问题
    verificationQuestion: verificationQuestionType
}

export function userInfoApi(): Promise<baseResponse<userInfoType>> {
    return useAxios.get("/api/user/user_info")
}