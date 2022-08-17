function Noticia({imgNoticia}){
return(
<div className="w-10/12 h-20  flex flex-row ml-3 bg-stone-100 rounded-lg">
      <div className=" flex flex-col ml-2">
        <span>Viajes y Turismo</span>
        <p><b>Aeropuerto de Ezeiza, cabecera 13 inutilizable</b></p>
      </div>
      <img className="w-4/12 h-20 rounded-r-lg" src={imgNoticia} alt="" />
</div>
);
}
export default Noticia;