var side = 50;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var satanaArr = [];
var xotachacnoxArr = [];
function matrixGenerator(l) {
    // Local matrix
    var m = [];
    // Fill matrix
    for (var i = 0; i < l; i++) {
        m[i] = [];
        for (var j = 0; j < l; j++) {
            // Stexcel random tiv
            var rand = random(0, 100);
            // Lcnel matrix tokosayin haraberutyamb
            if (rand <= 30) {
                // Xot
                m[i][j] = 1;
            } else if (rand > 30 && rand <= 50) {
                // Xotaker
                m[i][j] = 2;
            } else if (rand > 50 && rand <= 60) {
                // Gishatich
                m[i][j] = 3;
            } else if (rand > 60 && rand <= 70) {
                // Nor kerpar 1
                m[i][j] = 4;
            } else if (rand > 70 && rand <= 80) {
                // Nor kerpar 2
                m[i][j] = 5;
            }
            else if (rand > 80 && rand <= 90) {
                m[i][j] = 6;
            }
            else {
                // Datarkutyun
                m[i][j] = 0;
            }
        }
    }
    // Veradarcnel matrix
    return m;
}

// Haytararel global matrix popoxakan
var matrix;
function setup() {
    matrix = matrixGenerator(25);
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xot = new Xotaker(x, y)
                xotakerArr.push(xot)
            }
            else if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y)
                gishatichArr.push(gish)
            }
            else if (matrix[y][x] == 4) {
                var mar = new Mard(x, y)
                mardArr.push(mar)
            }
            else if (matrix[y][x] == 5) {
                var st = new Satana(x, y)
                satanaArr.push(st)
            }
            else if (matrix[y][x] == 6) {
                var xots = new Xotachacnox(x, y)
                xotachacnoxArr.push(xots)
            }
        }

    }
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("#0B52EC");
            }
            else if (matrix[y][x] == 5) {
                fill("#000000");
            }
            else if (matrix[y][x] == 6) {
                fill("#B50BEC");
            }

            rect(x * side, y * side, side, side)


        }
    }

    for (var i in grassArr) {
        grassArr[i].mult();
        if (grassArr.length <= 100) {
            grassArr[i].multiply = 8;
        }
    }
    for (var i in xotakerArr) {
        xotakerArr[i].eat();
        if (xotakerArr.length <= 5) {
            var y1 = floor(random(matrix.length));
            var x1 = floor(random(matrix[y1].length));
            if (matrix[y1][x1] == 0) {
                matrix[y1][x1] = 2;
                var great = new Xotaker(x1, y1);
                xotakerArr.push(great);
            }
        }
    }

    for (var i in gishatichArr) {
        gishatichArr[i].eat();
        if (gishatichArr.length <= 6) {
            var y1 = floor(random(matrix.length));
            var x1 = floor(random(matrix[y1].length));
            if (matrix[y1][x1] == 0 || matrix[y1][x1] == 1 || matrix[y1][x1] == 5) {
                matrix[y1][x1] = 3;
                var gish = new Gishatich(x1, y1);
                gishatichArr.push(gish);

            }
        }
    }
    for (var i in mardArr) {
        mardArr[i].eat()
    }
    for (var i in satanaArr) {
        satanaArr[i].eat()
    }
    for (var i in xotachacnoxArr) {
        xotachacnoxArr[i].move()
    }
    

}