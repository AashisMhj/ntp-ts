import { getPost } from "@/service/post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}: {params:{slug:string}}){
    try {
        const data = await getPost(params.slug);
        return NextResponse.json({
            data
        })
    } catch (error) {
        return NextResponse.json({
            msg: "Server Error"
        })
    }
}