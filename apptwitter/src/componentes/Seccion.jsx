/* componente de clase 1 */
import React from "react";/* importar react en componente de clase */

class Seccion extends React.Component{
    render(){
        return <div className="Seccion flex flex-row font-bold   content-around  gap-3">
                    <img src={this.props.imagenMenu}  alt="" />
                   {this.props.textoItems ?  <h2 className={this.props.textoMenu==="Home" ?'text-cyan-500':'text-black'}>{this.props.textoMenu}</h2> : null}
                    
                    {/* si se cumple condicion  muestra la etiqueta y sino no (null) */}
                    {/* {window.innerWidth > 634 ? <h2 className={this.props.textoMenu==="Home" ?'text-cyan-500':'text-black'}>{this.props.textoMenu}</h2> : null}  */}
                </div>
}
}
export default Seccion;