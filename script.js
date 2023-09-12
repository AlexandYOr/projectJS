const text = 123;
const stringFunction = function (funcArgument) {
    if (typeof funcArgument !== "string") alert("Неверный тип данных")
    const funcArgumentTrimed = funcArgument.trim();
    if (funcArgumentTrimed.length >= 30) {
        return funcArgumentTrimed.slice(0, 30) + "...";
    }
    return funcArgumentTrimed
}
console.log(stringFunction(text))