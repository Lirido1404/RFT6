"use client";
import React, { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";

function AjoutNotifAuth() {
  const { data: session } = useSession();
  const { toast } = useToast();

  useEffect(() => {
    if (session) {
      toast({
        description: (
          <span className="flex gap-1 items-center">
            <img src="/Images/checkk.svg" alt="croix" className="w-6 h-6" />
            Connexion réussie.
          </span>
        ),
      });
    }
  }, [session]);

  return <></>;
}

export default AjoutNotifAuth;
