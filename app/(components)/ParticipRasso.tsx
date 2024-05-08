"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

function ParticipRasso({
  idsession,
  idRasso,
}: {
  idsession: string;
  idRasso: string;
}) {
  const router = useRouter();
  const { data: session } = useSession();
  const { toast } = useToast();

  const [data, setData] = useState({
    idOfUser: idsession,
    participation: true,
    idOfRasso: idRasso,
  });

  const handleClick = async (e: any) => {
    if (session) {
      e.preventDefault();
      const res = await fetch("/api/Participations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      router.refresh();
    } else {
      e.preventDefault();
      toast({
        description: (
          <span className="text-sm flex items-center">
            <img src="/Images/crosss.svg" alt="" className="w-6 h-6" />
            <p>Connectez-vous pour accéder à ce service.</p>
          </span>
        ),
        action: (
          <ToastAction altText="Me connecter" className="border-[#FF7E14]">
            <Link href={"/Account"}>Me connecter</Link>
          </ToastAction>
        ),
      });
    }
  };

  return (
    <>
      <button
        className="p-2 bg-[#D0FECF] text-black rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        Je participe
      </button>
    </>
  );
}

export default ParticipRasso;
