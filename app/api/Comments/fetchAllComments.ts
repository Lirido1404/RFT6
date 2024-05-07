import Comments from "@/app/(models)/Comments";

export async function fetchDataCar() {
  try {
    console.log("fonction fetchComments bien appellée");
    const res = await Comments.find();
    console.log(res);
    return res;
  } catch (err) {
    console.log("err");
  }
}
