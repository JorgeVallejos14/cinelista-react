                 Elemento de React          /               ¿Dónde lo usas en este problema?            / ¿Por qué es el adecuado?

Componente:  Archivo que recibe los props.  / en filtroclasificacion.jsx, listapeliculas.jsx y peliculacard.jsx  /   Es el adecuado para implementar los props desde el array e importarlo a app.jsx.

JSX: Son los archivos donde se ponen los datos / en crear la pagina web con app.jsx y los componentes importados / Es el adecuado porque es la base de escribir los codigos y props en VSCode.

Props: Indicaciones que debe cumplir un componente / en peliculacard se utilizan los props para recibir info de las peliculas / Es el adecuado porque debe haber un componente que tenga props para recibir info de una lista de base de datos.

Estado (useState): Archivo que inserta el estado de algun componente / Cambiar el estado de disponibildad de una pelicula  / Es el adecuado si en tu codigo decides aplicar filtros de estado de disponibilidad como ejemplo para una pelicula o videojuego.

Renderizado de listas (.map + 
key): Elemento que recorre los props y id de cada elemento / En recorrer el array de peliculas.js para que listaPeliculas reciba los props / Es el adecuado para que el array recorra los props y id de los elementos al componente escogido.

Renderizado Condicional: Si un componente tiene un elemento este se debe de renderizar / Si peliculasfiltradas tiene elementos esta son renderizadas en la pagina pero si esta vacio muestra el mensaje de que no hay nada / Es el adecuado por si en tu app hay elementos que si el usuario busca le aparecen pero si hay un elemento que no esta en la lista el resultado es de nada o de que no se encontro la busqueda de este.

Preguntas:
¿Qué ventaja tiene dividir la cartelera en componentes en lugar de escribir todo en un solo archivo?
R: La ventaja esta que en cada componente cumple cada función que se le asigna a la cartelera como el listado, sus cards y el filtro de clasificación ya que si se combina todo los elementos en un solo archivo puede provocar mas que algun error porque no tendra los componenes para importar y también provoca que el codigo de la app se vuelva mas tedioso y confuso para el que programa su app.

¿Qué diferencia hay entre props y estado en tu solución? Da un ejemplo concreto de cada uno tomado de esta aplicación.
R: En props en mi solución es la de que el componente PeliculaCard reciba el titulo, genero, duración, clasificación, sinopsis y horarios mientras que el estado es sobre la disponibilidad de la pelicula y que peliculas se exhiben el dia de hoy como también la busqueda de la pelicula que busca el usuario.