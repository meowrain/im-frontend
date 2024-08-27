<script setup lang="ts">
import { useStore } from "@/stores";
const store = useStore()
store.loadToken()
</script>

<template>
  <div class="im_body">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.im_body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  background-color: #f0eeee;
}
</style>
