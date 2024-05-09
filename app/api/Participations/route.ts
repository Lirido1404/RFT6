import Particip from "@/app/(models)/Participation";

export async function POST(req: Request, res:Response) {
  try {
    const participationsData = await req.json();

    // Vérifier si une participation existe déjà pour cette paire idOfUser et idOfRasso
    const existingParticipation = await Particip.findOne({
      idOfUser: participationsData.idOfUser,
      idOfRasso: participationsData.idOfRasso,
    });

    // Si une participation existe déjà, renvoyer une réponse appropriée
    if (existingParticipation) {
      console.log("Déjà existant");
    } else {
      return await Particip.create(participationsData);
    }
  } catch (err) {
    console.log(err);
  }
}


