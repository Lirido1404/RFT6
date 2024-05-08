import Comments from "@/app/(models)/Comments";

export async function countAllComments(id: string) {
    try {
      console.log("Fonction countAllComments bien appelée");
      const count = await Comments.countDocuments({ idOfRasso: id });
      console.log("Nombre de commentaires:", count);
      return count;
    } catch (err) {
      console.log(err);
      throw err; // Vous pouvez choisir de gérer l'erreur différemment si nécessaire
    }
  }