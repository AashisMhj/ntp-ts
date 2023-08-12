import { Post } from "@prisma/client";
import Image from "next/image";

async function getData(slug:string){
    try {
        const res = await fetch('http://localhost:3000/api/post/'+slug, {cache: "no-cache"});
        return  await res.json();
    } catch (error) {
        return null
    }
}

export default async function PostDetailPage({params}:{params:{slug:string}}){
    const data = await getData(params.slug);
    if(!data){
        <main>
            <div className="container mx-auto">
                <h1>Post Not Fund</h1>
            </div>
        </main>
    }
    return (
        <main>
            <div className="container mx-auto p-10">
                <div className="flex flex-col items-center gap-10">
                    <div><h1 className="text-2xl">{data.data.title}</h1></div>
                    <Image src={data.data.image} height={200} width={200} alt={data.data.title} />
                    <div>

                    </div>
                </div>
            </div>
        </main>
    )
}