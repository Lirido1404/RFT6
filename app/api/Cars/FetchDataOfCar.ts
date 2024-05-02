import Cars from "@/app/(models)/Carsdetail";

export async function fetchDataCar() {
  try {
    console.log("fonction fetchDataCar bien appellée");
    const res = await Cars.find();
    console.log(res);
    return res;
  } catch (err) {
    console.log("err");
  }
}
