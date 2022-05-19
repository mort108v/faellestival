// import React from "react";

export function EnvData() {
  const strAppKey = process.env.STRIPE_SAPP_KEY;
  const strPubKey = process.env.STRIPE_PUB_KEY;
  // availableSpots: process.env.STRIPE_FAELLESTIVAL_AVAILABLE_SPOTS,
  // bands: process.env.STRIPE_FAELLESTIVAL_BANDS,
  // events: process.env.STRIPE_FAELLESTIVAL_EVENTS,
  // fullfillReservation: process.env.STRIPE_FAELLESTIVAL_FULLFILL_RESERVATION,
  // schedule: process.env.STRIPE_FAELLESTIVAL_SCHEDULE,
  // reserveSpot: process.env.STRIPE_FAELLESTIVAL_RESERVE_SPOT,
  // settings: process.env.STRIPE_FAELLESTIVAL_SETTINGS,

  return { strAppKey, strPubKey };
}
