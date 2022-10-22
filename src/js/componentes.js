import '../css/componentes.css';
import { item } from './index';

const divContenedorGeneral = document.querySelector('.contenedorGeneral');
const divContenedorImagenes = document.querySelector('.ContenedorImagenes');
const ContenedorCanciones = document.querySelector('.ContenedorCanciones');

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
        cancion: 'Cómo pasa el tiempo',
        Texto : 'Cuando conocí a Cuarteto de Nos, conocí la importancia de la letra, estos vatos son super coherentes y neta si te quiere mal viajar estos weyes son lo máximo',
        url : 'https://open.spotify.com/track/6Vk5QUhQ0v5OjYQIYvL5VL?si=98e2a8c027f247fa',        
        urlAlbum: 'https://i.discogs.com/z2iq0sdlcWjQ81NCs6E9Koe6BRuoxz6Y54_bF8xARwM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY0MDkz/OTEtMTQyNDc1Mzkz/MC00OTExLmpwZWc.jpeg'
    },
    1:{        
        cancion: 'Instant Crush',
        Texto : 'La primera vez que lloré con una canción, fue esa y basicamente es un clásico. Ese álbum es mi favorito en el mundo',
        url : 'https://open.spotify.com/track/2cGxRwrMyEAp8dEbuZaVv6?si=5bae36f425194058',        
        urlAlbum: 'https://i.discogs.com/0YW96r55mQLJnr-mDT2PseiisV8w0rF9Od4oS9V66RQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NDMy/OTQxLTE2NTY0ODY3/MTUtNTM1NS5qcGVn.jpeg'
    },
    2:{
        cancion: 'Vete',
        Texto : 'En mi época de escuchar Trap la neta se me hizo turbo pegajosa y la neta ta muy buena la rola uwu',
        url : 'https://open.spotify.com/track/5iytCfxGWcPfz6dbw8jwPN?si=5b9be42d15ec41a6',        
        urlAlbum: 'https://images.genius.com/08d6a8cf4d56a5b59c89615ba00b6284.1000x1000x1.jpg'
    },
    3:{
        cancion: 'Entre Vos y Yo',
        Texto : 'Solo diré que recientemente cobró mas sentido',
        url : 'https://open.spotify.com/track/3H7wULYr0I5lTucP1hS3Wt?si=dd3db7cef05741cc',        
        urlAlbum: 'https://i.discogs.com/IunewFYLzWNJ4bIoKHo-ExlT8zeRL7uwDNh6KHa31Bw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMzcy/ODg1LTE1NTI5Njc2/NDctODMxOS5qcGVn.jpeg'
        
    },
    4:{
        cancion: 'Teo, el Gato Persa rinde su declaración',
        Texto : 'Me pareció turbo interesante la perspectiva de la perspectiva de un gato en una relación de unos novios, pero que cortaron y el gato extraña al vato',
        url : 'https://open.spotify.com/track/4QLkvUQgr5aeDRUlQxu2Wt?si=6d1fdd29816a49c6',        
        urlAlbum: 'https://i.discogs.com/38dzT3VrZhcFk0C783auryObEutm8h9XVKqx5hA4Ig8/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg3NDMx/ODgtMTQ2ODAwNzU4/OC0yOTQ0LmpwZWc.jpeg'
    },
    5:{        
        cancion: 'Enamorado Tuyo',
        Texto : 'Insisto Cuarteto de Nos, tiene una coherencia para sus letras muy interesantes; sin embargo, esta canción tiene pintas de cumbia o creo que lo es, lo raro es que el vocalista principal no la canta y creo es la única canción que él no canta. En general me encanta esta canción y probablemente sea mi canción favorita en español, la canto y bailo a todo pulmón. ',
        url : 'https://open.spotify.com/track/35LdDKNMwvKftENaj1WIwF?si=88572a046ef34b39',        
        urlAlbum: 'https://i.discogs.com/O4fddHiZR4grN28QhYcrIZ0qqv_-nCwTUmo7DHK5PEw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY0MTAw/NzAtMTQ3ODgzMjUx/MS0xNjEwLmpwZWc.jpeg'
    },
    6:{        
        cancion: '¿A Dónde van los muertos?',
        Texto : 'La neta no soy tan fan de Kinky, la primera vez que los vi en vivo fue recientemente y eso porque le abrieron a Jose Madero en la feria de Tulancingo, después de eso me puse a escuchar Kinky, la neta son muy buenos, el tecladista es esposo de Amandititita además de que es Marihuano, también quiero mencionar que el bajista es ex de una de mis tías; la canción está también muy buena, creo que es como el mayor hit de la banda.',
        url : 'https://open.spotify.com/track/7Kqu2qzklldYONlvrojo0t?si=ee556217779d4cd5',        
        urlAlbum: 'https://i.discogs.com/XTreqoBTH5gGQSe-Dk5Xn_snTMq0bVrJF4B8WSqVpJ0/rs:fit/g:sm/q:90/h:280/w:280/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NzMw/NjgtMTI0OTM1MjM5/Ny5qcGVn.jpeg'
    },
    7:{
        cancion: 'Cerezo',
        Texto : 'McKlopedia la neta es un rapero bien chido aunque su faceta actual no me termina de encantar, en específico ese álbum tiene rolas muy chidas, hay otro par que vale la pena revisar, hay una que es una narrativa de una pareja con problemas que la neta es muy buena, tal vez la incluya en la lista. ',
        url : 'https://open.spotify.com/track/423midJNCAkf3oZQzOFBe9?si=3dff534630d443fd',        
        urlAlbum: 'https://images.genius.com/470b762a2653d2e248a7bb69370efbd7.630x630x1.jpg'
    },
    8:{       
        cancion: 'Los Locos',
        Texto : 'Bueno, agregue otra canción de McKlopedia, como habia comentado, es una narrativa de una pareja la cual tuvo muchos problemas, la primera vez que la escuche la neta si se me partió un poco el corazón, en general se le nota el sentimiento pero terriblemente, un poco hasta desgarradora. Muy buena rolita, un poco triste, eso si.',
        url : 'https://open.spotify.com/track/6wLQT5JQj4Px9BbRn7Ylau?si=f9ce7088c7bd4180',        
        urlAlbum: 'https://images.genius.com/470b762a2653d2e248a7bb69370efbd7.630x630x1.jpg'
    },
    9:{
        cancion: 'Teo, el Gato Persa rinde su declaración',
        Texto : 'Me pareció turbo interesante la perspectiva de la perspectiva de un gato en una relación de unos novios, pero que cortaron y el gato extraña al vato',
        url : 'https://open.spotify.com/track/4QLkvUQgr5aeDRUlQxu2Wt?si=6d1fdd29816a49c6',        
        urlAlbum: 'https://i.discogs.com/38dzT3VrZhcFk0C783auryObEutm8h9XVKqx5hA4Ig8/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg3NDMx/ODgtMTQ2ODAwNzU4/OC0yOTQ0LmpwZWc.jpeg'
    },
    10:{        
        cancion: 'El Patio de Mi Casa',
        Texto : 'La neta esta raro poner una canción de Tatiana, pero no me jodas ES TATIANA!, es la única canción de Tatiana que me se completita, nada mas que agregar, joya musical mexicana. ',
        url : 'https://open.spotify.com/track/3VuEWQm9FE9C1Xqdd3JLHo?si=12e2603569aa4ca4',        
        urlAlbum: 'https://i.discogs.com/3FfQXy7owoJjHNB2L7HYt03Kdt69iH-oMZ-eV0NQ6Oc/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5Mzk5/MzEtMTMwODI3MDU5/MS5qcGVn.jpeg'
    },
    11:{
        cancion: 'Arréglame El Alma (En Vivo)',
        Texto : 'Lo normal con las versiones en vivo es que suenen culero, pero con bandas de SKA tipo Caligaris o Panteón hacen que se escuchen muy, pero que muy bien, canción para brincar, hacer desmadre, cantar, muy buena canción. ',
        url : 'https://open.spotify.com/track/7wL7mQUpStsapIkNuy0d2Z?si=2027ca91624e41e7',        
        urlAlbum: 'https://i.discogs.com/aP9rFympmyWK_Y4ldMa10KhBcPxHLcVEJawkrTmEtm4/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkyMjAz/ODItMTQ3Njg5NTcx/My01MjQ2LmpwZWc.jpeg'
    },
    12:{
        cancion: 'No bailes de Caballito',
        Texto : 'La neta ya no tengo gustos culposos de música, por eso no me da pena admitir que Mi Banda El Mexicano es un gran grupo musical, un poco canción de señor, pero la neta está muy cagada, a mi me pone de buenas por alguna extraña razón. ',
        url : 'https://i.discogs.com/Rf27FgPy76U46cpi_-XER18oXKzBTbxAl41f5JliHWM/rs:fit/g:sm/q:90/h:568/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0Njk2/ODAwLTE1Nzk4OTk2/NjAtMzAxMy5qcGVn.jpeg',        
        urlAlbum: 'assets/img/nobailesdecaballito.jpg'
    },
    13:{
        cancion: 'Vida en el espejo',
        Texto : 'Pinche canción toda depresiva, lo sé, pero pues me recuerda mucho a PXNDX, la canto muy seguido con mi mejor amiga y con el ex de Anette JEJEJE, la neta canto horrible pero le pongo sentimiento',
        url : 'https://open.spotify.com/track/2yThUakfNYwaToGaKJxKEK?si=af9c588f57004b9d',        
        urlAlbum: 'https://i.discogs.com/-BHGKdmASy6MQg7AJkFIogg4sZwsc6Mg47eJzFdiOas/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExOTI5/NDU3LTE1MjQ5Mzcw/MjUtOTE0Ny5qcGVn.jpeg'
    },
    14:{        
        cancion: 'Contigo No Fue',
        Texto : 'El único corrido tumbado que me se completito (creo), la neta la canción la conocí por Slobotzky y Ricardo de La Cotorriza, pero no me jodas, la neta la canción si está muy chida JAJAJA, es de esas que saben más rico cuando andas pedo',
        url : 'https://open.spotify.com/track/24KGKNglICq4YhNvaZfkA7?si=357a54068f134a1f',        
        urlAlbum: 'assets/img/contigoNoFue.jpg'
    },
    15:{
        cancion: 'Cronicas de un Debate de Amor',
        Texto : 'Mi canción favorita de Lola Club (el grupo de Strecci), tienen rolas romanticonas y un estilo propio muy chido, nada más que comentar. ',
        url : 'https://open.spotify.com/track/5y3X13iY0tzK9F7BR3D6RQ?si=0da5973c12e5400f',        
        urlAlbum: 'assets/img/ahoratodoslosdiscostienennombre.jpg'
    },
    16:{
        cancion: '17 Años (En Vivo Concierto Sinfónico Cumbia Fuzión By Fuze Tea)',
        Texto : 'JAJAJA mira el chiste se cuenta solo, y dejará de dar risa hasta dentro de un mes, quiero comentar que la neta me caga ese album porque ya lo escuche muchísimo, pero si es muy bueno y tienen muy buenas rolas Los Angeles, hasta tienen una de un vato depresivo que se quiere matar y habla con un ángel. <br> Regresando a lo del nombre de la cancion solo dire GRACIOSO PERO NO GRACIOSO DE RISA, GRACIOSO DE RARO. ',
        url : 'https://open.spotify.com/track/2FK6iaDEQqS7BhlagyAhCl?si=e3671ce204b94a92',        
        urlAlbum: 'https://i.discogs.com/5Zf5v1cuFy--WvfrxsZ6ymJ6Ws1nt-w4o42LxirH9l8/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMzQx/ODY5LTE1MDA3NjA2/NjItMTMxMC5qcGVn.jpeg'
    },  
}


