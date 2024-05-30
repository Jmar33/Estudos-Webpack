import Heading from './components/heading/heading.js'
import './components/heading/heading.css'

const heading = new Heading();

heading.create('Primeira página');

console.log(VERSION);
console.log(PORT);

console.log(process.env.API_KEY);