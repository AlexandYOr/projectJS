const fruitPrice = {
    apple: 25,
    apricot: 30,
    pinapple: 50,
    tomato: 10,
    cucumber: 200
} // найти самый дорогой и вывести в консоль ключ.
let topFruitPrice = 0;
let topFruitPriceK = "";
for (let k in fruitPrice) {
    topFruitPrice = topFruitPrice > fruitPrice[k] ? topFruitPrice : fruitPrice[k];
    topFruitPriceK = topFruitPrice > fruitPrice[k] ? topFruitPrice : k;
} 
console.log(topFruitPrice, topFruitPriceK);
const arrayFruitPrices = Object.values(fruitPrice) ;
console.log(Math.max(...arrayFruitPrices))


