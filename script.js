document.querySelector("html").insertAdjacentHTML("afterbegin", "<head><title>Image Gallery</title></head>")

const images = ["imageA", "imageB", "imageC", "imageD", "imageE", "imageF", "imageG"]

images.sort(() => Math.random() - 0.5)

document.querySelector("body").insertAdjacentHTML("afterbegin", "<div id='container'></div>")
let $container = document.getElementById("container")
$container.style.display = "grid"
$container.style.gridTemplateColumns = "auto auto auto"

let contents = []
for (item of images) {
    contents.push(`<a><img src='${item}.jpg'></a>`)
}

$container.innerHTML = contents.join("")

let $imgs = document.querySelectorAll("a")
let counter = 0

for (item of $imgs) {
    item.children[0].classList.add("image")
    item.children[0].style.width = '80%'
    item.children[0].style.padding = '10px'
    item.setAttribute("href", `${images[counter]}.jpg`)
    counter++
}
