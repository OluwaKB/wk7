let x = 90
let y = 7

function addTwo(){
    let z = x + y
    return z
}

const productPrices = [25.99, 15.49, 10.99, 34.99, 8.99]

//arrange from highest to lowest
function arrangeHL(){
    return productPrices.sort((a,b)=>a-b).reverse()
}
//sum of the products
function calcSum(){
    return productPrices.reduce((x, y) => x + y)
}
//average of the product
function calcAverage(){
    return productPrices.reduce((x,y) => x + y) / productPrices.length
}
//calculate range
function calcRange(){
    let min = arrangeHL()[0]
    let max = arrangeHL()[arrangeHL().length -1]
    return min - max
}
//adds ten tp productPrices
function addsTenToProductPrices(){
    return productPrices.map(Prices =>Prices + 10).map(x => Number(x.toFixed(2)))
} 
//closest whole number
function wholeNumber(){
    return productPrices.map(Prices => Math.round(Prices))
}
//divisible by 3
function divideBy3(){
    return productPrices.filter(Price  => Math.round(price) % 3 ===0)
}
