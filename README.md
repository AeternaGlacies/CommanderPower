# CommanderPower — PWA V2

Application mobile autonome pour créer un commandant personnalisé dans un format Magic maison.

## Déploiement GitHub Pages

1. Extraire les fichiers du ZIP **à la racine du dépôt** (pas dans un sous-dossier).
2. GitHub > Settings > Pages > Deploy from a branch > `main` / `(root)`.
3. Attendre le déploiement et ouvrir l'URL GitHub Pages sur téléphone.
4. Sur Android, menu navigateur > Installer l'application. Sur iPhone (Safari), Partager > Sur l'écran d'accueil.

Les chemins sont relatifs : fonctionne aussi sur `https://utilisateur.github.io/nom-du-depot/`.

## Fonctionnalités

- Carte du commandant plein écran, menu latéral, édition mobile.
- 3 capacités équipables, 10 PP de base, bonus de PP si coût de mana augmenté.
- Bonus de statistiques cumulables, types supplémentaires, symboles de mana coloré individuels.
- Réduction et augmentation exclusives, X indépendant.
- Nom de 3 mots maximum, exemplaires cumulables, mots de départ inclus.
- QR par `BarcodeDetector` sur navigateurs compatibles, saisie manuelle sinon.
- Un code inédit ouvre 3 récompenses de raretés variables.
- Sauvegarde locale, export/import JSON, mode hors ligne après première visite.

## IMPORTANT — limites de la V2

- **Les 96 stickers officiels d'Unfinity ne sont pas encore intégrés.** Le catalogue actuel contient des capacités **maison**, avec coûts proposés non officiels.
- **Les codes QR ne sont pas sécurisés.** Tout code alphanumérique de 6 à 80 caractères peut ouvrir un booster. La limitation « une fois par code » ne fonctionne que sur l'appareil local. Pour une compétition, prévoir une API de validation, des comptes et des codes à usage unique côté serveur.
- Le contenu des boosters est aléatoire sur chaque appareil. Les récompenses ne sont pas certifiées.
- Le mode X n'est pas encore un objet à débloquer ; il sert à tester les capacités X.
- L'identité de couleur dérivée des symboles présents dans les textes de capacités n'est pas calculée automatiquement.
- Application non officielle, non affiliée à Wizards of the Coast. Utiliser des illustrations dont vous possédez les droits.

Dépôt : https://github.com/AeternaGlacies/CommanderPower
Adresse prévue : https://aeternaglacies.github.io/CommanderPower/


## Image personnelle et sauvegarde

Dans **Modifier > Image**, sélectionnez une image de votre téléphone. Elle est réduite localement (1000 px max, JPEG) puis conservée dans le stockage local du navigateur. Les choix du commandant sont sauvegardés automatiquement après chaque modification. L’export JSON dans **Paramètres** inclut aussi la photo personnelle. Importez ce fichier sur un autre appareil pour retrouver votre commandant. Attention : vider les données du navigateur efface la sauvegarde locale ; conservez un export JSON.

## V4 — Capacités
Catalogue élargi de capacités maison, avec recherche dans Modifier > Capacités, rareté et coût en PP. Les capacités verrouillées sont visibles et se débloquent via boosters. Aucune capacité de tutorisation non-terrain. Les 96 stickers officiels Unfinity ne sont **pas** encore reproduits ou vérifiés.


## V5 — Filtres et raretés
- Pastilles colorées pour les raretés : commune (gris), peu commune (bleu), rare (or), mythique (orange), légendaire (violet).
- Filtres Possession et Rareté dans le catalogue des capacités et la collection.
- Possession : toutes, possédées, non possédées, équipées.
- Les filtres ne modifient pas les sauvegardes existantes.
- Catalogue toujours basé sur des capacités maison provisoires, pas sur une extraction vérifiée des 96 stickers Unfinity.
