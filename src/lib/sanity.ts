import { createClient } from '@sanity/client'
import {createImageUrlBuilder, type SanityImageSource} from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'uf6qw3wn',
  dataset: 'production',
  apiVersion: '2026-08-24',
  // Static pages should be built from the freshest published content.
  useCdn: false,
})

const imageBuilder = createImageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source)
}
