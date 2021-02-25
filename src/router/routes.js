
export default  ([
    {
        path      : '/login',
        name      : 'login',
        component : require('../components/login.vue').default
    },
    {
        path      : '/',
        name      : 'dashboard',
        component : require('../components/Dashboard.vue').default,
        children : [
            {
                path      : '/dashboard',
                name      : 'dashbaord',
                component : require('../components/shifts.vue').default,
            },
            {
                path      : '/tasks',
                name      : 'tasks',
                component : require('../components/tasks.vue').default,
            },
            {
                path      : '/location',
                name      : 'location',
                component : require('../components/location.vue').default,
            },
            {
                path      : '/analytics',
                name      : 'analytics',
                component : require('../components/analytics.vue').default,
            },
            {
                path      : '/Events',
                name      : 'events',
                component : require('../components/Events.vue').default,
            },
            {
                path      : '/timesheets',
                name      : 'timesheets',
                component : require('../components/timesheets.vue').default,
            },
            {
                path      : '/organization-guests',
                name      : 'profile',
                component : require('../components/profile.vue').default,
            },
            {
                path      : '/exhibitors',
                name      : 'exhibitors',
                component : require('../components/exhibitors.vue').default,
            },
            {
                path      : '/people',
                name      : 'people',
                component : require('../components/people.vue').default,
            },
            {
                path      : '/notifications',
                name      : 'notifications',
                component : require('../components/notifications.vue').default,
            },
            {
                path      : '/new',
                name      : 'new',
                component : require('../components/new.vue').default,
            },
            {
                path      : '/setting',
                name      : 'setting',
                component : require('../components/setting.vue').default,
            },
            {
                path      : '/Popup',
                name      : 'Popup',
                component : require('../components/Popup.vue').default,
            }
        ]

    },
    
])
