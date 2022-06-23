const sueldoBruto = document.getElementById("sueldoBruto");
const afp = document.getElementById("afp");
const ars = document.getElementById("ars");
const cooperativa = document.getElementById("cooperativa");
const club = document.getElementById("club");
const prestamos = document.getElementById("prestamos");
const totalDescuentos = document.getElementById("totalDescuentos");
const sueldoNeto = document.getElementById("sueldoNeto");
const codigo = document.getElementById("codigo");
const estatus = document.getElementById("estatus");
const nombre = document.getElementById("nombre");
const cedula = document.getElementById("cedula");

afp.value = 0.0287 * sueldoBruto.value;
ars.value = 0.03 * sueldoBruto.value;
cooperativa.value = 0.02 * sueldoBruto.value;
club.value = 0.006 * sueldoBruto.value;
prestamos.value = 0.018 * sueldoBruto.value;
totalDescuentos.value = parseInt(afp.value) + parseInt(ars.value) + parseInt(cooperativa.value) + parseInt(club.value) + parseInt(prestamos.value);
sueldoNeto.value = sueldoBruto.value - totalDescuentos.value;

sueldoBruto.addEventListener("change", () => {
    console.log("hiciste cambio");

    (function() {

        afp.value = 0.0287 * sueldoBruto.value;
        ars.value = 0.03 * sueldoBruto.value;;
        cooperativa.value = 0.02 * sueldoBruto.value;
        club.value = 0.006 * sueldoBruto.value;
        prestamos.value = 0.018 * sueldoBruto.value;
        totalDescuentos.value = parseInt(afp.value) + parseInt(ars.value) + parseInt(cooperativa.value) + parseInt(club.value) + parseInt(prestamos.value);
        sueldoNeto.value = sueldoBruto.value - totalDescuentos.value;

    })();

});

// modal reporte

const close = document.querySelector(".close");
const btnImprimir = document.querySelector(".btnImprimir");
const btnParametros = document.querySelector(".btnParametros");

btnImprimir.addEventListener("click", () => {
    console.log("le diste abrir reporte")

    const modal_container = document.querySelector(".modal_container");
    modal_container.style.visibility = "visible"
    const modal_reporte = document.querySelector(".modal_reporte");
    modal_reporte.classList.add("efecto");

    // llenado de datos del reporte

    (function() {
        const nombreR = document.getElementById("nombreR").value = nombre.value;
        const cedulaR = document.getElementById("cedulaR").value = cedula.value;
        const codigoR = document.getElementById("codigoR").value = codigo.value;
        const sueldoBrutoR = document.getElementById("sueldoBrutoR").textContent = sueldoBruto.value;
        const afpR = document.getElementById("afpR").textContent = afp.value;
        const arsR = document.getElementById("arsR").textContent = ars.value;
        const cooperativaR = document.getElementById("cooperativaR").textContent = cooperativa.value;
        const clubR = document.getElementById("clubR").textContent = club.value;
        const prestamosR = document.getElementById("prestamosR").textContent = prestamos.value;
        // const sueldoBrutoR = document.getElementById("sueldoBrutoR").textContent = sueldoBruto.value;
        const totalDescuentosR = document.getElementById("totalDescuentosR").value = totalDescuentos.value;
        const sueldoNetoR = document.getElementById("sueldoNetoR").value = sueldoNeto.value;

    })();

});


close.addEventListener("click", () => {
    console.log("le diste a cerrar reporte")

    const modal_container = document.querySelector(".modal_container");
    modal_container.style.visibility = "hidden"
    const modal_reporte = document.querySelector(".modal_reporte");
    modal_reporte.classList.remove("efecto");

});

const btnImprimirR = document.querySelector(".btnImprimirR");

btnImprimirR.addEventListener("click", () => {
    console.log("click en generar reporte")

    var element = document.querySelector('.modal_reporte');
    var opt = {
        margin: 0,
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3, height: "590" },
        jsPDF: { unit: 'in', format: 'b2', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();

    // Old monolithic-style usage:
    // html2pdf(element, opt);
});