export default {
    name: 'course',
    title: 'Course',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'tutorIntroVideo',
        title: 'Tutor Intro Video',
        type: 'url',
      },
      {
        name: 'subjects',
        title: 'Subjects',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'subject' } }],
      },
    ],
  }
  