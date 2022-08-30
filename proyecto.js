
/* For of
La idea es que los 5 primeros en registrarse tengan algun descuento
*/


class Cliente{
    constructor(nombre , apellido , telefono , dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.dni = dni;

    }
}

let lista_cliente = [];

for (let i = 0 ; i < 5 ; i++){
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let telefono = prompt("Ingrese su telefono");
    let dni = prompt("Ingrese su dni");
    

    let nuevo_cliente = new Cliente(nombre , apellido , telefono , dni);
    lista_cliente.push(nuevo_cliente);
}

console.log(lista_cliente);



for(let cliente of lista_cliente){
    console.log("<--------->")
    console.log("Nombre " , cliente.nombre);
    console.log("Apellido " , cliente.nombre);
    console.log("Telefono " , cliente.telefono);
    console.log("DNI " , cliente.dni);
    
}



 /* este while es para que los usuarios se registren, todavía no tengo pensado si el for of de arriba lo voy a dejar o sacar por este arme este while */
 
 let empezar = prompt("enter para empezar, salir para salir");
   while(empezar !== "salir"){
      let nombre = prompt("Ingrese su nombre") 
       let apellido = prompt("Ingrese su apellido");
       let telefono = prompt("Ingrese su telefono");
       let dni = prompt("Ingrese su dni");
      empezar = prompt("enter para seguir cargando y salir para finalizar");
   }


/* get datos, get stock*/

class Producto{
    constructor(nombre , precio , stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.cantidad = cantidad;
    }

    get_datos(){
        console.log("<-----Datos del producto----->");
        console.log("Nombre: " , this.nombre);
        console.log("Precio: " , this.precio);
        console.log("Stock: " , this.stock);
        console.log("cantidad " , this.cantidad);
    
    }

get_stock(){
    if(this.stock < 3){
        console.log("OJO STOCK BAJO" , this.stock);
    }

    return this.stock
}
update_stock(){
    this.stock = this.stock - 1;
}
}

let cucurucho = new Producto("Cucurucho " , 250 , 15);
let cuarto = new Producto("Cuarto " , 350 , 2);
let medio = new Producto("Medio " , 550 , 15);
let kilo = new Producto("Kilo " , 1000 , 10);


cucurucho.get_datos();
cuarto.get_datos();
medio.get_datos();
kilo.get_datos();
cucurucho.get_stock();
cuarto.get_stock();
medio.get_stock();
kilo.get_stock();
 

/* aca utilice el reduce para calcular una venta, como si el usuario comprara dos kilos de helado y un curucho*/

let ventas = [
    {nombre: "Cucurucho" , precio:250},
    {nombre: "kilo" , precio:1000}, 
    {nombre: "Kilo" , precio:1000},
];

function calcular_total ( acu , producto ){
    acu = acu + producto.precio;
    return acu
}

let venta_total = ventas.reduce ( calcular_total , 0);
console.log("El total es de tu compra es de " , venta_total);




/* USE EL FILTER PARA BUSCAR POR NOMBRE Y QUE TE APAREZCA LA LISTA DE GUSTOS, si este filter esta bien voy a agregar todos los gustos de la lista*/

let ingresar = prompt("ingresar el sabor para ver todas las opciones de la lista");

const helados = [
    {nombre : "Vainilla", sabor: "crema"},
    {nombre : "Granizado", sabor: "crema"},
    {nombre : "Crema americana", sabor: "crema"},
    {nombre : "Crema rusa", sabor: "crema"},
    {nombre : "Menta granizada", sabor: "crema"},
    {nombre : "Dulce de leche", sabor: "dulce_leche"},
    {nombre : "Dulce de leche granizado", sabor: "dulce_leche"},
    {nombre : "Dulce de leche con browwni", sabor: "dulce_leche"},
    {nombre : "Dulce de leche con nuez", sabor: "dulce_leche"},
]

const resultado = helados.filter((el) => el.sabor.includes(ingresar));
console.log("los sabores de esa lista son" , resultado);



/*while y map*/

let carrito = "un string cualquiera";

let producto = [
    {nombre: "Cucurucho" , precio:250, cantidad : 0},
    {nombre: "Cuarto" , precio:300, cantidad : 0} ,
    {nombre: "Medio" , precio:550,cantidad : 0},
    {nombre: "Kilo" , precio:1000, cantidad : 0},
];


function pedir_helado(){
    while (carrito !== "salir"){
        let ingresar_potes = parseInt( prompt("suma al carrito los postes que quieras comprar. Presione 1 si quiere cucurucho , 2 si quiere un cuarto , 3 si quiere medio y 4 para comprar el kilo"));
        if(ingresar_potes == 1){
            producto[0].cantidad++;
        }
        else if(ingresar_potes == 2){
            producto[1].cantidad++;
        }
        else if (ingresar_potes == 3){
            producto[2].cantidad++;
        }
        else if(ingresar_potes == 4){
            producto[3].cantidad++;
        }
        else{
            prompt("error, vuelve la menu")
        }
        carrito=prompt("si desea salir escriba salir sino continue comprando");
    }
}
console.log(producto)
function calcular_total(producto){

    return{
        nombre: producto.nombre,
        precio: producto.precio * producto.cantidad,
        cantidad: producto.cantidad  
    }
}
pedir_helado();
total_precio_potes = producto.map(calcular_total);



console.log(total_precio_potes);



/* UTILIZAR MAP ME PARECIO BUENA IDA PARA CALCULAR EL DELIVERY TENINEDO ESTABLECIDO UN PRECIO DEPENDENDIENDO LA ZONA
Dejo el ejercicio de abajo para ver si me podes decir si esta bien pensado o no, pero la idea es sacarlo y utilizar las plantillas que me mencionaste
hasta villa elisa 300
Arturo segui 150
city bell 350
*/

let productos = [
    {nombre: "Cucurucho" , precio:250},
    {nombre: "Cuarto" , precio:300},
    {nombre: "Medio" , precio:550},
    {nombre: "Kilo" , precio:1000},
];

function agregar_delivery_ve ( producto ){
    let delivery = 300;
    return{
        nombre: producto.nombre,
        precio: producto.precio+delivery
    }
}
console.log(productos);

let resultado_map_ve = productos.map(agregar_delivery_ve);
console.log(resultado_map_ve);




function agregar_delivery_as ( producto ){
    let delivery = 150;
    return{
        nombre: producto.nombre,
        precio: producto.precio+delivery
    }
}
console.log(productos);

let resultados_map_as = productos.map(agregar_delivery_as);
console.log(resultados_map_as);


function agregar_delivery_cb ( producto ){
    let delivery = 350;
    return{
        nombre: producto.nombre,
        precio: producto.precio+delivery
    }
}
console.log(productos);

let resultados_map_cb = productos.map(agregar_delivery_cb);
console.log(resultados_map_cb);