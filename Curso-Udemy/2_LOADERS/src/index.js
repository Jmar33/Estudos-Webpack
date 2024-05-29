import Title from './components/title'
import Image from './components/image'
import Button from './components/button'

const title = new Title();

title.create('Primeira página');

const image = new Image();

image.insertBobImage();

const button = new Button();

button.crete();

const obj = {a: 1, b: 2, c: 3, d:4, e:99};

let {a, b, ...teste} = obj;

console.log(a);
console.log(b);
console.log(teste);