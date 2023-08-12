import { NextResponse } from "next/server";
import { getPosts } from "@/service/post";
export async function GET(){
    try {
        const data = await getPosts();
        return NextResponse.json({
            data
        })
    } catch (error) {
        return NextResponse.json({
            message: "Server Error"
        })
    }
}