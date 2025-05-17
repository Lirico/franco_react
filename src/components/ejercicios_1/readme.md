## Ejercicio 1

Crear un componente de Tarjeta que se vea exactamente con la tarjeta de la imagen:
<img src="https://i.postimg.cc/vZVrJ2mz/Screenshot-2025-05-17-135804.png" alt="pepe">

Especificaciones:
- El Boton debe ser un componente a parte.
- El Formulario debe ser un componente aparte.
- Las imagenes de las opciones de la derecha pueden ser parecidas. No deben ser las mismas.
- El color puede ser similar, no necesita ser el mismo exactamente.
- El color del boton debe llegar al mismo desde el componente tarjeta por medio de props.


## Ejercicio 2
Crear un componente Usuario.

Especificaciones:
- Debe tener un estado que reciba un objeto con nombre y edad como estado inicial.
- El JSX debe mostrar nombre y edad. Además debe tener un botón "Cumplir años".
- Crear una función que actualice la edad del usuario. El botón debe ejecutar esta función.

## Ejercicio 3
Crear un componente DatosSimulados.

Especificaciones:
- Debe tener un estado que reciba null como estado inicial.
- Usar un useEffect para que cada dos segundos actualice el estado con un objeto
que tenga una propiedad titulo con el valor 'Datos cargados con useEffect'.
- Debes limpiar la funcionalidad en el retorno del useEffect.
- En el JSX se debe mostrar un condicional que, de ser verdadero, muestre el titulo del
objeto y de ser falso muestre un <p> que diga 'Cargando datos...'
