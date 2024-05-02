import React from "react";
import { fetchDataCar } from "@/app/api/Cars/FetchDataOfCar";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BadgeCardSpe from "../(components)/BadgeCardSpe";


const truncateDescription = (description: string, maxLength: number) => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + "...";
  }
  return description;
};


async function FetchDataComp() {
  const res = await fetchDataCar();
  return (
    <div>
     {/* {res?.map((car) => (
        <div key={car._id}>
          <p>{car.name}</p>
          <img src={car.image} alt="" />
          <hr />
        </div>
      ))} */}
      <div className="grid grid-cols-3 w-[80%] mx-auto mt-12 gap-8">
        {res?.map((car) => (
            <div key={car._id} className=" cursor-pointer">
              <Card className="hover:shadow-lg ease-in-out duration-150">
                <CardHeader className="">
                  <div className="rounded-full">
                    <Image
                      src={car.image}
                      width={200}
                      height={200}
                      alt="bmw"
                      className=" w-16 h-16 object-cover rounded-full"
                    />
                  </div>

                  <div>
                    <CardTitle>{car.name}</CardTitle>
                    <CardDescription> {car.datesortie} </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{truncateDescription(car.description, 120)}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={`/EspaceDeVente/${car._id}`}>
                    <Button variant="destructive">View Car</Button>
                  </Link>
                  <BadgeCardSpe
                    emission={car.emission}
                    power={car.power}
                    perf={car.performance}
                  />
                </CardFooter>
              </Card>
            </div>
          ))}
      </div>
    </div> 
  );
}

export default FetchDataComp;
