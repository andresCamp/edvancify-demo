import { type SchemaTypeDefinition } from 'sanity'
import course from './schema/course'
import subject from './schema/subject'
import topic from './schema/topic'
import concept from './schema/concept'
import breakdownVideo from './schema/breakdownVideo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [course, subject, topic, concept, breakdownVideo],
}
