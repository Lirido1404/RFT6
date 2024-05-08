import Comments from "@/app/(models)/Comments";

export async function DeleteOneComment(id: string) {
  try {
    return await Comments.findByIdAndDelete(id);
  } catch (err) {
    console.log("error during deleting the comment");
  }
}
