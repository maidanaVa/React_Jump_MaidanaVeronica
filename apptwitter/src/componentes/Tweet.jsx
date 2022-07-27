/* componente de clase 2 */
import React from "react";/* importar react en componente de clase */



class Tweet extends React.Component{
    render(){
        return <div className="cajaTweet flex flex-row gap-5 ml-3 mt-3 px-3" >
                    <img className="imageT w-20 h-20 rounded-full"  src={this.props.imagenAvatar} alt="" />
                    <div className="cajaText w-4/5 ">
                       <span><b>{this.props.userName}</b></span>
                       <span>@{this.props.userArroba}</span>
                       <div  className="bg-gray-100 h-24 rounded-md text-sm">
                       <p className="mx-2 pt-2">{this.props.tweetText}</p>
                       </div>
                       <div className="interacciones flex flex-row my-3 justify-evenly">
                          
                           <span className="iconify interaccionesImg" data-icon="bx:comment"></span>
                           <span className="iconify interaccionesImg" data-icon="fa6-solid:retweet"></span>
                           <span className="iconify interaccionesImg" data-icon="ant-design:heart-outlined"></span>
                           <span className="iconify interaccionesImg" data-icon="ci:share"></span>
                       </div>
                       
                    </div>
               </div>
    }
}
export default Tweet;