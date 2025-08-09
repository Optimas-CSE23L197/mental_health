document.getElementById("hambarger").addEventListener("click", () => {
    document.querySelector('.nav-menu ul').classList.toggle('show-menu');
    console.log("hello")
})

document.getElementById("hambarger").classList.toggle('.show-hambarger')