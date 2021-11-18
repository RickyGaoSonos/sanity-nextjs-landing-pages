export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6196d6c0d93a1317a70ddb32',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s4fxs8zj',
                  apiId: '1906d4c2-28a7-4f25-b526-9ec9eb65045d'
                },
                {
                  buildHookId: '6196d6c06db6da18ae2c3e45',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-35kdte1a',
                  apiId: '375da254-6b3d-48f4-9f6a-a00aabe24a0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ricky-gao/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-35kdte1a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
