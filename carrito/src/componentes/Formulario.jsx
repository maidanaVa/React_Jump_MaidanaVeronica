import '../style/Formulario.css';

function Formulario(){
    return(
        <form>
            <label>Nombre </label>
            <input type="text" name="name" placeholder='Ingresa tu nombre'/>
            <label>Apellido</label>
            <input type="text" name="lastname" placeholder='Ingresa tu apellido'/>
            <label>Email</label>
            <input type="email" name="email" id="email"  placeholder='Ingresa tu email'/>
          
            <label>Contraseña</label>
            <input type="password" name="password" id="password" placeholder='Ingresa contraseña' />
            <label> Repetir contraseña</label>
            <input type="password" name="password2" id="password2" placeholder='Vuelve a ingresar contraseña' />
            
            <label>Telefono</label>
            <input type="text" name="telefono" id="telefono" placeholder='Ingresa un telefono' />
            
            <label>Fecha de Nacimiento </label>
           <input type="date" name="date" id="date" />
           
          
            <div className="botones">
            <button type="submit">Enviar</button>
            <button type="reset">Borrar Formulario</button>
            </div>
        </form>
    )
}
export default Formulario;