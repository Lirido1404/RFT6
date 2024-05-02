import React from "react";
import Image from "next/image";
import "./BadgeCardSpe.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

interface Props {
  perf: string;
  power: string;
  emission: string;
}


function BadgeCardSpe({ perf, power, emission }:Props) {
  return (
    <div className="flex gap-4">
      <Badge variant="outline">{power}</Badge>
      <Badge variant="outline">{perf}</Badge>
      <Badge variant="outline" className={`${emission}`}>
        {emission}
      </Badge>
    </div>
  );
}

export default BadgeCardSpe;
