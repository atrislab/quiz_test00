Quiz TEST vbeta 1.0
-----------------------

El ejercicio consta de tres archivos
un index.html
un style.css
un script.js

En index.html tenemos la estructura del quiz
la organización semántica se basa en elementos como
header
	div con el "enunciado/título"
main
	div con el formulario
		cada pregunta en un article
			cada pregunta es un radio button con 4 opciones posibles
		el botón de submit eo un div
		La caja para mostrar el resultado es otro div
footer

style.css 

Recoge los estilos de las diferentes cajas
La estructura opta por la pura funcionalidad
Se trabaja con un número limitado de colores
La estructura es responsive en un 90%
Se han usado clases e id's para poder usarlos también en la parte de JS

script.js

Contiene las respuestas a las 10 preguntas

Se comprueba mediante código si el usuario ha contestado de manera correcta o incorrecta
Se toman los datos de aciertos y porcentaje de los mismos par mostrarlos mediante el DOM
en un div creado exprésamente para ello.

El ejercicio es completamente funcional

-------------------------------------

Cambios pensados para la próxima versión:

Añadir comportamientos del ratón en función de la posicion del mismo
para destacar si se está sobre alguna de las opciones
para indicar que se ha clicado sobre una de las opciones

Cambiar el aspecto de los radio buttons a cards, que son más fáciles de ser marcadas por el usuario.

Estudiar otras mejoras siempre pensando primero en la funcionalidad y claridad del ejercicio.

------------------------------------------

El Quiz consiste en una serie de 10 preguntas
Cada pregunta tiene 4 posibles opciones
Al final de las 10 preguntas hay un botón para mostrar un feedback del quiz
Pulsar el botón mostrará el número y porcentaje de aciertos.

-------------------------------------------------

atrislab
