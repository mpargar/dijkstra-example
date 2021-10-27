/*
 * Clase para definir los nodos
 * */
class Node {
  /**
   * Constructor de la clase
   * @param {string} nameId Nombre del nodo
   * @param {Edge[]} edges Arreglo de ligas/links/aristas, arreglo vacio si el parametro es undefined
   * @param {boolean} checked Si el nodo ya fue revisado, falso si el parametro es undefined
   * @param {number} minLengthToPath Tamaño minimo para llegar al nodo, infinito si el parametro es undefined
   * */
  constructor(nameId, edges = [], checked = false, minLengthToPath = Infinity) {
    this.nameId = nameId;
    this.edges = edges;
    this.checked = checked;
    this.minLengthToPath = minLengthToPath;
  }
  /**
   * Metodo para agregar aristas, no era necesario pero ya lo puse aquí haha
   * @param {Edge[]} edges Arreglo de aristas
   * */
  setEdges(edges) {
    this.edges = edges;
  }
  /**
   * Busca una arista que llegue al identificador del nodo agregado como parametro
   * @param {Node.nameId} nodeNameId Identificador del nodo a buscar
   * @returns {Edge|undefined} Retorna el Edge o undefined en caso de no ser encontrado
   */
  findEdgeTo(nodeNameId) {
    return this.edges.find((e) => e.node.nameId === nodeNameId);
  }
  /**
   * Obtiene un arreglo de aristas a nodos que no han sido evaluados (checked)
   * @returns {Edge[]} Arreglo de aristas encontradas
   */
  getAllNonCheckedEdges() {
    return this.edges.filter((edge) => !edge.node.checked);
  }
}
