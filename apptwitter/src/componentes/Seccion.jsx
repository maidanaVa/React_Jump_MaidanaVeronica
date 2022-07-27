/* componente de clase 1 */
import React from "react";/* importar react en componente de clase */

class Seccion extends React.Component{
    render(){
        return <div className="Seccion flex flex-row font-bold content-around gap-3">
                  <img src={this.props.imagenMenu}  alt="" />
                  <h2 className={this.props.textoMenu==="Home" ?'text-cyan-500':'text-black'}>{this.props.textoMenu}</h2>
                    
                 
                </div>
}
}
export default Seccion;