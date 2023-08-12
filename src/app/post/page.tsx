import { PostCard } from "@/components/common/cards";
import { Post } from "@prisma/client";
import {useSearchParams} from "next/navigation"
async function getData(){
    try {
        const data = await fetch("http://localhost:3000/api/post");
        return data.json()
    } catch (error) {
        return []
    }

}
export default async function PostPage() {
const data = await getData();
    return (
        <main>
            <div className="container mx-auto grid grid-cols-1 md:grids-col-2 lg:grid-cols-4">
                {
                    data.data.map((el:Post) => <PostCard key={el.id} data={el} />)
                }
            </div>
        </main>
    )
}