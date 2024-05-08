import Comments from "@/app/(models)/Comments";
import { NextResponse } from "next/server";


export async function DELETE(req:Request, { params }:{params:any}) {
  try {
    const { id } = params;
    console.log(id);
    await Comments.findByIdAndDelete(id);
    return NextResponse.json({ message: "Contact Deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}