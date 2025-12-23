# 100 de Români - Aplicație Web Game Show

O aplicație web interactivă, inspirată de emisiunea TV "Ce spun românii" (versiunea românească a Family Feud). Proiectul este construit cu React și utilizează Firebase Realtime Database pentru a sincroniza perfect starea jocului între un panou de control al prezentatorului și un ecran public de afișare.

## ✨ Funcționalități Principale

- **Sincronizare în Timp Real:** Acțiunile efectuate în panoul de admin (`/admin`) se reflectă instantaneu pe ecranul public (`/`), fără a fi nevoie de refresh.
- **Panou de Control vs. Ecran Public:**
    - `/admin`: O interfață completă pentru prezentator, cu butoane pentru navigare între întrebări și jocuri, adăugarea de greșeli și vizualizarea tuturor răspunsurilor posibile.
    - `/`: Un ecran curat, destinat publicului, care afișează doar tabla de joc, scorul și animațiile.
- **Seturi Multiple de Jocuri:** Aplicația suportă un număr nelimitat de "jocuri" (seturi de întrebări), permițând o rejucabilitate extinsă.
- **Sistem de Greșeli (Strikes):**
    - Adăugarea de greșeli care se contorizează pentru runda curentă.
    - Un buton separat pentru a afișa un "X" de avertisment, fără a afecta contorul.
    - Animație spectaculoasă pe tot ecranul, sincronizată pe ambele pagini.
- **Ecrane Intermediare:** Pauze controlate de admin între seturile de jocuri, cu un afișaj festiv pentru public.
- **Resetare la Pornire:** Starea jocului în Firebase se resetează automat la prima încărcare a panoului de admin într-o sesiune nouă de browser, asigurând un start curat de fiecare dată.
- **Mini-Joc Bonus "Apasă Primul":**
    - Paginile `/user1` și `/user2` implementează un joc independent de viteză.
    - Jucătorii se autentifică cu un PIN, iar jocul pornește automat când ambii sunt gata.
    - Primul care apasă butonul este declarat câștigător în timp real.

## 🛠️ Tehnologii Folosite

- **Frontend:** [React](https://reactjs.org/) (creat cu Create React App)
- **Comunicare Real-time:** [Firebase Realtime Database](https://firebase.google.com/products/realtime-database)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Stilizare:** CSS (Flexbox, Grid, Animations, `vmin` pentru scalabilitate)

## 🚀 Instalare și Rulare Locală

Pentru a rula acest proiect pe mașina ta locală, urmează pașii de mai jos.

### Cerințe
- [Node.js](https://nodejs.org/) (versiunea 16 sau mai recentă)
- `npm` sau `yarn`

### 1. Configurează Proiectul
După ce ai descărcat fișierele, navighează în folderul proiectului și rulează:
```bash
npm install
