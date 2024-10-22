<template>
  <div class="block text-center">
    <el-carousel :interval="3000" arrow="hover" height="100vh" :autoplay="true" indicator-position="none" loop="true" class="fade-carousel">
      <el-carousel-item v-for="(image, index) in images" :key="index" class="carousel-item">
        <img :src="image" alt="Carousel Image" class="carousel-image fade" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保图片自适应容器 */
  transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out; /* 添加动画效果 */
  opacity: 0;
  transform: scale(0.8); /* 初始缩放，显得图片深入 */
}

.el-carousel__item.is-active .carousel-image {
  opacity: 1;
  transform: scale(1); /* 当前图片放大到正常大小 */
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

/* 逐渐放大并变得更清晰的效果 */
.fade {
  animation: fadeInZoom 1s ease-in-out forwards;
}

@keyframes fadeInZoom {
  from {
    opacity: 0;
    transform: scale(0.8); /* 初始较小 */
  }
  to {
    opacity: 1;
    transform: scale(1); /* 放大到正常大小 */
  }
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
