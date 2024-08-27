import { fileURLToPath, URL } from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import type {ImportMetaEnv} from "./env";
// https://vitejs.dev/config/
export default defineConfig(({command,mode})=>{
  let env:Record<keyof ImportMetaEnv,string> = loadEnv(mode,process.cwd())
  console.log(env)
  const serverUrl:string = env.VITE_SERVER_URL

    return {
      plugins: [vue(), vueJsx()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      envDir: "./",
      server: {
        host: "0.0.0.0",
        port: 80,
        proxy: {
          "/api": {
            target: serverUrl,
            changeOrigin: true,
          }
        }
      }
    }
})
