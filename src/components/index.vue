<template>
  <div class="block text-center">
    <el-carousel :interval="1500" arrow="never" height="100vh"  motion-blur
                 :autoplay="true" indicator-position="none" loop="true">
      <el-carousel-item v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Carousel Image" class="carousel-image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保图片自适应容器 */
}

.el-carousel__item {
  display: flex; /* 使用 flexbox 布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<script>
export default {
  data() {
    return {
      images: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://via.placeholder.com/1920x1080/ff7f7f/333333?text=Slide+2',
        'https://via.placeholder.com/1920x1080/7f7fff/333333?text=Slide+3',
        'https://via.placeholder.com/1920x1080/7fff7f/333333?text=Slide+4'
      ]
    };
  }
};
</script>
