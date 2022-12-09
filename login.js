let usuario = "RICH"
let clave = "taliban"
let resultado_user
let resultado_pass

let validacion_user = prompt("Escribe tu usuario")
do {
    if (validacion_user !== usuario)
     {
        validacion_user = prompt("Usuario incorrrecto, intenta nuevamente")
    }
    else
    {
        resultado_user !== validacion_user
    }
} while ( resultado_user !== validacion_user);

let validacion_pass = prompt("Escribe la clave")
do {
    if (validacion_pass !== clave)
     {
        validacion_pass = prompt("CLave incorrrecto, intenta nuevamente")
    }
    else
    {
        resultado_pass !== validacion_pass
    }
   
} while ( resultado_pass !== validacion_pass);
