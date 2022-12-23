const routesPlugin = async (fastify) => {
    const coursesCollection = fastify.mongo.db.collection('courses')
    console.log(coursesCollection);
    fastify.get('/', async () => ({ hello: 'world' }))  
    fastify.get('/courses', () => coursesCollection.find().toArray())
    
  }
  
  export default routesPlugin
  