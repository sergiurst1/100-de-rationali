// src/questions.js

export const allGamesData = [
  // JOCUL 1
  {
    gameId: 1,
    questions: [
        {id: 1, question: "Ce nu poate lipsi de la un grătar cu prietenii?", answers: [{text: "Prietenii", points: 25, revealed: false}, {text: "Grătarul", points: 20, revealed: false}, {text: "Cărbunii", points: 15, revealed: false}, {text: "Carnea", points: 12, revealed: false}, {text: "Cartofii", points: 10, revealed: false}, {text: "Alcoolul", points: 8, revealed: false}, {text: "Sosuri", points: 6, revealed: false}, {text: "Boxa cu manele", points: 4, revealed: false}]},
        {id: 2, question: "Pe ce cheltuie cel mai des un student banii?", answers: [{text: "Mâncare", points: 25, revealed: false}, {text: "Cafea", points: 20, revealed: false}, {text: "Taxi/Uber", points: 18, revealed: false}, {text: "Alcool", points: 15, revealed: false}, {text: "Chirie", points: 10, revealed: false}, {text: "Haine", points: 7, revealed: false}, {text: "Ieșiri cu prietenii", points: 5, revealed: false}]},
        {id: 3, question: "Ce faci când mai ai doar 5 lei în cont?", answers: [{text: "Cer bani părinților", points: 30, revealed: false}, {text: "Rog un prieten să mă împrumute", points: 25, revealed: false}, {text: "Mă duc la amanet", points: 20, revealed: false}, {text: "Nu mănânc/ Flămânzesc", points: 15, revealed: false}, {text: "Mă angajez", points: 7, revealed: false}, {text: "Caut în geaca de iarnă", points: 3, revealed: false}]},
        {id: 4, question: "Care este cea mai folosită scuză atunci când nu vrei să ieși din casă?", answers: [{text: "Sunt obosit", points: 24, revealed: false}, {text: "Lucrez", points: 21, revealed: false}, {text: "N-am bani", points: 16, revealed: false}, {text: "Mă doare capul", points: 12, revealed: false}, {text: "E vremea urâtă", points: 10, revealed: false}, {text: "Am de învățat", points: 8, revealed: false}, {text: "Mă uit la serial", points: 6, revealed: false}, {text: "N-am cu ce să mă îmbrac", points: 3, revealed: false}]},
        {id: 5, question: "Care este băutura preferată a studenților?", answers: [{text: "Cafea", points: 30, revealed: false}, {text: "Bere", points: 25, revealed: false}, {text: "Ceai", points: 20, revealed: false}, {text: "Vin", points: 15, revealed: false}, {text: "Energizante", points: 10, revealed: false}, {text: "Sucuri", points: 8, revealed: false}, {text: "Apă", points: 6, revealed: false}, {text: "Cocktail-uri", points: 4, revealed: false}]}
    ]
  },
  // JOCUL 2
  {
    gameId: 2,
    questions: [
        {id: 6, question: "Ce face un student când are curs la 8 dimineața?", answers: [{text: "Doarme", points: 30, revealed: false}, {text: "Merge la cafea", points: 25, revealed: false}, {text: "Se grăbește să prindă ce a rămas", points: 20, revealed: false}, {text: "Își caută scuze", points: 15, revealed: false}, {text: "Promite că data viitoare merge", points: 7, revealed: false}, {text: "Intră pe Google Meet/Zoom din pat", points: 3, revealed: false}]},
        {id: 7, question: "Ce se mănâncă cel mai frecvent la cantină?", answers: [{text: "Șnițel cu pireu", points: 25, revealed: false}, {text: "Ciorbă", points: 20, revealed: false}, {text: "Paste", points: 15, revealed: false}, {text: "Orez", points: 12, revealed: false}, {text: "Cașcaval pane", points: 10, revealed: false}, {text: "Chiftele", points: 8, revealed: false}, {text: "Prăjitură", points: 6, revealed: false}, {text: "Salată", points: 4, revealed: false}]},
        {id: 8, question: "Ce face un student când își propune să se culce devreme?", answers: [{text: "Se uită la serial", points: 26, revealed: false}, {text: "Doomscrolling", points: 21, revealed: false}, {text: "Curat în cameră", points: 17, revealed: false}, {text: "Povestește cu colegii de camin", points: 15, revealed: false}, {text: "Face de mâncare", points: 11, revealed: false}, {text: "Citește", points: 10, revealed: false}]},
        {id: 9, question: "La ce eveniment te întâlnești cu rudele de care nu îți era neapărat dor?", answers: [{text: "Nuntă", points: 25, revealed: false}, {text: "Înmormântare", points: 20, revealed: false}, {text: "Crăciun", points: 18, revealed: false}, {text: "Botez", points: 15, revealed: false}, {text: "Aniversare", points: 10, revealed: false}, {text: "Paște", points: 7, revealed: false}, {text: "Revelion", points: 5, revealed: false}]},
        {id: 10, question: "Ce fac studenții la 2 noaptea înainte de un examen?", answers: [{text: "Învață", points: 30, revealed: false}, {text: "Beau energizant/cafea", points: 25, revealed: false}, {text: "Se roagă la o minune", points: 20, revealed: false}, {text: "Intră în panică", points: 15, revealed: false}, {text: "Petrec", points: 10, revealed: false}, {text: "Dorm", points: 8, revealed: false}, {text: "Plâng", points: 5, revealed: false}]}
    ]
  },
  // JOCUL 3
  {
    gameId: 3,
    questions: [
        {id: 11, question: "Ce faci primul lucru dimineața după o noapte de petrecut în club?", answers: [{text: "Mănânc", points: 25, revealed: false}, {text: "Fac duș", points: 20, revealed: false}, {text: "Mă hidratez", points: 15, revealed: false}, {text: "Mai beau", points: 12, revealed: false}, {text: "Iau pastile", points: 10, revealed: false}, {text: "Ma uit la poze", points: 8, revealed: false}, {text: "Dau mesaj prietenilor", points: 6, revealed: false}, {text: "Mă demachez", points: 4, revealed: false}]},
        {id: 12, question: "Unde merg studenții cel mai des la întâlnire?", answers: [{text: "La mall", points: 25, revealed: false}, {text: "Cinema", points: 20, revealed: false}, {text: "Parc", points: 18, revealed: false}, {text: "Cafenea", points: 15, revealed: false}, {text: "Restaurant", points: 10, revealed: false}, {text: "În club", points: 7, revealed: false}, {text: "Acasă", points: 5, revealed: false}]},
        {id: 13, question: "Ce expresie folosește orice student in sesiune?", answers: [{text: "Nu știu nimic", points: 30, revealed: false}, {text: "Mai am timp să învăț", points: 25, revealed: false}, {text: "Asta sigur nu pică", points: 20, revealed: false}, {text: "De ce nu am învățat din timp?", points: 15, revealed: false}, {text: "Dacă iau 5 sunt fericit", points: 7, revealed: false}, {text: "Știe colegu", points: 3, revealed: false}]},
        {id: 14, question: "Te afli într-un film horror. Ce personaj nu ai vrea să întâlnești?", answers: [{text: "Annabelle", points: 25, revealed: false}, {text: "Chucky", points: 20, revealed: false}, {text: "Pennywise", points: 15, revealed: false}, {text: "The Nun", points: 12, revealed: false}, {text: "Dracula", points: 10, revealed: false}, {text: "Freddy Krueger", points: 8, revealed: false}, {text: "Michael Myers", points: 6, revealed: false}, {text: "Ghostface", points: 4, revealed: false}]},
        {id: 15, question: "Ce îți aduc părinții când vin în vizită?", answers: [{text: "Mâncare", points: 30, revealed: false}, {text: "Bani", points: 25, revealed: false}, {text: "Haine", points: 20, revealed: false}, {text: "Produse de curățenie", points: 15, revealed: false}, {text: "Dulciuri", points: 10, revealed: false}, {text: "Medicamente", points: 5, revealed: false}]}
    ]
  },
  // JOCUL 4
  {
    gameId: 4,
    questions: [
        {id: 16, question: "La ce supermarketuri au studenții card de fidelitate?", answers: [{text: "Auchan", points: 25, revealed: false}, {text: "Lidl", points: 20, revealed: false}, {text: "Kaufland", points: 18, revealed: false}, {text: "Carrefour", points: 15, revealed: false}, {text: "Mega", points: 10, revealed: false}, {text: "Penny", points: 7, revealed: false}, {text: "Profi", points: 5, revealed: false}]},
        {id: 17, question: "Ești un om bun, ce vietate are curaj să îți mănânce din palmă?", answers: [{text: "Câinele", points: 22, revealed: false}, {text: "Pasărea", points: 20, revealed: false}, {text: "Căprioara", points: 17, revealed: false}, {text: "Vaca", points: 12, revealed: false}, {text: "Veverița", points: 11, revealed: false}, {text: "Mielul", points: 10, revealed: false}, {text: "Calul", points: 8, revealed: false}]},
        {id: 18, question: "În ce zonă aleg studenții cel mai des să stea în chirie?", answers: [{text: "Mănăștur", points: 24, revealed: false}, {text: "Mărăști", points: 21, revealed: false}, {text: "Gheorgheni", points: 17, revealed: false}, {text: "Zorilor", points: 12, revealed: false}, {text: "Florești", points: 10, revealed: false}, {text: "Bună ziua", points: 8, revealed: false}, {text: "Între lacuri", points: 6, revealed: false}, {text: "Grigorescu", points: 3, revealed: false}]},
        {id: 19, question: "Ce face un student in weekend?", answers: [{text: "Doarme", points: 25, revealed: false}, {text: "Iese cu prietenii", points: 20, revealed: false}, {text: "Iese in club", points: 15, revealed: false}, {text: "Se uită la seriale", points: 12, revealed: false}, {text: "Face curat", points: 10, revealed: false}, {text: "Zice că învață", points: 8, revealed: false}, {text: "Shopping", points: 6, revealed: false}, {text: "Merge acasă", points: 4, revealed: false}]},
        {id: 20, question: "Dacă ai fi blocat în facultate ce obiect ai vrea să ai cu tine?", answers: [{text: "Telefon", points: 30, revealed: false}, {text: "Apă", points: 25, revealed: false}, {text: "Mâncare", points: 20, revealed: false}, {text: "Lanternă", points: 15, revealed: false}, {text: "Trusă de prim ajutor", points: 10, revealed: false}, {text: "O bancă", points: 8, revealed: false}, {text: "Cuțit", points: 5, revealed: false}, {text: "Pernă/Pătură", points: 3, revealed: false}]}
    ]
  },
  // JOCUL 5
  {
    gameId: 5,
    questions: [
        {id: 21, question: "Ce băutură alcoolică preferă studenții la petreceri?", answers: [{text: "Bere", points: 25, revealed: false}, {text: "Vin", points: 20, revealed: false}, {text: "Vodka", points: 15, revealed: false}, {text: "Whisky", points: 12, revealed: false}, {text: "Tequila", points: 10, revealed: false}, {text: "Gin", points: 8, revealed: false}, {text: "Rom", points: 6, revealed: false}, {text: "Cocktail", points: 4, revealed: false}]},
        {id: 22, question: "Ce spune un student când îl sună părinții?", answers: [{text: "Învăț", points: 30, revealed: false}, {text: "Sunt cu prietenii", points: 25, revealed: false}, {text: "Poți să-mi trimiți niște bani?", points: 20, revealed: false}, {text: "Îmi faci pachet?", points: 15, revealed: false}, {text: "Nu pot vorbi acum", points: 7, revealed: false}, {text: "Mă duc la curs", points: 3, revealed: false}]},
        {id: 23, question: "Ce melodie pop 2000 românesc nu lipsește de la nicio petrecere?", answers: [{text: "Dragostea din tei - O-Zone", points: 24, revealed: false}, {text: "Ochii tăi - L.A.", points: 21, revealed: false}, {text: "Minim 2 - Alex Velea", points: 17, revealed: false}, {text: "Petre - CRLB", points: 12, revealed: false}, {text: "Mr. Saxobeat - Alexandra Stan", points: 10, revealed: false}, {text: "Selecta - Anda Adam", points: 8, revealed: false}, {text: "O secundă - Simplu", points: 6, revealed: false}, {text: "Sună Periculos - ASIA", points: 3, revealed: false}]},
        {id: 24, question: "Ce face un student după terminarea facultății?", answers: [{text: "Se apucă de master", points: 26, revealed: false}, {text: "Se angajează", points: 21, revealed: false}, {text: "Devine influencer", points: 17, revealed: false}, {text: "Își deschide firmă", points: 15, revealed: false}, {text: "Se întreabă ”Acuma ce fac?”", points: 11, revealed: false}, {text: "Pleacă în străinătate", points: 10, revealed: false}]},
        {id: 25, question: "Numește un eveniment pentru care studenții se adună să sărbătorească.", answers: [{text: "Absolvirea", points: 30, revealed: false}, {text: "Zile de naștere", points: 25, revealed: false}, {text: "Crăciun", points: 20, revealed: false}, {text: "Balul Bobocilor", points: 15, revealed: false}, {text: "Ultima zi de examen", points: 10, revealed: false}, {text: "Paște", points: 8, revealed: false}, {text: "Prima zi de vacanță", points: 5, revealed: false}]}
    ]
  },
  // JOCUL 6
  {
    gameId: 6,
    questions: [
        {id: 26, question: "Ce spune un student după ce vede notele?", answers: [{text: "Măcar s-a luat", points: 28, revealed: false}, {text: "Data viitoare chiar învăț", points: 22, revealed: false}, {text: "N-ai restanță, n-ai prestanță", points: 20, revealed: false}, {text: "Cum a luat ăla mai mult?", points: 17, revealed: false}, {text: "Vreau să beau", points: 13, revealed: false}]},
        {id: 27, question: "Care sunt struggle-mealurile unui student?", answers: [{text: "Zacuscă", points: 26, revealed: false}, {text: "Pateu", points: 20, revealed: false}, {text: "Supă la plic", points: 17, revealed: false}, {text: "Cartofi prăjiți", points: 15, revealed: false}, {text: "Cafea cu țigări", points: 11, revealed: false}, {text: "Face foamea", points: 10, revealed: false}]},
        {id: 28, question: "Ce animal de curte are 4 picioare?", answers: [{text: "Vacă", points: 25, revealed: false}, {text: "Cal", points: 20, revealed: false}, {text: "Oaie", points: 15, revealed: false}, {text: "Câine", points: 12, revealed: false}, {text: "Pisică", points: 10, revealed: false}, {text: "Măgar", points: 8, revealed: false}, {text: "Porc", points: 6, revealed: false}, {text: "Bou", points: 4, revealed: false}]},
        {id: 29, question: "Ce găsești într-un cămin studențesc?", answers: [{text: "Alcool", points: 24, revealed: false}, {text: "Cafea/Energizant", points: 21, revealed: false}, {text: "Țigări", points: 17, revealed: false}, {text: "Pachet de la părinți", points: 12, revealed: false}, {text: "Cărți", points: 10, revealed: false}, {text: "Telefon/Laptop", points: 8, revealed: false}, {text: "Haine", points: 6, revealed: false}, {text: "Gândaci", points: 3, revealed: false}]},
        {id: 30, question: "Ce își doresc să învețe studenții în timpul liber?", answers: [{text: "O limbă străină", points: 30, revealed: false}, {text: "Să cânte la un instrument", points: 25, revealed: false}, {text: "Să gătească", points: 20, revealed: false}, {text: "Să deseneze", points: 15, revealed: false}, {text: "Dezvoltare personală", points: 10, revealed: false}]}
    ]
  },
  // JOCUL 7
  {
    gameId: 7,
    questions: [
        {id: 31, question: "Ce găsești într-un frigider de cămin?", answers: [{text: "Zacuscă", points: 25, revealed: false}, {text: "Gem", points: 20, revealed: false}, {text: "Compot", points: 15, revealed: false}, {text: "Șnițele", points: 12, revealed: false}, {text: "Ceva stricat", points: 10, revealed: false}, {text: "Salată vinete", points: 8, revealed: false}, {text: "Băutură", points: 6, revealed: false}, {text: "Ciorbă", points: 4, revealed: false}]},
        {id: 32, question: "Care este motivul principal pentru care studenții întârzie la cursuri?", answers: [{text: "Nu au auzit alarma", points: 25, revealed: false}, {text: "Au amânat alarma", points: 20, revealed: false}, {text: "Au pierdut autobuzul", points: 15, revealed: false}, {text: "Nu găsesc sala", points: 12, revealed: false}, {text: "Au fost la cafea", points: 10, revealed: false}, {text: "Au stat la țigară", points: 8, revealed: false}, {text: "Trafic", points: 6, revealed: false}, {text: "Au ieșit cu o noapte înainte", points: 4, revealed: false}]},
        {id: 33, question: "Ce nu îți lipsește la o seară romantică cu iubita/iubitul?", answers: [{text: "Flori", points: 26, revealed: false}, {text: "Muzică romantică", points: 21, revealed: false}, {text: "Mâncare bună/Cină specială", points: 17, revealed: false}, {text: "Vin/Șampanie", points: 15, revealed: false}, {text: "Lumânări", points: 11, revealed: false}, {text: "Ciocolată/Desert", points: 10, revealed: false}]},
        {id: 34, question: "Ce mâncare faci cel mai des de sărbători?", answers: [{text: "Sarmale", points: 25, revealed: false}, {text: "Salată boeuf", points: 20, revealed: false}, {text: "Friptură", points: 18, revealed: false}, {text: "Piftie/Răcitură", points: 15, revealed: false}, {text: "Cozonac", points: 10, revealed: false}, {text: "Pască", points: 7, revealed: false}, {text: "Drob", points: 5, revealed: false}]},
        {id: 35, question: "În ce oraș din Europa dai peste cei mai mulți români în vacanță?", answers: [{text: "Londra", points: 30, revealed: false}, {text: "Madrid", points: 25, revealed: false}, {text: "Roma", points: 20, revealed: false}, {text: "Paris", points: 15, revealed: false}, {text: "Barcelona", points: 10, revealed: false}, {text: "Viena", points: 8, revealed: false}, {text: "Milano", points: 5, revealed: false}]}
    ]
  },
  // JOCUL 8
  {
    gameId: 8,
    questions: [
        {id: 36, question: "Ești antrenor de fotbal. Din ce țară vine noua ta vedetă sud-americană?", answers: [{text: "Brazilia", points: 25, revealed: false}, {text: "Argentina", points: 21, revealed: false}, {text: "Venezuela", points: 17, revealed: false}, {text: "Columbia", points: 12, revealed: false}, {text: "Chile", points: 10, revealed: false}, {text: "Peru", points: 8, revealed: false}, {text: "Bolivia", points: 6, revealed: false}, {text: "Uruguai", points: 3, revealed: false}]},
        {id: 37, question: "Ce obiect pierd cel mai des studenții?", answers: [{text: "Chei", points: 24, revealed: false}, {text: "Telefon", points: 21, revealed: false}, {text: "Portofel/Card bancar", points: 17, revealed: false}, {text: "Card CTP", points: 12, revealed: false}, {text: "Nopțile", points: 10, revealed: false}, {text: "Brichete", points: 8, revealed: false}, {text: "Căști", points: 6, revealed: false}, {text: "Notițele", points: 4, revealed: false}]},
        {id: 38, question: "Te trimit părinții la țară la bunici. De ce activitate fugi?", answers: [{text: "Tăiat lemne", points: 22, revealed: false}, {text: "Prășit", points: 20, revealed: false}, {text: "Cules fructe/legume", points: 17, revealed: false}, {text: "Cosit iarba", points: 12, revealed: false}, {text: "Muls vaca", points: 11, revealed: false}, {text: "Curățenie la animale", points: 10, revealed: false}, {text: "Hrănit animalele", points: 8, revealed: false}]},
        {id: 39, question: "Ce își dorește cel mai mult un student?", answers: [{text: "Să treacă examenele", points: 22, revealed: false}, {text: "Să aibă bani", points: 20, revealed: false}, {text: "Job", points: 18, revealed: false}, {text: "Relație", points: 15, revealed: false}, {text: "Petreceri", points: 10, revealed: false}, {text: "Mașină", points: 7, revealed: false}, {text: "Locuință", points: 5, revealed: false}]},
        {id: 40, question: "Ce ar trebui să conțină o trusă de prim-ajutor după despărțire?", answers: [{text: "Ciocolată", points: 30, revealed: false}, {text: "Șervețele", points: 25, revealed: false}, {text: "Manele", points: 20, revealed: false}, {text: "Alcool", points: 15, revealed: false}, {text: "Prieteni buni", points: 10, revealed: false}, {text: "Meme-uri amuzante", points: 5, revealed: false}]}
    ]
  },
  // JOCUL 9
  {
    gameId: 9,
    questions: [
        {id: 41, question: "Ce animal de companie visează toată lumea să aibă?", answers: [{text: "Câine", points: 30, revealed: false}, {text: "Pisică", points: 25, revealed: false}, {text: "Papagal", points: 18, revealed: false}, {text: "Hamster/Porcușor de guinea", points: 12, revealed: false}, {text: "Broască țestoasă", points: 8, revealed: false}, {text: "Iepure", points: 5, revealed: false}, {text: "Șopârlă", points: 2, revealed: false}]},
        {id: 42, question: "Ce faci atunci când un vecin îți bate la ușă în toiul nopții?", answers: [{text: "Te uiți pe vizor", points: 30, revealed: false}, {text: "Întrebi cine e", points: 25, revealed: false}, {text: "Te prefaci că nu ești acasă", points: 20, revealed: false}, {text: "Îl întrebi ce vrea", points: 15, revealed: false}, {text: "Închui ușa", points: 10, revealed: false}, {text: "Îl inviți în casă", points: 5, revealed: false}]},
        {id: 43, question: "Ce să nu faci la prima întâlnire?", answers: [{text: "Să stai pe telefon", points: 28, revealed: false}, {text: "Să te plângi de fosta/fostul", points: 22, revealed: false}, {text: "Să întârzii", points: 18, revealed: false}, {text: "Să te lauzi", points: 15, revealed: false}, {text: "Să minți", points: 10, revealed: false}, {text: "Să vorbești urât", points: 5, revealed: false}, {text: "Să te săruți", points: 2, revealed: false}]},
        {id: 44, question: "Ce cafea își comandă studenții atunci când ies cu prietenii?", answers: [{text: "Cappuccino", points: 25, revealed: false}, {text: "Latte", points: 20, revealed: false}, {text: "Iced coffee", points: 17, revealed: false}, {text: "Flat white", points: 14, revealed: false}, {text: "Frappe", points: 10, revealed: false}, {text: "Espresso", points: 8, revealed: false}, {text: "Americano", points: 4, revealed: false}, {text: "Cold Brew", points: 2, revealed: false}]},
        {id: 45, question: "De unde se întoarce un student la miezul nopții?", answers: [{text: "Club", points: 30, revealed: false}, {text: "Bar", points: 25, revealed: false}, {text: "Prieteni", points: 20, revealed: false}, {text: "Cinema", points: 15, revealed: false}, {text: "Restaurant", points: 10, revealed: false}, {text: "Bibliotecă", points: 5, revealed: false}, {text: "Gară", points: 3, revealed: false}]}
    ]
  },
  // JOCUL 10
  {
    gameId: 10,
    questions: [
        {id: 46, question: "Ce faci când un musafir nu vrea să plece?", answers: [{text: "Începi să strângi masa", points: 28, revealed: false}, {text: "Speli vase", points: 22, revealed: false}, {text: "Te schimbi în pijama", points: 20, revealed: false}, {text: "Închizi televizorul", points: 17, revealed: false}, {text: "Te speli pe dinți", points: 13, revealed: false}]},
        {id: 47, question: "Numește un loc în care nu poți vorbi cu voce tare.", answers: [{text: "Biserică", points: 29, revealed: false}, {text: "Bibliotecă", points: 25, revealed: false}, {text: "Muzeu", points: 20, revealed: false}, {text: "Sală de curs", points: 15, revealed: false}, {text: "Cinema", points: 11, revealed: false}]},
        {id: 48, question: "Te uiți cu prietenii la film. Ce snack-uri aveți?", answers: [{text: "Popcorn", points: 24, revealed: false}, {text: "Chipsuri", points: 21, revealed: false}, {text: "Nachos", points: 17, revealed: false}, {text: "Ciocolată", points: 12, revealed: false}, {text: "Alune", points: 10, revealed: false}, {text: "Semințe", points: 8, revealed: false}, {text: "Jeleuri", points: 6, revealed: false}, {text: "Fructe", points: 3, revealed: false}]},
        {id: 49, question: "Numește ceva ce se topește.", answers: [{text: "Gheața", points: 28, revealed: false}, {text: "Ceara", points: 22, revealed: false}, {text: "Zăpada", points: 20, revealed: false}, {text: "Ciocolata", points: 17, revealed: false}, {text: "Zahăr", points: 13, revealed: false}]},
        {id: 50, question: "Ce pătează și rămâne pe haine?", answers: [{text: "Ulei", points: 28, revealed: false}, {text: "Roșii", points: 25, revealed: false}, {text: "Vin", points: 20, revealed: false}, {text: "Vopsea", points: 17, revealed: false}, {text: "Cerneală", points: 13, revealed: false}, {text: "Ruj", points: 10, revealed: false}, {text: "Cafea", points: 8, revealed: false}]}
    ]
  },
  // JOCUL 11
  {
    gameId: 11,
    questions: [
        {id: 51, question: "Ce obiect găsești cel mai des pe noptieră?", answers: [{text: "Lampa", points: 25, revealed: false}, {text: "Ceasul", points: 20, revealed: false}, {text: "Cartea", points: 18, revealed: false}, {text: "Fotografii", points: 15, revealed: false}, {text: "Apă", points: 10, revealed: false}, {text: "Încărcător", points: 7, revealed: false}, {text: "Telefon", points: 5, revealed: false}]},
        {id: 52, question: "Numește un festival de muzică din România.", answers: [{text: "Untold", points: 22, revealed: false}, {text: "Beach Please!", points: 20, revealed: false}, {text: "Electric Castle", points: 17, revealed: false}, {text: "Neversea", points: 12, revealed: false}, {text: "Nostalgia", points: 11, revealed: false}, {text: "Summer Well", points: 10, revealed: false}, {text: "Massif", points: 8, revealed: false}]},
        {id: 53, question: "În afară de pasăre, ce mai iese dintr-un ou?", answers: [{text: "Reptile", points: 30, revealed: false}, {text: "Pești", points: 25, revealed: false}, {text: "Broaște", points: 20, revealed: false}, {text: "Insecte", points: 15, revealed: false}, {text: "Păianjeni", points: 7, revealed: false}, {text: "Ornitorincul", points: 3, revealed: false}]},
        {id: 54, question: "Ce pun studenții peste cartofii prăjiți?", answers: [{text: "Ketchup", points: 29, revealed: false}, {text: "Maioneză", points: 25, revealed: false}, {text: "Brânză/Cașcaval", points: 20, revealed: false}, {text: "Condimente", points: 15, revealed: false}, {text: "Ouă", points: 11, revealed: false}]},
        {id: 55, question: "Ce alimente se mănâncă la micul dejun?", answers: [{text: "Cereale", points: 28, revealed: false}, {text: "Ouă", points: 25, revealed: false}, {text: "Croissant", points: 20, revealed: false}, {text: "Pâine prăjită cu unt", points: 17, revealed: false}, {text: "Ovăz", points: 13, revealed: false}, {text: "Fructe", points: 10, revealed: false}, {text: "Salam/Cârnați", points: 8, revealed: false}, {text: "Roșii cu brânză", points: 5, revealed: false}]}
    ]
  },
  // JOCUL 12
  {
    gameId: 12,
    questions: [
        {id: 56, question: "Ce faci când se ia curentul?", answers: [{text: "Aprinzi lanterna", points: 28, revealed: false}, {text: "Te uiți pe geam", points: 22, revealed: false}, {text: "Te uiți la siguranță", points: 20, revealed: false}, {text: "Aprinzi lumânări", points: 17, revealed: false}, {text: "Te culci", points: 13, revealed: false}]},
        {id: 57, question: "Ce se aude cel mai des la o coadă, la o instituție de stat?", answers: [{text: "„Aveți dosar cu șină?”", points: 29, revealed: false}, {text: "„Nu aici trebuie să stați!”", points: 25, revealed: false}, {text: "„Lipsesc niște hârtii.”", points: 20, revealed: false}, {text: "„Nu mai merge sistemul.”", points: 15, revealed: false}, {text: "„Mai deschideți un ghișeu!”", points: 11, revealed: false}]},
        {id: 58, question: "Numește un tip de paste.", answers: [{text: "Spaghetti", points: 24, revealed: false}, {text: "Penne", points: 21, revealed: false}, {text: "Fusilli", points: 16, revealed: false}, {text: "Tagliatelle", points: 12, revealed: false}, {text: "Farfalle", points: 10, revealed: false}, {text: "Lasagna", points: 8, revealed: false}, {text: "Rigatoni", points: 6, revealed: false}, {text: "Gnocchi", points: 3, revealed: false}]},
        {id: 59, question: "În afară de pahar ce mai poți umple?", answers: [{text: "Portofelul", points: 22, revealed: false}, {text: "Buzunarul", points: 20, revealed: false}, {text: "Frigiderul", points: 17, revealed: false}, {text: "Stomacul", points: 12, revealed: false}, {text: "Dulapul", points: 11, revealed: false}, {text: "Rezervorul la mașină", points: 10, revealed: false}, {text: "Sticla", points: 8, revealed: false}]},
        {id: 60, question: "Când se apucă studenții de învățat?", answers: [{text: "În sesiune", points: 30, revealed: false}, {text: "Cu o zi înainte de examen", points: 25, revealed: false}, {text: "”De luni”", points: 20, revealed: false}, {text: "”De mâine”", points: 15, revealed: false}, {text: "Niciodată", points: 10, revealed: false}, {text: "Semestrul următor", points: 8, revealed: false}, {text: "La anul", points: 5, revealed: false}]}
    ]
  },
  // JOCUL 13
  {
    gameId: 13,
    questions: [
        {id: 61, question: "În afară de telefon ce mai stă la încărcat?", answers: [{text: "Laptop", points: 24, revealed: false}, {text: "Tabletă", points: 21, revealed: false}, {text: "Smartwatch", points: 16, revealed: false}, {text: "Căști wireless", points: 12, revealed: false}, {text: "Baterie externă", points: 10, revealed: false}, {text: "Aparat foto", points: 8, revealed: false}, {text: "Periuța de dinți", points: 6, revealed: false}, {text: "Controller/Consolă", points: 3, revealed: false}]},
        {id: 62, question: "Numește un animal din 3 litere.", answers: [{text: "Lup", points: 25, revealed: false}, {text: "Leu", points: 20, revealed: false}, {text: "Urs", points: 15, revealed: false}, {text: "Cal", points: 12, revealed: false}, {text: "Rac", points: 10, revealed: false}, {text: "Țap", points: 8, revealed: false}, {text: "Ied", points: 6, revealed: false}, {text: "Ren", points: 4, revealed: false}]},
        {id: 63, question: "Ce gen de muzică preferă studenții?", answers: [{text: "Pop", points: 25, revealed: false}, {text: "Rock", points: 20, revealed: false}, {text: "Trap", points: 15, revealed: false}, {text: "Manele", points: 12, revealed: false}, {text: "Rap", points: 10, revealed: false}, {text: "Tehno", points: 8, revealed: false}, {text: "Jazz", points: 6, revealed: false}, {text: "Populară", points: 4, revealed: false}]},
        {id: 64, question: "Ce gen de filme preferă studenții?", answers: [{text: "Horror", points: 24, revealed: false}, {text: "Comedie", points: 21, revealed: false}, {text: "Acțiune", points: 16, revealed: false}, {text: "SF", points: 12, revealed: false}, {text: "Dramă", points: 10, revealed: false}, {text: "Documentar", points: 8, revealed: false}, {text: "Anime", points: 6, revealed: false}, {text: "Romantic", points: 3, revealed: false}]},
        {id: 65, question: "Ce minciună spune orice student la început de semestru?", answers: [{text: "Mă apuc de învățat din timp", points: 30, revealed: false}, {text: "Nu mai chiulesc deloc", points: 25, revealed: false}, {text: "Dorm 8 ore pe noapte", points: 20, revealed: false}, {text: "Vin la orele de dimineață", points: 15, revealed: false}, {text: "O să economisesc bani", points: 10, revealed: false}, {text: "Termin din timp cu proiectele", points: 8, revealed: false}, {text: "Îmi caut un job", points: 5, revealed: false}]}
    ]
  },
  // JOCUL 14
  {
    gameId: 14,
    questions: [
        {id: 66, question: "Ce iau studenții la examen pentru noroc?", answers: [{text: "O icoană", points: 30, revealed: false}, {text: "O cruce", points: 25, revealed: false}, {text: "Pixul Norocos", points: 20, revealed: false}, {text: "Fițuică", points: 15, revealed: false}, {text: "O fotografie", points: 7, revealed: false}, {text: "Mir", points: 3, revealed: false}]},
        {id: 67, question: "Ce fac studenții în timpul orelor online?", answers: [{text: "Stau pe telefon", points: 22, revealed: false}, {text: "Dorm", points: 20, revealed: false}, {text: "Mănâncă", points: 17, revealed: false}, {text: "Se joacă", points: 12, revealed: false}, {text: "Iau notițe", points: 11, revealed: false}, {text: "Se uită la filme", points: 10, revealed: false}, {text: "Fac curățenie", points: 8, revealed: false}]},
        {id: 68, question: "Faci mici și nu ai muștar, cu ce mănânci micii?", answers: [{text: "Pâine", points: 24, revealed: false}, {text: "Ketchup", points: 21, revealed: false}, {text: "Cartofi", points: 17, revealed: false}, {text: "Cu mâna", points: 12, revealed: false}, {text: "Maioneză", points: 10, revealed: false}, {text: "Cu scobitoarea", points: 8, revealed: false}, {text: "Cu salată", points: 6, revealed: false}, {text: "Cu poftă", points: 4, revealed: false}]},
        {id: 69, question: "Unde își ține un student economiile?", answers: [{text: "În bancă", points: 26, revealed: false}, {text: "În portofel", points: 21, revealed: false}, {text: "În sertar", points: 17, revealed: false}, {text: "Într-un borcan", points: 15, revealed: false}, {text: "În cărți", points: 11, revealed: false}, {text: "Sub saltea", points: 10, revealed: false}]},
        {id: 70, question: "Scuze că am întârziat! Am avut programare la...", answers: [{text: "Dentist", points: 30, revealed: false}, {text: "Unghii", points: 25, revealed: false}, {text: "Gene", points: 20, revealed: false}, {text: "Oftalmolog", points: 15, revealed: false}, {text: "Psiholog", points: 10, revealed: false}, {text: "Coafor", points: 8, revealed: false}, {text: "Service auto/mecanic", points: 5, revealed: false}, {text: "Bancă", points: 3, revealed: false}]}
    ]
  },
  // JOCUL 15
  {
    gameId: 15,
    questions: [
        {id: 71, question: "Organizezi o seară de jocuri cu prietenii. De ce ai nevoie?", answers: [{text: "Jocuri de societate", points: 25, revealed: false}, {text: "Băuturi", points: 20, revealed: false}, {text: "Muzică", points: 18, revealed: false}, {text: "Prieteni", points: 15, revealed: false}, {text: "Spațiu", points: 10, revealed: false}, {text: "Mâncare", points: 7, revealed: false}, {text: "Dulciuri", points: 5, revealed: false}]},
        {id: 72, question: "Ce rețetă simplă gătesc studenții când sunt pe fugă?", answers: [{text: "Paste", points: 25, revealed: false}, {text: "Sandwich", points: 20, revealed: false}, {text: "Omletă", points: 15, revealed: false}, {text: "Cartofi prăjiți", points: 12, revealed: false}, {text: "Ouă prăjite", points: 10, revealed: false}, {text: "Supă la plic", points: 8, revealed: false}, {text: "Zacuscă pe pâine", points: 6, revealed: false}, {text: "Pâine cu pateu", points: 4, revealed: false}]},
        {id: 73, question: "Ce cadouri oferă studenții la Secret Santa?", answers: [{text: "Cană", points: 24, revealed: false}, {text: "Șosete", points: 21, revealed: false}, {text: "Lumânări parfumate", points: 17, revealed: false}, {text: "Agende", points: 12, revealed: false}, {text: "Dulciuri", points: 10, revealed: false}, {text: "Decorațiuni de Crăciun", points: 8, revealed: false}, {text: "Bani", points: 6, revealed: false}, {text: "Cărți", points: 3, revealed: false}]},
        {id: 74, question: "Jocul copilăriei tale este...", answers: [{text: "De-a v-ați ascunselea", points: 25, revealed: false}, {text: "Șotron", points: 20, revealed: false}, {text: "Țară, țară, vrem ostași", points: 17, revealed: false}, {text: "Baba Oarba", points: 12, revealed: false}, {text: "Lapte gros", points: 11, revealed: false}, {text: "Flori, fete sau băieți", points: 10, revealed: false}, {text: "Elastic", points: 8, revealed: false}]},
        {id: 75, question: "Ce spune un student înainte să facă o prostie?", answers: [{text: "Ține-mi berea", points: 30, revealed: false}, {text: "N-ai cum să înțelegi", points: 25, revealed: false}, {text: "Am văzut pe TikTok", points: 20, revealed: false}, {text: "Eu mă pricep, stai liniștit", points: 15, revealed: false}, {text: "Ce poate să se întâmple", points: 10, revealed: false}, {text: "Filmează", points: 5, revealed: false}]}
    ]
  },
  // JOCUL 16
 {
    gameId: 16,
    questions: [
      {
        id: 76,
        question: "Ce îi stresează cel mai tare pe studenți?",
        answers: [
          { text: "Examenele", points: 24, revealed: false },
          { text: "Proiectele", points: 21, revealed: false },
          { text: "Sesiunea", points: 17, revealed: false },
          { text: "Lipsa banilor", points: 12, revealed: false },
          { text: "Profesorii", points: 10, revealed: false },
          { text: "Locul de muncă", points: 8, revealed: false },
          { text: "Părinții", points: 6, revealed: false },
          { text: "Viața amoroasă", points: 3, revealed: false },
        ],
      },
      {
        id: 77,
        question: "Ce prăjitură primește un student în pachetul de acasă?",
        answers: [
          { text: "Cozonac", points: 25, revealed: false },
          { text: "Chec", points: 20, revealed: false },
          { text: "Salam de biscuiți", points: 15, revealed: false },
          { text: "Cornulețe", points: 12, revealed: false },
          { text: "Plăcintă", points: 10, revealed: false },
          { text: "Fursecuri", points: 8, revealed: false },
          { text: "Negresă", points: 6, revealed: false },
          { text: "Eclere", points: 4, revealed: false },
        ],
      },
      {
        id: 78,
        question: "Ce obiect de decor preferă studenții în camere?",
        answers: [
          { text: "Postere", points: 22, revealed: false },
          { text: "Luminițe", points: 20, revealed: false },
          { text: "Plante", points: 17, revealed: false },
          { text: "Fotografii", points: 12, revealed: false },
          { text: "Picturi/Tablouri", points: 11, revealed: false },
          { text: "Stickere", points: 10, revealed: false },
          { text: "Lumânări parfumate", points: 8, revealed: false },
        ],
      },
      {
        id: 79,
        question: "Numește un animal cu coarne.",
        answers: [
          { text: "Capra", points: 25, revealed: false },
          { text: "Cerb", points: 20, revealed: false },
          { text: "Berbec", points: 18, revealed: false },
          { text: "Taur", points: 15, revealed: false },
          { text: "Bou", points: 10, revealed: false },
          { text: "Antilopă", points: 7, revealed: false },
          { text: "Rinocer", points: 5, revealed: false },
        ],
      },
      {
        id: 80,
        question: "Ce faci înainte să înceapă petrecerea?",
        answers: [
          { text: "Mă pregătesc", points: 25, revealed: false },
          { text: "Mă întâlnesc cu prietenii", points: 20, revealed: false },
          { text: "Beau", points: 15, revealed: false },
          { text: "Verific bateria la telefon", points: 12, revealed: false },
          { text: "Trimit mesaje", points: 8, revealed: false },
          { text: "Mă jur că nu beau", points: 5, revealed: false },
        ],
      },
    ],
  },
]