
"use client"


export default  function page() {
  const d = fetch("http://localhost:3000/api/main", {
    cache: "force-cache",
  }).then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération de la réponse');
    }
    return response.text(); // Convertit le corps de la réponse en texte
  })
  .then(htmlContent => {
    // Traiter le contenu HTML récupéré
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    document.body.appendChild(doc)
    // Vous pouvez insérer le contenu HTML dans votre page ou faire d'autres traitements avec celui-ci
  })
  .catch(error => {
    console.error('Une erreur s\'est produite:', error);
  });
  return undefined
}
