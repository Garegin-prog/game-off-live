class Mard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 200;
        this.multiply = 0;
        this.directions = []

    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x, this.y - 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y - 2],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y - 2],
            [this.x + 1, this.y + 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y - 2]

        ]
    }
    chooseCell(character, character1) {
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
        }
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
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

            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 1
            var newGr = new Grass(this.x, this.y)
            grassArr.push(newGr)


            this.x = newX
            this.y = newY

        }
    }
    eat() {
        var food = random(this.chooseCell(3))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 0


            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1)
                }
            }

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }
            
            
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
            for (var i in mardArr) {
                if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                    mardArr.splice(i, 1)
                }
            }
        }
    }

}