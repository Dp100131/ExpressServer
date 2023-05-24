# Métodos, cabeceras y estados:

- Métodos: Verbo que indica en la petición que es lo que se quiere hacer.

    - Get: recoger información del servidor.
    - Post: Añadir información al servidor.
    - Put: Cambiar información del servidor.
    - Patch: Cambiar solo una parte de la información del servidor.
    - Delete: Eliminar información del servidor.
    - Options: Pedir información sobre los metodos.

- Cabeceras: Información conceptual de la petición:

    - Ejemplos:
        
        - Autenticación.
        - Cache: Almacenamiento temporal.
        - Autenticación: Permisos.
        - Indicaciones:.
        - Condiciones: Define el tipo de contenido que acepta.
        - Cors: Manejar información desde fuera de mi servidor.
        - Cookies: Compartir información entre peticiones.

- Estados: Inicador de la petición.

    - 200: Ok.
    - 201: Creado.
    - 301: redirigido.
    - 304: No hay modificación.
    - 400: Mala respuesta.
    - 401: No estas autorizado.
    - 403: Sin permisos.
    - 404: No se ha encontrado el recurso.
    - 500: Problemas internos.

# Cuerpo y query de la petición.

    - Content-type:

        - text/html.
        - text/css.
        - application/js.
        - image/jpeg
        - application/json
        - application/xml

    - Query: especificar.
