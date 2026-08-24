import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'uf6qw3wn',
  dataset: 'production',
  apiVersion: '2026-08-24',
  useCdn: true,
})