import print from './msg'

//Shiming
//Com o shiming deixamos como responsabilidade do webpack definir quem são nossas variáveis globais
console.log(_.difference([1, 2, 3], [4, 5])); 

console.log(_.lastIndexOf([1, 2, 3], 3));

if(module.hot){
  module.hot.accept('./msg.js', function(){
    console.log("O módulo de mensagem atualizou!");
    print();
  });
}


function createButton(){
  const btn = document.createElement('button');

  btn.innerText = "Clique aqui!";

  document.querySelector('body').appendChild(btn);

  btn.onclick = e => import('./lazy').then((module) =>{
    
    const lazy = module.default;

    lazy();
  })
}

createButton();