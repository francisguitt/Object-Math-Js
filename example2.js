
//Os radianos são uma unidade para medir ângulos, onde:
//360 graus = 2π radianos
//180 graus = π radianos

//ara converter graus em radianos: 
//Radianos =  (Graus * π) / 180

// Converter 90 graus para radianos

let graus = 90;
let radianos = graus * (Math.PI / 180);
console.log(`90 graus em radianos: ${radianos}`); // 1.5708

//======================================================================================

//Para converter de radianos para graus: 
//Graus = (Radianos * 180) / π
// Converter π radianos para graus

radianos = Math.PI;
graus = radianos * (180 / Math.PI);
console.log(`π radianos em graus: ${graus}`); // 180

//=================================================================================

//Trigonometria Básica
//A trigonometria é usada para calcular relações entre ângulos e lados em triângulos.

//Seno (sin): sin(𝜃)= oposto/hypotenusa
//Cosseno (cos): cos(𝜃) = adjacente/hipotenusa
//Tangente (tan): tan(𝜃) = oposto/adjacente

// Calcular seno, cosseno e tangente para um ângulo de 45 graus
graus = 45;
radianos = graus * (Math.PI / 180);

let seno = Math.sin(radianos);    // Seno
let cosseno = Math.cos(radianos); // Cosseno
let tangente = Math.tan(radianos); // Tangente

console.log(`Seno(45): ${seno}`);      // ~0.707
console.log(`Cosseno(45): ${cosseno}`); // ~0.707
console.log(`Tangente(45): ${tangente}`); // ~1

//===============================================================================

//Hipotenusa
//A hipotenusa é o lado mais longo de um triângulo retângulo. Podemos calculá-la usando o Teorema de Pitágoras: 
//Hipotenusa ² = Cateto Oposto ² + Cateto Adjacente ²

//Ou diretamente com: 
//Hipotenusa = √(Cateto Oposto²  + Cateto Adjacente²

// Encontrar a hipotenusa de um triângulo retângulo
let catetoOposto = 3;
let catetoAdjacente = 4;
let hipotenusa = Math.hypot(catetoOposto, catetoAdjacente);

console.log(`Hipotenusa: ${hipotenusa}`); // 5

//=================================================================================================

//Calcular o Perímetro de um Círculo
//O perímetro (circunferência) de um círculo é dado por: 
//Périmetro = 2πr Onde r é o raio.

// Calcular o perímetro de um círculo com raio 5
let raio = 5;
let perimetro = 2 * Math.PI * raio;

console.log(`Perímetro do círculo: ${perimetro}`); // ~31.4159

//============================================================================================
//Calcular a Área de um Círculo
//A área de um círculo é dada por: 
//Área =πr² 
// Calcular a área de um círculo com raio 5
raio = 5;
let area = Math.PI * Math.pow(raio, 2);

console.log(`Área do círculo: ${area}`); // ~78.5398

//==================================================================================================
// Calcular a Altura em um Triângulo Isóscele
//Em um triângulo isósceles, a altura pode ser calculada usando o Teorema de Pitágoras: 
// h = √(a² - (b/2)²)
//a: lados iguais
// b: base
// Calcular a altura de um triângulo isósceles
let ladoIgual = 10;
let base = 12;

let altura = Math.sqrt(Math.pow(ladoIgual, 2) - Math.pow(base / 2, 2));

console.log(`Altura do triângulo: ${altura}`); // ~8.66
//===========================================================================================


//Calcular o Ângulo em um Triângulo Retângulo
//
//O ângulo pode ser calculado com a função inversa da trigonometria, por exemplo: 

//𝜃 = arctan (oposto/adjacente)

// Calcular o ângulo em um triângulo retângulo
catetoOposto = 3;
catetoAdjacente = 4;

let anguloRadianos = Math.atan(catetoOposto / catetoAdjacente);
let anguloGraus = anguloRadianos * (180 / Math.PI);

console.log(`Ângulo em radianos: ${anguloRadianos}`); // ~0.6435
console.log(`Ângulo em graus: ${anguloGraus}`);       // ~36.87

//==============================================================================