<template>
  <div class="block text-center">
    <el-carousel
      :interval="3000"
      arrow="hover"
      height="100vh"
      :autoplay="true"
      indicator-position="none"
      loop="true"
      transition="fade"  <!-- 使用淡入淡出过渡效果 -->
    >
      <el-carousel-item v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Carousel Image" class="carousel-image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
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

.el-carousel__item img {
  transition: opacity 1s ease-in-out; /* 添加淡入淡出动画效果 */
  opacity: 0; /* 初始时图片透明 */
}

.el-carousel__item.is-active img {
  opacity: 1; /* 当前激活的图片显示 */
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
        'https://pub-c0e7f6c66b954c3a93e96fc7aa5425c6.r2.dev/%E6%94%B6%E8%97%8F/IMG_9079.JPG',
        'https://pub-c0e7f6c66b954c3a93e96fc7aa5425c6.r2.dev/%E6%94%B6%E8%97%8F/IMG_8148.JPG'
      ]
    };
  }
};
</script>