const largoLista = Object.keys(listaTiktoks).length;
const largoListaImagenes = Object.keys(listaImagenes).length;
const largoListaCanciones = Object.keys(listaCanciones).length;


function filename(){
    var rutaAbsoluta = self.location.href;   
    var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
    return rutaRelativa;  
}

function corroborarImagen(urlCancion){
    if( urlCancion == '' ){
        return 'assets/img/defaultCarga.jpg';
    }else{
        return urlCancion;
    }
}


window.onload = function () {
    
    var xx_titulo_pagina =  filename();

    switch (xx_titulo_pagina) {
        case 'canciones.html':
            crearCancion();        
        break;
       
        case 'Papayas':
          console.log('Mangoes and papayas are $2.79 a pound.');
          // expected output: "Mangoes and papayas are $2.79 a pound."
        break;

        default:
          console.log(`Sorry, we are out of ${xx_titulo_pagina}.`);
    }
}


/*
btnPush.addEventListener('click', (event) => {
    //crearTikTok();
})
*/

/*
btnPicameImagen.addEventListener('click', (event) => {
    //crearImagen();
})
*/

if( btnPicameCancion){
    btnPicameCancion.addEventListener('click', (event) => {
        crearCancion();
        console.log('Hola');
    })
}


export const crearTikTok = () =>{    
    const x = generarAleatorio(largoLista);
    const tiktokaux = listaTiktoks[Math.floor(Math.random()*largoLista)];
    //console.log(tiktokaux);
    const htmlTodo = `
           
    `;     
    divContenedorGeneral.innerHTML = htmlTodo;    
}

