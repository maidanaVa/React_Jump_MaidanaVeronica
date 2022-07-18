/* componente de clase 3 */
import React from "react";

class Tendencia extends React.Component{
    render(){
        return <div className="flex flex-col ml-3">
         Trending worlwide   
        <b className="text-base text-black">#{this.props.tt}</b>
        <span>{this.props.numerott}K Tweets</span>
        {this.props.personastt} people are Tweeting about this
        </div>
    }
}
export default Tendencia;