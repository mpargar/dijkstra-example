/**
 * Ejecución del objeto Dijkstra
 * @type {Dijkstra}
 */
const dijkstra = new Dijkstra(createMap());
dijkstra.execute("A", "P"); // Se busca la ruta minima desde A hasta P
