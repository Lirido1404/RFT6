'use client'

import Link from 'next/link';
import React, { useState } from 'react';

function PPPourProfil({ profilPic,idOfUser,nomOfUser,sessionid}:{profilPic:string,idOfUser:string,nomOfUser:string,sessionid:string}) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  return (
    <div className="relative flex items-end">
      <img
        src={profilPic || "/Images/profilsvg1.svg"}
        alt="img"
        className="h-16 w-16 rounded-full border border-gray-200 cursor-pointer"
        onClick={toggleMenu}
      />
      {menuVisible && sessionid !== idOfUser && (
        <div className="absolute flex flex-col -top-32 left-0 bg-white border border-gray-200 rounded shadow-md p-2">
          <h2>
           Profil de {nomOfUser}
          </h2>
          <Link href={`/MonCompte/Messages/${idOfUser}`}
            className=" py-2 px-16 whitespace-nowrap mb-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
            
          >
            Voir messages
          </Link>
          <Link href={`/MonCompte/Rassemblements/${idOfUser}`}
            className="py-2 px-16 whitespace-nowrap bg-blue-500 text-white rounded hover:bg-blue-600 "
            
          >
            Voir Rasso 
          </Link>
        </div>
      )}
    </div>
  );
}

export default PPPourProfil;
