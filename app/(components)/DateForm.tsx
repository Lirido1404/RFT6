// DateForm.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { DrawerClose } from "@/components/ui/drawer";
function DateForm() {
  const router = useRouter();

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState<{
    date: Date | undefined;
    title: string;
    content: string;
  }>({ date: undefined, title: "", content: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    // Convertir la date en chaîne de caractères au format local
    const dateString = date?.toLocaleDateString();

    const dataToSend = {
      ...formData,
      date: dateString,
    };

    const res = await fetch("/api/Date", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
      // Afficher un message d'erreur plus descriptif que "not ok"
      alert(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      className="flex w-full justify-center gap-10 "
    >
      <div className="flex justify-center">
        <div className="space-y-1">
          <Label htmlFor="date" className="text-black">
            Date
          </Label>

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow bg-white text-black w-64"
          />

          <p className="text-black text-center">{date?.toLocaleDateString()}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <Label htmlFor="title" className="text-black">
            Titre
          </Label>
          <Input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            required
            value={formData.title}
            placeholder="Titre"
            className="text-black w-64"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="content" className="text-black">
            Contenu
          </Label>
          <Textarea
            name="content"
            id="content"
            onChange={handleChange}
            required
            value={formData.content}
            placeholder="Contenu"
            className="text-black w-96"
            rows={5}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Button type="submit" className="mt-4 w-full">
            Ajouter
          </Button>
          <DrawerClose className="w-full ">
            <Button className="w-full hover:bg-[#c7c7c7]" variant={'secondary'}>Annuler</Button>
          </DrawerClose>
        </div>
      </div>

      {/* Suite à mettre ici pour rajouter les colonnes */}
    </form>
  );
}

export default DateForm;
