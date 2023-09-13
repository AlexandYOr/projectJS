const array = ["11", "22", "33", "44", "55", "66", "77"];

array.forEach(arrayElement => {
    if (arrayElement.charAt(0) === "2" || arrayElement.charAt(0) === "4") {
        console.log(arrayElement)
    }

});



nextNumber: for (let simpleNumbers = 2; simpleNumbers < 100; simpleNumbers++) {
    for (let i = 2; i < simpleNumbers; i++) {
        if (simpleNumbers % i == 0) {
            continue nextNumber
        }
    }
    console.log("Делители этого числа 1 и " + simpleNumbers)
}