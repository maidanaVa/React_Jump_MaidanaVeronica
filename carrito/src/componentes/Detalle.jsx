import '../style/Details.css'
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';

function Detalle({imgCelu}){
   const params=useParams();
    return(
       <div className='detallesProducto'>

         <div className='arribaCaja'>
        <div className='cajaEfecto'>
        <h2>Samsung A51 Sams
         ung A51</h2>
        <img className='imgDetailsProducto' src={imgCelu} alt="" />
        </div>
        
        <div className='textDetails'>
           <h3>{params.name}</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis illum repudiandae, nesciunt rerum molestias rem, in maiores sed doloremque maxime eveniet nam quam itaque debitis suscipit iusto molestiae consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab dolorem aliquid omnis vel ipsa. Explicabo, quod! Eos et expedita excepturi alias numquam deleniti repellat, cumque tempora! Animi, corporis recusandae.</p>
           <hr />
           <h4>Descripcion</h4>
           <h5>Pantalla</h5>
           <p>Con la pantalla FHD+ de 6.6" y 90 Hz con tecnología pOLED, tu entretenimiento favorito cobrará vida. Disfrutarás de una visión ultra wide con un contraste infinito, tonos oscuros profundos y colores más brillantes acompañados de imágenes súper nítidas.</p>
           <h5>Rendimiento</h5>
           <p>Su potente procesador Octa-Core Qualcomm Snapdragon y la memoria RAM de 6GB brindan un desempeño increíble. Obtendrás más potencia para jugar, stremear y usar las funciones avanzadas de cámara, además de un funcionamiento más eficiente que consume menos batería.</p>
          
           <div className='btnDetails'>
           <button className="btn"><Link to="/"><span className="iconify" data-icon="ic:outline-arrow-back-ios"></span></Link></button>
           <button className="btn"><Link to="/carrito"><span className="iconify" data-icon="mi:shopping-cart-add" data-flip="horizontal"></span></Link></button>
           </div>

        </div>
        </div>
       {/*  <div className='abajoCaja'>
         <h4>Caracteristicas Tecnicas</h4>
         <span> <span className="iconify iconDetails" data-icon="fluent:camera-24-filled"></span> Camara 50 + 8 + 2 MP</span>
         <span> <span className="iconify iconDetails" data-icon="fluent:camera-24-filled"></span> Camara 50 + 8 + 2 MP</span>
         <span> <span className="iconify iconDetails" data-icon="fluent:camera-24-filled"></span> Camara 50 + 8 + 2 MP</span>
         <span> <span className="iconify iconDetails" data-icon="fluent:camera-24-filled"></span> Camara 50 + 8 + 2 MP</span>
        
        </div> */}
      
       </div>
    );
};
export default Detalle;