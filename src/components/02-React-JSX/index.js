import React from 'react';
import ReactDOM from 'react-dom';

/* 
Creando el mismo elemento pero con JSX 

Nosotros podemos usar createElement para armar la estructura de nuestra UI tranquilamente. Sin embargo, es mucho código que con el tiempo puede llegar a ser poco mantenible y complejo de entender. Por esto, el equipo de React creo JSX que nos permite armar la UI usando elementos similares a HTML dentro de un archivo JavaScript.

Pero para que el navegador pueda entender que es React necesitamos transpilar el código para que se convierta en React.createElement(). A la fecha se suele usar babel para que se encargue del trabajo de la transpilación.

Usando string interpolation ( Interpolación de Cadenas ) podemos extraer nuestro contenido y colocarlo dentro de una variable para que sea mucho más dinámico y te da flexbilidad.

Puedes crear un objeto que se llame props y extenderlo dentro del elemento con javascript
Nota: Puedes sobreescribir estos props si así lo deseas siempre y cuando la definición de esos props vaya luego de la extensión de props por defecto
  
*/

const content = 'El mismo elemento creado usando JSX';
const titleClass = 'title';
const props = {
  className: 'container',
  children: 'Lesson 2: El mismo elemento creado usando JSX'
};

const SecondLesson = () => (
  <div {...props}>
    <h1 className={titleClass}>{props.children}</h1>
  </div>
);

export default SecondLesson;
