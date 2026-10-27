'use strict';
const KEY='commander-evolution-v2';
const C={W:'Blanc',U:'Bleu',B:'Noir',R:'Rouge',G:'Vert'};
const rewards=[];
function add(id,name,kind,cost,rarity,extra={}){rewards.push({id,name,kind,cost,rarity,...extra})}
[['flying','Flying',2,'common'],['vigilance','Vigilance',2,'common'],['trample','Trample',2,'uncommon'],['menace','Menace',2,'common'],['reach','Reach',2,'common'],['haste','Haste',2,'uncommon'],['deathtouch','Deathtouch',3,'uncommon'],['lifelink','Lifelink',3,'uncommon'],['firststrike','First strike',3,'uncommon'],['ward','Ward {2}',4,'rare'],['double','Double strike',5,'mythic'],['hexproof','Hexproof',6,'mythic'],['indestructible','Indestructible',6,'mythic']].forEach(([id,n,c,r])=>add(id,n,'ability',c,r,{text:n}));
[
['loot','Whenever this creature attacks, draw a card, then discard a card.',3,'uncommon'],
['treasure','Whenever this creature deals combat damage to a player, create a Treasure token.',4,'rare'],
['grow','Whenever you cast an instant or sorcery spell, put a +1/+1 counter on this creature.',5,'rare'],
['draw','Whenever this creature deals combat damage to a player, draw a card.',6,'mythic'],
['drain','Whenever another creature you control dies, each opponent loses 1 life.',5,'rare'],
['token','Whenever this creature attacks, create a 1/1 colorless Thopter artifact creature token with flying.',5,'rare'],
['landhand','When this creature enters, you may search your library for a basic land card, reveal it, put it into your hand, then shuffle.',2,'common'],
['landfield','When this creature enters, you may search your library for a basic land card, put it onto the battlefield tapped, then shuffle.',4,'uncommon'],
['anyland','When this creature enters, you may search your library for a land card, reveal it, put it into your hand, then shuffle.',5,'rare'],
['landfieldall','When this creature enters, you may search your library for a land card, put it onto the battlefield tapped, then shuffle.',6,'mythic'],
['xgrow','When this creature enters, put X +1/+1 counters on it.',5,'mythic'],
['xdraw','When this creature enters, look at the top X cards of your library. Put one of them into your hand and the rest on the bottom of your library in a random order.',5,'mythic']
].forEach(([id,n,c,r])=>add(id,n,'ability',c,r,{text:n,requiresX:id.startsWith('x')}));

