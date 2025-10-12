export default {
    title: 'DuoCodo',
    description: 'Documentation for my awesome graduation project',
    head: [
        ['link', { rel: 'icon', href: '/favicon.svg' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ],
    themeConfig: {
        search: {
            provider: 'local',
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/overview' },
            { text: 'Team', link: '/team' },
            // { text: 'API', link: '/api/' },
            {
                text: 'Download PDF',
                link: '/duocode.pdf'
            }
        ],
        sidebar: {
            // This sidebar gets displayed when a user
            // is on `guide` directory.
            '/guide/': [
                {
                    text: 'Introduction',
                    collapsed: false,
                    items: [
                        { text: 'CH1: Overview', link: '/guide/overview' }
                    ]
                },
                {
                    text: 'Analysis',
                    collapsed: true,
                    items: [
                        { text: 'CH2: Background', link: '/guide/background' },
                        { text: 'CH3: Requirements', link: '/guide/requirements' },
                    ]
                },
                {
                    text: 'Requirements Gathering',
                    collapsed: true,
                    items: [
                        { text: 'Ch4: Functional Requirements', link: '/guide/functional-requirements' },
                        // { text: 'Ch4: Non-Functional Requirements', link: '/guide/non-functional-requirements' },
                    ]
                },
                {
                    text: 'All Chapters',
                    link: '/guide/one-for-all'
                }
            ]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/moh123mos/duocode-docs' }
        ],
    },
    locales: {
        root: {
            label: 'English',
            lang: 'en',
            link: '/',
            dir: 'ltr',
            title: 'DuoCodo',
            description: 'Documentation for my awesome graduation project'
        },
        ar: {
            label: 'العربية',
            lang: 'ar',
            link: '/ar/',
            dir: 'rtl',
            title: 'ديوكود',
            description: 'توثيق لمشروع التخرج الرائع',
            themeConfig: {
                nav: [
                    { text: 'الرئيسية', link: '/ar' },
                    { text: 'الدليل', link: '/ar/guide/overview' },
                    // { text: 'واجهة برمجة التطبيقات', link: '/api/' },
                    { text: 'الفريق', link: '/ar/team' },
                    { text: 'تحميل PDF', link: '/duocode.pdf' },
                ],
                sidebar: {
                    '/ar/guide/': [
                        {
                            text: 'المقدمة',
                            collapsed: false,
                            items: [
                                { text: 'CH1: نظرة عامة', link: '/ar/guide/overview' }
                            ]
                        },
                        {
                            text: 'التحليل',
                            collapsed: true,
                            items: [
                                { text: 'CH2: الخلفية', link: '/ar/guide/background' },
                                { text: 'CH3: المتطلبات', link: '/ar/guide/requirements' },
                            ]
                        },
                        {
                            text: 'جمع المتطلبات',
                            collapsed: true,
                            items: [
                                { text: 'CH4: المتطلبات الوظيفية', link: '/ar/guide/functional-requirements' },
                                // { text: 'CH4: المتطلبات غير الوظيفية', link: '/ar/guide/non-functional-requirements' },
                            ]
                        },
                        {
                            text: 'جميع الفصول',
                            link: '/ar/guide/one-for-all'
                        }
                    ]
                },
                socialLinks: [
                    { icon: 'github', link: ' https://github.com/moh123mos/duocodo-docs' }
                ],
                outline: {
                    label: 'في هذه الصفحة'
                },
                lastUpdated: {
                    text: 'آخر تحديث'
                },
                docFooter: {
                    prev: 'السابق',
                    next: 'التالي'
                },
                darkModeSwitchLabel: 'المظهر',
                sidebarMenuLabel: 'القائمة',
                returnToTopLabel: 'العودة للأعلى'

            },
        }
    }

}