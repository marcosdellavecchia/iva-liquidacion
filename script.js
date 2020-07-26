liquidacion = document.getElementById("liquidacion");
liquidacion.addEventListener("change", () => {
  mostrarValores();
  validarPositivos();
});

calcular = document.getElementById("calcular");
calcular.addEventListener("click", () => {
  calcularIva();
  cambiarColores();
});

calcularIva = () => {
  //Target de inputs
  var ivaVenta21 = document.getElementById("venta21-input").value * 0.21;
  var ivaVenta105 = document.getElementById("venta105-input").value * 0.105;
  var ivaVenta27 = document.getElementById("venta27-input").value * 0.27;
  var ivaCompra21 = document.getElementById("compra21-input").value * 0.21;
  var ivaCompra105 = document.getElementById("compra105-input").value * 0.105;
  var ivaCompra27 = document.getElementById("compra27-input").value * 0.27;
  var saldoTecnicoAnterior = document.getElementById("saldotecnico-input")
    .value;
  var retIva = document.getElementById("retenciones-input").value * 1;
  var perIva = document.getElementById("percepciones-input").value * 1;
  var perAduaneras = document.getElementById("aduaneras-input").value * 1;
  var saldoLibreAnterior = document.getElementById("saldold-input").value * 1;

  //Calcular saldo tecnico
  saldoTecnico =
    ivaVenta21 +
    ivaVenta105 +
    ivaVenta27 -
    ivaCompra21 -
    ivaCompra105 -
    ivaCompra27 -
    saldoTecnicoAnterior;

  showSaldoTecnico = document.getElementById("saldotecnico-show");
  showSaldoTecnico.innerHTML = saldoTecnico.toFixed(2);

  //Calcular saldo libre disponibilidad
  saldoLibreDisponibilidad =
    retIva + perIva + perAduaneras + saldoLibreAnterior;

  showSaldoLibreDisponibilidad = document.getElementById("saldo-ld-show");

  if (saldoTecnico < saldoLibreDisponibilidad) {
    showSaldoLibreDisponibilidad.innerHTML = saldoLibreDisponibilidad.toFixed(
      2
    );
  } else {
    showSaldoLibreDisponibilidad.innerHTML = "0.00";
  }

  //Calcular saldo a pagar AFIP
  saldoAfip = saldoTecnico - saldoLibreDisponibilidad;

  showSaldoAfip = document.getElementById("saldo-afip-show");
  showSaldoAfip.innerHTML = saldoAfip.toFixed(2);
};

cambiarColores = () => {
  //Saldo tecnico
  showSaldoTecnico = document.getElementById("saldotecnico-show");

  if (showSaldoTecnico.innerHTML > 0) {
    showSaldoTecnico.classList.add("saldo-pagar");
    showSaldoTecnico.classList.remove("saldo-favor");
  } else if (showSaldoTecnico.innerHTML < 0) {
    showSaldoTecnico.classList.add("saldo-favor");
    showSaldoTecnico.classList.remove("saldo-pagar");
  } else {
    showSaldoTecnico.classList.remove("saldo-pagar");
    showSaldoTecnico.classList.remove("saldo-favor");
  }

  //Saldo libre disponibilidad
  showSaldoLibreDisponibilidad = document.getElementById("saldo-ld-show");

  if (showSaldoLibreDisponibilidad.innerHTML > 0) {
    showSaldoLibreDisponibilidad.classList.add("saldo-favor");
  } else {
    showSaldoLibreDisponibilidad.classList.remove("saldo-favor");
  }

  //Saldo AFIP
  showSaldoAfip = document.getElementById("saldo-afip-show");

  if (showSaldoAfip.innerHTML > 0) {
    showSaldoAfip.classList.add("saldo-pagar");
    showSaldoAfip.classList.remove("saldo-favor");
  } else if (showSaldoAfip.innerHTML < 0) {
    showSaldoAfip.classList.add("saldo-favor");
    showSaldoAfip.classList.remove("saldo-pagar");
  } else {
    showSaldoAfip.classList.remove("saldo-pagar");
    showSaldoAfip.classList.remove("saldo-favor");
  }
};

validarPositivos = () => {
  var numInput = document.querySelector("input");
  if (numInput.value < 0) {
    alert("Por favor, ingresa un número positivo.");
    numInput.focus();
  }
};

mostrarValores = () => {
  //Target de inputs
  var ivaVenta21 = document.getElementById("venta21-input").value * 0.21;
  var ivaVenta105 = document.getElementById("venta105-input").value * 0.105;
  var ivaVenta27 = document.getElementById("venta27-input").value * 0.27;
  var ivaCompra21 = document.getElementById("compra21-input").value * 0.21;
  var ivaCompra105 = document.getElementById("compra105-input").value * 0.105;
  var ivaCompra27 = document.getElementById("compra27-input").value * 0.27;
  var saldoTecnicoAnterior =
    document.getElementById("saldotecnico-input").value * 1;
  var retIva = document.getElementById("retenciones-input").value * 1;
  var perIva = document.getElementById("percepciones-input").value * 1;
  var perAduaneras = document.getElementById("aduaneras-input").value * 1;
  var saldoLibreAnterior = document.getElementById("saldold-input").value * 1;

  //Target de campos donde se va a mostrar el valor ingresado
  var showIvaVenta21 = document.getElementById("venta21-show");
  var showIvaVenta105 = document.getElementById("venta105-show");
  var showIvaVenta27 = document.getElementById("venta27-show");
  var showIvaCompra21 = document.getElementById("compra21-show");
  var showIvaCompra105 = document.getElementById("compra105-show");
  var showIvaCompra27 = document.getElementById("compra27-show");
  var showSaldoTecnicoAnterior = document.getElementById("saldo-tecnico-show");
  var showRetIva = document.getElementById("retenciones-show");
  var showPerIva = document.getElementById("percepciones-show");
  var showPerAduaneras = document.getElementById("aduaneras-show");
  var showSaldoLibreAnterior = document.getElementById(
    "saldo-ld-anterior-show"
  );

  //Mostrar valores y redondear decimales
  showIvaVenta21.innerHTML = ivaVenta21.toFixed(2);
  showIvaVenta105.innerHTML = ivaVenta105.toFixed(2);
  showIvaVenta27.innerHTML = ivaVenta27.toFixed(2);
  showIvaCompra21.innerHTML = ivaCompra21.toFixed(2);
  showIvaCompra105.innerHTML = ivaCompra105.toFixed(2);
  showIvaCompra27.innerHTML = ivaCompra27.toFixed(2);
  showRetIva.innerHTML = retIva.toFixed(2);
  showPerIva.innerHTML = perIva.toFixed(2);
  showPerAduaneras.innerHTML = perAduaneras.toFixed(2);
  showSaldoTecnicoAnterior.innerHTML = saldoTecnicoAnterior.toFixed(2);
  showSaldoLibreAnterior.innerHTML = saldoLibreAnterior.toFixed(2);
};
