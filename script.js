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

  event.preventDefault();

  //Formula para calcular saldo tecnico
  saldoTecnico =
    ivaVenta21 +
    ivaVenta105 +
    ivaVenta27 -
    ivaCompra21 -
    ivaCompra105 -
    ivaCompra27 -
    saldoTecnicoAnterior;

  showSaldoTecnico = document.getElementById("saldotecnico-show");
  showSaldoTecnico.innerHTML = saldoTecnico;

  //Formula para calcular saldo libre disponibilidad
  saldoLibreDisponibilidad =
    retIva + perIva + perAduaneras + saldoLibreAnterior;

  showSaldoLibreDisponibilidad = document.getElementById("saldo-ld-show");
  showSaldoLibreDisponibilidad.innerHTML = saldoLibreDisponibilidad;

  //Formula para calcular saldo a pagar AFIP
  saldoAfip = saldoTecnico - saldoLibreDisponibilidad;

  showSaldoAfip = document.getElementById("saldo-afip-show");
  showSaldoAfip.innerHTML = saldoAfip;
};

mostrarValores = () => {
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

  //Target de campos donde se muestra el valor ingresado / IVA
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

  //Equivalencias
  showIvaVenta21.innerHTML = ivaVenta21;
  showIvaVenta105.innerHTML = ivaVenta105;
  showIvaVenta27.innerHTML = ivaVenta27;
  showIvaCompra21.innerHTML = ivaCompra21;
  showIvaCompra105.innerHTML = ivaCompra105;
  showIvaCompra27.innerHTML = ivaCompra27;
  showRetIva.innerHTML = retIva;
  showPerIva.innerHTML = perIva;
  showPerAduaneras.innerHTML = perAduaneras;
  showSaldoTecnicoAnterior.innerHTML = saldoTecnicoAnterior;
  showSaldoLibreAnterior.innerHTML = saldoLibreAnterior;
};
