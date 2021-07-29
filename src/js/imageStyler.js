export function imgStyler() {
    let images = document.querySelectorAll(".projectImg");
    let follow = document.querySelectorAll(".follow");
    images.forEach(image => image.classList.add("img-responsive img-rounded"))
    follow.forEach(el => {
        el.classList.add("btn btn-default btn-lg");
    })
}