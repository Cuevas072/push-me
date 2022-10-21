import '../css/componentes.css';
import { item } from './index';

const divContenedorGeneral = document.querySelector('.contenedorGeneral');
const divContenedorImagenes = document.querySelector('.ContenedorImagenes');
const divContenedorCanciones = document.querySelector('.ContenedorCanciones');

const btnPush = document.querySelector('.btnPicameTikTok');
const btnPicameImagen = document.querySelector('.btnPicameImagen'); 
const btnPicameCancion = document.querySelector('.btnPicameCancion');



const listaTiktoks = {
    0:{
        id : new Date().getTime(),
        Texto : '',
        url : 'https://www.tiktok.com/@trankero/video/7151172849657515270?is_from_webapp=1&sender_device=pc&web_id=7014200265289713158',        
        creado: new Date()
    },
    1:{
        id : new Date().getTime(),
        Texto : '',
        url : 'https://www.tiktok.com/@sotanox/video/7131491081874590981?is_from_webapp=1&sender_device=pc&web_id=7014200265289713158',        
        creado: new Date()
    },
    2:{
        id : new Date().getTime(),
        Texto : '',
        url : 'https://www.tiktok.com/@alepsitoo/video/7149292438090222853?is_from_webapp=1&sender_device=pc&web_id=7014200265289713158',        
        creado: new Date()
    },
    3:{
        id : new Date().getTime(),
        Texto : '',
        url : 'https://www.tiktok.com/@judithsm26/video/7147719367831112987?is_from_webapp=1&sender_device=pc&web_id=7014200265289713158',        
        creado: new Date()
    },
    4:{
        id : new Date().getTime(),
        Texto : '',
        url : 'https://www.tiktok.com/@barbie.nunezt/video/7146297723342343429?is_from_webapp=1&sender_device=pc&web_id=7014200265289713158',        
        creado: new Date()
    },
}


const listaImagenes = {
    0:{
        id : new Date().getTime(),
        Texto : 'Yo viendo que me gusto alguien dos años menor: ',
        url : 'https://as01.epimg.net/epik/imagenes/2018/11/16/portada/1542384053_864693_1542384302_noticia_normal.jpg',        
        creado: new Date()
    },
    1:{
        id : new Date().getTime(),
        Texto : 'Ya viste que es menor que tu <br>Yo:',
        url : 'https://i.pinimg.com/originals/fd/ec/4f/fdec4f987cb5a5e404f6938e276e53d7.jpg',        
        creado: new Date()
    },
    2:{
        id : new Date().getTime(),
        Texto : '',
        url : 'assets/img/gato.jpg',        
        creado: new Date()
    },
    3:{
        id : new Date().getTime(),
        Texto : '',
        url : 'https://i.pinimg.com/564x/61/b4/c9/61b4c9ea3bdc9caee76a85e6b5c965fd.jpg',        
        creado: new Date()
        
    },
    4:{
        id : new Date().getTime(),
        Texto : '',
        url : 'https://planb.mx/wp-content/uploads/2022/04/FB_IMG_1648274199688-1024x1013.jpg',        
        creado: new Date()
    },
}

