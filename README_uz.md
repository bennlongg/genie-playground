# TypeScript Algoritmlar To'plami

## Umumiy ma'lumot

Ushbu repozitoriya zamonaviy kodlash usullaridan foydalangan holda turli xil algoritmlar va matematik funksiyalarni amalga oshirish va sinab ko'rishga qaratilgan TypeScript loyihasidir. U binary search va bubble sort kabi klassik algoritmlarning, shuningdek, Fibonacci ketma-ketligini hisoblash va curried matematik amallar kabi boshqa foydali funksiyalarning implementatsiyalarini o'z ichiga oladi.

Loyiha quyidagi dasturlash paradigmalari va texnikalarini namoyish etadi:
- Rekursiv algoritmlar
- Funktsional dasturlash konseptsiyalari (masalan, currying)
- TypeScript statik tiplari
- Vitest yordamida test orqali ishlab chiqish

## Repozitoriya tuzilishi

```
.
├── README.md        # Ushbu hujjat fayli (ingliz tilida)
├── README_de.md     # Hujjat fayli (nemis tilida)
├── README_es.md     # Hujjat fayli (ispan tilida)
├── README_fr.md     # Hujjat fayli (fransuz tilida)
├── README_uz.md     # Ushbu hujjat fayli (o'zbek tilida)
└── src/             # Manba kod katalogi
    ├── functions.ts        # Asosiy algoritm implementatsiyalari
    ├── functions.test.ts   # Algoritmlar uchun unit testlar
    └── index.ts            # Foydalanish misollari
```

### Asosiy fayllar

- **src/functions.ts**: Barcha algoritmlar va utilita funksiyalarining implementatsiyalarini o'z ichiga oladi:
  - `fibonacci`: n-chi Fibonacci sonini hisoblaydi
  - `binarySearch`: Tartiblangan massivda binary search bajaradi
  - `bubbleSort`: Massivni bubble sort algoritmi yordamida tartiblaydi
  - `curriedMath`: Arifmetik amallar uchun curried funksiya

- **src/functions.test.ts**: Vitest yordamida amalga oshirilgan barcha funksiyalar uchun keng qamrovli test holatlarini o'z ichiga oladi.

- **src/index.ts**: Har bir funksiyadan qanday foydalanishni ko'rsatadigan amaliy misollarni taqdim etadi, ayniqsa curried matematik funksiyaning ko'p qirraliligi ko'rsatilgan.

## O'rnatish

Repozitoriyani klonlang va bog'liqliklarni o'rnating:

```bash
git clone <repository-url>
cd typescript-algorithm-collection
npm install
```

## Misollarni ishga tushirish

`src/index.ts` faylidagi misollarni ishga tushirish uchun:

```bash
npm start
```

## Testlash

Bu loyiha unit testlar uchun Vitest-dan foydalanadi. Testlarni ishga tushirish uchun:

```bash
npm test
```

Test to'plami quyidagilarni tekshiradi:
- Fibonacci sonlarini hisoblash
- Turli xil kirishlar bilan binary search funksionalligini
- Bubble sort algoritmining to'g'riligini
- Curried matematik amallarni

## Hissa qo'shish

Hissalar qabul qilinadi! Agar boshqa algoritmlarni qo'shmoqchi yoki mavjudlarini yaxshilamoqchi bo'lsangiz:

1. Repozitoriyani fork qiling
2. Feature branch yarating
3. Mos testlar bilan kodingizni qo'shing
4. Pull request yuboring

Iltimos, kodingiz JSDoc sharhlar bilan yaxshi hujjatlashtirilganligiga va keng qamrovli test holatlarini o'z ichiga olishiga ishonch hosil qiling.

## Litsenziya

[MIT Litsenziyasi](LICENSE)
