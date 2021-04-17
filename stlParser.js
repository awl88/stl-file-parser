var fs = require("fs"), filename = process.argv[2];

fs.readFile(filename, "utf8", function(err, data) {
    let loops = data.match(/outer loop[\s\S]*?endloop/g)
    let surfaceArea = 0;

    
    console.log('Number of Triangles: ', loops.length);
    const vertices = extractVertices(loops);
    
    vertices.map((innerVertices) => {
        surfaceArea += determineTriangleArea(innerVertices);
    })

    console.log('Surface Area: ', surfaceArea.toFixed(4));
});

const extractVertices = (loops) => {
    let vertices = []
    let verticesFinal = [];

    loops.map((loop) => {
        let digits = loop.match(/\d+\.?\d*/g)

        while (digits.length > 0) {
            vertices.push(digits.splice(0,3))
        }
    })

    while (vertices.length > 0) {
        verticesFinal.push(vertices.splice(0,3));
    }

    return verticesFinal;
} 

const determineTriangleArea = (triangle) => {

    const sideA = determineLengthOfSide(triangle[0], triangle[1]);   
    const sideB = determineLengthOfSide(triangle[0], triangle[2]);
    const sideC = determineLengthOfSide(triangle[1], triangle[2]);

    const semiperimeter = (sideA + sideB + sideC) / 2

    const x = Math.sqrt(semiperimeter * (semiperimeter - sideA) * (semiperimeter - sideB) * (semiperimeter - sideC));
    // console.log(x);
    return x;   
}

const determineLengthOfSide = (point1, point2) => {

    var newPoint = point1.map((item, index) => {
        return item - point2[index]
    })

    return Math.sqrt(Math.abs(newPoint.reduce((a, b) => a + b, 0)));
}