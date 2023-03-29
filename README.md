# Zöldpont Masszázs Stúdió

## Portfólió weboldal 

Ez a tároló a Zöldpont Masszázs Stúdió weboldalának forráskódját, valamint a hozzátartozó állományokat tartalmazza. A látogatók böngészhetnek a szolgáltatások között, megismerkedhetnek a terapeutával, ha pedig kedvet kaptak egy testi-lelki felfrissüléshez, bejelentkezhetnek kezelésre az oldal időpontfoglaló rendszerén keresztül.

## Masszázsterápiák

Az oldalon részletes bemutatásra kerülnek az igényelhető terápiák, azok elérhető változatai, melyek különféle testrészeket érintenek, az igények széleskörű kielégítésére törekedvén. 

## Egyszerű foglalás

A weboldal beépített, saját foglalási rendszerrel dolgozik, melyet bárki használhat, éppen ezért különös figyelmet fordítunk az adatok helyénvaló és jogtiszta kezelésére. 
*Jelen verzióban ez a rész hiányos, a bővítési, fejlesztési tervek között szerepel.*


## Beüzemelési lépések

1. Git tároló klónozása

```console
git clone https://github.com/csengekulker/zoldng.git
```

2. Függőségek telepítése

```console
npm install
```

3. Fejlesztői szerver indítása

```console
npm start
```

Böngészőben a http://localhost:4200 címen megtekinthető a webes kliens.

> Figyelem! Az oldalon szerepelnek adatbázisból hívott, statikus tartalmak. Figyelj, hogy megtekintéskor külön terminál ablakban fusson a REST API kiszolgáló.