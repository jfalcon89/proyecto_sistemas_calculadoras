const btnCalculo = document.getElementById("btn");

btnCalculo.addEventListener("click", () => {
    event.preventDefault();

    const monto = parseInt(document.getElementById("monto").value);
    const cuota = parseInt(document.getElementById("cuota").value);
    const interes = parseInt(document.getElementById("interes").value);
    let labelResul = document.getElementById("labelResul");
    let labelRespuesta = document.getElementById("labelRespuesta");

    if (monto == "") {
        alert("favor completar este campo");
    } else {

        const operacion = monto * (interes / 100) / cuota + monto / cuota;
        labelResul.textContent = "La cuota mensual serian";
        labelRespuesta.textContent = `$${operacion} Pesos`;
    }

});