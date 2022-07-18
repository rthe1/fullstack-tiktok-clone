export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name:'comment',
      title:'Comment',
      type:'string'
    },
    {
      name:'posetdBy',
      title:'Posted By',
      type:'postedBy'
    }
  ]
}