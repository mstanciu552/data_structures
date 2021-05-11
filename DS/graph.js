class Graph {
    constructor(matrix) {
        this.matrix = matrix;
    }
    convertToPairs() {
        let pairs = [];
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = i; j < this.matrix.length; j++) {
                if (this.matrix[i][j] === 1) pairs.push([i + 1, j + 1]);
            }
        }
        return pairs;
    }
}

export default Graph;
