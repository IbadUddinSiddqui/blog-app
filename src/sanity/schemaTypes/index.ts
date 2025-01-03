import { type SchemaTypeDefinition } from 'sanity'
import blog from "./postTypes"
import author from './author'
import categories from './categories'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blog,author,categories,
  ],
}
