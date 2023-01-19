import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import plotSummary from './plotSummary'
import product from './product'
import category from './category'
import plotSummaries from './plotSummaries'

export const schemaTypes = [
  // Document types
  product,
  category,
  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
