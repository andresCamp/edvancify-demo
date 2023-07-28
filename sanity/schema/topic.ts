export default {
    name: 'topic',
    title: 'Topic',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'topicIntroVideo',
        title: 'Topic Intro Video',
        type: 'url',
      },
      {
        name: 'concepts',
        title: 'Concepts',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'concept' } }],
      },
    ],
  }
  