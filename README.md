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
