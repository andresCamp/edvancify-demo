export default {
    name: 'breakdownVideo',
    title: 'Breakdown Video',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url',
      },
      {
        name: 'questions',
        title: 'Questions',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'question',
                title: 'Question',
                type: 'string',
              },
              {
                name: 'options',
                title: 'Options',
                type: 'array',
                of: [{ type: 'string' }],
              },
              {
                name: 'answer',
                title: 'Answer',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  }
  