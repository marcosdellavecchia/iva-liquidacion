calcularIva = () => {
  //Target de inputs
  var ivaVenta21 = document.getElementById("venta21").value * 0.21;
  var ivaVenta105 = document.getElementById("venta105").value * 0.105;
  var ivaVenta27 = document.getElementById("venta27").value * 0.27;
  var ivaCompra21 = document.getElementById("compra21").value * 0.21;
  var ivaCompra105 = document.getElementById("compra105").value * 0.105;
  var ivaCompra27 = document.getElementById("compra27").value * 0.27;
  var saldoTecnicoAnterior = document.getElementById("saldotecnico").value;
  var saldoTecnicoAFIP = null;
  var saldoTecnicoContrib = null;
  var retIva = parseFloat(document.getElementById("retenciones").value);
  var perIva = parseFloat(document.getElementById("percepciones").value);
  var perAduaneras = parseFloat(document.getElementById("aduaneras").value);
  var saldoLibreAnterior = parseFloat(document.getElementById("saldold").value);
  var saldoLibreActual = null;
  var saldoTotalAfip = null;

  //Target de campos de muestra
  var showIvaVenta21 = document.getElementById("iva-venta-21");
  var showIvaVenta105 = document.getElementById("venta105");
  var showIvaVenta27 = document.getElementById("venta27");
  var showIvaCompra21 = document.getElementById("compra21");
  var showIvaCompra105 = document.getElementById("compra105");
  var showIvaCompra27 = document.getElementById("compra27");
  var showSaldoTecnicoAnterior = document.getElementById("saldotecnico");
  var showSaldoTecnicoAFIP = null;
  var showSaldoTecnicoContrib = null;
  var showRetIva = document.getElementById("retenciones");
  var showPerIva = document.getElementById("percepciones");
  var showPerAduaneras = document.getElementById("aduaneras");
  var showSaldoLibreAnterior = document.getElementById("saldold");
  var showSaldoLibreActual = null;
  var showSaldoTotalAfip = null;

  //Equivalencias (Se muestra al lado del valor que se ingresa)
  showIvaVenta21.innerHTML = ivaVenta21;
  showIvaVenta105.innerHTML = ivaVenta105;
  showIvaVenta27.innerHTML = ivaVenta27;
  showIvaCompra21.innerHTML = ivaCompra21;
  showIvaCompra105.innerHTML = ivaCompra105;
  showIvaCompra27.innerHTML = ivaCompra27;

  saldoTecnico =
    ivaVenta21 +
    ivaVenta105 +
    ivaVenta27 -
    ivaCompra21 -
    ivaCompra105 -
    ivaCompra27 -
    saldoTecnicoAnterior;

  alert("El saldo tecnico es " + saldoTecnico);

  saldoLibreDisponibilidad =
    retIva + perIva + perAduaneras + saldoLibreAnterior;

  alert("El saldo de libre disponibilidad es " + saldoLibreDisponibilidad);

  saldoAFIP = saldoTecnico - saldoLibreDisponibilidad;
  alert("Saldo a pagar a AFIP " + saldoAFIP);
};
