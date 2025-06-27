export default {
    title: 'DuoCode',
    description: 'Documentation for my awesome graduation project',

    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'API', link: '/api/' }
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
            { icon: 'github', link: 'https://github.com/your-username/your-project' }
        ]
    }
}