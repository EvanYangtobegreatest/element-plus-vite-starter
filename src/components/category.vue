<template>
  <el-space style="width: 100%" fill>
    <el-skeleton
        style="display: flex; gap: 8px"
        :loading="loading"
        animated
        :count="3"
    >
      <template #template>
        <div style="flex: 1">
          <el-skeleton-item variant="image" style="height: 240px" />
          <div style="padding: 14px">
            <el-skeleton-item variant="h3" style="width: 50%" />
            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 16px; height: 16px;">
              <el-skeleton-item variant="text" style="margin-right: 16px" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div>
        </div>
      </template>
      <template #default>
        <div class="grid-container">
          <el-card
              v-for="item in lists"
              :key="item.name"
              :body-style="{ padding: '0px', marginBottom: '1px' }"
              class="grid-item"
          >
            <img
                :src="item.imgUrl"
                class="image multi-content"
              style="max-width: 100%;height: 400px;"
                alt="item.name"
            />
            <div style="padding: 14px">
              <span>{{ item.name }}</span>
              <div class="bottom card-header">
                <div class="time">{{ currentDate }}</div>
                <el-button text class="button" @click="() => goTodetail(item.name)">more</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </template>
    </el-skeleton>
  </el-space>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const router = useRouter();

const goTodetail = (name: string) => {
  router.push({ path: '/detail', query: { name } });
};

interface ListItem {
  imgUrl: string;
  name: string;
}

const loading = ref(true);
const lists = ref<ListItem[]>([]);
const currentDate = new Date().toDateString();

// 模拟加载数据
const setLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

// 从服务器获取 foldersWithImages 数据
const fetchFoldersWithImages = async () => {
  try {
    const response = await fetch('https://misty-recipe-c3a9.1310244108.workers.dev'); // 替换为真实的 API 请求
    const data = await response.json();

    // 映射数据到列表
    lists.value = data.foldersWithImages.map((folder: { folderName: string; firstImage: string }) => ({
      name: folder.folderName, // 文件夹名
      imgUrl: folder.firstImage // 文件夹的第一张图片 URL
    }));
  } catch (error) {
    console.error('Error fetching folders with images:', error);
  } finally {
    loading.value = false;
  }
};

// 获取数据
onMounted(() => {
  setLoading(); // 开始加载
  fetchFoldersWithImages(); // 调用 API 获取数据
});
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 每行3列 */
  gap: 8px; /* 网格项之间的间距 */
}

.grid-item {
  width: 100%; /* 确保每个网格项填满其列 */
  box-sizing: border-box; /* 包含内边距和边框在内计算元素总宽度和高度 */
}
</style>
