import { Post } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
//
import { publicPaths } from "@/routes/paths"

export default function PostCard({ data }: { data: Post }) {
    return (
        <Link href={publicPaths.postDetail(data.slug)}>
            <div className="rounded-lg flex flex-col  p-4 my-10 mx-10 bg-slate-50 items-center">
                <div className="h-80 w-80  flex items-center justify-center">
                    <Image height={200} width={200} src={data.image} alt={data.title} />
                </div>
                <h2 className="text-center text-2xl mt-2 ">{data.title}</h2>
            </div>
        </Link>
    )
}