// Bibliothèque supplémentaire de capacités maison, inspirées des mécaniques Magic.
// Les coûts et raretés ci-dessous ne sont PAS des données officielles Unfinity.
add('cp_flash',"Flash",'ability',2,'common',{text:"Flash",requiresX:false});
add('cp_defender',"Defender",'ability',2,'common',{text:"Defender",requiresX:false});
add('cp_prowess',"Prowess",'ability',3,'uncommon',{text:"Prowess",requiresX:false});
add('cp_fear',"Fear",'ability',2,'uncommon',{text:"Fear",requiresX:false});
add('cp_intimidate',"Intimidate",'ability',2,'uncommon',{text:"Intimidate",requiresX:false});
add('cp_skulk',"Skulk",'ability',2,'uncommon',{text:"Skulk",requiresX:false});
add('cp_protection',"Ward {1}",'ability',3,'uncommon',{text:"Ward {1}",requiresX:false});
add('cp_ward3',"Ward {3}",'ability',5,'rare',{text:"Ward {3}",requiresX:false});
add('cp_reachvigil',"Reach, vigilance",'ability',3,'uncommon',{text:"Reach, vigilance",requiresX:false});
add('cp_tramplehaste',"Trample, haste",'ability',5,'rare',{text:"Trample, haste",requiresX:false});
add('cp_flyingvigil',"Flying, vigilance",'ability',5,'rare',{text:"Flying, vigilance",requiresX:false});
add('cp_flyinghaste',"Flying, haste",'ability',5,'rare',{text:"Flying, haste",requiresX:false});
add('cp_atk_scry',"Whenever this creature attacks, scry 1.",'ability',2,'common',{text:"Whenever this creature attacks, scry 1.",requiresX:false});
add('cp_atk_mill',"Whenever this creature attacks, target player mills two cards.",'ability',2,'common',{text:"Whenever this creature attacks, target player mills two cards.",requiresX:false});
add('cp_atk_life',"Whenever this creature attacks, you gain 2 life.",'ability',2,'common',{text:"Whenever this creature attacks, you gain 2 life.",requiresX:false});
add('cp_atk_goad',"Whenever this creature attacks, goad target creature an opponent controls.",'ability',3,'uncommon',{text:"Whenever this creature attacks, goad target creature an opponent controls.",requiresX:false});
add('cp_atk_tap',"Whenever this creature attacks, tap target creature defending player controls.",'ability',4,'rare',{text:"Whenever this creature attacks, tap target creature defending player controls.",requiresX:false});
add('cp_atk_token',"Whenever this creature attacks, create a 1/1 white Soldier creature token tapped and attacking.",'ability',5,'rare',{text:"Whenever this creature attacks, create a 1/1 white Soldier creature token tapped and attacking.",requiresX:false});
add('cp_atk_treasure',"Whenever this creature attacks, create a tapped Treasure token.",'ability',5,'rare',{text:"Whenever this creature attacks, create a tapped Treasure token.",requiresX:false});
add('cp_atk_impulse',"Whenever this creature attacks, exile the top card of your library. You may play that card this turn.",'ability',5,'rare',{text:"Whenever this creature attacks, exile the top card of your library. You may play that card this turn.",requiresX:false});
add('cp_hit_scry',"Whenever this creature deals combat damage to a player, scry 2.",'ability',2,'common',{text:"Whenever this creature deals combat damage to a player, scry 2.",requiresX:false});
add('cp_hit_mill',"Whenever this creature deals combat damage to a player, that player mills three cards.",'ability',3,'uncommon',{text:"Whenever this creature deals combat damage to a player, that player mills three cards.",requiresX:false});
add('cp_hit_life',"Whenever this creature deals combat damage to a player, you gain 3 life.",'ability',2,'common',{text:"Whenever this creature deals combat damage to a player, you gain 3 life.",requiresX:false});
add('cp_hit_discard',"Whenever this creature deals combat damage to a player, that player discards a card.",'ability',5,'rare',{text:"Whenever this creature deals combat damage to a player, that player discards a card.",requiresX:false});
add('cp_hit_treasure',"Whenever this creature deals combat damage to a player, create a Treasure token.",'ability',4,'rare',{text:"Whenever this creature deals combat damage to a player, create a Treasure token.",requiresX:false});
add('cp_hit_draw_discard',"Whenever this creature deals combat damage to a player, draw a card, then discard a card.",'ability',4,'uncommon',{text:"Whenever this creature deals combat damage to a player, draw a card, then discard a card.",requiresX:false});
add('cp_hit_draw',"Whenever this creature deals combat damage to a player, draw a card.",'ability',6,'mythic',{text:"Whenever this creature deals combat damage to a player, draw a card.",requiresX:false});
add('cp_cast_scry',"Whenever you cast an instant or sorcery spell, scry 1.",'ability',3,'uncommon',{text:"Whenever you cast an instant or sorcery spell, scry 1.",requiresX:false});
add('cp_cast_life',"Whenever you cast a noncreature spell, you gain 1 life.",'ability',3,'uncommon',{text:"Whenever you cast a noncreature spell, you gain 1 life.",requiresX:false});
add('cp_cast_counter',"Whenever you cast an instant or sorcery spell, put a +1/+1 counter on this creature.",'ability',5,'rare',{text:"Whenever you cast an instant or sorcery spell, put a +1/+1 counter on this creature.",requiresX:false});
add('cp_cast_impulse',"Whenever you cast your first noncreature spell each turn, exile the top card of your library. You may play that card this turn.",'ability',6,'mythic',{text:"Whenever you cast your first noncreature spell each turn, exile the top card of your library. You may play that card this turn.",requiresX:false});
add('cp_cast_token',"Whenever you cast your first instant or sorcery spell each turn, create a 1/1 blue Bird creature token with flying.",'ability',6,'mythic',{text:"Whenever you cast your first instant or sorcery spell each turn, create a 1/1 blue Bird creature token with flying.",requiresX:false});
add('cp_death_scry',"Whenever another creature you control dies, scry 1.",'ability',3,'uncommon',{text:"Whenever another creature you control dies, scry 1.",requiresX:false});
add('cp_death_life',"Whenever another creature you control dies, you gain 1 life.",'ability',2,'common',{text:"Whenever another creature you control dies, you gain 1 life.",requiresX:false});
add('cp_death_drain',"Whenever another creature you control dies, each opponent loses 1 life.",'ability',5,'rare',{text:"Whenever another creature you control dies, each opponent loses 1 life.",requiresX:false});
add('cp_death_counter',"Whenever another creature you control dies, put a +1/+1 counter on this creature.",'ability',5,'rare',{text:"Whenever another creature you control dies, put a +1/+1 counter on this creature.",requiresX:false});
add('cp_death_treasure',"Whenever another nontoken creature you control dies, create a tapped Treasure token.",'ability',6,'mythic',{text:"Whenever another nontoken creature you control dies, create a tapped Treasure token.",requiresX:false});
add('cp_etb_scry',"When this creature enters, scry 2.",'ability',2,'common',{text:"When this creature enters, scry 2.",requiresX:false});
add('cp_etb_draw_discard',"When this creature enters, draw a card, then discard a card.",'ability',3,'uncommon',{text:"When this creature enters, draw a card, then discard a card.",requiresX:false});
add('cp_etb_life',"When this creature enters, you gain 3 life.",'ability',2,'common',{text:"When this creature enters, you gain 3 life.",requiresX:false});
add('cp_etb_token',"When this creature enters, create a 1/1 white Soldier creature token.",'ability',4,'uncommon',{text:"When this creature enters, create a 1/1 white Soldier creature token.",requiresX:false});
add('cp_etb_counter',"When this creature enters, put a +1/+1 counter on it.",'ability',3,'uncommon',{text:"When this creature enters, put a +1/+1 counter on it.",requiresX:false});
add('cp_etb_bounce',"When this creature enters, return up to one target creature an opponent controls to its owner’s hand.",'ability',6,'mythic',{text:"When this creature enters, return up to one target creature an opponent controls to its owner’s hand.",requiresX:false});
add('cp_upkeep_scry',"At the beginning of your upkeep, scry 1.",'ability',3,'uncommon',{text:"At the beginning of your upkeep, scry 1.",requiresX:false});
add('cp_upkeep_life',"At the beginning of your upkeep, you gain 1 life.",'ability',2,'common',{text:"At the beginning of your upkeep, you gain 1 life.",requiresX:false});
add('cp_upkeep_mill',"At the beginning of your upkeep, each opponent mills one card.",'ability',3,'uncommon',{text:"At the beginning of your upkeep, each opponent mills one card.",requiresX:false});
add('cp_endstep_token',"At the beginning of your end step, if a creature died this turn, create a 1/1 black Skeleton creature token.",'ability',5,'rare',{text:"At the beginning of your end step, if a creature died this turn, create a 1/1 black Skeleton creature token.",requiresX:false});
add('cp_endstep_counter',"At the beginning of your end step, if you cast two or more spells this turn, put a +1/+1 counter on this creature.",'ability',4,'rare',{text:"At the beginning of your end step, if you cast two or more spells this turn, put a +1/+1 counter on this creature.",requiresX:false});
add('cp_tap_scry',"{T}: Scry 1.",'ability',3,'uncommon',{text:"{T}: Scry 1.",requiresX:false});
add('cp_tap_life',"{T}: You gain 1 life.",'ability',2,'common',{text:"{T}: You gain 1 life.",requiresX:false});
add('cp_tap_mill',"{T}: Target player mills two cards.",'ability',3,'uncommon',{text:"{T}: Target player mills two cards.",requiresX:false});
add('cp_tap_loot',"{1}, {T}: Draw a card, then discard a card.",'ability',4,'rare',{text:"{1}, {T}: Draw a card, then discard a card.",requiresX:false});
add('cp_tap_treasure',"{2}, {T}: Create a tapped Treasure token.",'ability',5,'rare',{text:"{2}, {T}: Create a tapped Treasure token.",requiresX:false});
add('cp_tap_counter',"{2}, {T}: Put a +1/+1 counter on this creature. Activate only as a sorcery.",'ability',5,'rare',{text:"{2}, {T}: Put a +1/+1 counter on this creature. Activate only as a sorcery.",requiresX:false});
add('cp_land_etb_hand',"When this creature enters, you may search your library for a basic land card, reveal it, put it into your hand, then shuffle.",'ability',2,'common',{text:"When this creature enters, you may search your library for a basic land card, reveal it, put it into your hand, then shuffle.",requiresX:false});
add('cp_land_etb_field',"When this creature enters, you may search your library for a basic land card, put it onto the battlefield tapped, then shuffle.",'ability',4,'uncommon',{text:"When this creature enters, you may search your library for a basic land card, put it onto the battlefield tapped, then shuffle.",requiresX:false});
add('cp_land_hit_hand',"Whenever this creature deals combat damage to a player, you may search your library for a basic land card, reveal it, put it into your hand, then shuffle.",'ability',4,'uncommon',{text:"Whenever this creature deals combat damage to a player, you may search your library for a basic land card, reveal it, put it into your hand, then shuffle.",requiresX:false});
add('cp_land_hit_any',"Whenever this creature deals combat damage to a player, you may search your library for a land card, reveal it, put it into your hand, then shuffle.",'ability',5,'rare',{text:"Whenever this creature deals combat damage to a player, you may search your library for a land card, reveal it, put it into your hand, then shuffle.",requiresX:false});
add('cp_land_etb_any',"When this creature enters, you may search your library for a land card, put it onto the battlefield tapped, then shuffle.",'ability',6,'mythic',{text:"When this creature enters, you may search your library for a land card, put it onto the battlefield tapped, then shuffle.",requiresX:false});
add('cp_x_scry',"When this creature enters, scry X.",'ability',3,'uncommon',{text:"When this creature enters, scry X.",requiresX:true});
add('cp_x_life',"When this creature enters, you gain X life.",'ability',3,'uncommon',{text:"When this creature enters, you gain X life.",requiresX:true});
add('cp_x_mill',"When this creature enters, target player mills X cards.",'ability',4,'rare',{text:"When this creature enters, target player mills X cards.",requiresX:true});
add('cp_x_tokens',"When this creature enters, create X 1/1 white Soldier creature tokens.",'ability',6,'mythic',{text:"When this creature enters, create X 1/1 white Soldier creature tokens.",requiresX:true});
add('cp_x_counters',"When this creature enters, put X +1/+1 counters on it.",'ability',5,'mythic',{text:"When this creature enters, put X +1/+1 counters on it.",requiresX:true});
// Unfinity : 96 emplacements officiels de capacités (48 feuilles, 2 par feuille).
add('unf_16_1',"When this permanent dies, you may return target creature to its owner's hand.",'ability',2,'common',{text:"When this permanent dies, you may return target creature to its owner's hand.",source:'Unfinity',sheet:16});
add('unf_16_2',"Whenever this creature attacks, creatures you control get +1/+1 until end of turn.",'ability',4,'rare',{text:"Whenever this creature attacks, creatures you control get +1/+1 until end of turn.",source:'Unfinity',sheet:16});
add('unf_17_1',"Mentor",'ability',2,'common',{text:"Mentor",source:'Unfinity',sheet:17});
add('unf_17_2',"When this permanent leaves the battlefield, you may destroy target creature with power 4 or greater.",'ability',3,'uncommon',{text:"When this permanent leaves the battlefield, you may destroy target creature with power 4 or greater.",source:'Unfinity',sheet:17});
add('unf_18_1',"Whenever this creature attacks, you get a ticket counter.",'ability',2,'common',{text:"Whenever this creature attacks, you get a ticket counter.",source:'Unfinity',sheet:18});
add('unf_18_2',"Undying",'ability',3,'uncommon',{text:"Undying",source:'Unfinity',sheet:18});
add('unf_19_1',"Whenever this creature deals combat damage to a player, exile target creature you control, then return it to the battlefield under its owner's control.",'ability',2,'common',{text:"Whenever this creature deals combat damage to a player, exile target creature you control, then return it to the battlefield under its owner's control.",source:'Unfinity',sheet:19});
add('unf_19_2',"{T}: Untap another target permanent.",'ability',3,'uncommon',{text:"{T}: Untap another target permanent.",source:'Unfinity',sheet:19});
add('unf_21_1',"Outlast {1}",'ability',2,'common',{text:"Outlast {1}",source:'Unfinity',sheet:21});
add('unf_21_2',"When this permanent dies, you get seven ticket counters.",'ability',3,'uncommon',{text:"When this permanent dies, you get seven ticket counters.",source:'Unfinity',sheet:21});
add('unf_26_1',"{1}: Target creature gains all creature types until end of turn.",'ability',2,'common',{text:"{1}: Target creature gains all creature types until end of turn.",source:'Unfinity',sheet:26});
add('unf_26_2',"Magecraft — Whenever you cast or copy an instant or sorcery spell, draw a card.",'ability',3,'uncommon',{text:"Magecraft — Whenever you cast or copy an instant or sorcery spell, draw a card.",source:'Unfinity',sheet:26});
add('unf_27_1',"{T}: When target player next rolls dice this turn, they roll one extra die and you choose a result to ignore.",'ability',2,'common',{text:"{T}: When target player next rolls dice this turn, they roll one extra die and you choose a result to ignore.",source:'Unfinity',sheet:27});
add('unf_27_2',"Protection from odd mana values",'ability',3,'uncommon',{text:"Protection from odd mana values",source:'Unfinity',sheet:27});
add('unf_28_1',"When this permanent leaves the battlefield, draw a card.",'ability',2,'common',{text:"When this permanent leaves the battlefield, draw a card.",source:'Unfinity',sheet:28});
add('unf_28_2',"Whenever a creature enters under your control, this permanent becomes a 13/13 Eldrazi creature in addition to its other types until end of turn.",'ability',5,'mythic',{text:"Whenever a creature enters under your control, this permanent becomes a 13/13 Eldrazi creature in addition to its other types until end of turn.",source:'Unfinity',sheet:28});
add('unf_35_1',"When this permanent leaves the battlefield, target player discards a card.",'ability',2,'common',{text:"When this permanent leaves the battlefield, target player discards a card.",source:'Unfinity',sheet:35});
add('unf_35_2',"When this permanent leaves the battlefield, create five 1/1 white Clown Robot artifact creature tokens.",'ability',5,'mythic',{text:"When this permanent leaves the battlefield, create five 1/1 white Clown Robot artifact creature tokens.",source:'Unfinity',sheet:35});
add('unf_36_1',"When this permanent dies, return target noncreature, nonland card from your graveyard to your hand.",'ability',2,'common',{text:"When this permanent dies, return target noncreature, nonland card from your graveyard to your hand.",source:'Unfinity',sheet:36});
add('unf_36_2',"Whenever this creature deals combat damage to a player, that player mills twice that many cards.",'ability',4,'rare',{text:"Whenever this creature deals combat damage to a player, that player mills twice that many cards.",source:'Unfinity',sheet:36});
add('unf_37_1',"Ward {2}",'ability',2,'common',{text:"Ward {2}",source:'Unfinity',sheet:37});
add('unf_37_2',"Provoke",'ability',4,'rare',{text:"Provoke",source:'Unfinity',sheet:37});
add('unf_38_1',"{T}: Add one mana of any color.",'ability',2,'common',{text:"{T}: Add one mana of any color.",source:'Unfinity',sheet:38});
add('unf_38_2',"Whenever this creature attacks, if it isn't a Brushwagg, it gets +X/+0 until end of turn, where X is its number of supertypes, types, and subtypes.",'ability',3,'uncommon',{text:"Whenever this creature attacks, if it isn't a Brushwagg, it gets +X/+0 until end of turn, where X is its number of supertypes, types, and subtypes.",source:'Unfinity',sheet:38});
add('unf_45_1',"{T}: Add {2}. Spend this mana only to cast creature spells.",'ability',2,'common',{text:"{T}: Add {2}. Spend this mana only to cast creature spells.",source:'Unfinity',sheet:45});
add('unf_45_2',"At the beginning of combat on your turn, target noncreature artifact you control becomes a 4/4 artifact creature with flying until end of turn.",'ability',4,'rare',{text:"At the beginning of combat on your turn, target noncreature artifact you control becomes a 4/4 artifact creature with flying until end of turn.",source:'Unfinity',sheet:45});
add('unf_46_1',"Exile this permanent: You may cast target nonland card from your graveyard this turn.",'ability',2,'common',{text:"Exile this permanent: You may cast target nonland card from your graveyard this turn.",source:'Unfinity',sheet:46});
add('unf_46_2',"Whenever a creature you control dies, each opponent loses 1 life and you gain 1 life.",'ability',4,'rare',{text:"Whenever a creature you control dies, each opponent loses 1 life and you gain 1 life.",source:'Unfinity',sheet:46});
add('unf_47_1',"{1}: Switch this creature's power and toughness until end of turn.",'ability',2,'common',{text:"{1}: Switch this creature's power and toughness until end of turn.",source:'Unfinity',sheet:47});
add('unf_47_2',"Whenever this creature attacks, it gets +5/+5 until end of turn.",'ability',4,'rare',{text:"Whenever this creature attacks, it gets +5/+5 until end of turn.",source:'Unfinity',sheet:47});
add('unf_48_1',"Landfall — Whenever a land enters under your control, put a +1/+1 counter on this permanent.",'ability',2,'common',{text:"Landfall — Whenever a land enters under your control, put a +1/+1 counter on this permanent.",source:'Unfinity',sheet:48});
add('unf_48_2',"Whenever a creature blocks this creature, that creature gets -4/-4 until end of turn.",'ability',4,'rare',{text:"Whenever a creature blocks this creature, that creature gets -4/-4 until end of turn.",source:'Unfinity',sheet:48});
// Stickers Unfinity : entrées vérifiées sur la liste des feuilles officielles (catalogue partiel).
add('unf_01_1',"Haste",'ability',2,'common',{text:"Haste",source:'Unfinity',sheet:1});
add('unf_01_2',"You may cast this card from your graveyard by paying 2 life in addition to paying its other costs.",'ability',5,'mythic',{text:"You may cast this card from your graveyard by paying 2 life in addition to paying its other costs.",source:'Unfinity',sheet:1});
add('unf_02_1',"Deathtouch",'ability',2,'common',{text:"Deathtouch",source:'Unfinity',sheet:2});
add('unf_02_2',"Whenever this creature deals combat damage to a player, create that many 1/1 green Squirrel creature tokens.",'ability',5,'mythic',{text:"Whenever this creature deals combat damage to a player, create that many 1/1 green Squirrel creature tokens.",source:'Unfinity',sheet:2});
add('unf_03_1',"Menace",'ability',2,'common',{text:"Menace",source:'Unfinity',sheet:3});
add('unf_03_2',"Persist",'ability',3,'uncommon',{text:"Persist",source:'Unfinity',sheet:3});
add('unf_04_1',"Exalted, exalted",'ability',2,'common',{text:"Exalted, exalted",source:'Unfinity',sheet:4});
add('unf_04_2',"Shadow",'ability',3,'uncommon',{text:"Shadow",source:'Unfinity',sheet:4});
add('unf_05_1',"Whenever you cast a spell, this creature gets +X/+X until end of turn, where X is the amount of generic mana in that spell’s mana cost.",'ability',2,'common',{text:"Whenever you cast a spell, this creature gets +X/+X until end of turn, where X is the amount of generic mana in that spell’s mana cost.",source:'Unfinity',sheet:5});
add('unf_05_2',"Hexproof",'ability',3,'uncommon',{text:"Hexproof",source:'Unfinity',sheet:5});
add('unf_06_1',"First strike",'ability',2,'common',{text:"First strike",source:'Unfinity',sheet:6});
add('unf_06_2',"Whenever this creature deals combat damage to a player, draw that many cards.",'ability',4,'rare',{text:"Whenever this creature deals combat damage to a player, draw that many cards.",source:'Unfinity',sheet:6});
add('unf_07_1',"Sacrifice this permanent: Draw two cards.",'ability',2,'common',{text:"Sacrifice this permanent: Draw two cards.",source:'Unfinity',sheet:7});
add('unf_07_2',"Whenever this creature attacks, proliferate.",'ability',3,'uncommon',{text:"Whenever this creature attacks, proliferate.",source:'Unfinity',sheet:7});
add('unf_08_1',"{T}: Add {C}{C}. Spend this mana only to cast noncreature spells.",'ability',2,'common',{text:"{T}: Add {C}{C}. Spend this mana only to cast noncreature spells.",source:'Unfinity',sheet:8});
add('unf_08_2',"Infect",'ability',3,'uncommon',{text:"Infect",source:'Unfinity',sheet:8});
add('unf_09_1',"Bushido 2",'ability',2,'common',{text:"Bushido 2",source:'Unfinity',sheet:9});
add('unf_09_2',"Double strike",'ability',3,'uncommon',{text:"Double strike",source:'Unfinity',sheet:9});
add('unf_10_1',"Vigilance",'ability',2,'common',{text:"Vigilance",source:'Unfinity',sheet:10});
add('unf_10_2',"{1}, {T}: Tap target creature.",'ability',4,'rare',{text:"{1}, {T}: Tap target creature.",source:'Unfinity',sheet:10});
add('unf_11_1',"Lifelink",'ability',2,'common',{text:"Lifelink",source:'Unfinity',sheet:11});
add('unf_11_2',"This creature must be blocked if able. Whenever this creature becomes blocked, it gets +1/+1 until end of turn for each creature blocking it.",'ability',3,'uncommon',{text:"This creature must be blocked if able. Whenever this creature becomes blocked, it gets +1/+1 until end of turn for each creature blocking it.",source:'Unfinity',sheet:11});
add('unf_12_1',"Whenever this creature attacks, you gain 2 life.",'ability',2,'common',{text:"Whenever this creature attacks, you gain 2 life.",source:'Unfinity',sheet:12});
add('unf_12_2',"Vigilance, reach",'ability',3,'uncommon',{text:"Vigilance, reach",source:'Unfinity',sheet:12});
add('unf_13_1',"Whenever this creature attacks, bolster 1.",'ability',2,'common',{text:"Whenever this creature attacks, bolster 1.",source:'Unfinity',sheet:13});
add('unf_13_2',"Indestructible",'ability',4,'rare',{text:"Indestructible",source:'Unfinity',sheet:13});
add('unf_14_1',"Whenever this creature attacks, scry 1.",'ability',2,'common',{text:"Whenever this creature attacks, scry 1.",source:'Unfinity',sheet:14});
add('unf_14_2',"Whenever this permanent leaves the battlefield, you may destroy target artifact or enchantment.",'ability',3,'uncommon',{text:"Whenever this permanent leaves the battlefield, you may destroy target artifact or enchantment.",source:'Unfinity',sheet:14});
add('unf_15_1',"{T}: Target creature gains haste until end of turn.",'ability',2,'common',{text:"{T}: Target creature gains haste until end of turn.",source:'Unfinity',sheet:15});
add('unf_15_2',"Deathtouch, lifelink",'ability',4,'rare',{text:"Deathtouch, lifelink",source:'Unfinity',sheet:15});
add('unf_20_1',"Trample",'ability',2,'uncommon',{text:"Trample",source:'Unfinity',sheet:20});
add('unf_20_2',"{3}: Monstrosity 3.",'ability',3,'uncommon',{text:"{3}: Monstrosity 3.",source:'Unfinity',sheet:20});
add('unf_22_1',"Prowess, prowess",'ability',2,'common',{text:"Prowess, prowess",source:'Unfinity',sheet:22});
add('unf_22_2',"{2}, {T}: This permanent deals 2 damage to any target.",'ability',5,'mythic',{text:"{2}, {T}: This permanent deals 2 damage to any target.",source:'Unfinity',sheet:22});
add('unf_23_1',"Afflict 2",'ability',2,'common',{text:"Afflict 2",source:'Unfinity',sheet:23});
add('unf_23_2',"Flying",'ability',3,'uncommon',{text:"Flying",source:'Unfinity',sheet:23});
add('unf_24_1',"Whenever this creature attacks, untap target permanent.",'ability',2,'common',{text:"Whenever this creature attacks, untap target permanent.",source:'Unfinity',sheet:24});
add('unf_24_2',"Whenever a creature enters the battlefield under your control, creatures you control get +1/+1 until end of turn.",'ability',4,'rare',{text:"Whenever a creature enters the battlefield under your control, creatures you control get +1/+1 until end of turn.",source:'Unfinity',sheet:24});
add('unf_25_1',"When this permanent leaves the battlefield, create two Food tokens.",'ability',2,'common',{text:"When this permanent leaves the battlefield, create two Food tokens.",source:'Unfinity',sheet:25});
add('unf_25_2',"When this permanent dies, you may destroy target nonland permanent.",'ability',4,'rare',{text:"When this permanent dies, you may destroy target nonland permanent.",source:'Unfinity',sheet:25});
add('unf_29_1',"Skulk",'ability',2,'common',{text:"Skulk",source:'Unfinity',sheet:29});
add('unf_29_2',"Battle cry",'ability',3,'uncommon',{text:"Battle cry",source:'Unfinity',sheet:29});
add('unf_30_1',"{T}: Draw a card, then discard a card.",'ability',2,'common',{text:"{T}: Draw a card, then discard a card.",source:'Unfinity',sheet:30});
add('unf_30_2',"Whenever this creature attacks, you gain 3 life and draw a card.",'ability',4,'rare',{text:"Whenever this creature attacks, you gain 3 life and draw a card.",source:'Unfinity',sheet:30});
add('unf_31_1',"{1}: Target creature can’t block this turn.",'ability',2,'common',{text:"{1}: Target creature can’t block this turn.",source:'Unfinity',sheet:31});
add('unf_31_2',"Morbid — At the beginning of each end step, if a creature died this turn and this permanent is a creature, put a -1/-1 counter on this permanent and draw a card.",'ability',4,'rare',{text:"Morbid — At the beginning of each end step, if a creature died this turn and this permanent is a creature, put a -1/-1 counter on this permanent and draw a card.",source:'Unfinity',sheet:31});
add('unf_32_1',"{2}: This creature gets +2/+0 until end of turn.",'ability',2,'common',{text:"{2}: This creature gets +2/+0 until end of turn.",source:'Unfinity',sheet:32});
add('unf_32_2',"Whenever a creature enters the battlefield under your control, this permanent deals 2 damage to target player.",'ability',4,'rare',{text:"Whenever a creature enters the battlefield under your control, this permanent deals 2 damage to target player.",source:'Unfinity',sheet:32});
add('unf_33_1',"{1}: This creature gets +1/-1 until end of turn.",'ability',2,'common',{text:"{1}: This creature gets +1/-1 until end of turn.",source:'Unfinity',sheet:33});
add('unf_33_2',"When this creature dies, you may put X +1/+1 counters on target creature, where X is this creature’s power.",'ability',3,'uncommon',{text:"When this creature dies, you may put X +1/+1 counters on target creature, where X is this creature’s power.",source:'Unfinity',sheet:33});
add('unf_34_1',"Whenever this creature attacks, create a Treasure token.",'ability',2,'common',{text:"Whenever this creature attacks, create a Treasure token.",source:'Unfinity',sheet:34});
add('unf_34_2',"{3}: Target creature gains flying until end of turn.",'ability',5,'mythic',{text:"{3}: Target creature gains flying until end of turn.",source:'Unfinity',sheet:34});
add('unf_39_1',"{T}: You gain 1 life.",'ability',2,'common',{text:"{T}: You gain 1 life.",source:'Unfinity',sheet:39});
add('unf_39_2',"Whenever this creature attacks, tap each creature an opponent controls with the same power and/or toughness as this creature.",'ability',4,'rare',{text:"Whenever this creature attacks, tap each creature an opponent controls with the same power and/or toughness as this creature.",source:'Unfinity',sheet:39});
add('unf_40_1',"Whenever this creature attacks, put a +1/+1 counter on it.",'ability',2,'common',{text:"Whenever this creature attacks, put a +1/+1 counter on it.",source:'Unfinity',sheet:40});
add('unf_40_2',"Metalcraft — This permanent has protection from noncreature permanents as long as you control three or more artifacts.",'ability',3,'uncommon',{text:"Metalcraft — This permanent has protection from noncreature permanents as long as you control three or more artifacts.",source:'Unfinity',sheet:40});
add('unf_41_1',"{5}: Creatures you control get +1/+1 until end of turn.",'ability',2,'common',{text:"{5}: Creatures you control get +1/+1 until end of turn.",source:'Unfinity',sheet:41});
add('unf_41_2',"Protection from creatures with two or more creature types",'ability',3,'uncommon',{text:"Protection from creatures with two or more creature types",source:'Unfinity',sheet:41});
add('unf_42_1',"Heroic — Whenever you cast a spell that targets this permanent, put two +1/+1 counters on it.",'ability',2,'common',{text:"Heroic — Whenever you cast a spell that targets this permanent, put two +1/+1 counters on it.",source:'Unfinity',sheet:42});
add('unf_42_2',"Protection from even mana values",'ability',3,'uncommon',{text:"Protection from even mana values",source:'Unfinity',sheet:42});
add('unf_43_1',"Hellbent — This creature gets +3/+3 as long as you have no cards in hand.",'ability',2,'common',{text:"Hellbent — This creature gets +3/+3 as long as you have no cards in hand.",source:'Unfinity',sheet:43});
add('unf_43_2',"{2}, Sacrifice a creature: It deals X damage divided as you choose among any number of target creatures, where X is its power.",'ability',4,'rare',{text:"{2}, Sacrifice a creature: It deals X damage divided as you choose among any number of target creatures, where X is its power.",source:'Unfinity',sheet:43});
add('unf_44_1',"{T}: Exile target card from a graveyard.",'ability',2,'common',{text:"{T}: Exile target card from a graveyard.",source:'Unfinity',sheet:44});
add('unf_44_2',"Threshold — As long as seven or more cards are in your graveyard, this creature gets +4/+0 and has trample.",'ability',3,'uncommon',{text:"Threshold — As long as seven or more cards are in your graveyard, this creature gets +4/+0 and has trample.",source:'Unfinity',sheet:44});

