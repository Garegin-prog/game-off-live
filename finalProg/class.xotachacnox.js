class Xotachacnox {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 200;
        this.multiply = 0;
        this.directions = [

            [this.x, this.y - 1],
            [this.x, this.y + 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 2, this.y - 2],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x, this.y - 3],
            [this.x + 3, this.y],
            [this.x, this.y + 3],
            [this.x - 3, this.y],
            [this.x - 4, this.y - 4],
            [this.x + 4, this.y - 4],
            [this.x - 4, this.y + 4],
            [this.x + 4, this.y + 4]
        ]

    }
    getNewDirections() {
        this.directions = [

            [this.x, this.y - 1],
            [this.x, this.y + 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 2, this.y - 2],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x, this.y - 4],
            [this.x + 4, this.y],
            [this.x, this.y + 4],
            [this.x - 4, this.y],
            [this.x - 5, this.y - 5],
            [this.x + 5, this.y - 5],
            [this.x - 5, this.y + 5],
            [this.x + 5, this.y + 5]

        ]
    }
    chooseCell(character, character1) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character1) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;

    }
    move() {
        var empty = random(this.chooseCell(0, 1))
        this.energy -= 2;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            if (matrix[newY][newX] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == newX && grassArr[i].y == newY) {
                        grassArr.splice(i, 1)
                    }
                }
            }

            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 1
            var newGr = new Grass(this.x, this.y)
            grassArr.push(newGr)


            this.x = newX
            this.y = newY

        }
    }


}