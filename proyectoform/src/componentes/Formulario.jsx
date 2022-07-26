import './Formulario';

function Formulario(){
    return(
        <form>
            <label>Nombre
            <input type="text" name="name" placeholder='Ingresa tu nombre'/>
            </label>
            <label>Apellido
            <input type="text" name="lastname" placeholder='Ingresa tu apellido'/>
            </label>
            <label>Email
            <input type="email" name="email" id="email"  placeholder='Ingresa tu email'/>
            </label>
            <label>Usuario
            <input type="text" name="username" placeholder='Crea tu usuario' />
            </label>
            <label>Contraseña
            <input type="password" name="password" id="password" placeholder='Ingresa contraseña' />
            </label>
            <label> Repetir contraseña
            <input type="password" name="password2" id="password2" placeholder='Vuelve a ingresar contraseña' />
            </label>
            <label>Telefono
            <input type="text" name="telefono" id="telefono" placeholder='Ingresa un telefono' />
            </label>
            <label>Fecha de Nacimiento
           <input type="date" name="date" id="date" />
            </label>
            <label>Personalizar Experiencia
           <input type="checkbox" name="personalizado" />
          {/*  <input type="checkbox" name="personalizado"/> */}
            </label>
            <div className="botones">
            <button type="submit">Enviar</button>
            <button type="reset">Borrar Formulario</button>
            </div>
        </form>
    )
}
export default Formulario;