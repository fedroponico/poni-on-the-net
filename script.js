
randomAggettivo = document.getElementById("me");


var typewriter = new Typewriter(randomAggettivo, {
    loop:true,
    cursor:"",
    delay: 0.1
});

typewriter.typeString('n artist')
        .pauseFor(50)
        .deleteAll()
        .typeString(' pigeon')
        .pauseFor(50)
        .deleteAll()
        .typeString(' copy-paster')
        .pauseFor(50)
        .deleteAll()
        .typeString(' boring horse')
        .pauseFor(50)
        .deleteAll()
        .typeString(' XPUB student')
        .pauseFor(50)
        .deleteAll()
        .typeString(' website builder')

        
        
        .start();

            
            
document.addEventListener("DOMContentLoaded", function() {
  axios
    .get("/works.json")
    .then(function(response) {
      works = response.data;
      appendWorks(works);
      window.addEventListener("scroll", moveCamera);
      window.addEventListener("mousemove", moveCameraAngle);
      setSceneHeight();
    })
    .catch(function(error) {
      console.log(error);
    });
});

function createWorkItem(work) {
  return `<div style="${work.stile}">
    <h1>${work.titolo}</h1>
    <p>${work.tecnica}</p>
    <p>${work.descrizione}</p>
    <img src="${work.img}">
  </div>`;
}
 


function appendWorks(works) {
  const worksEl = document.querySelector(".viewport .scene3D");
  let worksNodes = [];

  for (work of works) {
    worksNodes.push(createWorkItem(work));
  }

  worksEl.innerHTML = worksNodes.join(" ");
}








document.addEventListener("DOMContentLoaded", function() {
  setSceneHeight();
});

function setSceneHeight() {
  const numberOfItems = works.lenght; 
  const itemZ = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
  );
  const scenePerspective = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspective"
    )
  );
  const cameraSpeed = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
  );

  const height =
    window.innerHeight +
    scenePerspective * cameraSpeed +
    itemZ * cameraSpeed * numberOfItems;

  // Update --viewportHeight value
  document.documentElement.style.setProperty("--viewportHeight", height);
}


document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", moveCamera);
  setSceneHeight();
});

function moveCamera() {
  document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
}

function setSceneHeight() {
  const numberOfItems = 4; 
  const itemZ = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
  );
  const scenePerspective = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspective"
    )
  );
  const cameraSpeed = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
  );

  const height =
    window.innerHeight +
    scenePerspective * cameraSpeed +
    itemZ * cameraSpeed * numberOfItems;

  // Update --viewportHeight value
  document.documentElement.style.setProperty("--viewportHeight", height);
}

const perspectiveOrigin = {
  x: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspectiveOriginX"
    )
  ),
  y: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspectiveOriginY"
    )
  ),
  maxGap: 10
};

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", moveCamera);
  window.addEventListener("mousemove", moveCameraAngle);
  setSceneHeight();
});

function moveCameraAngle(event) {
  const xGap =
    (((event.clientX - window.innerWidth / 2) * 100) /
      (window.innerWidth / 2)) *
    -1;
  const yGap =
    (((event.clientY - window.innerHeight / 2) * 100) /
      (window.innerHeight / 2)) *
    -1;
  const newPerspectiveOriginX =
    perspectiveOrigin.x + (xGap * perspectiveOrigin.maxGap) / 100;
  const newPerspectiveOriginY =
    perspectiveOrigin.y + (yGap * perspectiveOrigin.maxGap) / 100;

  document.documentElement.style.setProperty(
    "--scenePerspectiveOriginX",
    newPerspectiveOriginX
  );
  document.documentElement.style.setProperty(
    "--scenePerspectiveOriginY",
    newPerspectiveOriginY
  );
}
  