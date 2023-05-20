const allowedInputs = ['1','2','3','4','5','6','7','8','9','0','.','Backspace','Delete','ArrowLeft','ArrowRight'];

function forceNumber(event) {
    if (allowedInputs.includes(event.key)===false) {
        event.preventDefault();
        return null;
    }
    return true;
}

function handleRatioChange(event) {
    const newRatio = event.target.value;
    const coffeeWeight = document.getElementById("coffee-input").value;
    changeWater(coffeeWeight);
}

function changeWater(coffeeWeight) {
    const ratioElement = document.getElementById("ratio-input");
    const ratio = ratioElement.value / 1000;
    const waterElement = document.getElementById("water-input");
    waterElement.value = Math.round(coffeeWeight / ratio * 100)/100;
}

function handleCoffeeChange(event) {
    const newCoffeeWeight = event.target.value;
    changeWater(newCoffeeWeight);
}

function changeCoffee(waterVolume) {
    const ratioElement = document.getElementById("ratio-input");
    const ratio = ratioElement.value / 1000;
    const coffeeElement = document.getElementById("coffee-input");
    coffeeElement.value = Math.round(waterVolume * ratio * 100)/100;
}
 
function handleWaterChange(event) {
    const newWaterVolume = event.target.value;
    changeCoffee(newWaterVolume);

}
