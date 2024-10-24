import { connectionStr } from "@/lib/db";
import { product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
     
    let data = [];

    try {
        await mongoose.connect(connectionStr);
        data = await product.find();        
    } catch (error) {
        data = {success: false}
    }

    return NextResponse.json({result:data, success: true}, {status: 200});
}

export async function POST(request){

    let payload = await request.json()
    await mongoose.connect(connectionStr);    

    let requestData = new product(payload),
        result = await requestData.save();

        console.log(result)

    return NextResponse.json({result, success: true});
}