export const crearImagen = () =>{    
    //const x = generarAleatorio(largoListaImagenes);      
    const imgaux = listaImagenes[Math.floor(Math.random()*largoListaImagenes)];
    //console.log(imgaux);
    const htmlTodo = `                   
        <div class="text-center col-lg-12 col-md-4 col-sm-4">
            <p class="TextoExplicativo">${imgaux.Texto}</p>
            <img src="${imgaux.url}" class="imagenDiv" id="imagenDiv" alt="No Cargo La Imagen JEJEJE"  height="500px"/>
        </div>	          
    `;
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;            
    divContenedorImagenes.innerHTML = htmlTodo;      
}


export const crearCancion = () =>{    
    
    const cancionaux = listaCanciones[Math.floor(Math.random()*largoListaCanciones)];    

    // id : new Date().getTime(),
    //     cancion: 'Cómo pasa el tiempo',
    //     Texto : 'Cuando conocí a Cuarteto de Nos, conocí la importancia de la letra, estos vatos son super coherentes y neta si te quiere mal viajar estos weyes son lo máximo',
    //     url : 'https://open.spotify.com/track/6Vk5QUhQ0v5OjYQIYvL5VL?si=98e2a8c027f247fa',        
    //     urlAlbum: '
    const htmlTodo = `
        <section>
            <a href="generic.html" class="image">
                <img src="${corroborarImagen(cancionaux.urlAlbum)}" alt="" data-position="center center" />
            </a>
            <div class="content">
                <div class="inner">
                    <header class="major">
                        <h3>${cancionaux.cancion}</h3>
                    </header>
                    <p>${cancionaux.Texto}</p>
                    <ul class="actions">
                        <li><a href="${cancionaux.url}" class="button" target=_blank >Picame</a></li>
                    </ul>
                </div>
            </div>
        </section>
    `;
    const section = document.createElement('section');    
    section.innerHTML = htmlTodo;            
    console.log(section);
    ContenedorCanciones.innerHTML = htmlTodo;
    //ContenedorCanciones.append(section);    
}