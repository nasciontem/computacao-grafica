/**
 * Estrutura de dados responsável pela definição dos 
 * campos do 'formularioRecorte'.
 */
export default class FormularioRecorte {
  coordenadaXInicial
  coordenadaYInicial
  coordenadaXFinal
  coordenadaYFinal

  constructor() {
    this.coordenadaXInicial = ''
    this.coordenadaYInicial = ''
    this.coordenadaXFinal = ''
    this.coordenadaYFinal = ''
  }

  /**
   * @param {Object} campos
   */
  set campos(campos) {
    this.coordenadaXInicial = campos.coordenadaXInicial ?? this.coordenadaXInicial
    this.coordenadaYInicial = campos.coordenadaYInicial ?? this.coordenadaYInicial
    this.coordenadaXFinal = campos.coordenadaXFinal ?? this.coordenadaXFinal
    this.coordenadaYFinal = campos.coordenadaYFinal ?? this.coordenadaYFinal
  }
}