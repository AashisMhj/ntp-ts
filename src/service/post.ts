import {prisma} from '@/config/db';

export function getPosts(page:number=1, limit:number=10){
    return prisma.post.findMany({
        skip: (page -1 ) * limit,
        take: limit
    })
}

export function getPost(slug:string){
    return prisma.post.findFirst({
        where: {
            slug
        }
    })
}
