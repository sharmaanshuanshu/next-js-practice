import { NextResponse } from "next/server";

export async function GET(request, content){
    var studentDetails = content.params.students;
    return NextResponse.json({result: studentDetails}, {status: 200});
}