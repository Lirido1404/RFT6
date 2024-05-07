import Comments from "@/app/(models)/Comments";

export async function fetchAllComments(id:string) {
  try {
    console.log("fonction fetchComments bien appellée");
    const res = await Comments.find({ idOfRasso: id });
    console.log(res);
    return res;
  } catch (err) {
    console.log("err");
  }
}
