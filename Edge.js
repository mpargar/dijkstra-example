/**
 * Clase para abstraer las aristas
 */
class Edge {
  /**
   * Constructor para generar una arista
   * @param {Node} node Nodo al que lleva la arista
   * @param {number} weight Peso para llegar al nodo
   */
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}
