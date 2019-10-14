const gotCitiesCSV ="King's Landing,Braavos, Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Belriand","Mirkwood","Dead Marshes", "Rhum", "Hard"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function displayResults(functionName, input){
  const katas =  document.getElementById("katas");
  const header = document.createElement("h2");
  header.textContent = functionName; 
  const newElement = document.createElement("div");
  newElement.textContent = input;
  katas.appendChild(header);
  katas.appendChild(newElement);
}
function katas1(){
    displayResults("Katas1", JSON.stringify(gotCitiesCSV.split(",")));
   
    return gotCitiesCSV
}
katas1()

function katas2(){
    displayResults("Katas2", JSON.stringify(bestThing.split(" ")));
    return gotCitiesCSV
} 
katas2()

function katas3(){
    let CSVarray = gotCitiesCSV.split(',')
    displayResults ('Katas3', JSON.stringify(CSVarray.join('; ')));
    return CSVarray

}
katas3()

function katas4(){
    displayResults('katas4',JSON.stringify(lotrCitiesArray.toString('')));
return lotrCitiesArray

}
katas4()

function katas5(){
    displayResults('Katas5' ,JSON.stringify(lotrCitiesArray.slice(0,5)));
    return lotrCitiesArray
}
katas5()

function katas6(){
    displayResults('Katas6' ,JSON.stringify(lotrCitiesArray.slice(3)));
    return lotrCitiesArray
}
katas6()

function katas7(){
    displayResults('Katas7' ,JSON.stringify(lotrCitiesArray.slice(2,5)));
    return lotrCitiesArray
}
katas7()

function katas8(){
    let result = lotrCitiesArray.splice(2,1);
    displayResults('Katas8' ,JSON.stringify(lotrCitiesArray));
    return lotrCitiesArray
}
katas8()

function katas9(){
   let result = lotrCitiesArray.splice(5,2)
    displayResults('Katas9' ,JSON.stringify(lotrCitiesArray));
    return lotrCitiesArray
}
katas9()

function katas10(){
    let result =  lotrCitiesArray.splice(2,0, 'Rohan')
    displayResults('Kata10' ,JSON.stringify(lotrCitiesArray));
    return lotrCitiesArray 
}
katas10()

function katas11(){
    lotrCitiesArray.splice(5,1, 'Deadest Marshes')
    displayResults('Katas11',JSON.stringify(lotrCitiesArray));
    return lotrCitiesArray

}
katas11()

function katas12(){
    displayResults('Katas12' ,JSON.stringify(bestThing.slice(0,14)));
    return lotrCitiesArray
}
katas12()

function katas13(){
    displayResults('Katas13' ,JSON.stringify(bestThing.slice(-12)));
    return bestThing

}
katas13()

function katas14(){
    displayResults('Katas14' ,JSON.stringify(bestThing.slice(23,38)));
    return bestThing

}
katas14()

function katas15(){
    displayResults('Katas15' ,JSON.stringify(bestThing.substring(bestThing.length - 12)));
    return bestThing

}
katas15()

function katas16(){
displayResults('Katas16' ,JSON.stringify(bestThing.substring(23,38)));
    return bestThing 
}
katas16()

function katas17(){
   console.log(bestThing)
    displayResults('Katas17' ,JSON.stringify(bestThing.indexOf('only')));
    return bestThing

}
katas17()

function katas18(){
    
    displayResults('Katas18' ,JSON.stringify(bestThing.indexOf('bit')));
    return bestThing
}
katas18()

function katas19(){
    let citiesArray = gotCitiesCSV.split(",")
    let resultArray = []
    let doubleVowels = /aa|ee|ii|oo|uu/g
    for (let cities of citiesArray){
        if(doubleVowels.test(cities)){
            resultArray.push(cities)
        }
    }
    displayResults('Katas19' ,JSON.stringify(resultArray));
}
katas19()

function katas20(){
    let solution = find (lotrCitiesArray, "or")
    displayResults ('Katas20' ,JSON.stringify(solution));
    return lotrCitiesArray

}
katas20()

function katas21(){
    let result = []
    let bestThingArray = bestThing.split(" ")
    for (let words of bestThingArray){
        if (words.startsWith("b")=== true){
            result.push(words)
        }
       
    }
    displayResults('katas21' ,JSON.stringify(result));
}
katas21()

function katas22(){
    if(lotrCitiesArray.includes ('Mirkwood') === true){
        displayResults ('katas22', "yes")
        return lotrCitiesArray
    }
    else{
        displayResults ('katas22', "no")
        return lotrCitiesArray
    }
}
katas22()

function katas23(){
    if (lotrCitiesArray.includes ('Holywood') === true){
        displayResults ('katas23', "yes")
        return lotrCitiesArray
    }
    else{
        displayResults ('katas23', "no")
        return lotrCitiesArray
    }
}
katas23()

function katas24(){
 displayResults ('katas24' ,JSON.stringify (lotrCitiesArray.indexOf ('Mirkwood')))
}
katas24()

function katas25(){
    let result
    for  (let words of lotrCitiesArray ){
        if(words.includes (" ") === true){
        result = words
    }
    }
    
    displayResults ('katas25',JSON.stringify (result))
}
katas25()

function katas26(){
    displayResults ('katas26' ,JSON.stringify(lotrCitiesArray.reverse()))
}
katas26()

function katas27(){
    displayResults ('katas27' ,JSON.stringify(lotrCitiesArray.sort()))
}
katas27()

function katas28(){
 lotrCitiesArray.sort(function(a, b) {
 return a.length - b.length
})
displayResults('katas28' ,JSON.stringify(lotrCitiesArray))
}
katas28()

function katas29(){
    lotrCitiesArray.pop()
    displayResults ('katas29' ,JSON.stringify(lotrCitiesArray.pop()))

}
katas29()

function katas30(){
    lotrCitiesArray.push('Deadest Marshes')
    displayResults('katas30' ,JSON.stringify(lotrCitiesArray))
}
katas30()

function katas31(){
    lotrCitiesArray.shift()
    displayResults('katas31' ,JSON.stringify(lotrCitiesArray))
}
katas31()

function katas32(){
    lotrCitiesArray.unshift('Rohan')
    displayResults(('katas32'), JSON.stringify(lotrCitiesArray))
}
katas32()