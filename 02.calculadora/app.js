let res=document.querySelector("#res")

const suma=()=>{
  let n1=parseInt(document.querySelector("#n1").value);
  let n2=parseInt(document.querySelector("#n2").value);
  csuma=n1+n2;
   res.innerHTML = ` <h1>Resultados</h1>
    <h2>Suma: ${csuma}</h2>`
}

const resta=()=>{
  let n1=parseInt(document.querySelector("#n1").value);
  let n2=parseInt(document.querySelector("#n2").value);
  cresta=n1-n2;
   res.innerHTML = ` <h1>Resultados</h1>
    <h2>resta: ${cresta}</h2>`
}

const multiplicacion=()=>{
  let n1=parseInt(document.querySelector("#n1").value);
  let n2=parseInt(document.querySelector("#n2").value);
  cmultiplicacion=n1*n2;
   res.innerHTML = ` <h1>Resultados</h1>
    <h2>multiplicacion: ${cmultiplicacion}</h2>`
}

const divicion=()=>{
  let n1=parseInt(document.querySelector("#n1").value);
  let n2=parseInt(document.querySelector("#n2").value);
  cdivicion=n1/n2;
   res.innerHTML = ` <h1>Resultados</h1>
    <h2>divicion: ${cdivicion}</h2>`
}