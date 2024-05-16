import Cars from "@/app/(models)/Carsdetail";

export async function fetchDataCar(
  perPage: number,
  page: number,
  query: string
) {
  try {
    console.log("la voiture est : " + query);
    let items; // Déclaration de la variable en dehors des blocs if/else
    if (query == "") {
      items = await Cars.aggregate([
        { $sample: { size: perPage } },
        { $skip: perPage * (page - 1) },
      ]);
    } else {
      items = await Cars.aggregate([
        { $match: { name: { $regex: query, $options: "i" } } },
        { $sample: { size: perPage } },
      ]);
    }

    const itemCount = await Cars.countDocuments();

    const response = { items, itemCount };
    return response;
  } catch (err) {
    console.log(err);
  }
}
