import { PrismaClient, Prisma } from '@prisma/client';
import slugify from 'slugify';

const prisma = new PrismaClient();


async function main() {

    let posts = [
        { title: 'Stun word', content: 'lrem lore', slug: '', image: 'https://cdn.pixabay.com/photo/2023/04/23/16/08/flower-7946074_640.jpg' },
        { title: 'Creondenton Via lora', content: 'lrem lore', slug: '', image: 'https://cdn.pixabay.com/photo/2023/05/06/08/44/crataegus-7973879__340.jpg' },
        { title: 'Boratoko 45 hit', content: 'lrem lore', slug: '', image: 'https://cdn.pixabay.com/photo/2023/04/13/07/23/reed-7921907__340.jpg' },
        { title: 'summarto', content: 'lrem lore', slug: '', image: 'https://cdn.pixabay.com/photo/2023/05/03/18/05/great-crested-grebe-7968287__340.jpg' },
    ]
    posts.forEach((data) => {
        data.slug = slugify(data.title)
    })

    await prisma.user.upsert({
        where: { email: 'email@email.com' },
        update:
            {},
        create: {
            email: 'email@email.com',
            name: 'Kai Doe',
            posts: {
                createMany: {
                    data: posts
                }
            }
        }
    })
}

main()
    .then(async () => {
        console.log('Seeded');
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect()
        process.exit(1)
    })