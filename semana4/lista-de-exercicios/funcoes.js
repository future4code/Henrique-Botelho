function segundo(array){
    array.sort(function(a,b){
        return a - b
    })
    if(array.length > 3){
        console.log(array[1])
        console.log(array[array.length -2])
    }
}

() => {
    return alert("Hello Labenu")
}