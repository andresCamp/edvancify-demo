export default {
    name: 'subject',
    title: 'Subject',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subjectIntroVideo',
        title: 'Subject Intro Video',
        type: 'url',
      },
      {
        name: 'topics',
        title: 'Topics',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'topic' } }],
      },
    ],
  }
  