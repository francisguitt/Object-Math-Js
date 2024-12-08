
// Calcular a área e o perímetro de um retângulo
let base = 10; // Base do retângulo
let altura = 5; // Altura do retângulo

let areaRetangulo = base * altura; // Área
let perimetroRetangulo = 2 * (base + altura); // Perímetro

console.log(`Área do retângulo: ${areaRetangulo}`); // Saída: 50
console.log(`Perímetro do retângulo: ${perimetroRetangulo}`); // Saída: 30


// Calcular a área de um triângulo com base e altura conhecidas
base = 8;
altura = 6;

let areaTriangulo = (base * altura) / 2;
console.log(`Área do triângulo: ${areaTriangulo}`); // Saída: 24


// Calcular a área de um trapézio
let base1 = 10; // Base maior
let base2 = 6;  // Base menor
altura = 4;

let areaTrapezio = ((base1 + base2) * altura) / 2;
console.log(`Área do trapézio: ${areaTrapezio}`); // Saída: 32


// Calcular a área de um hexágono regular (6 lados)
let numeroLados = 6;
let lado = 4;

let areaPoligono = (numeroLados * Math.pow(lado, 2)) / (4 * Math.tan(Math.PI / numeroLados));
console.log(`Área do hexágono: ${areaPoligono.toFixed(2)}`); // Saída: 41.57


// Calcular a distância entre dois pontos
let x1 = 1, y1 = 2;
let x2 = 4, y2 = 6;

let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(`Distância entre os pontos: ${distancia}`); // Saída: 5




// Calcular o ângulo entre dois vetores
let vetor1 = { x: 1, y: 2 };
let vetor2 = { x: 3, y: 4 };

// Produto Escalar
let produtoEscalar = vetor1.x * vetor2.x + vetor1.y * vetor2.y;

// Produto dos Módulos
let moduloVetor1 = Math.sqrt(Math.pow(vetor1.x, 2) + Math.pow(vetor1.y, 2));
let moduloVetor2 = Math.sqrt(Math.pow(vetor2.x, 2) + Math.pow(vetor2.y, 2));
let produtoModulos = moduloVetor1 * moduloVetor2;

// Calcular o ângulo em radianos e converter para graus
let cosTheta = produtoEscalar / produtoModulos;
let anguloRadianos = Math.acos(cosTheta);
let anguloGraus = anguloRadianos * (180 / Math.PI);

console.log(`Ângulo entre os vetores: ${anguloGraus.toFixed(2)}°`); // Saída: 15.26°

