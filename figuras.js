// CUADRADO ********
function perimetroCuadrado(lado){
    return diametro = lado * 4;
}
function areaCuadrado(lado){
    return diametro  = lado * lado;
}

// TRIÁNGULO ********
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;
const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}

function areaTriangulo(lado3, altura){
    return (lado3 * altura) / 2;
}

// CIRCULO ********
const pi= Math.PI;

function perimetroCirculo(diametro){
    return diametro * pi;
}

function areaCirculo(radio){
    return (radio * radio) * pi
}




// HTML

function calPerimetroCuadrado(){
    const lado =  document.getElementById("ladoCuadrado").value;
    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
}

function calAreaCuadrado(){
    const lado = document.getElementById("ladoCuadrado").value;
    const area = areaCuadrado(lado);
    alert(area);
}


// ******** DESCUENTO *****************
function ejecutarDCTO(precio, dcto){
    const porcentajeConDCTO = 100 - dcto;
    const preConDCTO = (precio * porcentajeConDCTO) / 100;
    return preConDCTO;
}

function calDCTO(){
    const precio = document.getElementById("inpurPrice").value;
    const dcto = document.getElementById("inputDcto").value;
    const totalId = document.getElementById("total");
    
    const pcd = ejecutarDCTO(precio, dcto);
    totalId.innerText = pcd + " $";
}

function calCupon(){

    
    const precio = document.getElementById("inputPrice").value;
    const cupon = document.getElementById("inputCupon").value;
    const totalId = document.getElementById("totalCup");
    console.log(cupon);
    
    /*
    const coupons = [
        "JuanDC_es_Batman",
        "pero_no_le_digas_a_nadie",
        "es_un_secreto",
    ];
    */

    /*
    let descuento;
    
    switch(cupon) {
        case coupons[0]: // "JuanDC_es_Batman"
        dcto = 15;
        break;
        case coupons[1]: // "pero_no_le_digas_a_nadie"
        dcto = 30;
        break;
        case coupons[2]: // "es_un_secreto"
        dcto = 25;
        break;
    }
    */

    /*
    if (!coupons.includes(cupon)) {
        alert("El cupón " + cupon + "no es válido");
     } else if (cupon === "JuanDC_es_Batman") {
        dcto = 15;
     } else if (cupon === "pero_no_le_digas_a_nadie") {
        dcto = 30;
     } else if (cupon === "es_un_secreto") {
        dcto = 25;
     }
    */

     const coupons = [
        {
            name: "JuanDC_es_Batman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25,
        },
    ];

    const isCouponValueValid = function (coupon) {
        return coupon.name === cupon;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + userCouponValue + "no es válido");
    } else {
        const dcto = userCoupon.discount;
        const pcd = ejecutarDCTO(precio, dcto);
        totalId.innerText = pcd + " $";
    }

    /*
    const pcd = ejecutarDCTO(precio, dcto);
    totalId.innerText = pcd + " $";
    */
}