import { Post } from "@prisma/client"
import { PostCard } from "@/components/common/cards"
import Link from "next/link"
//
import { publicPaths } from "@/routes/paths"

export default function PostSection({ data }: { data: Array<Post> }) {
    console.log(data)
    return <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
            {
                data.map((item) => <PostCard key={item.id} data={item} />)
            }
        </div>
        <div className="text-center">
            <Link href={publicPaths.postPage}>
            View All Posts
            </Link>
        </div>
    </section>
}

