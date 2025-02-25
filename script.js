function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profire img")
  // SUBSTITUIR A IMAGEM
  if (html.classList.contains("light")) {
    //se tiver no modo claro adiciona a img clara
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver escuro ele muda para a primeira foto
    img.setAttribute("src", "./assets/avatar.png")
  }
}
