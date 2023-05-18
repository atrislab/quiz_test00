const preguntas = [
  {id: "q01Card", respuesta: "A"},
  {id: "q02Card", respuesta: "B"},
  {id: "q03Card", respuesta: "C"},
  {id: "q04Card", respuesta: "D"},
  {id: "q05Card", respuesta: "A"},
  {id: "q06Card", respuesta: "B"},
  {id: "q07Card", respuesta: "C"},
  {id: "q08Card", respuesta: "A"},
  {id: "q09Card", respuesta: "B"},
  {id: "q10Card", respuesta: "D"}
];

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let aciertos = 0;
  preguntas.forEach(function(pregunta) {
    const respuesta = document.querySelector(`#${pregunta.id} input:checked`).value;
    if (respuesta === pregunta.respuesta) {
      aciertos++;
      document.querySelector(`#${pregunta.id}`).classList.add("correcta");
    } else {
      document.querySelector(`#${pregunta.id}`).classList.add("incorrecta");
    }
  });
  const porcentaje = Math.round(aciertos / preguntas.length * 100);
  const resultsDiv = document.querySelector(".results00");
  resultsDiv.innerHTML = `Has acertado ${aciertos} de ${preguntas.length} preguntas (${porcentaje}%).`;
});