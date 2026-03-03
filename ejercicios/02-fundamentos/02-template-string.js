console.clear();

const nombre = "Pablo";
const apellido = "Gómez";

const normal = nombre + " " + apellido;
const template = `${ nombre } ${ apellido }`;

console.log(normal);
console.log(template);

console.log( normal === template );

const html = `
<h1>Hola</h1>
<p>Mundo</p>
`;

console.log(html);