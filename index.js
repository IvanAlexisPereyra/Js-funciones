// 1)

function parImpar(i) {
    if(i % 2 === 0) {
        console.log("El numero es par");
    }
    else{
        console.log("El numero es impar");
    }
}

parImpar(6)

// 2)

function mayorMenor(a, b) {
    if(a > b) {
        console.log(a, " es mayor que ", b);
    }
    else if(a < b) {
        console.log(a, " es menor que ", b);
    }
    else {
        console.log(a, " es igual que ", b);
    }
} 

mayorMenor(10, 7)

// 3)

function multiplo(i) {
    if(i % 5 === 0) {
        console.log("El numero es múltiplo de 5");
    }
    else{
        console.log("El numero no es múltiplo de 5");
    }
}

multiplo(25)

// 4)

function contador(i) {
    for(let cont = 0; cont <= i; cont++) {
        console.log(cont);
    }
}

contador(5)

// 5)

function repetir(a, b) {
    for( let cont = 1; cont <= a; cont++) {
        console.log(b);
    }
}

repetir(4, "verde")

// 6)

const frutas = ["Pera", "Naranja", "banana", "melon"]

function tipoFrutas(arr) {
    for( let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

tipoFrutas(frutas)

// 7)

const numeros = [5, 9, 15, 1, 43, 20, 96, 71, 26, 11]

function menosQuinto(num) {
    for( let i = 0; i < num.length; i++) {
        if(i != 4 ){
            console.log(num[i])
        }
    }
}

menosQuinto(numeros)

//8)

const multi = [10, 6, 9, 2]

function numeroMulti(x, y) {
    for( let i = 0; i < x.length; i++) {
        console.log(x[i] * y)
    }
}

numeroMulti(multi, 10)