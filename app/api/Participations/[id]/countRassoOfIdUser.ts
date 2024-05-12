import Particip from "@/app/(models)/Participation";


export async function countParticipationsOfIdUser(id: string) {
    try {
      console.log("Fonction countAllComments bien appelée");
      const count = await Particip.countDocuments({ idOfUser: id,participation:true });
      console.log("Nombre de commentaires:", count);
      return count;
    } catch (err) {
      console.log(err);
      throw err; // Vous pouvez choisir de gérer l'erreur différemment si nécessaire
    }
  }