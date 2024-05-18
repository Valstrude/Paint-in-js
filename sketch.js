// ATRIBUIÇÔES: 
// Ícones feitos por IconBaandar em www.flaticon.com
// Ícones feitos por Freepik de www.flaticon.com

// BG
let bg_color = "white"
let menu_height = 90

// icones
let using = [true, false, false, false]

// color of button and borders
let click = ["rgb(100,100,100)", "rgb(216,216,216)", "rgb(216,216,216)", "rgb(216,216,216)"]
let line_out = 1

function setup() {
  createCanvas(750, 750)
  background(bg_color)
  Elements()
}

function Elements() {
  noStroke()
  
  // opcao para salvar
  let save_icon = createImg("assets/arquivo.png", 'salvar')
  save_icon.position(30, 30)
  save_icon.mousePressed(save_canvas)
  
  // lapis button
  let lapis_icon = createImg("assets/lapis.png", 'Lapis')
  lapis_icon.position(130, 30)
  lapis_icon.mousePressed(pensil)
  
  // borracha button
  let eraser_icon = createImg("assets/borracha.png", 'Borracha')
  eraser_icon.position(210, 30)
  eraser_icon.mousePressed(eraser)
  
  // quadrado
  let quadrado = createImg("assets/quadrado.png", 'quadrado')
  quadrado.position(309, 30)
  quadrado.mousePressed(draw_quadrado)
  
  // triangulo
  let triangulo = createImg("assets/piramide.png", 'triangulo')
  triangulo.position(368, 30)
  triangulo.mousePressed(draw_triangulo)
  
  // slider do tamanho do lapis
  slider = createSlider(0, 255, 30)
  slider.position(465, 40)
  
  // color do lapis
  cor = createColorPicker("black")
  cor.position(675, 35)
}

// save canvas
function save_canvas() {
  let copia = get(0, 100, width, height - 90)
  copia.save("Desenho.jpeg")
}

// função do lapis
function pensil() {
  using[0] = true
  using[1] = false
  using[2] = false
  using[3] = false
  click[0] = ("rgb(100,100,100)")
  click[1] = ("rgb(216,216,216)")
  click[2] = ("rgb(216,216,216)")
  click[3] = ("rgb(216,216,216)")
}

// função da borracha
function eraser() {
  using[0] = false
  using[1] = true
  using[2] = false
  using[3] = false
  click[0] = ("rgb(216,216,216)")
  click[1] = ("rgb(100,100,100)")
  click[2] = ("rgb(216,216,216)")
  click[3] = ("rgb(216,216,216)")
  
}

function draw_quadrado() {
  using[0] = false
  using[1] = false
  using[2] = true
  using[3] = false
  click[0] = ("rgb(216,216,216)")
  click[1] = ("rgb(216,216,216)")
  click[2] = ("rgb(100,100,100)")
  click[3] = ("rgb(216,216,216)")
}

function draw_triangulo() {
  using[0] = false
  using[1] = false
  using[2] = false
  using[3] = true
  click[0] = ("rgb(216,216,216)")
  click[1] = ("rgb(216,216,216)")
  click[2] = ("rgb(216,216,216)")
  click[3] = ("rgb(100,100,100)")
}

function draw() {
  // desenha o menu
  fill("rgb(177,177,177)")
  stroke("black")
  strokeWeight(line_out)
  rect(0, 0, width, 90)
  noStroke()
  
  // texto salvar
  fill("black")
  textStyle(BOLD)
  textSize(15)
  text("Salvar", 22.5, 20)
  
  // texto lapis
  fill("black")
  textStyle(BOLD)
  textSize(15)
  text("Lápis", 126, 20)
  
  // texto borracha
  fill("black")
  textStyle(BOLD)
  textSize(15)
  text("Borracha", 195, 20)
  
  // texto formas
  fill("black")
  textStyle(BOLD)
  textSize(15)
  text("Formas", 330, 20)
  
  // texto do tamanho
  fill("black")
  textStyle(BOLD)
  textSize(15)
  text("Tamanho", 500, 20)
  
  // texto da cor
  fill("black")
  textStyle(BOLD)
  textSize(15)
  text("Cor", 687, 20)
  
  // rect de salvar
  fill("rgb(216,216,216)")
  stroke("black")
  strokeWeight(line_out)
  rect(20, 25, 50, 45, 20)
  
  // rect do lapis
  fill(click[0])
  stroke("black")
  strokeWeight(line_out)
  rect(120, 25, 50, 45, 20)
  noStroke()
  
  // rect da borracha
  fill(click[1])
  stroke("black")
  strokeWeight(line_out)
  rect(200, 25, 50, 45, 20)
  noStroke()
  
  // rect quadrado
  fill(click[2])
  stroke("black")
  strokeWeight(line_out)
  rect(300, 25, 50, 45, 20)
  noStroke()
  
  // rect triangulo
  fill(click[3])
  stroke("black")
  strokeWeight(line_out)
  rect(360, 25, 50, 45, 20)
  noStroke()

  // lapis desenhar
  if (mouseIsPressed && mouseY > menu_height && using[0] == true) {
    stroke(cor.color())
    strokeWeight(slider.value())
    line(pmouseX, pmouseY, mouseX, mouseY)
  }
  // borracha apagar
  if (mouseIsPressed && mouseY > menu_height && using[1] == true) {
    stroke(bg_color)
    strokeWeight(slider.value())
    line(pmouseX, pmouseY, mouseX, mouseY)
  }
  // quadrado
  if (mouseIsPressed && mouseY > menu_height && using[2] == true) {
    fill(cor.color())
    strokeWeight(slider.value())
    rect(pmouseX - 10, pmouseY - 10, slider.value(), slider.value())
  }
  // triangulo
  if (mouseIsPressed && mouseY > menu_height && using[3] == true) {
    fill(cor.color())
    strokeWeight(slider.value())
    triangle(mouseX, mouseY, mouseX + slider.value(), mouseY + slider.value(), mouseX - slider.value(), mouseY + slider.value())
  }  
  
  // comando para apagar todo o desenho
  if (keyIsDown(82)) {
  fill(bg_color)
  rect(0, 91, width, height - menu_height)
  }
  
  // tecla de atalho: lapis
  if (keyIsDown(69)) {
    pensil()
  }
  
  // tecla de atalho: borracha
  if (keyIsDown(32)) {
    eraser()
  }
  
  // tecla de atalho: quadrado
  if (keyIsDown(16)) {
    draw_quadrado()
  }
  
  // tecla de atalho: triangulo
  if (keyIsDown(17)) {
    draw_triangulo()
  }
}
