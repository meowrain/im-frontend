/*
* 解析一个 JWT（JSON Web Token
* */

/*
tokenPayload
* 它定义了四个属性：
exp: 过期时间（数字类型）。
nickname: 用户昵称（字符串类型）。
role: 用户角色（数字类型，可能表示权限级别）。
userID: 用户的唯一标识符（数字类型）。
* */
export interface tokenPayload {
    exp: number
    nickname: string
    role: number
    userID: number
}
/*
parseToken
这个函数会把传入的 JWT 解析出其中的有效负载，并将其转换成一个 tokenPayload 对象。这样你可以方便地访问 exp、nickname、role 和 userID 等信息。
* */
export function parseToken(token: string):tokenPayload {
    /*
    let payload = token.split(".")[1];
    JWT 通常由三个部分组成，用点 . 分隔：header.payload.signature。
    这行代码把 token 用 . 分隔开，并取出中间的部分，也就是有效负载部分 payload。
    * */
    let payload = token.split(".")[1]

    /*
    * window.atob(payload)：这个方法用于将 Base64 编码的字符串解码成普通字符串。
    * escape 和 decodeURIComponent 用于处理特殊字符的转换，以确保解码后的字符串能够正确解析。
    * replace(/-/g, "+").replace(/_/g, "/")：在 JWT 中，有些字符可能被替换成 - 和 _，这行代码把它们替换回原来的 + 和 /。
    *
    * */
    return JSON.parse(decodeURIComponent(escape(window.atob(payload.replace(/-/g, "+").replace(/_/g, "/")))))
}