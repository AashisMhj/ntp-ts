import {NextApiRequest, NextApiResponse} from 'next';
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    if(req.method === 'GET'){
        let {page,offset=10}= req.query;

        const posts = await prisma.post.findMany({
            where: {published: true},
            skip: 0,
            take: 10,
            orderBy: {
                title: 'desc'
            }
        });

        
        return res.status(200).json({
            msg: 'Success',
            data: posts
        })
    }
    if(req.method === 'POST'){
        const data = req.body;
        return res.status(200).json({
            msg: 'Success'
        })
    }
}