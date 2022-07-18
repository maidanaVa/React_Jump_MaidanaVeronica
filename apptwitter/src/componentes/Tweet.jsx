/* componente de clase 2 */
import React from "react";/* importar react en componente de clase */
import ImgUsuario from '../assets/imgusu.jpg';
import retweet from '../assets/retweet.png';
import comentario from '../assets/comentario.png';
import like from '../assets/amor.png';
import compartir from '../assets/compartido.png';


class Tweet extends React.Component{
    render(){
        return <div className="cajaTweet flex felx-row gap-5 ">
                    <img className="w-20 h-20 rounded-full"  src={ImgUsuario} alt="" />
                    <div className="cajaText flex- flex-col w-4/5 ">
                       <span><b>Pierina Martinez</b></span>
                       <span>@pierinam</span>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos beatae, rerum deserunt nobis doloribus? Id consequuntur tempora provident accusamus vitae ratione deleniti, quas excepturi numquam similique harum reprehenderit fugit!</p>
                       <div className="interacciones flex flex-row my-3 justify-evenly">
                           <img className="w-5 h-5" src={comentario} alt=""/>
                           <img className="w-6 h-6"  src={retweet} alt=""/>
                           <img className="w-5 h-5" src={like} alt=""/>
                           <img className="w-7 h-7"  src={compartir} alt=""/>
                       </div>
                      
                    </div>
               </div>
    }
}
export default Tweet;