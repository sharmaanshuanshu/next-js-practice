import { user } from "@/util/page";
import { NextResponse } from "next/server";

export function GET() {
    var data = user;
    return NextResponse.json(data, {status:200});        

}

export async function POST(request){

    var payload = await request.json();

    if(!payload.fisrtName || !payload.lastName || !payload.email || !payload.state){
        return NextResponse.json({result: 'Required field not found'});
    }
    return NextResponse.json({result: payload});
}