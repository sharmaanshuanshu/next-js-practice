import { user } from "@/util/page";
import { NextResponse } from "next/server";

export function GET(request, content){
   
    var data = user;
    var paramId = content.params.detai_id;

    const userData = data.filter(function(item){return item.id == paramId});
    
    return NextResponse.json(userData.length == 0 ? {data:' No Data Found', success:false} : {data:userData, success:true});
}

export async function PUT(request, content){

    var payload =  await request.json(),
        userId = content.params.detai_id;

    payload.id = userId;

    if(!payload.id || !payload.firstName || !payload.lastName || !payload.id ||!payload.profile){
        return NextResponse.json({result: 'request data is not valid', success: false}, {status: 400});
    }
        return NextResponse.json({result: payload, success: true}, {status: 200});
}

export function DELETE(request, content){
    console.log('DELETE...........')
    let id = content.params.detai_id;
    console.log(id);
    if(id){
        return NextResponse.json({result: 'User Deleted Successfully', success: true}, {status:200});
    }
        return NextResponse.json({result: 'Internal Error', success:false}, {status: 400});
}