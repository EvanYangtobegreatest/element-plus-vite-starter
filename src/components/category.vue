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
                style="max-width: 100%"
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

// 获取数据
onMounted(() => {
  setLoading(); // 开始加载
  lists.value = [
    { imgUrl: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', name: 'Deer' },
    { imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', name: 'Horse' },
    { imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg', name: 'Mountain Lion' },
  ];
  loading.value = false; // 停止加载
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
