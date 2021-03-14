# AppClientes
Ejercico 3 curso MERN
La tarea consiste en desarrollar una aplicación con Express que cumpla con las siguientes
normas:
Debe responder a las siguientes URLs:
/main/index - página web con una cabecera y un párrafo
/main/about - página web con descripción del autor de la aplicación
/client/index - página web con una tabla de clientes inventados
/client/new - página web con un formulario para la creación de clientes
(se valorará la organización de los diferentes manejadores de rutas)
Todas las páginas deben compartir un menú con enlaces a cada una de las páginas. Para ello podemos
utilizar los layouts de pug.
Todos los datos necesarios para la realización de la lista de clientes o el formulario, pueden obtenerse a
través de un modelo en una base de datos MongoDB
EXTRA - Para cualquier ruta de las anteriormente mencionadas, si se intenta acceder después de las
17.00h o antes de las 8.00h, debe aparecer un mensaje de error indicando que dichos accesos ya no están
disponibles (se puede hacer a través de un middleware global)
