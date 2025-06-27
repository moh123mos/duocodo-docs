export default {
    title: 'DuoCode',
    description: 'Documentation for my awesome graduation project',

    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'API', link: '/api/' },
            {
                text: 'Downloads',
                items: [
                    { text: 'Download PDF', link: '/duocode.pdf' },
                    {
                        text: 'Download DOCX',
                        link: '/docx'
                    }
                ]
            }
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'Overview', link: '/introduction/overview' },
                    { text: 'Getting Started', link: '/introduction/getting-started' }
                ]
            },
            {
                text: 'Architecture',
                items: [
                    { text: 'System Design', link: '/architecture/system-design' },
                    { text: 'Database Schema', link: '/architecture/database' }
                ]
            },
            {
                text: 'Implementation',
                items: [
                    { text: 'Frontend', link: '/implementation/frontend' },
                    { text: 'Backend', link: '/implementation/backend' },
                    { text: 'Testing', link: '/implementation/testing' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/moh123mos/duocode-docs' }
        ]
    },
    locales: {
        root: {
            label: 'English',
            lang: 'en',
            link: '/',
            dir: 'ltr',
            title: 'DuoCode',
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
                    { text: 'الرئيسية', link: '/' },
                    { text: 'الدليل', link: '/guide/' },
                    { text: 'واجهة برمجة التطبيقات', link: '/api/' }
                ],

                sidebar: [
                    {
                        text: 'المقدمة',
                        items: [
                            { text: 'نظرة عامة', link: '/introduction/overview' },
                            { text: 'البدء', link: '/introduction/getting-started' }
                        ]
                    },
                    {
                        text: 'البنية',
                        items: [
                            { text: 'تصميم النظام', link: '/architecture/system-design' },
                            { text: 'مخطط قاعدة البيانات', link: '/architecture/database' }
                        ]
                    },
                    {
                        text: 'التنفيذ',
                        items: [
                            { text: 'الواجهة الأمامية', link: '/implementation/frontend' },
                            { text: 'الواجهة الخلفية', link: '/implementation/backend' },
                            { text: 'الاختبار', link: '/implementation/testing' }
                        ]
                    }
                ],

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