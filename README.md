# Carro de compra de Toy Roboto

Este proyecto tiene como objeto simular una web que tenga como función poder seleccionar productos y agregarlos a un carro de compra en donde se muestre el resumen de la compra que se va arealizar. La imagenes de los productos se tomaron del siguiente emprendimiento: https://www.instagram.com/toyroboto/

## Descripción de su funcionalidades:

- Una lista de ítems mostrando el catálogo de productos.
- Un carrito de compras que tiene todos los ítems que serán comprados por el usuario.
- Espacio donde se muestre la sincronización de los ítems añadidos al carrito. 
- Cada ítem del catálogo tiene un action button con texto `Add item to cart`
- Cada ítem en el resumen de compra tiene un action button con el signo `-` para eliminar un producto del carro y un signo `+` para agregar otra unidad de las mismas       características

### Descripción del código

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Se programo con framework de reactJs. Para esto se uso NodeJs V.14.6
Se trabaja con un repositorio remoto en GitHub: https://github.com/SHB910317/cart
Se crean cuatro componentes Header : Donde se coloca el encabezado de la marca y donde se pone la función del número de productos del carrito.
Basket:Es dnde se crear las funciones que muestran el detalle de los productos que se añaden al carrito
Main: se usa la función map. para crear un nue array
Product:Es donde se llama la Data de la lista de productos 

### Vistas
<img src= "https://user-images.githubusercontent.com/65916093/115082986-5ca89080-9ecc-11eb-972f-c20062e87d5f.PNG" />
<img src="https://user-images.githubusercontent.com/65916093/115085414-1fde9880-9ed0-11eb-9b86-8575186247aa.PNG">


