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