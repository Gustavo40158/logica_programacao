let ano = 2024

if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
    console.log("ano bissexto")
} else {
    console.log("ano não bissexto")
}