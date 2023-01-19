import blockContent from './blockContent'
import product from './product'
import category from './category'
import {user, account} from 'next-auth-sanity/schemas'

export const schemaTypes = [
  // Document types
  product,
  category,
  // Other types
  blockContent,
  user,
  account,
]
