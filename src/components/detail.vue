<template>
  <div class="masonry">
    <div
        class="masonry-item"
        v-infinite-scroll="load"
        v-for="(url, index) in displayUrls"
        :key="index"
        @click="openViewer(index)"
    >
      <el-image class="image" :src="url" lazy />
    </div>

    <!-- 全屏图片预览 -->
    <el-image-viewer
        v-if="viewerVisible"
        :url-list="displayUrls"
        :initial-index="currentIndex"
        @close="viewerVisible = false"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const displayUrls = ref([]); // 用于显示的图片 URL
const count = ref(8); // 初始加载的图片数量
const viewerVisible = ref(false); // 控制预览是否可见
const currentIndex = ref(0); // 当前图片索引

// 声明一个全局变量来存储所有的图片 URL
let allImages: string[] = [];

// 根据文件夹名获取图片 URL
const fetchImageUrls = async (folderName: string) => {
  try {
    const response = await fetch(`https://misty-recipe-c3a9.1310244108.workers.dev/?folder=${encodeURIComponent(folderName)}`);
    console.log(response);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // 假设返回的数据结构为 { images: string[] }
    allImages = data.images; // 保存所有图片 URL
      console.log("SAd",allImages);
    displayUrls.value = [...allImages.slice(0, count.value)]; // 更新当前显示的图片 URL
    console.log("SAd",displayUrls);
  } catch (error) {
    console.error('Error fetching image URLs:', error);
  }
};

// 加载更多图片
const load = () => {
  if (count.value < allImages.length) {
    count.value += 8; // 每次加载8张图片
    displayUrls.value = [...allImages.slice(0, count.value)]; // 更新显示的图片 URL
  }
};
// 打开全屏预览
const openViewer = (index: number) => {
  currentIndex.value = index;
  viewerVisible.value = true;
};

onMounted(() => {
  const name = route.query.name;
  if (name) {
    fetchImageUrls(name); // 请求对应文件夹的图片 URL
  }
});
</script>

<style scoped>
/* Masonry layout */
.masonry {
  column-count: 4; /* 列数 */
  column-gap: 8px; /* 列之间的间隙 */
}

.masonry-item {
  break-inside: avoid; /* 防止元素被拆分 */
  margin-bottom: 8px; /* 行之间的间隙 */
}

.image {
  width: 100%;
  object-fit: cover; /* 保持纵横比 */
  display: block;
  transition: opacity 0.5s ease;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .masonry {
    column-count: 3; /* 小屏幕时列数为3 */
  }
}

@media (max-width: 768px) {
  .masonry {
    column-count: 2; /* 平板时列数为2 */
  }
}

@media (max-width: 480px) {
  .masonry {
    column-count: 1; /* 手机时单列 */
  }
}
</style>
