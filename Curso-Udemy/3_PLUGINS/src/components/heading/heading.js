class Heading {
  create(title){

    const h1 = document.createElement('h1');

    h1.innerText = title;
    h1.classList.add('title');

    const body = document.querySelector('body');
    body.appendChild(h1);
  }
}

export default Heading;