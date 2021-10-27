/*
 * Clase para abstraer un camino
 * */
class Path {
  /**
   * Constructor de path
   * @param {Node[]} nodes Arreglo de nodos inicial
   * @param {boolean} isFinal lo define como final, falso si el parametro es undefined
   * @param {number} pathWeight define el peso del path desde el inicio, infitiyo si el parametro es undefined
   */
  constructor(nodes = [], isFinal = false, pathWeight = Infinity) {
    // Se construye el objeto
    this.nodes = nodes;
    this.isFinal = isFinal;
    this.pathWeight = pathWeight;
    // Se calcula el peso del path
    this.calculatePathWeight();
  }
  /**
   * Función que calcula el peso del camino deacuerdo a sus nodos.
   */
  calculatePathWeight() {
    this.pathWeight = this.nodes.reduce((counter, node, index) => {
      if (index < this.nodes.length - 1) {
        const nextNodeNameId = this.nodes[index + 1].nameId;
        const edge = node.findEdgeTo(nextNodeNameId);
        return counter + edge.weight;
      }
      return counter;
    }, 0);
  }
  /**
   * Verifica que el nameId del ultimo nodo del camino es igual al parametro
   * @param {Node.nameId} finalId Nombre del nodo final
   *  */
  calculateIsFinal(finalId) {
    this.isFinal = this.nodes.at(-1).nameId === finalId;
  }
}
