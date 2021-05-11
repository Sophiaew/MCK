export default {
  widgets: [
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
                  buildHookId: '609abf1a0ddbfd63839fe9d6',
                  title: 'Sanity Studio',
                  name: 'mck-studio',
                  apiId: '33955bb9-a76c-43ff-9aa9-dc1ef0a846d4'
                },
                {
                  buildHookId: '609abf1a41e62f4598e978c5',
                  title: 'Blog Website',
                  name: 'mck',
                  apiId: 'afc75afc-045f-45fd-bf6b-219482e58b61'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sophiaew/MCK',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://mck.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
