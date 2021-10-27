/**
 * Función para generar el arreglo de nodos con sus aristas
 * @returns {Node[]}
 */
const createMap = () => {
  const nodes = [];
  /**
   * Función para buscar un nodo por nameId
   * @param {Node.nameId} nameId
   * @returns {Node}
   */
  const searchNode = (nameId) => nodes.find((n) => n.nameId === nameId);
  // Generar nodos por su char code
  for (let i = 65; i <= 80; i++) {
    nodes.push(new Node(String.fromCharCode(i)));
  }
  // Generar ligas
  searchNode("A").setEdges([
    new Edge(searchNode("B"), 8),
    new Edge(searchNode("D"), 5),
    new Edge(searchNode("E"), 4),
  ]);

  searchNode("B").setEdges([
    new Edge(searchNode("A"), 8),
    new Edge(searchNode("C"), 3),
    new Edge(searchNode("F"), 4),
    new Edge(searchNode("E"), 12),
  ]);

  searchNode("C").setEdges([
    new Edge(searchNode("B"), 3),
    new Edge(searchNode("G"), 11),
    new Edge(searchNode("F"), 9),
  ]);

  searchNode("D").setEdges([
    new Edge(searchNode("A"), 5),
    new Edge(searchNode("E"), 9),
    new Edge(searchNode("H"), 6),
  ]);

  searchNode("E").setEdges([
    new Edge(searchNode("A"), 4),
    new Edge(searchNode("B"), 12),
    new Edge(searchNode("D"), 9),
    new Edge(searchNode("F"), 3),
    new Edge(searchNode("J"), 5),
    new Edge(searchNode("I"), 8),
  ]);

  searchNode("F").setEdges([
    new Edge(searchNode("B"), 4),
    new Edge(searchNode("C"), 9),
    new Edge(searchNode("E"), 3),
    new Edge(searchNode("G"), 1),
    new Edge(searchNode("K"), 8),
  ]);

  searchNode("G").setEdges([
    new Edge(searchNode("C"), 11),
    new Edge(searchNode("F"), 1),
    new Edge(searchNode("K"), 8),
    new Edge(searchNode("L"), 7),
  ]);

  searchNode("H").setEdges([
    new Edge(searchNode("D"), 6),
    new Edge(searchNode("I"), 2),
    new Edge(searchNode("M"), 7),
  ]);

  searchNode("I").setEdges([
    new Edge(searchNode("E"), 8),
    new Edge(searchNode("J"), 10),
    new Edge(searchNode("H"), 2),
    new Edge(searchNode("M"), 6),
  ]);

  searchNode("J").setEdges([
    new Edge(searchNode("E"), 5),
    new Edge(searchNode("I"), 10),
    new Edge(searchNode("K"), 6),
    new Edge(searchNode("N"), 9),
  ]);

  searchNode("K").setEdges([
    new Edge(searchNode("F"), 8),
    new Edge(searchNode("J"), 6),
    new Edge(searchNode("G"), 8),
    new Edge(searchNode("L"), 5),
    new Edge(searchNode("P"), 7),
  ]);

  searchNode("L").setEdges([
    new Edge(searchNode("G"), 7),
    new Edge(searchNode("K"), 5),
    new Edge(searchNode("P"), 6),
  ]);

  searchNode("M").setEdges([
    new Edge(searchNode("H"), 7),
    new Edge(searchNode("I"), 6),
    new Edge(searchNode("N"), 2),
  ]);

  searchNode("N").setEdges([
    new Edge(searchNode("M"), 2),
    new Edge(searchNode("J"), 9),
    new Edge(searchNode("P"), 12),
  ]);

  searchNode("P").setEdges([
    new Edge(searchNode("L"), 6),
    new Edge(searchNode("K"), 7),
    new Edge(searchNode("N"), 12),
  ]);

  return nodes;
};
