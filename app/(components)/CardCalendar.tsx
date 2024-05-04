import React from "react";
import CardCalendar2 from "./CardCalendar2";
import {fetchDates} from "../api/Date/fetchDataa"; // Ajustement de l'import

async function CardCalendar() {
  const datess = await fetchDates();
  const newdate = JSON.parse(JSON.stringify(datess));

  return (
    <>
      <CardCalendar2 newdate={newdate} />
    </>
  );
}

export default CardCalendar;
