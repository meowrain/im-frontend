<script setup lang="ts">

import {ChatLineRound, Menu, Notification, User} from "@element-plus/icons-vue";
import {useRoute, useRouter} from "vue-router";
import {useStore} from "@/stores";
const store = useStore()
const route = useRoute()
const router = useRouter()
function checkMenu(menu: string){
  router.push({
    name: menu
  })
}
</script>

<template>
<div class="im_web">
<div class="im_slide">
  <div class="avatar" @click="checkMenu('info')">
    <img :src="store.userInfo.avatar" alt="">
  </div>
  <div class="im_menus">
   <div class="icon" :class="{active: route.name === 'session'}" @click="checkMenu('session')">
     <el-icon>
       <ChatLineRound/>
     </el-icon>
   </div>
    <div class="icon" :class="{active: route.name === 'contacts'}" @click="checkMenu('contacts')">
  <el-icon>
    <User/>
  </el-icon>
    </div>
    <div class="icon" :class="{active: route.name === 'notice'}" @click="checkMenu('notice')">
      <el-icon>
      <Notification/>
    </el-icon>
    </div>
  </div>
  <div class="other icon">
    <el-icon>
      <Menu/>
    </el-icon>
  </div>
</div>
<RouterView/>
</div>
</template>

<style lang="scss" scoped>
.im_web {
  display: flex;
  flex-direction: row;
  width: 1000px;
  height: 600px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
}
.im_slide {
  width: 80px;
  height: 100%;
  background-color: #e0e0e0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  .avatar {
    cursor: pointer;
    width: 46px;
    height: 46px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .im_menus {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    >div {
      margin-bottom: 20px;
    }
  }
  .icon {
    cursor: pointer;
    font-size: 20px;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;

    &:hover{
      background-color: #d9d9d9;
    }

    &.active{
      color: #1684fc;
      background-color: #d9d9d9;
    }
  }

  .other {
    position: absolute;
    bottom: 20px;
  }
}
</style>