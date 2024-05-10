'use client'
import React from 'react'
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
import { motion } from "framer-motion"

const truncateDescription = (description: string, maxLength: number) => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + "...";
  }
  return description;
};

function CompForFetch1({ res }: any) {
  return (
    <div className="grid grid-cols-3 w-[80%] mx-auto mt-12 gap-8">
      {res?.map((car: any, index: number) => (
        <motion.div
          key={car._id}
          className=""
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.07 }}
        >
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
                <Button variant="destructive" className='text-white'>View Car</Button>
              </Link>
              <BadgeCardSpe
                emission={car.emission}
                power={car.power}
                perf={car.performance}
                colorText='text-black'
              />
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default CompForFetch1
