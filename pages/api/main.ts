import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import file from "fs"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<String>
) {
  fs.readFile("./succes.html", "utf8", (err, data) => {
    if (err) {
      console.error("Erreur de lecture du fichier:", err);
      res.status(500).end(); // Réponse d'erreur en cas de problème de lecture du fichier
      return;
    }

    // Envoi de la réponse HTML
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(data);
  });
}
