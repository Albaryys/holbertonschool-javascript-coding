#!/usr/bin/node
const fs = require('fs');

// Vérification des arguments de la ligne de commande
if (process.argv.length !== 4) {
  console.error('Utilisation : ./1-writeme.js <chemin-du-fichier> "<chaine-a-ecrire>"');
  process.exit(1);
}

// Récupération du chemin du fichier et de la chaîne à écrire
const filePath = process.argv[2];
const stringToWrite = process.argv[3];

// Écriture de la chaîne dans le fichier en UTF-8
fs.writeFile(filePath, stringToWrite, 'utf-8', (err) => {
  if (err) {
    // En cas d'erreur, affichage de l'objet d'erreur
    console.error(err);
  } else {
    console.log('Le contenu a été écrit avec succès dans le fichier.');
  }
});
