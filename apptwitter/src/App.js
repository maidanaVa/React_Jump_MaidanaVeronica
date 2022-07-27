import './App.css';
import Tweet from './componentes/Tweet.jsx';
import TweetImg from './componentes/TweetImg.jsx';
import Seccion from './componentes/Seccion.jsx';
import iconoTw from './assets/iconotw.png';
import home from './assets/casa.png';
import hastag from './assets/hastag.png';
import md from './assets/msj.png';
import avatar from './assets/usuario (1).png';
import listita from './assets/lista.png';
import guardado from './assets/guardar.png';
import campana from './assets/activo.png';
import brillos from './assets/limpiar.png';
import ImgUsuario from './assets/imgusu.jpg';
import insertImg from './assets/imagen.png';
import gif from './assets/gif.png';
import grafico from './assets/simbolo-de-interfaz-grafica-de-tres-barras.png';
import emoji from './assets/emoji.png';
import Tendencia from './componentes/Tendencia';
import Noticia from './componentes/Noticia.jsx';
import ImgNoticia from './assets/imgNoticia.jpg';
import imagenAvatar1 from './assets/avatar1.jpg';
import imagenAvatar3 from './assets/avatar3.jpg';
import imagenAvatar4 from './assets/avatar4.jpg';
import imgTweet1 from './assets/react.jpg';
import BurbujaFixed from './componentes/BurbujaFixed';
import FooterSticky from './componentes/FooterSticky';


function App() {
  return (
    <div className="App ">{/* componente padre es App  */}

       {/*  abre div izquierdo */}
        <div className="contenedorIzquierdo border-r w-1/5 flex flex-col items-center">

            <img className='w-8 h-8 my-7 mr-40' src={iconoTw} alt=''/>

            <div className='flex flex-col  w-3/6 gap-5'>

              <Seccion  imagenMenu={home} textoMenu="Home"/>
              <Seccion  imagenMenu={hastag} textoMenu="Explorar" />
              <Seccion  imagenMenu={campana} textoMenu="Notificaciones"/>
              <Seccion  imagenMenu={guardado} textoMenu="Guardados"/>
              <Seccion  imagenMenu={md} textoMenu="Mensajes"/>
              <Seccion  imagenMenu={listita} textoMenu="Listas"/>
              <Seccion  imagenMenu={avatar} textoMenu="Perfil" />

            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-52 mt-10">Tweet</button>

        </div>
       {/* cierra div izquierdo */}

       {/*  abre div central */}
            <div className="contenedorCentral w-3/5  flex flex-col">
                <div className='navDesk flex flex-row justify-between'>
                    <b className='ml-3 mt-2'>Home</b> 
                    <img className='h-6 w-6  mt-3 mr-3' src={brillos} alt=''/>
            </div>

            <div className='navMobile'>
            <span className="iconify menuMobile" data-icon="eva:menu-fill" ></span>
            <span className="iconify logoPajarito" data-icon="akar-icons:twitter-fill" />
            <span className="iconify destellos" data-icon="emojione-monotone:sparkles"  data-rotate="180deg"></span>
            </div>

           <div className='escribiendoTweet w-full h-30  mt-3 flex flex-row justify-star items-center gap-2 border-t border-b-8'>
              <img className='rounded-full w-14 h-14 mb-9  ml-2' src={ImgUsuario} alt=''/>

              <div className='flex flex-col  w-10/12 h-24 justify-center '>
                  <input type='text' placeholder="What's happening?"></input>
                  <div className=' flex flex-row mt-3 gap-6'>
                      <img className='w-6 h-6' src={insertImg} alt=''/>
                      <img className='w-6 h-6' src={gif} alt=''/>
                      <img className='w-6 h-6' src={grafico} alt=''/>
                      <img className='w-6 h-6' src={emoji} alt=''/>
                 
                  </div>
                
              </div>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  h-10 w-24 self-end mr-6 mb-2">Tweet</button>
           </div>

            
            <Tweet imagenAvatar={imagenAvatar1} userName="pierina" userArroba="pierinamar" tweetText="Hoy me estoy haciendo uñas con Lujan."/>
            <TweetImg imgTweet={imgTweet1} imagenAvatar={imagenAvatar4} userName="agustina" userArroba="aguspaal" tweetText="Hola estoy aprendiendo React, Tailwind y Figma."/>
            <Tweet imagenAvatar={imagenAvatar3} userName="lujan" userArroba="lujanmai" tweetText="Estamos tomando mates con Agus y Aye."/>
            <Tweet imagenAvatar={imagenAvatar1} userName="pierina" userArroba="pierinamar" tweetText="Hoy me estoy haciendo uñas con Lujan."/>
            <TweetImg imgTweet={imgTweet1} imagenAvatar={imagenAvatar4} userName="agustina" userArroba="aguspaal" tweetText="Hola estoy aprendiendo React, Tailwind y Figma."/>
            <Tweet imagenAvatar={imagenAvatar1} userName="pierina" userArroba="pierinamar" tweetText="Hoy me estoy haciendo uñas con Lujan."/>
            <TweetImg imgTweet={imgTweet1} imagenAvatar={imagenAvatar4} userName="agustina" userArroba="aguspaal" tweetText="Hola estoy aprendiendo React, Tailwind y Figma."/>
            
            <BurbujaFixed/>
            <FooterSticky/>
        </div>
        {/* cierra div central */}

        {/* abre div derecho */}
        <div className="contenedorDerecho w-1/5  flex flex-col items-center justify-evenly border-l ">
            <input type='text' className='placeLupa w-11/12 h-10 bg-stone-200 rounded-full ' placeholder="Search"></input>
            
            <div className='bg-white h-5/6 w-11/12  rounded-md flex flex-col text-xs text-slate-700 bg-neutral-200 gap-3'>

                <p className='text-xl text-black mb-3 ml-3'><b>Trends for you</b></p>

                <Tendencia tt="Tailwind" numerott="12" personastt="13.945" />
                <Noticia imgNoticia={ImgNoticia}/>
                <Tendencia tt="Arbusta" numerott="20" personastt="23.743" />
                <Tendencia tt="SofiSabalera" numerott="6" personastt="63.038" />
                <Noticia imgNoticia={ImgNoticia}/>
                <Tendencia tt="React" numerott="9" personastt="9.734" />
                
              
            </div>
        </div>
        {/*cierra div derecho */}
      
    </div>
  );
}

export default App;
