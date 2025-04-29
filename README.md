# conteo_prueba

## Descripción
Prueba técnica para la empresa "conteo", la aplicación consiste en crear una funcionaldiad que permita al usuario agregar productos , eliminarlos y editarlos, a su vez que puedan ser visualizados en una lista y que permita poder ordenarlos y filtrarlos por nombres.

## Instalación

Instrucciones sobre cómo instalar el proyecto:

1.  Clonar el repositorio: `git clone (https://github.com/Devjessjav/conteo_prueba.git) en la branch Master`
2.  Navegar al directorio del proyecto: `cd nombre-del-proyecto`
3.  Instalar las dependencias: `npm install` (o `yarn install`)

## Decisiones Técnicas

Manejo de estado:  se ha usado context API como najeador de estado, esto permite mantener una persistencia en la información agregada o su actualización.
Librería xlsx: Se ha agregado una función que permita descargar la tabla de productos, esto con la finalidad de que el usuario mantenga un respaldo de los productos que ha agregado.
