# Ciclo de vida en Node
```txt
Cuando ejecutamos un comando de tipo node, este
crea el proceso main(). Este se encarga de 
ejecutar nuestro programa línea a línea.
```
Entonces con los 3 programas hechos antes, `app{numero}.js`, ejecutará el `main()` y cada línea de nuestro código la irá poniendo en la pila de procesos, conocida como `Call Stack`. Una vez ejecuta un proceso, Node elimina de la pila ese proceso. 

En resumen:
1. Introduce la línea de código en el `Call Stack`.
2. Ejecuta el proceso y lo elimina. Así en bucle hasta terminar el `main()`.

Ahora, cuando hay funciones, es un poco distinto.
En `app2.js`, tenemos la función `saludar()`. Node lo que hace en el `Call Stack` es comprender que hay una función ahí, pero no la va a ejecutar directamente. La ejecutará cuando Node vea que se está empleando.

---

Con el tercer programa la cosa ya es un poco más compleja. 

Ejecutamos el comando `node app3.js` y crea el `main()`. Entonces toma el primer `setTimeout()` y lo coloca en la pila de procesos y lo registra. Como no se debe de ejecutar al instante por los 3 segundos de retraso que le impusimos, la mueve a la parte de `Node Apis`.

Este es un lugar donde Node está pendiente de sus procesos. Las otras 2 funciones, aunque tengan 0 segundos de retardo, también las va a registrar y poner en `Node Apis`. Esto sucede porque las funciones son asíncronas. 

Mientras se está ejecutando el programa, las funciones con 0 de retardo ya habrán pasado ese tiempo de espera lo más seguro, pero eso no quiere decir que Node las ponga en el `Call Stack` directamente para ser ejecutadas, lo que hace primero es pasarla a una pila de callbacks, esto es hasta que la función `main()` acaba.

Entonces una vez terminada, Node va a coger los `callbacks` restantes de la pila y los irá ejecutando en el `Call Stack` por orden.

Por eso cuando ejecutamos el tercer programa, el resultado de este es:
```powershell
Inicio de programa
Fin de programa
Segundo Timeout
Tercer Timeout
Primer Timeout
```