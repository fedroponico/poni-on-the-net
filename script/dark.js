var element = document.body;

if (localStorage.length == 0) {
    element.classList.add("darkMode")
    localStorage.setItem("dark", "y")
}

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
        localStorage.setItem("lig", 'y')
        console.log('LIGHT')

    } else {
        element.classList.add("darkMode")
        localStorage.removeItem("lig")
        localStorage.setItem("dark", "y")
        console.log('DARK')

    }
}