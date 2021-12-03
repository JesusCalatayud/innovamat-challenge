# Innovamat Challenge

Jesús Calatayud

## Pasos y decisiones

- Aunque se trata de un MVP, he decidido aplicar arquitectura limpia, de manera que la aplicación sea lo más escalable posible. He utilizado una arquitectura sencilla que divide la aplicación en 3 partes:

* Infrastructure -> La parte de la aplicación que se encarga de hacer de puente con todo aquello ajeno a la app. Aquí es donde hacemos las llamadas a la API, de manera que las tenemos localizadas y no repartidas en diferentes componentes. No hacer llamadas directamente en los componentes nos ayuda a prevenir comportamientos inesperados en los componentes y posibles errores. Para las llamadas he usado Axios. Aunque fetch nos permite lo mismo, axios simplifica la sintaxis, y también tiene compatibilidad con un mayor número de navegadores. También me ha simplificado la tarea de manejo de errores.
 
* Application -> Aquí están la lógica de la aplicación y el control del estado. En este caso hemos utilizado Redux para manejar el estado. Aunque la aplicación es sencilla, Redux nos permite tener controlado el state, y separado por partes, de manera que es fácil controlar y corregir posibles errores. También es útil de cara a la hora de escalar el proyecto. Para controlar cambios de estado complejos, como los fetch a la API, hemos optado por usar redux thunk, que nos permite utilizar middleweares. De este modo podemos resolver el fetch mediante una action intermedia y no ensuciar nuestro reducer, dejándolo solo para su función, actualizar el estado.

* View -> La parte encargada de renderizar los componentes. Estos acceden a lo que necesiten de la aplicación a través de Hooks, dejando los componentes lo más limpios posibles, manteniendo solo la lógica imprescindible para el renderizado.


-Aunque es una aplicación pequeña, he separado la lógica en diferentes reducers para facilitar tanto el trabajo como la lectura:

* Un reducer para manejar la página de recursos. Aunque tenemos dos tipos de recurso diferente, talleres y rincones, la UI es idéntica. He considerado por este motivo que no valía la pena crear una página para cada recurso, sinó guardar en el estado cual de los dos recursos tiene activo el usuario, para saber cuales de ellos renderizar. El usuario puede cambiar de recurso activo mediante la navbar, pero tambien introduciendo directamente la url. Para esto hemos utilizado react router. Si el usuario accede mediante url a la pagina, comprobamos si el recurso activo se corresponde con el que el usuario nos envia via parametros de la url, y sino es el caso actualizamos el state.

* Un reducer para la vista detalle. Esta sí es claramente una UI diferenciada y con una llamada distinta la API, por lo que le hemos creado su propio reducer que se encarga de fetchear el recurso mediante Id (a pesar de que siempre devuelva el mismo recurso independientemente del ID. Para renderizar de manera sencilla el video hemos usado la librería react-youtube.

* Un reducer para la página de favoritos. Aunque la UI es similar, esta página no se puede renderizar a través de un fetch, sinó que es el usuario el que guarda recursos en favoritos, siendo posible que no se renderice ninguno si no tiene ninguno guardado. Por esta naturaleza distinta me ha parecido lógico separarlo en una página de favoritos. Esta renderizará los favoritos del recurso activo, ya sea talleres o rincones.

-En los que se refiere a estilos, me he decantado por utilizar la conocida librería styled-components. El motivo es el hecho de que nos deja crear componentes en los que podemos manejar el CSS directamente, y al mismo tiempo nos permite pasarle props. Esto es muy útil, ya que mediante las props podemos condicionar los estilos. Un ejemplo lo tenemos en la navbar, a la que le pasamos via props el recurso activo para aplicar unos estilos u otros, destacando en un color distinto la opción activa.

-Hemos priorizado el entregar a tiempo, ya que los deadlines son muy importantes. Por este motivo no se ha hecho una versión mobile. Pero no hemos renunciado a un mínimo responsive gracias a flexbox, la opción nativa de CSS que nos ha permitido que la app se adapte bastante bien a pantalla pequeña.

-Aunque bastante rudimentario a causa de falta de tiempo, he implementado un manejo de errores que muestra un mensaje al usuario cuando por ejemplo un fetch falla, así como cuando escriban una ruta no válida, donde son redirigidos a una página 404. También he creado un sencillo skeleton para cuando la página está cargando, para que el usuario sepa que la aplicación está trabajando. 


## Problemática

Al implementar el funcionamiento de los favoritos me he dado cuenta de que algunos recursos compartían el mismo Id, habían Ids repetidos. Por este motivo he decidido substituirlos por Ids nuevos utilizando la librería react-id-generator. Por supuesto esto nunca lo haría en una aplicación real, ya que la posterior llamada a la vista detalle no hubiera funcionado si cambiamos el Id. Pero en este caso, como el recurso que nos devuelve backend no varía independientemente del Id, he decidido solucionar este problema para que no comprometer el funcionamiento de favoritos.

## Funcionamiento de la aplicación
 
 ## `npm install`
 Esto instalará todas las dependencias necesarias para que funcione la aplicación.
 
 ## `npm start`

Con este comando iniciaremos la aplicación en servidor local.

## `Navegación`

-La página principal nos mostrará los recursos, ya sean talleres o recursos. 

-A través de la barra de navegación podemos cambiar de unos recursos a otros. 

-Los recursos tienen un icono de corazón. Clickando en él añadiremos el recurso en cuestión a nuestra lista de favoritos. Si clickamos en un recurso que ya esté marcado como favorito, lo eliminaremos de nuestra lista de favoritos.

-Haciendo click en el botón "Ver favoritos" iremos a la página de favoritos. Si accedemos desde el botón, nos llevará a los recursos que tuvieramos activados en nuestra página principal; si estábamos en talleres, nos mostrará nuestros talleres favoritos; si estábamos en rincones, nos mostrará los favoritos de rincones.
-Podemos volver atrás mediante el botón en forma de flecha al lado del título.

-Si clickamos en un recurso, en cualquier parte que no sea el botón de corazón, nos llevará a la página de detalle del recurso, dónde se mostrará el vídeo y la descripción del recurso. Como en el caso anterior, tenemos un botón para volver a la pantalla principal.

-En el caso de que algo fallará al cargar los recursos, se mostrará un mensaje de error, junto a un icono de actualizar. Clicka en el botón para recargar la página.

-Se puede acceder a las páginas escribiendo la ruta en el navegador. Hay que tener en cuenta que la aplicación aún no está conectada al backend, por lo que mediante este sistema perderemos el estado de la aplicación, y no se mostrarán los cambios, como por ejemplo los favoritos que hayamos incluído si accedemos a favoritos vía URL. Sin embargo si que se actualizará el recurso activo mediante lectura de los parametros de la dirección.
