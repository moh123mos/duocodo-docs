import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
    mermaid: {
        theme: 'neutral', // أو 'dark' أو 'default'
        securityLevel: 'loose', // للسماح بروابط داخل الرسومات
    },
    title: 'DuoCodo',
    description: 'Documentation for my awesome graduation project',
    lastUpdated: true,
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
                link: '/duocodo.pdf'
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
                        { text: 'Background', link: '/guide/ch2/background' },
                    ]
                },
                {
                    text: 'CH3: Feasibility and Project Planning',
                    collapsed: true,
                    items: [
                        { text: 'Overview', link: '/guide/ch3/requirement-analysis' },
                        { text: 'Feasibility Study', link: '/guide/ch3/feasibility-study' },
                        { text: 'Risk Management', link: '/guide/ch3/risk-management' },
                        { text: 'Project Plan', link: '/guide/ch3/project-plan' },
                        { text: 'Gantt Chart', link: '/guide/ch3/gantt-chart' },
                    ]
                },
                {
                    text: 'CH4: System Analysis',
                    collapsed: true,
                    items: [
                        { text: 'Functional Requirements', link: '/guide/ch4/functional-requirements' },
                        { text: 'Non-Functional Requirements', link: '/guide/ch4/non-functional' },
                        { text: 'Functional Decomposition', link: '/guide/ch4/functional-decomposition' },
                    ]
                },
                {
                    text: 'CH5: System Architecture',
                    collapsed: true,
                    items: [
                        { text: 'Use Cases Model', link: '/guide/ch5/use-case-model' },
                        { text: 'Use Cases Diagram', link: '/guide/ch5/use-case-diagram' },
                        { text: 'Use Cases Formats', link: '/guide/ch5/use-case-formats' },
                        { text: 'Sequence Diagrams', link: '/guide/ch5/sequence-diagrams' },
                        { text: 'Class Diagrams', link: '/guide/ch5/class-diagrams' },
                    ]
                },
                {
                    text: 'CH6: Database Design',
                    collapsed: true,
                    items: [
                        { text: 'Entity Relationship Diagrams', link: '/guide/ch6/erd' },
                        { text: 'Schema Diagrams', link: '/guide/ch6/schema' },
                    ]
                },
                {
                    text: 'All Chapters',
                    link: '/guide/one-for-all'
                }
            ]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/moh123mos/duocodo-docs' }
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
                    { text: 'تحميل PDF', link: '/duocodo.pdf' },
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
                                { text: 'المتطلبات غير الوظيفية', link: '/ar/guide/ch4/non-functional' },
                            ]
                        },
                        // {
                        //     text: 'جميع الفصول',
                        //     link: '/ar/guide/one-for-all'
                        // }
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

});