let nombreCompleto ="";
let edad = 0 ;
let tipodeDocumento ="";
let numeroDocumento ="";
let salarioEnPesos = 0;
let comisiones = 0;
let totalDeHorasExtras = 0;
let nivelDeRiesgo = ""; 

// comment

const smlv = 1750905;
const axuliodeltransporte =249095;
const porcentajeSalud = 0.04;
const porcentajePension = 0.04;
const porcentajeibc = 0.7;
const pocentajefondoDeSolaridad = 0.01;
const riesgo1 = 0.00522;
const riesgo2 = 0.01044;
const riesgo3 = 0.02436;
const riesgo4 = 0.04350;
const riesgo5 = 0.06960;

// calculos

let ibc = (salario+comisiones+totalDeHorasExtras)*porcentajeibc;
let salud = porcentajeibc*porcentajeSalud;
let Pension = porcentajePension*porcentajeibc;
let fondoDeSoliradidad = ibc*pocentajefondoDeSolaridad;

// calculo de riesgo

if (calificacionNivelDeRiesgo === "riesgo1") (nivelDeRiesgo = porcentajeibc*riesgo1)
else if (calificacionNivelDeRiesgo === "riesgo2") (nivelDeRiesgo = porcentajeibc*riesgo2)
else if (calificacionNivelDeRiesgo === "riesgo3") (nivelDeRiesgo = porcentajeibc*riesgo3)
else if (calificacionNivelDeRiesgo === "riesgo4") (nivelDeRiesgo = porcentajeibc*riesgo4)
else if (calificacionNivelDeRiesgo === "riesgo5") (nivelDeRiesgo = porcentajeibc*riesgo5)
// condicionales 

if  