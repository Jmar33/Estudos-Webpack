import './button.scss'

class Button {

  crete(){

    const btn = document.createElement('button');

    btn.innerText = 'Clique em mim!';
    btn.classList.add('btn')

    document.querySelector('body').appendChild(btn);
  }
}

export default Button