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
                    { text: 'تحميل PDF', link: '/duocode.pdf' },
                ],
                sidebar: {
                    // This sidebar gets displayed when a user
                    // is on `guide` directory.
                    '/guide/': [
                        {
                            text: 'المقدمة',
                            collapsed: false,
                            items: [
                                { text: 'CH1: نظرة عامة', link: '/guide/overview' }
                            ]
                        },
                        {
                            text: 'التحليل',
                            collapsed: true,
                            items: [
                                { text: 'CH2: الخلفية', link: '/guide/background' },
                                { text: 'CH3: المتطلبات', link: '/guide/requirements' },
                            ]
                        },
                        {
                            text: 'جميع الفصول',
                            link: '/guide/one-for-all'
                        }
                    ]
                },
                socialLinks: [
                    { icon: 'github', link: ' https://github.com/moh123mos/duocode-docs' }
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