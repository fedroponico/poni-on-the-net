document.addEventListener("DOMContentLoaded", function() {
    axios
        .get("../bio.json")
        .then(function(response) {
            bios = response.data;
            appendbios(bios);
            // window.addEventListener("scroll", moveCamera);
            // window.addEventListener("mousemove", moveCameraAngle);
            setSceneHeight();
        })
        .catch(function(error) {
            console.log(error);
        });
});


function createbioItem(bio) {
    return `<li>
    <span>${bio.year}</span>
    <span>${bio.title}</span>
    <span>${bio.where}</span>
    </li>`;
}


function appendbios(bios) {
    const biosEl = document.querySelector(".listBio");
    let biosNodes = [];

    for (bio of bios) {
        biosNodes.push(createbioItem(bio));
    }

    biosEl.innerHTML = biosNodes.join(" ");
}