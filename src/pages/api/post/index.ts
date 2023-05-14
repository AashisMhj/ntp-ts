import {NextApiRequest, NextApiResponse} from 'next'
import {PrismaClient} from '@prisma/client';
const client = new PrismaClient();

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    console.log('here')
    if(req.method === 'GET'){
        const posts = await client.post.findMany({
            where: {published: true}
        });
        return res.status(200).json(posts)
    }

}