const listaCanciones = {
    0:{
        id : new Date().getTime(),
        cancion: 'Cómo pasa el tiempo',
        Texto : 'Cuando conocí a Cuarteto de Nos, conocí la importancia de la letra, estos vatos son super coherentes y neta si te quiere mal viajar estos weyes son lo máximo',
        url : 'https://open.spotify.com/track/6Vk5QUhQ0v5OjYQIYvL5VL?si=98e2a8c027f247fa',        
        creado: new Date()
    },
    1:{
        id : new Date().getTime(),
        cancion: 'Instant Crush',
        Texto : 'La primera vez que lloré con una canción, fue esa y basicamente es un clásico. Ese álbum es mi favorito en el mundo',
        url : 'https://open.spotify.com/track/2cGxRwrMyEAp8dEbuZaVv6?si=5bae36f425194058',        
        creado: new Date()
    },
    2:{
        id : new Date().getTime(),
        cancion: 'Vete',
        Texto : 'En mi época de escuchar Trap la neta se me hizo turbo pegajosa y la neta ta muy buena la rola uwu',
        url : 'https://open.spotify.com/track/5iytCfxGWcPfz6dbw8jwPN?si=5b9be42d15ec41a6',        
        creado: new Date()
    },
    3:{
        id : new Date().getTime(),
        cancion: 'Entre Vos y Yo',
        Texto : 'Solo diré que recientemente cobró mas sentido',
        url : 'https://open.spotify.com/track/3H7wULYr0I5lTucP1hS3Wt?si=dd3db7cef05741cc',        
        creado: new Date()
        
    },
    4:{
        id : new Date().getTime(),
        cancion: 'Teo, el Gato Persa rinde su declaración',
        Texto : 'Me pareció turbo interesante la perspectiva de la perspectiva de un gato en una relación de unos novios, pero que cortaron y el gato extraña al vato',
        url : 'https://open.spotify.com/track/4QLkvUQgr5aeDRUlQxu2Wt?si=6d1fdd29816a49c6',        
        creado: new Date()
    },
}


const largoLista = Object.keys(listaTiktoks).length;
const largoListaImagenes = Object.keys(listaImagenes).length;
const largoListaCanciones = Object.keys(listaCanciones).length;


function generarAleatorio(max) {
    const x = Math.floor(Math.random()*max);    
    return x;
}

btnPush.addEventListener('click', (event) => {
    crearTikTok();
})


btnPicameImagen.addEventListener('click', (event) => {
    crearImagen();
})

btnPicameCancion.addEventListener('click', (event) => {
    crearCancion();
})

export const crearTikTok = () =>{    
    const x = generarAleatorio(largoLista);
    const tiktokaux = listaTiktoks[Math.floor(Math.random()*largoLista)];
    //console.log(tiktokaux);
    const htmlTodo = `
        <div class="container-fluid"> 
            <div class="row align-items-center">
                <h4 id="TitulosGenerales">Tiki Toki Aleatorio Generado </h4>
                <div class="col text-center">
                    <form action="${tiktokaux.url}" target="_blank">
                        <button class="btn btn-primary" > Picame uwu </button>
                    </form>
                </div>	
            </div>
        </div>        
    `;
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;            
    divContenedorGeneral.innerHTML = htmlTodo;
    
}

export const crearImagen = () =>{    
    //const x = generarAleatorio(largoListaImagenes);      
    const imgaux = listaImagenes[Math.floor(Math.random()*largoListaImagenes)];
    //console.log(imgaux);
    const htmlTodo = `                   
        <div class="text-center" id="imagenDiv">
            <p class="TextoExplicativo">${imgaux.Texto}</p>
            <img src="${imgaux.url}" class="img-fluid" alt="No Cargo La Imagen JEJEJE"  height="500px"/>
        </div>	          
    `;
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;            
    divContenedorImagenes.innerHTML = htmlTodo;      
}


export const crearCancion = () =>{    
    const x = generarAleatorio(largoListaCanciones);
    const cancionaux = listaCanciones[Math.floor(Math.random()*largoListaCanciones)];    
    const htmlTodo = `
        <div class="container-fluid"> 
            <div class="row align-items-center">
                <h3 id="TitulosGenerales"> ${cancionaux.cancion}</h3>
                <div class="col text-center">
                    <p class="TextoExplicativo">${cancionaux.Texto}</p>
                    <form action="${cancionaux.url}" target="_blank">
                        <button class="btn btn-success" > Picame uwu </button>
                    </form>
                </div>	
            </div>
        </div>        
    `;
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;            
    divContenedorCanciones.innerHTML = htmlTodo;
    
}