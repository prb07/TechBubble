import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',

  fields: [

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),


    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

defineField({
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  options:{
    source:'title'
  }
}),

    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options:{
        hotspot:true
      }
    }),


    defineField({
      name:'author',
      title:'Author',
      type:'string'
    }),


    defineField({
      name:'readTime',
      title:'Read Time',
      type:'string'
    }),


    defineField({
      name:'featured',
      title:'Featured Article',
      type:'boolean'
    })


  ]

})