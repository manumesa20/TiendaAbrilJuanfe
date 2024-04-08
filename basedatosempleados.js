let empleados=Array(
    {
        id:1,
        nombre:"Manuela Mesa Álvarez",
        cargo:"Jefe",
        teléfono:"3054867808",
        correo:"manuelamesa842@gmail.com",
        salario:6000000,
        contactoEmergencia:"3004571001",
        foto:"./img/empleado1.jpeg"
    },

    {
         id:2,
         nombre:"Esteban Posso Hincapié",
         cargo:"Administrador",
         teléfono:"3004571001",
         correo:"estebanposso2002@gmail.com",
         salario:3500000,
         contactoEmergencia:"3004558969",
         foto:"./img/empleado2.jpeg"
    },

    {
         id:3,
         nombre:"David Esteban Pérez Herrera",
         cargo:"Ejecutivo de Cuentas",
         teléfono:"3022776510",
         correo:"davidperez21@gmail.com",
         salario:2000000,
         contactoEmergencia:"3024565892",
         foto:"./img/empleado3.jpeg"
    },

    {
        id:4,
        nombre:"Emanuel Restrepo Restrepo",
        cargo:"Responsable de comunicaciones",
        teléfono:"3054896336",
        correo:"restreporestrepoemanuel@gmail.com",
        salario:1500000,
        contactoEmergencia:"3213455606",
        foto:"./img/empleado4.jpeg"
   },

   {
    id:5,
    nombre:"Juan Pablo Posada Zuluaga",
    cargo:"Actuario de seguros",
    teléfono:"3006600241",
    correo:"posadazuluagajuanpablo@gmail.com",
    salario:4500000,
    contactoEmergencia:"3213478902",
    foto:"./img/empleado5.jpeg"
},

{
    id:6,
    nombre:"Sebastián Sánchez",
    cargo:"Auditor financiero",
    teléfono:"3103986396",
    correo:"godigital69@gmail.com",
    salario:3500000,
    contactoEmergencia:"3102654565",
    foto:"./img/empleado6.jpeg"
},

{
    id:7,
    nombre:"Angie Paola Pérez Herrera",
    cargo:"Analista de Riesgos",
    teléfono:"3008167127",
    correo:"angieperez2201@gmail.com",
    salario:2500000,
    contactoEmergencia:"3069874565",
    foto:"./img/empleado7.jpeg"
},

{
    id:8,
    nombre:"Alejandra María Herrera Jimenez",
    cargo:"Servicio de limpieza",
    teléfono:"3234361612",
    correo:"alejitaherrera2017@gmail.com",
    salario:2000000,
    contactoEmergencia:"3008165645",
    foto:"./img/empleado8.jpeg"
},

{
    id:9,
    nombre:"Nena Zuluaga",
    cargo:"Recursos Humanos",
    teléfono:"3014056949",
    correo:"nenazuluagatommy@gmail.com",
    salario:3000000,
    contactoEmergencia:"3014789889",
    foto:"./img/empleado9.jpeg"
},

{
    id:10,
    nombre:"José Aberlado Mesa Holguín",
    cargo:"Seguridad",
    teléfono:"3173829031",
    correo:"mesaholguinjosea@gmail.com",
    salario:1650000,
    contactoEmergencia:"3054625698",
    foto:"./img/empleado10.jpeg"
},

{
    id:11,
    nombre:"Maria José Ortiz Vanegas",
    cargo:"Publicidad",
    teléfono:"3134366364",
    correo:"celesperezmesa@gmail.com",
    salario:4500000,
    contactoEmergencia:"3054736952",
    foto:"./img/empleado11.jpeg"
},
)




//creando una referencia al contendor de empleados
let contenedor=document.getElementById("contenedor")

//Pasos para crear una liosta dinámica de elementos
//1. Debo recorrer la base de datos del problema:
empleados.forEach(function(empleado){
    let columna=document.createElement("div")
    columna.classList.add("col")


    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow")


    let foto=document.createElement("img")
    foto.classList.add("w-25","mx-auto","d-block")
    foto.src=empleado.foto


    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre

    let cargo=document.createElement("h4")
    cargo.textContent=empleado.cargo

    let teléfono=document.createElement("h4")
    teléfono.textContent=empleado.teléfono

    let correo=document.createElement("h4")
    correo.textContent=empleado.correo

    let contactoEmergencia=document.createElement("h4")
    contactoEmergencia.textContent=empleado.contactoEmergencia

//Se asocian las estructuras en orden lógico
tarjeta.appendChild(foto)
tarjeta.appendChild(nombre)
tarjeta.appendChild(cargo)
tarjeta.appendChild(teléfono)
tarjeta.appendChild(correo)
tarjeta.appendChild(contactoEmergencia)
columna.appendChild(tarjeta)
contenedor.appendChild(columna)

})
