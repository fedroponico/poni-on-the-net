document.addEventListener("DOMContentLoaded", function() {
    axios
        .get("../total.json")
        .then(function(response) {
            works = response.data;
            appendWorks(works);
            // window.addEventListener("scroll", moveCamera);
            // window.addEventListener("mousemove", moveCameraAngle);
            setSceneHeight();
        })
        .catch(function(error) {
            console.log(error);
        });
});


function createWorkItem(work) {
    return `<li>
    <a href="${work.url}"><h1>${work.titolo}</h1></a>
      <p>${work.descrizione}</p>
    
</li>`;
}


function appendWorks(works) {
    const worksEl = document.querySelector(".listProj");
    let worksNodes = [];

    for (work of works) {
        worksNodes.push(createWorkItem(work));
    }

    worksEl.innerHTML = worksNodes.join(" ");
}