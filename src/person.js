const person_containerNew = document.getElementById("person_container");

const jsonParse = localStorage.getItem("Persona");
const persona = JSON.parse(jsonParse);

const personaRender = () => {
  const personaEl = document.createElement("div");

  const personInnerHtml = `
  <div class="person-info">
      <div>
        <img class="main-person" src="${persona.images[0].large}" alt="" />
      </div>
      <div class="person-data">
        <div class="person-id person-name">Name: ${
          persona.title ? persona.title : "No Name"
        }</div>
        <div class="person-id">BirthDay: ${
          persona.dates_of_birth_used
            ? persona.dates_of_birth_used[0]
            : "No Birthday"
        }</div>
        <div class="person-id">Crime: ${
          persona.caution ? persona.caution : "No Crime Known"
        }</div>
        <div class="person-id">UID: ${persona.uid}</div>
        <div class="person-id">Dercription: ${
          persona.description ? persona.description : "No Description"
        }</div>
        <div class="person-id person-name">Reward: ${
          persona.reward_text ? persona.reward_text : "No reward"
        }</div>
      </div>
    </div>

  `;
  personaEl.innerHTML = personInnerHtml;
  person_containerNew?.appendChild(personaEl);

  console.log(document.getElementById("button"));

  document.getElementById("button").addEventListener("click", () => {
    const json = JSON.stringify(persona);
    localStorage.setItem("PersonaLock", json);
    window.location.href = "./address.html";
  });
};

personaRender();
