class Satana {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 200;
        this.directions = []
    }

    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1]
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
        var empty = random(this.chooseCell(0, 3))
        this.energy -= 2;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]

            if (matrix[newY][newX] == 3) {
                for (var i in gishatichArr) {
                    if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                        gishatichArr.splice(i, 1)
                    }
                }
            }
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 3 || 2


            if (matrix[this.y][this.x] = 3) {
                var gsh = new Gishatich(this.x, this.y)
                gishatichArr.push(gsh)
            }
            if (matrix[this.y][this.x] = 2) {
                var xt = new Xotaker(this.x, this.y)
                xotakerArr.push(xt)
            }

            this.x = newX
            this.y = newY
        }
    }


    eat() {
        var food = random(this.chooseCell(1))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0


            for (var i in mardArr) {
                if (mardArr[i].x == newX && mardArr[i].y == newY) {
                    mardArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
        else{
            this.move()
            this.die()
        }
    }

    die() {

        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in satanaArr) {
                if (satanaArr[i].x == this.x && satanaArr[i].y == this.y) {
                    satanaArr.splice(i, 1)
                }
            }
        }
    }
}