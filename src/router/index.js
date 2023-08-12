import { lazy } from 'react';
export const router = [
    {
        label: '首页',
        key: '/home',
        component: lazy(() => import('../pages/Home')),
    },
    {
        label: '项目管理',
        key: '/project',
        // component:lazy(()=>import('../pages/Project'))
        children: [
            {
                label: '项目列表',
                key: '/projectlist',
                component: lazy(() => import('../pages/Project/ProjectLit')),
            },
            {
                label: '项目管理',
                key: '/projectmanage',
                component: lazy(() => import('../pages/Project/ProjectManage')),
            },
        ],
    },
    {
        label: '项目地图',
        key: '/projectmap',
        component: lazy(() => import('../pages/ProjectMap')),
    },
    {
        label: '项目任务',
        key: '/projecttask',
        children: [
            {
                label: '任务列表',
                key: '/tasklist',
                component: lazy(() => import('../pages/ProjectTask/TaskList')),
            },
            {
                label: '任务管理',
                key: '/taskmanage',
                component: lazy(() =>
                    import('../pages/ProjectTask/TaskManage'),
                ),
            },
        ],
    },
    {
        label: '用户管理',
        key: '/user',
        children: [
            {
                label: '用户列表',
                key: '/userlist',
                component: lazy(() => import('../pages/User/UserList')),
            },
            {
                label: '用户权限',
                key: '/userrole',
                component: lazy(() => import('../pages/User/UserRole')),
            },
        ],
    },
];
