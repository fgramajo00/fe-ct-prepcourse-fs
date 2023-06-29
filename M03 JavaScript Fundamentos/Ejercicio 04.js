/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   num = Math.pow(num,2)
   return num;
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   num = Math.pow(num,3)
   return num;
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   resultado = Math.pow(num,exponent);
   return resultado;
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   Numero=Math.round(num);
   return Numero;
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   redondear=Math.ceil(num);
   return redondear;
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   azar = Math.random();
   return azar;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
