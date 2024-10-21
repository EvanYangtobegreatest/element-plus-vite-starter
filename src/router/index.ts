import { createRouter, createWebHistory } from 'vue-router';

// 动态导入 src/components 文件夹下所有 Vue 文件
const componentFiles = import.meta.glob('~/components/*.vue');

const routes = Object.keys(componentFiles).map((filePath) => {
    const name = filePath.split('/').pop()?.replace('.vue', ''); // 获取文件名作为路由名
    return {
        path: `/${name?.toLowerCase()}`, // 路由路径为文件名的小写形式
        name: name, // 路由名称
        component: componentFiles[filePath], // 动态加载组件
    };
});

// 添加自定义路由
const customRoutes = [
    {
        path: '/',
        name: 'index',
        component: () => import('~/components/index.vue'), // 自定义 About 路由
    }
    // 你可以在这里添加更多自定义路由4
];

// 合并动态路由和自定义路由
const finalRoutes = [...routes, ...customRoutes];

// 创建 router 实例
const router = createRouter({
    history: createWebHistory(),
    routes: finalRoutes, // 批量注册的路由
});

export default router;
