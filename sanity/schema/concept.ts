export default {
    name: 'concept',
    title: 'Concept',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'breakdownVideos',
        title: 'Breakdown Videos',
        type: 'array',
        of: [{ type: 'breakdownVideo' }],
      },
    ],
  }
  