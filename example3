
trigonometria, aritmética e geometria. Faremos uso de conceitos como áreas, perímetros e propriedades de figuras geométricas além dos triângulos e círculos.

Propriedades de Retângulos
O retângulo é uma figura geométrica com:

Base ( 𝑏 b) e Altura ( ℎ h). Todos os ângulos internos iguais a 90 graus. Fórmulas Importantes Área: A ˊ

rea = 𝑏 × ℎ A ˊ rea=b×h
Perímetro: Per ı ˊ 2. metro
2 × ( 𝑏 + ℎ ) Per ı ˊ metro=2×(b+h)

Exemplo Prático javascript Copiar código // Calcular a área e o perímetro de um retângulo let base = 10; // Base do retângulo let altura = 5; // Altura do retângulo

let areaRetangulo = base * altura; // Área let perimetroRetangulo = 2 * (base + altura); // Perímetro

console.log(Área do retângulo: ${areaRetangulo}); // Saída: 50 console.log(Perímetro do retângulo: ${perimetroRetangulo}); // Saída: 30 9. Propriedades de Triângulos Classificação de Triângulos Triângulo Equilátero: Todos os lados são iguais. Triângulo Isósceles: Dois lados iguais. Triângulo Escaleno: Todos os lados diferentes. Fórmula da Área A área de um triângulo qualquer pode ser calculada usando a fórmula: A ˊ 3. rea
base × altura 2 A ˊ rea= 2 base×altura​

Exemplo Prático javascript Copiar código // Calcular a área de um triângulo com base e altura conhecidas base = 8; altura = 6;

let areaTriangulo = (base * altura) / 2; console.log(Área do triângulo: ${areaTriangulo}); // Saída: 24 10. Propriedades de Trapézios Um trapézio tem dois lados paralelos chamados de bases ( 𝑏 1 b1 e 𝑏 2 b2) e uma altura ( ℎ h).

Fórmula da Área A área de um trapézio é dada por: A ˊ 4. rea
( 𝑏 1 + 𝑏 2 ) × ℎ 2 A ˊ rea= 2 (b1+b2)×h​

Exemplo Prático javascript Copiar código // Calcular a área de um trapézio let base1 = 10; // Base maior let base2 = 6; // Base menor altura = 4;

let areaTrapezio = ((base1 + base2) * altura) / 2; console.log(Área do trapézio: ${areaTrapezio}); // Saída: 32 11. Trabalhando com Polígonos Regulares Um polígono regular é uma figura com lados e ângulos iguais. Por exemplo, quadrados, pentágonos e hexágonos.

Fórmulas Importantes Área de um Polígono Regular: A ˊ 5. rea
𝑛 × 𝑙 2 4 × tan ⁡ ( 𝜋 / 𝑛 ) A ˊ rea= 4×tan(π/n) n×l 2

​

Onde 𝑛 n é o número de lados e 𝑙 l é o comprimento de cada lado. Exemplo Prático javascript Copiar código // Calcular a área de um hexágono regular (6 lados) let numeroLados = 6; let lado = 4;

let areaPoligono = (numeroLados * Math.pow(lado, 2)) / (4 * Math.tan(Math.PI / numeroLados)); console.log(Área do hexágono: ${areaPoligono.toFixed(2)}); // Saída: 41.57 12. Cálculo de Distância entre Dois Pontos No plano cartesiano, a distância entre dois pontos 𝐴 ( 𝑥 1 , 𝑦 1 ) A(x1,y1) e 𝐵 ( 𝑥 2 , 𝑦 2 ) B(x2,y2) é dada por: Dist a ˆ 6. ncia
( 𝑥 2 − 𝑥 1 ) 2 + ( 𝑦 2 − 𝑦 1 ) 2 Dist a ˆ ncia= (x2−x1) 2 +(y2−y1) 2

​

Exemplo Prático javascript Copiar código // Calcular a distância entre dois pontos let x1 = 1, y1 = 2; let x2 = 4, y2 = 6;

let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); console.log(Distância entre os pontos: ${distancia}); // Saída: 5 13. Exercício Prático: Cálculo do Ângulo entre Vetores O ângulo entre dois vetores 𝐴 ( 𝑥 1 , 𝑦 1 ) A(x1,y1) e 𝐵 ( 𝑥 2 , 𝑦 2 ) B(x2,y2) é dado por: cos ⁡ ( 𝜃 7. )
Produto Escalar Produto dos M o ˊ dulos cos(θ)= Produto dos M o ˊ dulos Produto Escalar​

Onde:

Produto Escalar: 𝑥 1 × 𝑥 2 + 𝑦 1 × 𝑦 2 x1×x2+y1×y2 Produto dos Módulos: 𝑥 1 2 + 𝑦 1 2 × 𝑥 2 2 + 𝑦 2 2 x1 2 +y1 2

​× x2 2 +y2 2

​

Exemplo Prático javascript Copiar código // Calcular o ângulo entre dois vetores let vetor1 = { x: 1, y: 2 }; let vetor2 = { x: 3, y: 4 };

// Produto Escalar let produtoEscalar = vetor1.x * vetor2.x + vetor1.y * vetor2.y;

// Produto dos Módulos let moduloVetor1 = Math.sqrt(Math.pow(vetor1.x, 2) + Math.pow(vetor1.y, 2)); let moduloVetor2 = Math.sqrt(Math.pow(vetor2.x, 2) + Math.pow(vetor2.y, 2)); let produtoModulos = moduloVetor1 * moduloVetor2;

// Calcular o ângulo em radianos e converter para graus let cosTheta = produtoEscalar / produtoModulos; let anguloRadianos = Math.acos(cosTheta); let anguloGraus = anguloRadianos * (180 / Math.PI);

console.log(Ângulo entre os vetores: ${anguloGraus.toFixed(2)}°); // Saída: 15.26°
