/// <reference types="vite/client" />
export interface ImportMetaEnv {
    readonly VITE_SERVER_URL: string
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_ENV: string
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}