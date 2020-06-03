import {Canvas2dUtility} from './canvas2d';

export class Position {
    
    x: number;
    y: number;

    constructor(_x:number, _y:number) {
        this.x = _x;
        this.y = _y;
    }

    set(_setX:number, _setY:number){
        if(_setX != null){this.x = _setX;}
        if(_setY != null){this.y = _setY;}
        console.log(_setX,_setY);
    }

}


export class Character {

    util: Canvas2dUtility;
    position: Position;
    life: number;
    
    constructor(_util:Canvas2dUtility, _x:number, _y:number, _life:number) {
        this.util = _util;
        this.position = new Position(_x,_y);
        this.life = _life;
    }
    
    draw() {
        this.util.drawRect(this.position.x,this.position.y,10,10,'#000');
    }

}