<template>
  <el-config-provider namespace="ep">
    <div class="flex main-container">
      <BaseSide />
      <div class="w-full h-full ">
        <router-view /> <!-- 使用 router-view 来加载子组件 -->
      </div>

    </div>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height:100vh;
}
</style>
