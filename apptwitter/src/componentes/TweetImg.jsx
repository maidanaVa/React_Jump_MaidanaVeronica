import retweet from '../assets/retweet.png';
import comentario from '../assets/comentario.png';
import like from '../assets/amor.png';
import compartir from '../assets/compartido.png';

function TweetImg({imagenAvatar,userName,userArroba,tweetText,imgTweet}){
    return(
        <div className="cajaTweet flex flex-row gap-5 ml-6 mt-3" >
        <img className="w-20 h-20 rounded-full"  src={imagenAvatar} alt="" />
        <div className="cajaText w-4/5 ">
           <span><b>{userName}</b></span>
           <span>@{userArroba}</span>
           <div  className="bg-gray-100  rounded-md text-sm pb-2">
           <p className="ml-2 pt-2 pb-2">{tweetText}</p>
           <img className='w-4/6 ml-2  rounded-md' src={imgTweet} alt="" />
           </div>
           <div className="interacciones flex flex-row my-3 justify-evenly">
               <img className="w-5 h-5" src={comentario} alt=""/>
               <img className="w-6 h-6"  src={retweet} alt=""/>
               <img className="w-5 h-5" src={like} alt=""/>
               <img className="w-7 h-7"  src={compartir} alt=""/>
           </div>
           
        </div>
   </div>
    );
}
export default TweetImg;