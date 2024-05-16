import Cars from "@/app/(models)/Carsdetail";

export async function fetchDataCar2(
  perPage: number,
  page: number,
  query: string
) {
  try {
    

    const res = await Cars.find();
    return res;
  } catch (err) {
    console.log(err);
  }
}
