"use client";

import { useEffect } from "react";

export default function MetaLeadTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let attempts = 0;
    const maxAttempts = 20;

    const tryTrackLead = () => {
      if (typeof window.fbq === "function") {
        try {
          window.fbq("track", "Lead");
          console.log("Lead disparado com sucesso");
        } catch (error) {
          console.error("Erro ao disparar Lead:", error);
        }
        return;
      }

      attempts += 1;

      if (attempts < maxAttempts) {
        setTimeout(tryTrackLead, 500);
      } else {
        console.warn("fbq n?o ficou dispon?vel a tempo");
      }
    };

    tryTrackLead();
  }, []);

  return null;
}
