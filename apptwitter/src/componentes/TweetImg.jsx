

function TweetImg({imagenAvatar,userName,userArroba,tweetText,imgTweet}){
    return(
        <div className="cajaTweet flex flex-row gap-5 ml-6 mt-3 px-3" >
        <img className="imageT w-20 h-20 rounded-full"  src={imagenAvatar} alt="" />
        <div className="cajaText w-4/5 ">
           <span><b>{userName}</b></span>
           <span>@{userArroba}</span>
           <div  className="bg-gray-100  rounded-md text-sm pb-2">
           <p className="mx-2 pt-2 pb-2">{tweetText}</p>
           <img className='w-4/6 ml-2  rounded-md' src={imgTweet} alt="" />
           </div>
           <div className="interacciones flex flex-row my-3 justify-evenly">
                           <span className="iconify interaccionesImg" data-icon="bx:comment"></span>
                           <span className="iconify interaccionesImg" data-icon="fa6-solid:retweet"></span>
                           <span className="iconify interaccionesImg" data-icon="ant-design:heart-outlined"></span>
                           <span className="iconify interaccionesImg" data-icon="ci:share"></span>
           </div>
           
        </div>
   </div>
    );
}
export default TweetImg;