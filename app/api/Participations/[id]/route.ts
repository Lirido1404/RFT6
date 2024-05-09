import { NextResponse } from "next/server";
import Particip from "@/app/(models)/Participation";

export async function PUT(req: Request, { params }: { params: any }) {
  try {
    const id = params.id;
    const body = await req.json();
    console.log("contenu de la participation en front" + body)
    const updateParticipationData = await Particip.findByIdAndUpdate(id, {
      participation: body.participation,
    });
    return NextResponse.json({ message: "Contact updated" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}


export async function DELETE(req:Request, { params }:{params:any}) {
    try {
      const { id } = params;
      console.log(id);
      await Particip.findByIdAndDelete(id);
      return NextResponse.json({ message: "Contact Deleted" }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  }