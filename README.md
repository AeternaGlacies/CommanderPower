# CommanderPower V14 — Boosters à 4 emplacements

Les trois codes QR de test V13 sont conservés et fonctionnent avec V14.

Chaque booster donne exactement **4 récompenses** :

- **Standard** : 1 nom commune/peu commune ; 1 type ou stat commune/peu commune ; 1 type ou stat commune/peu commune ; 1 récompense aléatoire (toutes catégories et raretés).
- **Premium** : 1 nom commune/peu commune/rare ; 1 type ou stat commune/peu commune/rare ; 1 type ou stat peu commune/rare ; 1 récompense aléatoire.
- **Légendaire** : 1 nom peu commune/rare/mythique/légendaire ; 1 type ou stat peu commune/rare/mythique ; 1 type ou stat rare/mythique ; 1 récompense aléatoire.

Les probabilités déjà définies pour chaque type de booster servent au tirage *parmi les raretés autorisées* pour chaque emplacement.

Les doublons de récompenses entre emplacements restent possibles, sauf la récompense de nom légendaire unique.
Les codes ne sont bloqués qu'au niveau du stockage local de l'appareil.
La sauvegarde existante est conservée.

## V15 — Animation d'ouverture
- Animation de paquet distincte selon Standard, Premium et Légendaire.
- Révélation progressive des 4 récompenses avec leurs raretés.
- Bouton « Tout révéler » et bouton « Voir ma collection ».
- Respect de l'option système « réduire les animations ».
- Les récompenses et le QR utilisé sont sauvegardés **avant** l'animation.
- Aucun changement aux probabilités et aux codes QR de test V13.

## V16 — Nouvelle répartition

Chaque booster donne **4 récompenses** :

| Position | Standard | Premium | Légendaire |
|---|---|---|---|
| 1 : Nom | Commun / Peu commun | Commun / Peu commun / Rare | Peu commun / Rare / Mythique / Légendaire |
| 2 : Type ou Stat | Commun / Peu commun | Commun / Peu commun / Rare | Peu commun / Rare / Mythique |
| 3 : N'importe quelle catégorie (sauf image) | Commun / Peu commun | Peu commun / Rare | Rare / Mythique |
| 4 : N'importe quelle catégorie (sauf image) | Aléatoire | Aléatoire | Aléatoire |

Les probabilités du type de booster s'appliquent au sein des raretés autorisées. Animation V15 et QR de test conservés.

## V17
- Révélation manuelle des quatre cartes, une à une et dans l'ordre.
- Sons synthétisés localement (Web Audio) : son distinct pour rares, mythiques et légendaires ; aucun fichier audio externe.
- Mana affiché en symboles ronds avec couleurs de Magic (sans utiliser d'images officielles).
- Types de créatures gratuits (0 PP), y compris pour les anciennes sauvegardes.
- Texte de base « As The Prismatic Piper enters, choose a color. » masqué dès qu'une capacité est équipée.
- La progression et les codes QR restent compatibles.

## V18 — Ouverture interactive et éclats
- Quatre cartes révélées une par une au toucher, dans l'ordre.
- Sons progressifs par rareté ; mélodies différentes pour rare, mythique et légendaire.
- Brillance dorée (rare), orange (mythique) et violette (légendaire), avec balayage foil et étincelles.
- Bouton Tout révéler et accessibilité « réduire les animations ».
- Tirages, codes QR et sauvegardes inchangés.

## V19 — Sons immersifs (sans MP3)
- Ouverture : froissement et déchirure synthétiques du paquet.
- Révélation : souffle de carte et notes distinctes par rareté.
- Rare : tintement cristallin et impact grave.
- Mythique : montée magique et scintillement.
- Légendaire : fanfare synthétique et accord final.
- « Tout révéler » reste silencieux pour éviter quatre effets superposés.
- Audio produit localement par Web Audio, sans réseau ni fichiers audio.
- Les navigateurs peuvent exiger un geste utilisateur pour activer l'audio.

## V20 — Catégories de mana de la référence visuelle
- Symboles ronds dessinés localement en SVG : générique (X/Y/Z/nombres), W/U/B/R/G, incolore C, neigeux S, phyrexian et hybride.
- Ajouts au catalogue : {C}, {2/W}, {2/U}, {2/B}, {2/R}, {2/G} et {C/W}, {C/U}, {C/B}, {C/R}, {C/G}.
- Les 10 hybrides bicolores, les 5 phyrexians, {S} et les 5 couleurs existantes restent présents.
- Les glyphes sont des interprétations graphiques simplifiées, pas les illustrations officielles de Wizards.
- Les symboles Y et Z sont pris en charge par le moteur de rendu mais pas encore comme objets à équiper.
- Les coûts de types sont 0 PP et le texte de base est masqué lorsqu'une capacité est équipée.
- L'énergie reste une ressource et n'apparaît pas dans le coût de mana.

## V21 — Symboles officiels et éditeur de nom
- Les symboles de mana affichent les illustrations officielles via les SVG hébergés par Scryfall (connexion Internet nécessaire au premier chargement).
- En cas d'absence de réseau ou de chargement impossible, l'application affiche les glyphes SVG simplifiés de V20.
- Retrait de la pastille de prévisualisation du nom sous les trois menus déroulants ; le nom reste visible sur la carte.
- Source des SVG : https://svgs.scryfall.io/card-symbols/ (illustrations Magic: The Gathering, Wizards of the Coast). Projet non officiel.

V22 : Affichage des mots sans identifiants techniques wordExtra dans les menus; aperçu du nom rétabli.
