import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()
app.register(cors) 

/* 
  Mthodo GET HTTP: Post, putch, patch, Delete, Update 
 */
app.get('/hello', async () => {
    const habits = await prisma.habit.findMany({
        where:{
         title:{
            startsWith: 'Gastos'

         }

        } 
  
    })
      return habits
    })
 /* 
  Mthodo : server 
 */
app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running')
})
