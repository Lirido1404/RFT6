import Particip from "@/app/(models)/Participation";

export async function POST(req: Request) {
  try {
    const participationsData = await req.json(); // Récupérer directement les données du corps de la requête

    return await Particip.create(participationsData);
  } catch (err) {
    console.log(err);
  }
}
