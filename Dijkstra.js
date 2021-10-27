/**
 * Clase para experimentar el algoritmo de dijkstra.
 */
class Dijkstra {
  /**
   * Constructor del objeto dijkstra
   * @param {Node[]} graph Arrego de nodos
   */
  constructor(graph) {
    this.graph = Object.assign([], graph);
    this.from = undefined;
    this.to = undefined;
    this.head = undefined; // {Path} Mejor camino a analizar
    this.pile = []; // {Path[]} Lista de caminos registrados
  }

  /**
   * Permite encontrar un nodo del grafo por su nameId
   * @param {Node.nameId} nodeId Nombre del nodo
   * @returns {Node} Objeto tipo nodo
   */
  findNode(nodeId) {
    return this.graph.find((n) => n.nameId === nodeId);
  }

  /**
   * Ejecuta algoritmo de dijkstra tomando en consideración dos puntos.
   * @param {Node.nameId} from nameId del nodo de salida
   * @param {Node.nameId} to nameId del nodo final
   */
  execute(from, to) {
    this.from = from;
    this.to = to;
    const startNode = this.findNode(this.from); // Obtener nodo de inicio
    startNode.minLengthToPath = 0; // Se define la ruta minima del nodo de inicio
    this.head = new Path([startNode]); // Se crea el mejor camino a analizar
    this.head.calculateIsFinal(this.to); // Verifica si head es una ruta final
    this.pile.push(this.head); // Agrega head a la pila de posibles caminos a analizar
    // Ciclo, mientras head (mejor ruta a analizar) no sea final.
    while (!this.head.isFinal) {
      this.head = this.getMinPathFromPile(); // Head se convierte en el camino mas corto de la pila
      this.evaluateHeadPaths(); // Se evaluan los caminos derivados del ultimo nodo de head y se agregan a la pila si son rutas minimas de los nodos finales
      this.markCurrentPathAsChecked(); // Se marca el nodo final de head como verificado
      this.deleteCurrentHead(); // Se elimina head de la pila
    }
    console.log(this.head); // Head es final y es la ruta minima de la pila, por lo tanto es la ruta minima.
  }

  /**
   * Obtiene el camino con el peso más pequeño
   * @returns {Path}
   */
  getMinPathFromPile() {
    return this.pile.reduce((bestPath, currentPath) =>
      bestPath.pathWeight < currentPath.pathWeight ? bestPath : currentPath
    );
  }
  /*
   * Evalua todos los posibles caminos de del ultimo nodo de head
   * */
  evaluateHeadPaths() {
    const lastNode = this.head.nodes.at(-1); // Ultimo nodo de la pila seleccionada
    // Foreach; cada arista que llega a nodos no checkeados
    lastNode.getAllNonCheckedEdges().forEach((edge) => {
      // Por cada arista no checkeada:
      const temporaryPath = new Path([...this.head.nodes, edge.node]); // Se crea un camino
      temporaryPath.calculateIsFinal(this.to); // Se calcula si es un camino final
      if (edge.node.minLengthToPath > temporaryPath.pathWeight) {
        // Si el peso minimo registrado para el nodo al que llega ese camino es mayor al peso del camino calculado:
        edge.node.minLengthToPath = temporaryPath.pathWeight; // Se asigna un nuevo peso minimo al nodo
        // No es obligatorio, pero aquí se puede eliminar el camino a ese nodo que queda obsoleto
        this.pile.push(temporaryPath); // Se agrega el nuevo camino a la pila
      }
    });
  }
  /*
   * Marca el ultimo nodo del camino actual como verificado
   * */
  markCurrentPathAsChecked() {
    const lastNode = this.head.nodes.at(-1);
    lastNode.checked = true;
  }
  /*
   * Elimina el nodo head de la pila
   * */
  deleteCurrentHead() {
    // Remover a head de la pila.
    this.pile = this.pile.filter((path) => !Object.is(path, this.head));
  }
}
