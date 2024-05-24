$(document).ready(function(){
    let lista=[
        {
            id:1,
            img: "/imagenes/one.jpg",
            nombre: "Monkey D luffy",
            desc: "kaizoku ou ni ore es naru",
        },
        {
            id:2,
            img: "/imagenes/one.jpg",
            nombre: "Roronoa Zoro",
            desc: "Futuro mejor espadachin, bebedor, demonio de un solo ojo",
        },
        {
            id:3,
            img: "/imagenes/one.jpg",
            nombre: "Vismoke Sanji",
            desc: "El hombre de tus sueños, sabe cocinar, alto, caballeresco con las mujeres, Okama",
        },
        {
            id:4,
            img: "/imagenes/one.jpg",
            nombre: "Nami",
            desc: "Pertenece al trio cobarde, gata ladrona, futura gran cartógrafa",
        },
        {
            id:5,
            img: "/imagenes/one.jpg",
            nombre: "Usop",
            desc: "Pertenece al trio cobarde, carpintero, tirador, cocinero, todo en uno",
        },
        {
            id:6,
            img: "/imagenes/one.jpg",
            nombre: "Choper",
            desc: "Comida de emergencia",

        },
        {
            id:7,
            img: "/imagenes/one.jpg",
            nombre: "Choper",
            desc: "Comida de emergencia",
        }
]

for (const persona of lista) {
    let nuevaCarta =
        `<div class="targeta" data-id="${persona.id}"> <!-- Agrega un atributo de datos para almacenar el ID -->
            <div class="izquierda">
                <img src=${persona.img} />
            </div>
            <div class="derecha">
                <button class="btnBorrar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg></button>
                <h2 class="card-title">${persona.nombre}</h2>
                <p>${persona.desc}</p>
            </div>
        </div>`;
    
    $(".wrap").append(nuevaCarta);
}


$(".btnBorrar").click(function () {
    
    let idTarjeta = $(this).closest('.targeta').data('id');
    lista = lista.filter(persona => persona.id !== idTarjeta);
    $(this).closest('.targeta').remove();
});

$(".botonInput").click(function () {
    let nombreUsuario = $(".input[type='text']").val().toLowerCase();
    //Limpiar el contenedor de cartas antes de agregar nuevas cartas
    $(".wrap").empty();

    for (const persona of lista) {
        if (persona.nombre.toLowerCase() === nombreUsuario) {
            let nuevaCarta = `
            <div class="targeta" data-id="${persona.id}">
                <div class="izquierda">
                    <img src=${persona.img} />
                </div>
                <div class="derecha">
                    <button class="btnBorrar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg></button>
                    <h2 class="card-title">${persona.nombre}</h2>
                    <p>${persona.desc}</p>
                </div>
            </div>`
            ;
            
            $(".wrap").append(nuevaCarta);
        }
    }
});

});