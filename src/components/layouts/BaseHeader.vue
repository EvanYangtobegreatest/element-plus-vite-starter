<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <!-- 点击 Evan Yang 跳转到首页 -->
    <el-menu-item index="1" @click="goToHome">Evan Yang</el-menu-item>

    <el-menu-item h="full" @click="toggleDark()">
      <button
          class="border-none w-full bg-transparent cursor-pointer"
          style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu-demo {
  border: none; /* 去掉整个菜单的边框 */
}

.el-menu-demo .el-menu-item {
  border-right: none; /* 去掉每个菜单项之间的右边框 */
}

/* 可选: 去掉鼠标悬停时的边框（如果有的话） */
.el-menu-demo .el-menu-item:hover {
  border: none; /* 去掉鼠标悬停时的边框 */
}
</style>

<script lang="ts" setup>
import { toggleDark } from "~/composables";
import { useRouter } from 'vue-router'; // 引入 useRouter

const router = useRouter(); // 获取路由实例

// 跳转首页的方法
const goToHome = () => {
  router.push('/'); // 跳转到首页
};
</script>
