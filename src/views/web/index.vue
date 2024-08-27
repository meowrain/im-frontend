<script setup lang="ts">

</script>

<template>
<div class="im_web">
<div class="im_slide">
  <div class="avatar">
    <img
        src="https://meowrain.cn/upload/2024/06/IMG_20240511_124707_183.jpg"
        alt="">
  </div>
  <div class="im_menus">
    <div class="icon">会话</div>
    <div class="icon">联系人</div>
    <div class="icon">通知</div>
  </div>
  <div class="other">其它</div>
</div>
<RouterView/>
</div>
</template>

<style lang="scss" scoped>
.im_web {
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
  .other {
    position: absolute;
    bottom: 20px;
  }
}
</style>