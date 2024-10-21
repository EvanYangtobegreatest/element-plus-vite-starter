<template>
  <div
      class="sidebar"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
  >
    <el-menu
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        class="el-menu-vertical-demo"
        mode="vertical"
    >
      <el-menu-item index="1">
        <!-- 图片作为Logo -->
        <img class="logo" src="https://pub-c0e7f6c66b954c3a93e96fc7aa5425c6.r2.dev/%E6%94%B6%E8%97%8F/IMG_5657.JPG" alt="Evan Yang" />
        <!-- 菜单标题，折叠时隐藏 -->
        <span v-if="!isCollapse" class="menu-title">Evan Yang</span>
      </el-menu-item>
      <template v-for="item in menuItems" :key="item.index">
        <el-menu-item :index="item.index"  @click="navigateTo(item.route)" >
          <el-icon>
            <component :is="item.icon" /> <!-- 使用组件来渲染图标 -->
          </el-icon>
          <span v-if="!isCollapse"class="menu-title">{{ item.title }}</span>
        </el-menu-item>
      </template>
      <el-menu-item index="4" @click="toggleDark()">
        <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height)">
          <i inline-flex i="dark:ep-moon ep-sunny" />
        </button>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { toggleDark } from "~/composables";
import { useRouter } from 'vue-router'; // 引入 useRouter
import { House, Camera, Mute } from '@element-plus/icons-vue'; // 引入需要的图标

const router = useRouter(); // 获取路由实例

// 菜单项配置
const menuItems = [
  { index: '2', title: '主页', icon: House, route: '/' },
  { index: '3', title: '分类', icon: Camera, route: '/category' },
];

// 跳转到指定路由的方法
const navigateTo = (route: string) => {
  router.push(route);
};

// 控制菜单是否折叠
const isCollapse = ref(true);

// 鼠标移入时展开菜单
const handleMouseEnter = () => {
  isCollapse.value = false;
};

// 鼠标移出时折叠菜单
const handleMouseLeave = () => {
  isCollapse.value = true;
};

// 打开和关闭菜单时的处理函数
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.sidebar {
  width: 64px; /* 默认折叠时的宽度 */
  transition: width 0.4s ease; /* 动画过渡效果 */
}
.sidebar:hover {
  width: 200px; /* 鼠标悬停时展开的宽度 */
}

.logo {
  width: 40px; /* Logo图片的大小 */
  height: 40px;
  transition: opacity 0.3s ease;
  margin-right: 8px;
}

.menu-title {
  transition: opacity 0.3s ease;
}

.el-menu-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
