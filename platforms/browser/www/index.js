var cols, rows;
var w = 25;
var grid = [];
var numberOfMovesSoFar = 0;
var numverOfMovesAllowed = 10;

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

var labirinth = 
"1111111111111111111" +
"1002100010101010001" +
"1011101010101011101" + 
"1010101010100010101" + 
"1010111010111010101" + 
"1010001000100010101" + 
"1011101011101110101" + 
"1000000000001010101" +
"1011111010111010101" +
"1010101010001000101" +
"1110101110111011101" +
"1010101010000010001" +
"1010101010111110101" +
"1000000000001010101" + 
"1111111110111011101" +
"1000000000101010101" +
"1011101010101010101" +
"1000101010000000031" + 
"1111111111111111111";

var current, objective;

class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        var actualColor;
      }
    show(number) {
        var x = this.i*w;
        var y = this.j*w;
        stroke(255);
        //painting the labirinth      
        if(number == 1){
            fill(0,0,0);
            this.color = "black";
            this.actualColor = "black";
            rect(x, y, w, w);
        }
        else if(number == 2){
            fill(255,0,255);
            this.color = "purple";
            this.actualColor = "white";
            current = this;
            rect(x, y, w, w);
            current = this;
        }
        else if(number == 3){
            fill(0,255,255);
            this.color = "blue";
            this.actualColor = "blue";
            rect(x, y, w, w);
            objective = this;
        }
        else{
            fill(255,255,255);
            this.color = "white";
            this.actualColor = "white";
            rect(x, y, w, w); 
        } 
    }
    paintingMoveStart(){
        for(var k = 0; k < grid.length; k++){
            grid[k].paint(grid[k]);
        }
    }
    paintingMoveMoving(){
        for(var k = 0; k < grid.length; k++){
            grid[k].paintNew(grid[k]);
        }
    }
    paint(cell) {
        if((cell.i - 1 == current.i && cell.j - 1 == current.j) || (cell.i == current.i && cell.j - 1 == current.j) || (cell.i + 1 == current.i && cell.j - 1 == current.j)
        || (cell.i - 1 == current.i && cell.j     == current.j) || (cell.i == current.i && cell.j     == current.j) || (cell.i + 1 == current.i && cell.j     == current.j)        
        || (cell.i - 1 == current.i && cell.j + 1 == current.j) || (cell.i == current.i && cell.j + 1 == current.j) || (cell.i + 1 == current.i && cell.j + 1 == current.j))
        {
            if(cell.actualColor == "white")
            {
                var x = cell.i*w;
                var y = cell.j*w;
                stroke(255); 
                fill(255,255,255);
                rect(x, y, w, w);}
            if(cell.color == "purple")
            {
                var x = cell.i*w;
                var y = cell.j*w;
                stroke(255); 
                fill(255,0,255);
                rect(x, y, w, w);}
            else if(cell.actualColor == "black")
            {
                var x = cell.i*w;
                var y = cell.j*w;
                stroke(255); 
                fill(0,0,0);
                rect(x, y, w, w);}}
        else
        {   
            if(cell.color != "blue")
            {
            var x = cell.i*w;
            var y = cell.j*w;
            stroke(255); 
            fill(211,211,211);
            rect(x, y, w, w);}
        }
    }
    paintNew(cell) {
        if((cell.i - 1 == current.i && cell.j - 1 == current.j) || (cell.i == current.i && cell.j - 1 == current.j) || (cell.i + 1 == current.i && cell.j - 1 == current.j)
        || (cell.i - 1 == current.i && cell.j     == current.j) || (cell.i == current.i && cell.j     == current.j) || (cell.i + 1 == current.i && cell.j     == current.j)        
        || (cell.i - 1 == current.i && cell.j + 1 == current.j) || (cell.i == current.i && cell.j + 1 == current.j) || (cell.i + 1 == current.i && cell.j + 1 == current.j))
        {
            if(cell.actualColor == "white")
            {
                var x = cell.i*w;
                var y = cell.j*w;
                stroke(255); 
                fill(255,255,255);
                rect(x, y, w, w);}
            if(cell.color == "purple")
            {
                var x = cell.i*w;
                var y = cell.j*w;
                stroke(255); 
                fill(255,0,255);
                rect(x, y, w, w);}
            else if(cell.actualColor == "black")
            {
                var x = cell.i*w;
                var y = cell.j*w;
                stroke(255); 
                fill(0,0,0);
                rect(x, y, w, w);}
        }
    }
    up(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i && grid[k].j == current.j - 1){
                newCell = grid[k];}}
        if(newCell.color == "white"){
            //making the users square white
            var x = current.i*w;
            var y = current.j*w;
            stroke(255); 
            current.color = "white";
            fill(255,255,255);
            rect(x, y, w, w);
            //making the new cell purple
            current = newCell;
            var x = current.i*w;
            var y = current.j*w;
            stroke(255); 
            current.color = "purple";
            fill(255,0,255);
            rect(x, y, w, w);}
            numberOfMovesSoFar += 1
            if(numberOfMovesSoFar >= numverOfMovesAllowed){
                console.log("You lost!");}
            newCell.paintingMoveMoving();
        //checking did we reach the goal
        if(newCell.color == "blue") {
            console.log("Winner!!!")}}
    right(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i + 1 && grid[k].j == current.j){
                newCell = grid[k];}}
        if(newCell.color == "white"){
            //making the users square white
            var x = current.i*w;
            var y = current.j*w;
            stroke(255); 
            current.color = "white";
            fill(255,255,255);
            rect(x, y, w, w);
            //making the new cell purple
            current = newCell;
            var x = current.i*w;
            var y = current.j*w;
            stroke(255); 
            current.color = "purple";
            fill(255,0,255);
            rect(x, y, w, w);}
            numberOfMovesSoFar += 1
            if(numberOfMovesSoFar >= numverOfMovesAllowed){
                console.log("You lost!");}
            newCell.paintingMoveMoving();
        //checking did we reach the goal
        if(newCell.color == "blue") {
            console.log("Winner!!!")}}
    down(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i && grid[k].j == current.j + 1){
                newCell = grid[k];}}
        if(newCell.color == "white"){
            //making the users square white
            var x = current.i*w;
            var y = current.j*w;
            stroke(255); 
            current.color = "white";
            fill(255,255,255);
            rect(x, y, w, w);
            //making the new cell purple
            current = newCell;
            var x = current.i*w;
            var y = current.j*w;
            stroke(255); 
            current.color = "purple";
            fill(255,0,255);
            rect(x, y, w, w);}
            numberOfMovesSoFar += 1
            if(numberOfMovesSoFar >= numverOfMovesAllowed){
                console.log("You lost!");}
                newCell.paintingMoveMoving();
        //checking did we reach the goal   
        if(newCell.color == "blue") {
            console.log("Winner!!!")}}
    left(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i - 1 && grid[k].j == current.j){
                newCell = grid[k];}}
        if(newCell.color == "white"){
            //making the users square white
            var x = current.i*w;
            var y = current.j*w;
            stroke(255); 
            current.color = "white";
            fill(255,255,255);
            rect(x, y, w, w);
            //making the new cell purple
            current = newCell;
            var x = current.i*w;
            var y = current.j*w;
            stroke(255); 
            current.color = "purple";
            fill(255,0,255);
            rect(x, y, w, w);}
            numberOfMovesSoFar += 1
            if(numberOfMovesSoFar >= numverOfMovesAllowed){
                console.log("You lost!");}
            newCell.paintingMoveMoving();
        //checking did we reach the goal 
        if(newCell.color == "blue") {
            console.log("Winner!!!")}}
}

function setup() {
    let canvas = createCanvas(475,475);
    canvas.parent("canvasWrapper");
    cols =  floor(width/w);
    rows = floor(height/w);

    for (var i = 0; i < rows; i++){
        for (var j = 0; j < cols; j++){
            var cell = new Cell(i,j);
            grid.push(cell);
        }
    }
    for (var i = 0; i < grid.length; i++){
        grid[i].show(labirinth[i]);
    }
    current.paintingMoveStart();
    document.querySelector("#buttonUp").addEventListener("click", current.up);
    document.querySelector("#buttonRight").addEventListener("click", current.right);
    document.querySelector("#buttonDown").addEventListener("click", current.down);
    document.querySelector("#buttonLeft").addEventListener("click", current.left);
}

