function calcularConagua() {
    let metros = parseFloat(document.getElementById("metros").value);
    let precioM3 = 21.10;
    let total = metros * precioM3;
    document.getElementById("resul").textContent = "El total a pagar es: $" + total;
}

function calcularLuz() {
    let cantidadKw = document.getElementById("kw");
    let kwConsumidos = parseFloat(cantidadKw.value);
    let precioKW = 3.50;
    let pagoTotal = kwConsumidos * precioKW;
    document.getElementById("resul").textContent = "El total a pagar por luz es: $" + pagoTotal;
}
function calcularArticulo() {
    let precioOriginal = parseFloat(document.getElementById("precioBase").value);
    let descuento = precioOriginal * 0.20;
    let precioConDescuento = precioOriginal - descuento;
    let iva = precioConDescuento * 0.15;
    let precioFinal = precioConDescuento + iva;
    document.getElementById("resDesc").textContent = "Precio con descuento (20%): $" + precioConDescuento.toFixed(2);
    document.getElementById("resul").textContent = "Total final a pagar (IVA incluido): $" + precioFinal.toFixed(2);
}
function calcularAhorro() {
    let sueldoSemanal = parseFloat(document.getElementById("sueldo").value);
    let ahorroSemanal = sueldoSemanal * 0.15;
    let ahorroMensual = ahorroSemanal * 4;
    let ahorroAnual = ahorroMensual * 12;
    document.getElementById("resMensual").textContent = "Ahorro mensual: $" + ahorroMensual.toFixed(2);
    document.getElementById("resul").textContent = "Total ahorrado en un año: $" + ahorroAnual.toFixed(2);
}
function calcularViaticos() {
    let numDias = parseFloat(document.getElementById("dias").value);
    let costoHotelDia = parseFloat(document.getElementById("hotel").value);
    let costoComidaDia = parseFloat(document.getElementById("comida").value);
    let otrosGastosDia = 100.00;
    let totalHotel = numDias * costoHotelDia;
    let totalComida = numDias * costoComidaDia;
    let totalOtros = numDias * otrosGastosDia;
    let totalCheque = totalHotel + totalComida + totalOtros;
    document.getElementById("desgloseHotel").textContent = "Hotel: $" + totalHotel.toFixed(2);
    document.getElementById("desgloseComida").textContent = "Comida: $" + totalComida.toFixed(2);
    document.getElementById("desgloseOtros").textContent = "Otros gastos: $" + totalOtros.toFixed(2);
    document.getElementById("resul").textContent = "Total del cheque: $" + totalCheque.toFixed(2);
}
function calcularPotencia() {
    let r = parseFloat(document.getElementById("resistencia").value);
    let i = parseFloat(document.getElementById("intensidad").value);
    let v = r * i;
    let p = v * i;
    document.getElementById("resVoltaje").textContent = "Voltaje calculado (V): " + v + "V";
    document.getElementById("resul").textContent = "Potencia Total (P): " + p + " Watts";
}
function calcularCuadrado() {
    let lado = parseFloat(document.getElementById("lado").value);
    let area = lado * lado;
    document.getElementById("resul").textContent = "El área del cuadrado es: " + area;
}
function calcularPromedio() {
    let calif1 = parseFloat(document.getElementById("ex1").value);
    let calif2 = parseFloat(document.getElementById("ex2").value);
    let calif3 = parseFloat(document.getElementById("ex3").value);
    let examen1 = calif1 * 0.25;
    let examen2 = calif2 * 0.25;
    let examen3 = calif3 * 0.50;
    let promedioFinal = examen1 + examen2 + examen3;
    document.getElementById("resul").textContent = "El promedio final es: " + promedioFinal.toFixed(1);
}
function calcularVida() {
    let edad = parseFloat(document.getElementById("edad").value);
    let meses = edad * 12;
    let semanas = edad * 52;
    let dias = edad * 365;
    let horas = dias * 24;
    document.getElementById("resMeses").textContent = "Has vivido aproximadamente " + meses + " meses.";
    document.getElementById("resSemanas").textContent = "Has vivido aproximadamente " + semanas + " semanas.";
    document.getElementById("resDias").textContent = "Has vivido aproximadamente " + dias + " días.";
    document.getElementById("resul").textContent = "¡Y un total de " + horas + " horas!";
}
function calcularLlamada() {
    let tiempo = parseFloat(document.getElementById("minutos").value);
    let costoPorMinuto = 2.50;
    let totalLlamada = tiempo * costoPorMinuto;
    document.getElementById("resul").textContent = "El total a pagar es: $" + totalLlamada.toFixed(2);
}