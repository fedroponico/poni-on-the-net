var element = document.body;



if (localStorage.getItem("dark")) {
    element.classList.add("darkMode")
    console.log('dark')
} else {
    console.log('light')
}

function dark() {

    if (localStorage.getItem("dark")) {
        element.classList.remove("darkMode")
        localStorage.removeItem("dark")
        console.log('dark')

    } else {
        element.classList.add("darkMode")
        localStorage.setItem("dark", "y")
        console.log('lig')

    }
}