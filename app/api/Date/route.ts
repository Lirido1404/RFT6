import { NextResponse } from "next/server";

import Date from "@/app/(models)/DatePost";

export async function POST(req: Request) {
  try {
    const Datedata = await req.json(); // Récupérer directement les données du corps de la requête

    await Date.create(Datedata);
    console.log(Datedata);
    return NextResponse.json({ message: "Date Created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