// Emplacements de référence restant à transcrire ; aucun coût ni texte inventé.
const unfinityPendingSheets=[16, 17, 18, 19, 21, 26, 27, 28, 35, 36, 37, 38, 45, 46, 47, 48];
const unfinityPending=unfinityPendingSheets.flatMap(sheet=>[1,2].map(slot=>({sheet,slot,status:"à vérifier"})));
[['p10','+1/+0',2,1,0],['p01','+0/+1',2,0,1],['p11','+1/+1',3,1,1],['p20','+2/+0',3,2,0],['p02','+0/+2',3,0,2],['p21','+2/+1',4,2,1],['p12','+1/+2',4,1,2],['p22','+2/+2',5,2,2]].forEach(([id,n,c,p,t])=>add(id,n,'stat',c,'common',{p,t}));
// Améliorations maison : rareté et coût sont deux paramètres distincts.
[['stat_u30','+3/+0',4,'uncommon',3,0],['stat_u03','+0/+3',4,'uncommon',0,3],['stat_u22','+2/+2 (efficace)',4,'uncommon',2,2],['stat_r31','+3/+1',4,'rare',3,1],['stat_r13','+1/+3',4,'rare',1,3],['stat_r33','+3/+3',5,'rare',3,3],['stat_r40','+4/+0',4,'rare',4,0],['stat_r04','+0/+4',4,'rare',0,4],['stat_m44','+4/+4',5,'mythic',4,4],['stat_m50','+5/+0',4,'mythic',5,0],['stat_m05','+0/+5',4,'mythic',0,5],['stat_m55','+5/+5',7,'mythic',5,5]].forEach(([id,n,c,r,p,t])=>add(id,n,'stat',c,r,{p,t}));
Object.entries(C).forEach(([code,n])=>add('mana'+code,'Mana '+n+' {'+code+'}','mana',1,'uncommon',{symbol:code,manaUnits:1}));
// Mana spéciaux : les symboles hybrides et phyrexians sont des variantes de coût maison.
add('manaC2','Mana générique {2}','mana',2,'uncommon',{symbol:'2',manaUnits:2});
add('manaSnow','Mana neigeux {S}','mana',2,'uncommon',{symbol:'S',manaUnits:1,note:'{S} est un coût neigeux ; exige du mana produit par une source neigeuse.'});
add('manaColorless','Mana incolore {C}','mana',2,'uncommon',{symbol:'C',manaUnits:1});
[['2/W','Blanc'],['2/U','Bleu'],['2/B','Noir'],['2/R','Rouge'],['2/G','Vert']].forEach(([symbol,label])=>add('hybridTwo'+symbol.replace('/',''),`Mana hybride générique ${label} {${symbol}}`,'mana',3,'rare',{symbol,manaUnits:2}));
[['C/W','Blanc'],['C/U','Bleu'],['C/B','Noir'],['C/R','Rouge'],['C/G','Vert']].forEach(([symbol,label])=>add('hybridColorless'+symbol.replace('/',''),`Mana hybride incolore ${label} {${symbol}}`,'mana',3,'rare',{symbol,manaUnits:1}));

