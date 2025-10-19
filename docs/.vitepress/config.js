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
            { text: 'Guide', link: '/guide/ch1' },
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
                    text: 'CH1: Introduction',
                    collapsed: false,
                    items: [
                        { text: 'Overview', link: '/guide/ch1' }
                    ]
                },
                {
                    text: 'CH2: Background',
                    collapsed: true,
                    items: [
                        { text: 'Background', link: '/guide/ch2' },
                        // { text: 'CH3: Requirements', link: '/guide/ch3' },
                    ]
                },
                {
                    text: 'CH3: Requirements',
                    collapsed: true,
                    items: [
                        // { text: 'CH2: Background', link: '/guide/ch2' },
                        { text: 'Requirement Analysis', link: '/guide/ch3' },
                    ]
                },
                {
                    text: 'CH4: Reqs Gathering',
                    collapsed: true,
                    items: [
                        { text: 'Functional Requirements', link: '/guide/ch4' },
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
                    { text: 'الدليل', link: '/ar/guide/ch1' },
                    // { text: 'واجهة برمجة التطبيقات', link: '/api/' },
                    { text: 'الفريق', link: '/ar/team' },
                    { text: 'تحميل PDF', link: '/duocode.pdf' },
                ],
                sidebar: {
                    // This sidebar gets displayed when a user
                    // is on `ar/guide` directory.
                    '/ar/guide/': [
                        {
                            text: 'الفصل الأول: المقدمة',
                            collapsed: false,
                            items: [
                                { text: 'نظرة عامة', link: '/ar/guide/ch1' }
                            ]
                        },
                        {
                            text: 'الفصل الثاني: الخلفية',
                            collapsed: true,
                            items: [
                                { text: 'الخلفية', link: '/ar/guide/ch2' },
                            ]
                        },
                        {
                            text: 'الفصل الثالث: المتطلبات',
                            collapsed: true,
                            items: [
                                { text: 'تحليل المتطلبات', link: '/ar/guide/ch3' },
                            ]
                        },
                        {
                            text: 'الفصل الرابع: جمع المتطلبات',
                            collapsed: true,
                            items: [
                                { text: 'المتطلبات الوظيفية', link: '/ar/guide/ch4' },
                            ]
                        },
                        {
                            text: 'جميع الفصول',
                            link: '/ar/guide/one-for-all'
                        }
                    ]
                },
                // sidebar: {
                    
                //     '/ar/guide/': [
                //         {
                //             text: 'المقدمة',
                //             collapsed: false,
                //             items: [
                //                 { text: 'CH1: نظرة عامة', link: '/ar/guide/overview' }
                //             ]
                //         },
                //         {
                //             text: 'التحليل',
                //             collapsed: true,
                //             items: [
                //                 { text: 'CH2: الخلفية', link: '/ar/guide/background' },
                //                 { text: 'CH3: المتطلبات', link: '/ar/guide/requirements' },
                //             ]
                //         },
                //         {
                //             text: 'جمع المتطلبات',
                //             collapsed: true,
                //             items: [
                //                 { text: 'CH4: المتطلبات الوظيفية', link: '/ar/guide/functional-requirements' },
                //                 // { text: 'CH4: المتطلبات غير الوظيفية', link: '/ar/guide/non-functional-requirements' },
                //             ]
                //         },
                //         {
                //             text: 'جميع الفصول',
                //             link: '/ar/guide/one-for-all'
                //         }
                //     ]
                // },
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