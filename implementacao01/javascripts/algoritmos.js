const _calcularDelta = (coordenadaFinal, coordernadaInicial) => coordenadaFinal - coordernadaInicial
const _obterDeltas = (pixelFinal, pixelInicial) => [_calcularDelta(pixelFinal.y, pixelInicial.y), _calcularDelta(pixelFinal.x, pixelInicial.x)]
const _obterDeltasAbsolutos = (deltaY, deltaX) => [Math.abs(deltaY), Math.abs(deltaX)]
const _obterQuantidadePassos = (deltaY, deltaX) => deltaX > deltaY ? deltaX : deltaY
const _obterIncrementos = (deltaY, deltaX, passos) => [deltaY / passos, deltaX / passos]

export function desenharRetaComAlgoritmoDDA(pixelFinal, pixelInicial) {
  const [deltaY, deltaX] = _obterDeltas(pixelFinal, pixelInicial)
  const [deltaYAbsoluto, deltaXAbsoluto] = _obterDeltasAbsolutos(deltaY, deltaX)
  const passos = _obterQuantidadePassos(deltaYAbsoluto, deltaXAbsoluto)
  const [incrementoEmY, incrementoEmX] = _obterIncrementos(deltaY, deltaX, passos)

  _calcularPontosDaReta(pixelInicial, incrementoEmX, incrementoEmY, passos)
}

function _calcularPontosDaReta(pixelInicial, incrementoEmX, incrementoEmY, passos) {
  let [x, y] = [pixelInicial.x, pixelInicial.y]
  _desenharPixel(Math.round(x), Math.round(y))

  for (let i = 1; i < passos; i++) _desenharPixel(Math.round(x += incrementoEmX), Math.round(y += incrementoEmY))

  _desenharPixel(Math.round(x), Math.round(y))
}

function _desenharPixel(x, y) {
  const pixel = document.querySelector(`[data-x='${x}'][data-y='${y}'`)
  pixel?.classList.add('selected')
}