[['W/U','Blanc / Bleu'],['U/B','Bleu / Noir'],['B/R','Noir / Rouge'],['R/G','Rouge / Vert'],['G/W','Vert / Blanc'],['W/B','Blanc / Noir'],['U/R','Bleu / Rouge'],['B/G','Noir / Vert'],['R/W','Rouge / Blanc'],['G/U','Vert / Bleu']].forEach(([symbol,label])=>add('hybrid'+symbol.replace('/',''),`Mana hybride ${label} {${symbol}}`,'mana',3,'rare',{symbol,manaUnits:1}));
Object.entries(C).forEach(([code,label])=>add('phyrex'+code,`Mana phyrexian ${label} {${code}/P}`,'mana',5,'mythic',{symbol:code+'/P',manaUnits:1}));
add('manaEnergy','Énergie {E} (ressource)','mana',5,'mythic',{symbol:'E',manaUnits:0,energy:true,note:'{E} est une ressource, pas du mana : débloque un marqueur d’énergie pour des capacités compatibles (règle maison).'});

const creatureTypes={common:['Brushwagg','Atog','Homarid','Kavu','Noggle','Sable','Monger','Flagbearer','Licid','Dauthi','Cephalid','Ouphe','Phelddagrif'],uncommon:['Clown','Shapeshifter','Plant','Insect','Snake','Bird','Cat','Frog','Rat','Minotaur','Horror'],rare:['Knight','Soldier','Warrior','Cleric','Rogue','Spirit','Zombie','Goblin','Merfolk','Elf'],mythic:['Dragon','Wizard','Vampire','Angel','Demon','Human','Sliver','Elemental','Artificer']};
Object.entries(creatureTypes).forEach(([rarity,names])=>names.forEach(n=>add('type'+n,n,'type',0,rarity,{type:n})));
['Brave','Dark','Mad','Lost','Eternal','Forgotten','Bloodthirsty','Crimson','Nameless','Worldbreaker','Godslayer','Unforgiven'].forEach((n,i)=>add('word'+n,n,'name',0,i<4?'common':i<7?'uncommon':'rare',{word:n}));
// Les noms sont exclusivement des MOTS, jamais des noms de cartes complets.
[['Scion','uncommon'],['Thinking','uncommon'],['Cap','common'],['Heir','uncommon'],['Blackblade','rare'],['Korlash','rare'],['Shadowborn','rare'],['Moonlit','uncommon'],['Whispering','uncommon'],['Arcane','uncommon'],['Voidborn','rare'],['Dread','uncommon'],['Stormbound','rare'],['Unseen','uncommon'],['Wandering','common'],['Radiant','uncommon'],['Ancient','rare'],['Sovereign','rare'],['Twilight','uncommon'],['Ember','common']].forEach(([n,r])=>add('wordExtra'+n,n,'name',0,r,{word:n}));
add('legendword','Créer un mot personnalisé','name',0,'legendary',{custom:true});
// CommanderPower V12 — capacités maison inspirées des cartes rares et mythiques.
// Rareté de booster indépendante des PP ; aucun tuteur non-terrain.
add("cp12_rare_01","Graveborn Pact","ability",5,"rare",{text:"Whenever another nontoken creature you control dies, create a 1/1 black Skeleton creature token.",source:"CommanderPower",requiresX:false});
add("cp12_rare_02","Conjurer\u2019s Reward","ability",5,"rare",{text:"Whenever you cast your second spell each turn, draw a card.",source:"CommanderPower",requiresX:false});
add("cp12_rare_03","March of Soldiers","ability",5,"rare",{text:"Whenever this creature attacks, create two 1/1 white Soldier creature tokens tapped and attacking.",source:"CommanderPower",requiresX:false});
add("cp12_rare_04","Treasure Hunter","ability",5,"rare",{text:"Whenever this creature deals combat damage to a player, create two tapped Treasure tokens.",source:"CommanderPower",requiresX:false});
add("cp12_rare_05","Wild Growth","ability",4,"rare",{text:"Landfall — Whenever a land enters the battlefield under your control, put a +1/+1 counter on this creature.",source:"CommanderPower",requiresX:false});
add("cp12_rare_06","Artifact Scholar","ability",5,"rare",{text:"Whenever you cast an artifact spell, scry 2, then you may draw a card. If you do, discard a card.",source:"CommanderPower",requiresX:false});
add("cp12_rare_07","Enchantment Guardian","ability",5,"rare",{text:"Whenever you cast an enchantment spell, create a 1/1 white Spirit creature token with flying.",source:"CommanderPower",requiresX:false});
add("cp12_rare_08","Graveyard Bargain","ability",5,"rare",{text:"At the beginning of your end step, you may pay 2 life. If you do, return target creature card with mana value 2 or less from your graveyard to your hand.",source:"CommanderPower",requiresX:false});
add("cp12_rare_09","Spellbreaker","ability",5,"rare",{text:"Whenever you cast an instant or sorcery spell, this creature deals 1 damage to each opponent.",source:"CommanderPower",requiresX:false});
add("cp12_rare_10","Royal Tax","ability",5,"rare",{text:"Whenever an opponent casts their second spell each turn, create a Treasure token.",source:"CommanderPower",requiresX:false});
add("cp12_rare_11","Combat Historian","ability",5,"rare",{text:"Whenever this creature attacks, draw a card, then discard a card. If you discarded a creature card, put a +1/+1 counter on this creature.",source:"CommanderPower",requiresX:false});
add("cp12_rare_12","Spirit Harvest","ability",5,"rare",{text:"Whenever one or more creature tokens you control deal combat damage to a player, draw a card. This ability triggers only once each turn.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_01","Annihilator 2","ability",7,"mythic",{text:"Annihilator 2",source:"CommanderPower",requiresX:false});
add("cp12_mythic_02","Cascade","ability",7,"mythic",{text:"Cascade",source:"CommanderPower",requiresX:false});
add("cp12_mythic_03","Myriad","ability",6,"mythic",{text:"Myriad",source:"CommanderPower",requiresX:false});
add("cp12_mythic_04","Toxic 3","ability",5,"mythic",{text:"Toxic 3",source:"CommanderPower",requiresX:false});
add("cp12_mythic_05","Ward {3}","ability",4,"mythic",{text:"Ward {3}",source:"CommanderPower",requiresX:false});
add("cp12_mythic_06","Eminence of the Host","ability",9,"mythic",{text:"As long as this creature is in the command zone or on the battlefield, creature spells you cast cost {1} less to cast.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_07","Double Cascade","ability",9,"mythic",{text:"When you cast this spell, cascade, cascade.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_08","Token Doubling","ability",8,"mythic",{text:"If one or more tokens would be created under your control, twice that many of those tokens are created instead.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_09","Graveyard Assault","ability",8,"mythic",{text:"Whenever this creature attacks, return target creature card from your graveyard to the battlefield tapped and attacking. Exile it at end of combat.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_10","First Spell Echo","ability",7,"mythic",{text:"Whenever you cast your first instant or sorcery spell each turn, copy that spell. You may choose new targets for the copy.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_11","Relentless Assault","ability",9,"mythic",{text:"Whenever this creature attacks for the first time each turn, untap all creatures you control. After this phase, there is an additional combat phase.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_12","Mana Reflection","ability",9,"mythic",{text:"If you tap a permanent for mana, it produces twice as much of that mana instead.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_13","Overwhelming Stampede","ability",7,"mythic",{text:"Whenever this creature attacks, other creatures you control get +X/+X and gain trample until end of turn, where X is this creature’s power.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_14","Graveyard Sovereign","ability",8,"mythic",{text:"At the beginning of your end step, return target creature card with mana value 3 or less from your graveyard to the battlefield tapped.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_15","Treasury of Dragons","ability",8,"mythic",{text:"Whenever this creature deals combat damage to a player, create that many Treasure tokens.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_16","Arcane Storm","ability",8,"mythic",{text:"Whenever you cast your second instant or sorcery spell each turn, copy it twice. You may choose new targets for the copies.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_17","Living Army","ability",8,"mythic",{text:"At the beginning of combat on your turn, create two 2/2 white Knight creature tokens with vigilance.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_18","Blood Tribute","ability",7,"mythic",{text:"Whenever another creature you control dies, each opponent loses 1 life and you gain 1 life.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_19","Ancient Knowledge","ability",8,"mythic",{text:"Whenever this creature deals combat damage to a player, draw two cards.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_20","Unending Growth","ability",7,"mythic",{text:"At the beginning of your end step, double the number of +1/+1 counters on this creature.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_21","Eldrazi Hunger","ability",8,"mythic",{text:"Whenever this creature attacks, defending player sacrifices a nonland permanent.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_22","Elemental Rebirth","ability",7,"mythic",{text:"Whenever you cast your first creature spell each turn, create a token that’s a copy of that creature, except it’s a 1/1 Elemental in addition to its other types.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_23","Vampiric Dominion","ability",8,"mythic",{text:"Whenever this creature attacks, each opponent loses 2 life and you gain life equal to the life lost this way.",source:"CommanderPower",requiresX:false});
add("cp12_mythic_24","Chronicle of Victory","ability",8,"mythic",{text:"At the beginning of your end step, if you attacked with three or more creatures this turn, take an extra turn after this one. This ability triggers only once each game.",source:"CommanderPower",requiresX:false});
// Catalogue : une seule entrée par effet identique, même si plusieurs feuilles Unfinity le répètent.
// Les anciennes références restent migrables grâce aux alias d'identifiants.
const abilityAliases={};
function abilityKey(r){return (r.text||r.name).toLowerCase().replace(/[\u2018\u2019]/g,"'").replace(/\s+/g,' ').replace(/[.,;]+$/,'').trim()}
const seenAbilityEffects=new Map();
for(let i=0;i<rewards.length;){const r=rewards[i];if(r.kind!=='ability'){i++;continue}const key=abilityKey(r);const previous=seenAbilityEffects.get(key);if(!previous){seenAbilityEffects.set(key,r);i++;continue}
 // Préférer l'entrée Unfinity lorsqu'elle a un coût officiel, sinon conserver l'original.
 const keep=r.source==='Unfinity'&&previous.source!=='Unfinity'?r:previous;
 const discard=keep===r?previous:r;
 abilityAliases[discard.id]=keep.id;
 if(keep===r){const oldIndex=rewards.indexOf(previous);rewards.splice(oldIndex,1);if(oldIndex<i)i--;seenAbilityEffects.set(key,r)}else{rewards.splice(i,1);continue}i++;
}
// Ajustements des raretés selon l'utilité réelle en Commander multijoueur.
// Ces changements concernent la rareté des boosters, jamais le coût officiel Unfinity.
for(const r of rewards){if(r.kind!=='ability')continue;const t=(r.text||r.name).toLowerCase();
 if(/\{t\}|\btap target\b|\btap this\b/.test(t)&&r.rarity==='mythic')r.rarity='rare';
 if(/\bdefender\b/.test(t))r.rarity='common';
 if(/^trample$|^haste$|^first strike$|^reach$/.test(t))r.rarity='uncommon';
 if(/\b(indestructible|hexproof|double strike|infect)\b/.test(t)&&t.length<80)r.rarity='rare';
 if(/\bsearch your library\b/.test(t)&&!/\bland card\b/.test(t))r.excludeFromBoosters=true;
 // Les effets puissants mais conditionnels ne sont pas automatiquement mythiques.
 if(r.rarity==='mythic'&&(/your first (instant|noncreature|spell)|you gain [123] life|scry [12]|draw a card, then discard/.test(t)))r.rarity='rare';
}
const base={owned:{The:1,Prismatic:1,Piper:1},words:['The','Prismatic','Piper'],baseColor:'W',mode:'none',delta:0,hasX:false,equipped:[],artId:'',usedCodes:[],customWord:'',image:'',bonus:0};
function load(){try{let v=JSON.parse(localStorage.getItem(KEY));return v&&typeof v==='object'?{...structuredClone(base),...v}:structuredClone(base)}catch{return structuredClone(base)}}let s=load();
// Conversion des anciennes sauvegardes vers les identifiants dédoublonnés.
for(const [oldId,newId] of Object.entries(abilityAliases)){if(s.owned[oldId]){s.owned[newId]=(s.owned[newId]||0)+s.owned[oldId];delete s.owned[oldId]}s.equipped=s.equipped.map(id=>id===oldId?newId:id)}
s.equipped=[...new Set(s.equipped.filter(id=>{const r=rewards.find(x=>x.id===id);return r?.kind==='ability'})) ,...s.equipped.filter(id=>{const r=rewards.find(x=>x.id===id);return r?.kind!=='ability'})];
let tab='abilities',filter='all',stream=null,scanTimer=null;
const $=id=>document.getElementById(id),html=(v)=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const own=id=>Number(s.owned[id]||0), eq=id=>s.equipped.filter(x=>x===id).length, get=id=>rewards.find(r=>r.id===id);
const equipped=()=>s.equipped.map(get).filter(Boolean);
const points=()=>equipped().reduce((a,r)=>a+(r.kind==='type'?0:r.cost),0)+(s.mode==='reduce'?s.delta*3:0);
const budget=()=>10+(s.mode==='increase'?s.delta*2:0);
const generic=()=>Math.max(0,5+(s.mode==='increase'?s.delta:0)-(s.mode==='reduce'?s.delta:0)-equipped().filter(r=>r.kind==='mana').reduce((sum,r)=>sum+(r.manaUnits??1),0));
const mana=()=>`${s.hasX?'{X}':''}{${generic()}}`+equipped().filter(r=>r.kind==='mana'&&!r.energy).map(r=>'{'+r.symbol+'}').join('');
const name=()=>s.words.filter(Boolean).map(w=>get(w)?.word||w).join(' ')||'The Prismatic Piper';
const power=()=>{let p=3,t=3;equipped().forEach(r=>{p+=r.p||0;t+=r.t||0});return `${p}/${t}`};
const colors=()=>{let arr=[s.baseColor,...equipped().filter(r=>r.kind==='mana').flatMap(r=>r.symbol.match(/[WUBRG]/g)||[])];return [...new Set(arr)]};
function save(){try{localStorage.setItem(KEY,JSON.stringify(s))}catch(e){toast('Stockage saturé : exportez votre sauvegarde ou choisissez une image plus petite.')}}
function toast(t){$('toast').textContent=t;$('toast').style.display='block';clearTimeout(window.toastTimeout);window.toastTimeout=setTimeout(()=>$('toast').style.display='none',3200)}
// Symboles de mana en SVG intégrés, sans images externes.
const manaColors={W:'#f3e6b8',U:'#a8d7f0',B:'#b1a7a9',R:'#f3a17b',G:'#9ccdb0',C:'#c9c9c9',S:'#e7edf7',E:'#f4e0a0'};
function manaIcon(letter){
 const common='fill="currentColor" stroke="none"';
 const paths={
  W:`<circle cx="12" cy="12" r="4" ${common}/>${Array.from({length:8},(_,i)=>`<path d="M12 1.8v4.1" stroke="currentColor" stroke-width="2.5" transform="rotate(${i*45} 12 12)"/>`).join('')}`,
  U:`<path d="M12 2C10 6 5 11 5 15a7 7 0 0 0 14 0C19 11 14 6 12 2Z" ${common}/><path d="M9 17q3 3 6-1" stroke="#ffffff99" stroke-width="1.6" fill="none"/>`,
  B:`<path d="M7 18v-4a7 7 0 1 1 10 0v4H7Zm-1 1h12v3H6z" ${common}/><circle cx="9" cy="12" r="1.6" fill="#ddd"/><circle cx="15" cy="12" r="1.6" fill="#ddd"/>`,
  R:`<path d="M12 2c2 5-1 6 2 9 2-1 3-4 3-5 6 8 3 16-5 16S3 16 6 11c1 3 3 3 3 3-2-5 1-8 3-12Z" ${common}/>`,
  G:`<path d="M12 2C3 6 2 12 5 17c3 5 11 6 14-1 2-5-1-11-7-14Z" ${common}/><path d="M12 22V9m0 6-5-3m5 0 5-4" stroke="#d7f0d5" stroke-width="1.6" fill="none"/>`,
  C:`<path d="M12 2 22 12 12 22 2 12Z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M12 7 17 12 12 17 7 12Z" ${common}/>`,
  S:`<path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" stroke="currentColor" stroke-width="2.3"/><path d="m12 2-2 3m2-3 2 3m8 7-3-2m3 2-3 2" stroke="currentColor" stroke-width="1.3" fill="none"/>`,
  P:`<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 3v18M12 5c10 0 10 11 0 11" fill="none" stroke="currentColor" stroke-width="3"/>`,
  E:`<path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z" ${common}/>`
 };
 return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[letter]||''}</svg>`;
}
// Illustrations officielles servies par Scryfall (Magic: The Gathering).
// Si elles sont inaccessibles, le dessin SVG local reste disponible.
function manaBadge(token){
 const raw=String(token).replace(/[{}]/g,'');
 const halves=raw.split('/');
 const isNumber=/^\d+$/.test(raw);
 const isVariable=['X','Y','Z'].includes(raw);
 const background=halves.length===2
  ?`linear-gradient(130deg,${manaColors[halves[0]]||'#e5e0d6'} 49%,${manaColors[halves[1]]||'#e5e0d6'} 51%)`
  :(manaColors[raw]||'#c8c5c2');
 let fallback;
 if(halves.length===2){
  const glyph=v=>/^\d+$/.test(v)?`<b>${v}</b>`:manaIcon(v);
  fallback=`<span class="mana-half">${glyph(halves[0])}</span><span class="mana-half">${glyph(halves[1])}</span>`;
 }else fallback=(isNumber||isVariable)?`<b>${html(raw)}</b>`:manaIcon(raw);
 // Le nom des fichiers Scryfall utilise la forme 2W, WP, WU, CW, etc.
 const officialName=raw.replace(/\//g,'');
 const valid=/^(?:[WUBRGCSEXYZ]|\d{1,3}|[WUBRGC]{2}|2[WUBRG]|[WUBRG]P)$/.test(officialName);
 const uri=valid?`https://svgs.scryfall.io/card-symbols/${officialName}.svg`:'';
 return `<span class="mana-badge official-mana" role="img" aria-label="Mana ${html(raw)}"><span class="mana-fallback" style="background:${background}">${fallback}</span>${uri?`<img class="mana-official-img" src="${uri}" alt="" loading="eager" decoding="async" onload="this.parentElement.classList.add('official-loaded')" onerror="this.remove()">`:''}</span>`;
}

function manaCostVisual(){
 const tokens=[];
 if(s.hasX)tokens.push('X');
 const base=generic();
 if(base>0)tokens.push(String(base));
 for(const r of equipped().filter(r=>r.kind==='mana'&&!r.energy))tokens.push(r.symbol);
 return tokens.map(manaBadge).join('');
}
function card(){
 let card=$('card');card.dataset.color=colors().length===1?colors()[0]:'M';
 $('cardName').textContent=name();$('mana').innerHTML=manaCostVisual();
 $('types').textContent='Legendary Creature — Shapeshifter'+equipped().filter(r=>r.kind==='type').map(r=>' '+r.type).join('');
 const abilities=equipped().filter(r=>r.kind==='ability'&&(!r.requiresX||s.hasX)).map(r=>r.text);
 $('rules').textContent=abilities.length?abilities.join('\n'):'As The Prismatic Piper enters, choose a color.';
 $('power').textContent=power();
 let art=equipped().find(r=>r.kind==='art');
 $('art').style.backgroundImage=s.image?`url("${s.image.replace(/["\\]/g,'')}")`:(art?art.gradient:'radial-gradient(circle at 50% 35%,#f3c178 0%,#aa4b5e 28%,#392b65 60%,#0d1931 100%)');
 $('art').querySelector('small').textContent=name().toUpperCase();
 $('homePP').textContent=`${points()} / ${budget()} PP • ${equipped().filter(r=>r.kind==='ability').length}/3 capacités`;
}

function render(){card();$('budget').textContent=`${points()} / ${budget()} PP • ${equipped().filter(r=>r.kind==='ability').length}/3 capacités`;editor();collection();save()}
function canEquip(r){if(eq(r.id)>=own(r.id))return 'Aucun exemplaire disponible';if(r.kind==='ability'&&equipped().filter(x=>x.kind==='ability').length>=3)return 'Maximum de 3 capacités';if(r.kind==='ability'&&r.requiresX&&!s.hasX)return 'Nécessite {X}';if(r.kind==='mana'&&generic()<(r.manaUnits??1))return 'Pas assez de mana générique à remplacer';if(r.kind==='type'&&eq(r.id))return 'Type déjà équipé';if(r.kind==='art'&&equipped().some(x=>x.kind==='art'))return 'Une seule image à la fois';if(r.kind==='ability'&&eq(r.id))return 'Capacité déjà équipée';if(points()+(r.kind==='type'?0:r.cost)>budget())return 'Budget PP insuffisant';return ''}
function toggle(id){let r=get(id);if(!r)return;let why=canEquip(r);if(why){toast(why);return}s.equipped.push(id);render()}
function remove(id){let i=s.equipped.lastIndexOf(id);if(i>=0)s.equipped.splice(i,1);render()}
const filters={edit:{ownership:'all',rarity:'all',query:''},collection:{ownership:'owned',rarity:'all',query:''}};
const kindNames={ability:'Capacité',stat:'Statistiques',mana:'Mana',name:'Nom',type:'Type',art:'Image'};
function filterControls(prefix){let v=filters[prefix];return `<div class="filter-grid"><label>Disponibilité<select data-filter-field="ownership" data-scope="${prefix}"><option value="all" ${v.ownership==='all'?'selected':''}>Toutes</option><option value="owned" ${v.ownership==='owned'?'selected':''}>Possédées</option><option value="unowned" ${v.ownership==='unowned'?'selected':''}>À débloquer</option><option value="equipped" ${v.ownership==='equipped'?'selected':''}>Équipées</option></select></label><label>Rareté<select data-filter-field="rarity" data-scope="${prefix}"><option value="all">Toutes</option>${Object.entries(rarityNames).map(([k,n])=>`<option value="${k}" ${v.rarity===k?'selected':''}>${n}</option>`).join('')}</select></label></div><label class="search-label">Rechercher<input data-filter-field="query" data-scope="${prefix}" value="${html(v.query)}" placeholder="Nom, capacité, texte..."></label>`}
function matchesFilters(r,prefix){let v=filters[prefix];return (v.rarity==='all'||r.rarity===v.rarity)&&(v.ownership==='all'||v.ownership==='owned'&&own(r.id)>0||v.ownership==='unowned'&&own(r.id)===0||v.ownership==='equipped'&&eq(r.id)>0)&&(!v.query||(r.name+' '+(r.text||'')+' '+(r.source||'')+' '+(r.sheet||'')).toLowerCase().includes(v.query.toLowerCase()))}
function item(r,editable=false){let count=own(r.id),used=eq(r.id),locked=!count,why=canEquip(r),status=locked?'🔒 À débloquer':used?'✓ Équipée':'✓ Possédée';let buttons=editable&&!locked?`<div class="item-actions"><button data-add="${html(r.id)}" ${why?'disabled':''} aria-label="Équiper ${html(r.name)}">＋ Équiper</button>${used?`<button data-remove="${html(r.id)}" aria-label="Retirer ${html(r.name)}">− Retirer</button>`:''}</div>`:'';return `<article class="item ${locked?'locked':'unlocked'} ${used?'is-equipped':''} rarity-border-${r.rarity}"><div class="item-head"><span class="status ${locked?'status-locked':used?'status-equipped':'status-owned'}">${status}</span>${rarityBadge(r)}</div><div class="item-title">${html(r.name)}</div>${r.text&&r.text!==r.name?`<p class="item-description">${html(r.text)}</p>`:''}<div class="item-foot"><span>${r.cost} PP</span>${r.source?`<span>Sticker Unfinity · feuille ${r.sheet}</span>`:''}<span>${count} possédé${count>1?'s':''}${used?' · '+used+' équipé'+(used>1?'s':''):''}</span></div>${buttons}</article>`}
function sortRewards(list){const rank={common:0,uncommon:1,rare:2,mythic:3,legendary:4};return list.sort((a,b)=>(rank[a.rarity]??9)-(rank[b.rarity]??9)||a.cost-b.cost||a.name.localeCompare(b.name,'fr'))}
function listEditor(kind){let list=sortRewards(rewards.filter(r=>r.kind===kind&&matchesFilters(r,'edit')));return `<p class="result-count">${list.length} résultat(s)</p>`+(list.map(r=>item(r,true)).join('')||'<p class="empty-state">Aucune récompense ne correspond à ces filtres.</p>')}
function editor(){let e=$('editor');let explanations={abilities:'Maximum 3 capacités équipées. Les coûts des stickers Unfinity correspondent à leurs tickets ; les autres coûts sont des propositions.',stats:'Bonus cumulables. Chaque exemplaire équipé ajoute ses statistiques.',types:'Ajoute des types de créatures à Shapeshifter.',mana:'Les symboles colorés, hybrides, neigeux et phyrexians modifient le coût. L’énergie est une ressource distincte (règle maison). Réduction et augmentation sont exclusives ; X reste indépendant.',name:'3 mots maximum. Chaque occurrence utilise un exemplaire de ta collection.',art:'Image personnelle uniquement : choisis une image de ton téléphone ou une URL HTTPS. Aucune image dans les boosters.'};let kind={abilities:'ability',stats:'stat',types:'type',mana:'mana',name:'name',art:'art'}[tab];let controls=`<p class="sectionhelp">${explanations[tab]}</p>${filterControls('edit')}`;
if(tab==='abilities'||tab==='stats'||tab==='types')e.innerHTML=controls+'<div id="editResults">'+listEditor(kind)+'</div>';
if(tab==='name'){let options=(i)=>'<option value="">— Vide —</option>'+Object.keys(s.owned).filter(w=>!get(w)||get(w)?.kind==='name').filter(w=>own(w)>0).map(w=>`<option value="${html(w)}" ${s.words[i]===w?'selected':''}>${html(get(w)?.word||w.replace(/^wordExtra/,''))} (${own(w)})</option>`).join('');e.innerHTML=`<p class="sectionhelp">${explanations.name}</p><div class="wordslots">${[0,1,2].map(i=>`<select data-word="${i}">${options(i)}</select>`).join('')}</div><p class="pill">${html(name())}</p>${own('legendword')?`<label>Mot légendaire personnalisé<input id="customWord" maxlength="24" value="${html(s.customWord)}" placeholder="Un seul mot"></label><button class="primary" id="customSave">Créer mon mot</button>`:''}${filterControls('edit')}<div id="editResults">${listEditor('name')}</div>`}
if(tab==='mana')e.innerHTML=`<p class="sectionhelp">${explanations.mana}</p><label>Couleur de départ<select id="baseColor">${Object.entries(C).map(([k,v])=>`<option value="${k}" ${s.baseColor===k?'selected':''}>${v}</option>`).join('')}</select></label><label>Modification du mana<select id="manaMode"><option value="none" ${s.mode==='none'?'selected':''}>Aucune</option><option value="reduce" ${s.mode==='reduce'?'selected':''}>Réduction (3 PP par mana)</option><option value="increase" ${s.mode==='increase'?'selected':''}>Augmentation (+2 PP par mana)</option></select></label><label>Quantité (0 à 3)<input id="manaDelta" type="number" min="0" max="3" value="${s.delta}"></label><label class="row"><input id="hasX" type="checkbox" style="width:auto" ${s.hasX?'checked':''}> Activer {X}</label><p class="pill">Coût actuel : ${html(mana())}</p>${filterControls('edit')}<div id="editResults">${listEditor('mana')}</div>`;
if(tab==='art')e.innerHTML=`<p class="sectionhelp">${explanations.art}</p><label>📷 Choisir une image sur mon téléphone<input id="imageFile" type="file" accept="image/*"></label><button id="removeImage" type="button">Retirer mon image</button><label>Image en ligne (HTTPS)<input id="imageURL" type="url" value="${html(s.image.startsWith('https://')?s.image:'')}" placeholder="https://..."></label><button id="setImage" class="primary">Appliquer</button>`;
}
const rarityNames={common:'Commune',uncommon:'Peu commune',rare:'Rare',mythic:'Mythique',legendary:'Légendaire'};
function rarityBadge(r){return `<span class="rarity-badge rarity-${r.rarity}">${rarityNames[r.rarity]||r.rarity}</span>`}
function collection(){if($('collectionFilters')&&!$('collectionFilters').children.length)$('collectionFilters').innerHTML=filterControls('collection');let list=sortRewards(rewards.filter(r=>r.kind!=='art'&&(filter==='all'||r.kind===filter)&&matchesFilters(r,'collection')));$('collectionList').innerHTML=`<p class="result-count">${list.length} résultat(s)</p>`+(list.map(r=>item(r,false)).join('')||'<p class="empty-state">Aucune récompense ne correspond à ces filtres.</p>');let total=Object.values(s.owned).reduce((a,b)=>a+b,0);$('collectionSummary').textContent=`${total} récompenses et mots possédés • ${s.usedCodes.length} booster(s) ouverts`}
function changeWord(i,v){let proposed=[...s.words];proposed[i]=v;let used=proposed.filter(w=>w===v).length;if(v&&used>own(v)){toast('Tu ne possèdes pas assez de ce mot');editor();return}s.words=proposed;render()}
function updateMana(){let mode=$('manaMode').value,delta=Math.max(0,Math.min(3,Number($('manaDelta').value)||0)),x=$('hasX').checked,col=$('baseColor').value;let prev={mode:s.mode,delta:s.delta,hasX:s.hasX,baseColor:s.baseColor};Object.assign(s,{mode,delta,hasX:x,baseColor:col});if(points()>budget()||generic()<0){Object.assign(s,prev);toast('Configuration invalide : budget ou coût de mana');editor();return}render()}
// Codes de test: CPB-S-..., CPB-P-..., CPB-L-... (identifiant unique local).
// Les codes libres historiques continuent à fonctionner comme boosters Standard.
const boosterOdds={
 standard:[['common',55],['uncommon',28],['rare',12],['mythic',4],['legendary',1]],
 premium:[['common',25],['uncommon',40],['rare',25],['mythic',9],['legendary',1]],
 legendary:[['common',10],['uncommon',30],['rare',35],['mythic',20],['legendary',5]]
};
function boosterType(code){const match=/^CPB-([SPL])-[A-Z0-9_-]{6,}$/i.exec(code);return match?({S:'standard',P:'premium',L:'legendary'}[match[1].toUpperCase()]):'standard'}
// Quatre emplacements : nom, type/stat, récompense variée limitée par rareté, puis surprise libre.
const boosterSlots={
 standard:[
  {kinds:['name'],rarities:['common','uncommon']},
  {kinds:['type','stat'],rarities:['common','uncommon']},
  {kinds:null,rarities:['common','uncommon']},
  {kinds:null,rarities:null}
 ],
 premium:[
  {kinds:['name'],rarities:['common','uncommon','rare']},
  {kinds:['type','stat'],rarities:['common','uncommon','rare']},
  {kinds:null,rarities:['uncommon','rare']},
  {kinds:null,rarities:null}
 ],
 legendary:[
  {kinds:['name'],rarities:['uncommon','rare','mythic','legendary']},
  {kinds:['type','stat'],rarities:['uncommon','rare','mythic']},
  {kinds:null,rarities:['rare','mythic']},
  {kinds:null,rarities:null}
 ]
};
function weightedReward(pool,probs){
 if(!pool.length)return null;
 const available=probs.filter(([rarity])=>pool.some(r=>r.rarity===rarity));
 const sum=available.reduce((n,[,weight])=>n+weight,0);
 let roll=Math.random()*sum,chosen=available[available.length-1][0];
 for(const [rarity,weight] of available){roll-=weight;if(roll<0){chosen=rarity;break}}
 const options=pool.filter(r=>r.rarity===chosen);
 return options[Math.floor(Math.random()*options.length)];
}
let revealTimers=[];
function closeBoosterReveal(){
 revealTimers.forEach(clearTimeout);revealTimers=[];
 const overlay=$('boosterReveal');
 if(overlay){overlay.classList.remove('open');overlay.setAttribute('aria-hidden','true');overlay.innerHTML='';}
 document.body.classList.remove('reveal-open');
}
// V19 : effets sonores synthétisés hors ligne, déclenchés par une action du joueur.
let boosterAudio=null, boosterNoise=null;
function audioEngine(){
 try{
  const Ctx=window.AudioContext||window.webkitAudioContext;
  if(!Ctx)return null;
  boosterAudio=boosterAudio||new Ctx();
  if(boosterAudio.state==='suspended')boosterAudio.resume().catch(()=>{});
  if(!boosterNoise){
   const length=Math.round(boosterAudio.sampleRate*1.5);
   boosterNoise=boosterAudio.createBuffer(1,length,boosterAudio.sampleRate);
   const samples=boosterNoise.getChannelData(0);
   for(let i=0;i<length;i++)samples[i]=Math.random()*2-1;
  }
  return boosterAudio;
 }catch(e){return null}
}
function soundTone(ctx,freq,start,duration,volume=.06,wave='sine',endFreq=null){
 const osc=ctx.createOscillator(),gain=ctx.createGain();
 osc.type=wave;osc.frequency.setValueAtTime(freq,start);
 if(endFreq)osc.frequency.exponentialRampToValueAtTime(endFreq,start+duration);
 gain.gain.setValueAtTime(.0001,start);
 gain.gain.exponentialRampToValueAtTime(Math.max(.0002,volume),start+.014);
 gain.gain.exponentialRampToValueAtTime(.0001,start+duration);
 osc.connect(gain).connect(ctx.destination);osc.start(start);osc.stop(start+duration+.01);
}
function soundNoise(ctx,start,duration,volume=.08,filterFreq=1300,endFreq=250){
 const src=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),gain=ctx.createGain();
 src.buffer=boosterNoise;filter.type='bandpass';filter.Q.value=.7;
 filter.frequency.setValueAtTime(filterFreq,start);
 filter.frequency.exponentialRampToValueAtTime(endFreq,start+duration);
 gain.gain.setValueAtTime(.0001,start);
 gain.gain.exponentialRampToValueAtTime(volume,start+.025);
 gain.gain.exponentialRampToValueAtTime(.0001,start+duration);
 src.connect(filter).connect(gain).connect(ctx.destination);
 src.start(start);src.stop(start+duration+.01);
}
function boosterOpenSound(){
 const ctx=audioEngine();if(!ctx)return;
 const t=ctx.currentTime+.02;
 // Froissement puis déchirure du sachet.
 soundNoise(ctx,t,.26,.075,750,2400);
 soundNoise(ctx,t+.15,.35,.095,3500,850);
 soundTone(ctx,660,t+.34,.22,.045,'triangle',990);
}
function revealSound(rarity){
 const ctx=audioEngine();if(!ctx)return;
 const t=ctx.currentTime+.015;
 // Glissement de la carte, suivi d'une signature musicale selon sa rareté.
 soundNoise(ctx,t,.14,.045,2300,470);
 const patterns={
  common:[523,659],
  uncommon:[523,659,784],
  rare:[587,784,1175,1568],
  mythic:[440,659,880,1318,1760],
  legendary:[523,784,1047,1568,2093,2637]
 };
 const notes=patterns[rarity]||patterns.common;
 const delay=rarity==='legendary'?.115:.09;
 notes.forEach((f,i)=>{
  soundTone(ctx,f,t+.13+i*delay,rarity==='legendary'?.52:.31,
    rarity==='legendary'?.042:.052,
    ['mythic','legendary'].includes(rarity)?'triangle':'sine');
 });
 if(['rare','mythic','legendary'].includes(rarity)){
  // Impact profond + scintillement cristallin.
  soundTone(ctx,160,t+.14,.29,.085,'triangle',65);
  soundNoise(ctx,t+.18,.24,.034,4200,1300);
 }
 if(['mythic','legendary'].includes(rarity)){
  // Montée magique, plus longue pour les légendaires.
  const length=rarity==='legendary'?.95:.64;
  soundTone(ctx,210,t+.13,length,.045,'sawtooth',rarity==='legendary'?840:620);
  soundTone(ctx,1047,t+.38,.55,.028,'sine');
 }
 if(rarity==='legendary'){
  // Final de fanfare en accord, sans fichier MP3.
  [523,659,784,1047].forEach(f=>soundTone(ctx,f,t+.78,.72,.035,'triangle'));
 }
}
function animateBooster(type,drops){
 closeBoosterReveal();
 const overlay=$('boosterReveal'),titles={standard:'Standard',premium:'Premium',legendary:'Légendaire'};
 overlay.className='booster-reveal open tier-'+type;overlay.setAttribute('aria-hidden','false');
 document.body.classList.add('reveal-open');
 overlay.innerHTML=`<div class="reveal-content" role="dialog" aria-modal="true" aria-label="Ouverture du booster ${titles[type]}"><div class="reveal-heading">COMMANDERPOWER <span>· ${titles[type]}</span></div><div class="pack-stage"><div class="pack-glow"></div><div class="booster-pack"><span class="pack-symbol">✦</span><strong>COMMANDER<br>POWER</strong><small>${titles[type].toUpperCase()}</small></div></div><p class="reveal-prompt" aria-live="polite">Touche la première carte pour la révéler !</p><div class="reveal-cards">${drops.map((r,i)=>`<button type="button" class="reveal-card rarity-border-${r.rarity}" data-reveal="${i}" aria-label="Révéler la carte ${i+1}"><span class="reveal-back">✦<small>CARTE ${i+1} · TOUCHER</small></span><span class="reveal-front"><span class="reveal-index">${i+1} / 4</span><span class="rarity-badge rarity-${r.rarity}">${rarityNames[r.rarity]||r.rarity}</span><strong>${html(r.name)}</strong><small>${kindNames[r.kind]||r.kind} · ${r.cost} PP</small></span><span class="rarity-sparkles" aria-hidden="true">✦ ✧ ✦</span></button>`).join('')}</div><button type="button" class="primary reveal-finish" id="finishReveal" hidden>Voir ma collection</button><button type="button" class="reveal-skip" id="skipReveal">Tout révéler »</button></div>`;
 const cards=[...overlay.querySelectorAll('.reveal-card')],pack=overlay.querySelector('.booster-pack');
 const prompt=overlay.querySelector('.reveal-prompt'),finish=$('finishReveal'),skip=$('skipReveal');
 let index=0;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 function reveal(i,silent=false){
  if(i!==index)return;
  const card=cards[i];
  card.classList.remove('next');card.classList.add('revealed');card.disabled=true;
  if(!reduced&&['rare','mythic','legendary'].includes(drops[i].rarity))card.classList.add('special-reveal');
  if(!silent)revealSound(drops[i].rarity);
  index++;
  if(index===cards.length){
   prompt.textContent='Tes 4 récompenses sont dans ta collection !';
   finish.hidden=false;skip.hidden=true;finish.focus();
  }else{
   prompt.textContent=`Carte ${index} révélée. Touche la suivante !`;
   cards[index].classList.add('next');
  }
 }
 cards.forEach((card,i)=>card.onclick=()=>reveal(i));
 skip.onclick=()=>{while(index<cards.length)reveal(index,true)};
 finish.onclick=()=>{closeBoosterReveal();go('collection')};
 pack.classList.add('burst');overlay.classList.add('show-cards');
 boosterOpenSound();
 cards[0].classList.add('next');
}

function openBooster(code){
 code=code.trim().replace(/^CEBOOST:/i,'').toUpperCase();
 if(!/^[A-Z0-9][A-Z0-9_-]{5,79}$/.test(code)){toast('Code invalide : 6 à 80 caractères (A-Z, 0-9, _ ou -)');return}
 if(s.usedCodes.includes(code)){toast('Ce booster a déjà été ouvert sur cet appareil');return}
 const type=boosterType(code),probs=boosterOdds[type],slots=boosterSlots[type];
 const pool=rewards.filter(r=>!r.excludeFromBoosters&&r.kind!=='art'&&(r.id!=='legendword'||own('legendword')===0));
 const drops=[];
 for(const slot of slots){
  const options=pool.filter(r=>(!slot.kinds||slot.kinds.includes(r.kind))&&(!slot.rarities||slot.rarities.includes(r.rarity))&&!(r.id==='legendword'&&drops.some(d=>d.id==='legendword')));
  const reward=weightedReward(options,probs);
  if(!reward){toast('Catalogue incomplet pour ce booster : aucune récompense pour un emplacement');return}
  drops.push(reward);
 }
 for(const r of drops)s.owned[r.id]=own(r.id)+1;
 s.usedCodes.push(code);
 const titles={standard:'Standard',premium:'Premium',legendary:'Légendaire'};
 $('boosterResults').innerHTML=`<h2>🎉 Booster ${titles[type]} ouvert !</h2>${drops.map((r,i)=>`<div class="reward"><span class="rarity-${r.rarity}">${rarityNames[r.rarity]||r.rarity}</span><strong>${html(r.name)}</strong><small>Récompense ${i+1}/4 · ${r.cost} PP · ${html(r.kind)}</small></div>`).join('')}`;
 $('codeInput').value='';
 $('scanStatus').textContent='4 récompenses ajoutées à ta collection.';
 render(); // Sauvegarde avant l'animation : fermer l'écran ne perd rien.
 animateBooster(type,drops);
}

function go(page){document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id===page));$('drawer').classList.remove('open');$('shade').classList.remove('open');if(page!=='scan')stopCamera();render();window.scrollTo(0,0)}
$('menuBtn').onclick=()=>{$('drawer').classList.add('open');$('shade').classList.add('open')};$('closeBtn').onclick=$('shade').onclick=()=>{$('drawer').classList.remove('open');$('shade').classList.remove('open')};document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>go(b.dataset.page));$('editTabs').onclick=e=>{let b=e.target.closest('[data-tab]');if(!b)return;tab=b.dataset.tab;document.querySelectorAll('[data-tab]').forEach(x=>x.classList.toggle('selected',x===b));editor()};$('collectionTabs').onclick=e=>{let b=e.target.closest('[data-filter]');if(!b)return;filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('selected',x===b));collection()};
function updateFilteredView(scope){if(scope==='edit'&&$('editResults')){$('editResults').innerHTML=listEditor(({abilities:'ability',stats:'stat',mana:'mana',name:'name',types:'type',art:'art'})[tab]);}else collection()}
document.addEventListener('input',e=>{let field=e.target.dataset.filterField,scope=e.target.dataset.scope;if(field==='query'&&filters[scope]){filters[scope][field]=e.target.value;updateFilteredView(scope)}});
document.addEventListener('change',e=>{let field=e.target.dataset.filterField,scope=e.target.dataset.scope;if(field&&filters[scope]){filters[scope][field]=e.target.value;updateFilteredView(scope)}});
$('editor').addEventListener('click',e=>{let b=e.target.closest('button');if(!b)return;if(b.dataset.add)toggle(b.dataset.add);if(b.dataset.remove)remove(b.dataset.remove);if(b.id==='removeImage'){s.image='';render();toast('Image personnelle retirée')}if(b.id==='setImage'){let u=$('imageURL').value.trim();if(u&&!/^https:\/\//i.test(u)){toast('Utilise une adresse HTTPS');return}s.image=u;render()}if(b.id==='customSave'){let w=$('customWord').value.trim();if(!/^[\p{L}\p{N}'-]{1,24}$/u.test(w)){toast('Un seul mot, sans espaces (24 caractères max)');return}if(s.customWord&&s.owned[s.customWord]){if(s.words.includes(s.customWord))s.words=s.words.map(x=>x===s.customWord?w:x);delete s.owned[s.customWord]}s.customWord=w;s.owned[w]=1;render()}});
// Compression locale : l'image reste dans la sauvegarde du navigateur et dans l'export JSON.
async function imageFromPhone(file){
 if(!file||!file.type.startsWith('image/'))throw Error('Choisis une image valide.');
 if(file.size>20*1024*1024)throw Error('Image trop volumineuse (20 Mo maximum).');
 const bitmap=await createImageBitmap(file);
 try{
  const max=1000,ratio=Math.min(1,max/Math.max(bitmap.width,bitmap.height));
  const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(bitmap.width*ratio));canvas.height=Math.max(1,Math.round(bitmap.height*ratio));
  const ctx=canvas.getContext('2d');ctx.fillStyle='#171724';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(bitmap,0,0,canvas.width,canvas.height);
  const data=canvas.toDataURL('image/jpeg',.76);
  if(data.length>1250000)throw Error('Image trop grande après compression.');
  const previous=s.image;s.image=data;
  try{localStorage.setItem(KEY,JSON.stringify(s))}catch{ s.image=previous;throw Error('Espace insuffisant sur cet appareil pour sauvegarder cette image.');}
  render();toast('Image enregistrée sur cet appareil !');
 }finally{bitmap.close?.()}
}
$('editor').addEventListener('change',async e=>{if(e.target.id==='imageFile'){let file=e.target.files?.[0];if(file){try{await imageFromPhone(file)}catch(err){toast(err.message||'Impossible de charger cette image')}}return;}if(e.target.matches('[data-word]'))changeWord(Number(e.target.dataset.word),e.target.value);if(['manaMode','manaDelta','hasX','baseColor'].includes(e.target.id))updateMana()});
$('redeemBtn').onclick=() => openBooster($('codeInput').value);$('codeInput').addEventListener('keydown',e=>{if(e.key==='Enter')openBooster(e.target.value)});
async function startCamera(){if(!('BarcodeDetector' in window)){toast('Scanner non disponible ici : saisissez le code du QR manuellement');return}try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}});$('camera').srcObject=stream;$('camera').hidden=false;let detector=new BarcodeDetector({formats:['qr_code']});scanTimer=setInterval(async()=>{if(!stream)return;try{let codes=await detector.detect($('camera'));if(codes.length){let raw=codes[0].rawValue;let code=raw.startsWith('CEBOOST:')?raw.slice(8):raw;stopCamera();$('codeInput').value=code;toast('QR détecté : confirmez pour ouvrir le booster')}}catch{}},450)}catch{toast('Caméra indisponible : utilisez le champ de code')}}
function stopCamera(){clearInterval(scanTimer);scanTimer=null;if(stream)stream.getTracks().forEach(t=>t.stop());stream=null;$('camera').hidden=true;$('camera').srcObject=null}$('startCamera').onclick=startCamera;$('stopCamera').onclick=stopCamera;
function zoom(open){$('zoom').classList.toggle('open',open);$('zoom').setAttribute('aria-hidden',String(!open));if(open){let c=$('card').cloneNode(true);c.id='zoomCard';$('zoomMount').replaceChildren(c)}else $('zoomMount').replaceChildren()}$('card').onclick=()=>zoom(true);$('card').onkeydown=e=>{if(e.key==='Enter')zoom(true)};$('zoomClose').onclick=()=>zoom(false);$('zoom').onclick=e=>{if(e.target===$('zoom'))zoom(false)};
$('exportBtn').onclick=()=>{let blob=new Blob([JSON.stringify({version:2,state:s},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='commanderpower-sauvegarde.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),500)};
$('importInput').onchange=async e=>{let f=e.target.files?.[0];if(!f)return;try{let data=JSON.parse(await f.text()),v=data.state||data;if(!v.owned||!Array.isArray(v.equipped)||!Array.isArray(v.words)||!Array.isArray(v.usedCodes))throw Error('Format invalide');s={...structuredClone(base),...v};s.equipped=s.equipped.filter(id=>!!get(id));render();toast('Sauvegarde importée')}catch{toast('Fichier de sauvegarde invalide')}};
$('resetBtn').onclick=()=>{if(confirm('Supprimer toutes les récompenses et les codes utilisés sur cet appareil ?')){s=structuredClone(base);render();go('home');toast('Progression réinitialisée')}};
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));render();
