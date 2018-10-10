const videos = [
  {
    _id: "5b21ca3eeb7f6fbccd471810",
    name: "Sklera",
    text:
      "Sklera, även kallad ögonvita är en senhinna. Den är mycket robust och skyddar de inre känsligare delarna av ögat så som retina och koroidea. Den är ca 1 mm tjock förutom där de raka ögonmusklerna fäster, där är den 0.3mm. De raka ögonmusklerna är 4 av 6 muskler på varje öga som kontrollerar ögats rörelser. Utanpå sklera ligger episklera som innehåller blodkärl som försörjer sklera med syre och näringsämnen. Det är dessa kärl man ser på utsidan av ögonvitan.",
    videoSource: "sclera.mp4",
    reverseVideoSource: "sclera_r.mp4"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471811",
    name: "Koroidea",
    text:
      'Koroidea är skiktet som ligger innanför sklera. Skiktet består av ett nätverk av kärl som försörjer retina bakifrån med syre och näringsämnen. Vid våt maculadegeneration, även kallad "gulafläcken sjukan" är det blodkärl från detta kärlnätverk som är boven i dramat.',
    videoSource: "choroid.mp4",
    reverseVideoSource: "choroid_r.mp4"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471812",
    name: "Retina",
    text:
      "Retina brukar i dagligt tal kallas näthinnan. Det är här ljusreceptorerna som gör att vi kan se sitter. Det finns 2 olika sorters receptorer, tapparna som är känsliga för olika färger arbetar i starkare ljus och stavarna som fungerar bäst i svagt ljus ser i svart/vitt. Stavarna är vanligast perifert på retina och tapparna är koncentrerade till fovea. Ett allvarligt tillstånd relaterat till retina är amotia retinae eller näthinneavlossning. Upplever man blixtar i synfältet som man inte kan förklara på något annat sätt t.ex. migrän, eller att det blir svart för delar eller hela synfältet skall man omedelbart söka vård",
    videoSource: "retina.mp4",
    reverseVideoSource: "retina_r.mp4"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471813",
    name: "Glaskroppen",
    text:
      "Glaskroppen är en gelemassa som fyller ut ögongloben bakom linsen. Framför linsen är det kammarvätskan som fyller tomrummet. När man blir äldre minskar glaskroppen något i volym och det fylls på med vätska som tar det överblivna utrymmet. När glaskroppen minskar i volym kan den lossna från näthinna, det är detta som kallas glaskroppsavlossning. Det är i sig ett ofarligt fenomen men glaskroppen kan dra med sig näthinnan och då uppstår ett allvarligt tillstånd som kallas näthinneavlossning.",
    videoSource: "vitreousbody.mp4",
    reverseVideoSource: "vitreousbody_r.mp4"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471814",
    name: "Macula",
    text:
      "Macula är området runt fovea. Här är syncellerna ganska tätt packade vilket leder till en god upplösning av bilden eller bra synskärpa om man så vill. Utanför maculaområdet är syncellerna inte lika tätt packade men tillräckligt för att man skall kunna upptäcka objekt eller rörelser och sedan vända blicken dit för att mer detaljerat undersöka objektet. En sjukdom som drabbar många äldre är åldersrelaterad maculadegeneration (AMD). Det finns två typer an AMD, en våt och en torr. Den våta har sämre prognos men är till viss mån behandlingsbar medan den torra ofta inte ger så allvarlig synpåverkan. Den torra är å andra sidan inte behandlingsbar. AMD kallas ofta gulafläckensjukan.",
    videoSource: "macula.mp4",
    reverseVideoSource: "macula_r.mp4"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Linsen",
    text:
      "Linsen i ögat står för ca 20 av ögats 60 dioptriers brytkraft. Resten av brytkraften ligger i cornea. Det är även linsen som ger oss möglighet att ändra fokuseringsavstånd, till exempel när vi växlar mellan att titta på TV och titta i en tidning. Linsen hänger i en massa trådar som kallas zonulatrådar, dessa sitter i sin tur fast i ciliarkroppen. Man kan likna det vid ett cykelhjul där navet är linsen, trådarna ekrarna och ciliarkroppen är fälgen. När vi skall titta på nära håll drar en muskel i ciliarkroppen ihop sig, på så sätt slappnar zonulatrådarna av och linsen tillåts att bli mindre i diameter men tjockare och detta ökar brytkraften. Efterhand som man blir äldre minskar linsens flexibilitet och vid ungefär 45 års ålder har den stelnat till så mycket att man inte längre kan läsa på normalt läsavstånd, utan man måste ta till läsglasögon. Katarakt eller grå starr är en ålderförändring i linsen som i princip drabbar alla vid något tillfälle i livet i någon grad. Den består i en grumling av linsen som gör att sikten ut blir försämrad. När katarakten blivit så framträdande att den besvärar patienten opererar man ut linsen och ersätter den med en konstgjord.",
    videoSource: "aqueoushumor.mp4",
    reverseVideoSource: "aqueoushumor_r.mp4"
  }
];

export function getVideos() {
  return videos;
}

export function getVideo(id) {
  return videos.find(m => m._id === id);
}

export function getIntro() {
  return {
    videoSource: "intro.mp4",
    reverseVideoSource: "intro.mp4",
    videoText:
      "<h3>Ögats anatomi</h3>Det mänskliga ögat består av flera olika delar och anses vara kroppens mest komplexa organ. Din synskärpa är beroende av hur dessa olika delar interagerar med varandra. Av de fem sinnena är nog synen det sinne som människan värdesätter mest. Klicka på namnet på den del av ögat i bilden till vänster som du vill ha mer information om."
  };
}
