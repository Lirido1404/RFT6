"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { ToastAction } from "@/components/ui/toast";

function AjouterAvis() {
  const { data: session } = useSession();
  const { toast } = useToast();

  const handleSession = () => {
    toast({
      title: "Connecter pour commenter",
      description: "Seul les utilisateurs authentifiés peuvent commenter.",
      action: (
        <ToastAction altText="Me connecter"  className="border-[#FF7E14]">
          <Link href={"/Account"}>Me connecter</Link>
        </ToastAction>
      ),
    });
  };

  return (
    <>
      <button onClick={handleSession}>
        <h4 className="bg-[#D0FECF] rounded-lg shadow py-2 px-4 text-black cursor-pointer">
          Ajouter un avis
        </h4>
      </button>
    </>
  );
}

export default AjouterAvis;
