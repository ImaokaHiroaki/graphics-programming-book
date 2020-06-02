export class Canvas2dUtility {

    canvasElement : HTMLCanvasElement;
    context2d: CanvasRenderingContext2D;
    
    constructor(private _canvas:HTMLCanvasElement) {
        this.canvasElement = _canvas;
        this.context2d = _canvas.getContext("2d")!;
    }

    get canvas(){return this.canvasElement;}
    get context(){return this.context2d;}

    drawRect(x:number, y:number, width:number, height:number, color:string){
        // 色が指定されている場合はスタイルを設定する
        if(color != null){
            this.context2d.fillStyle = color;
        }
        this.context2d.fillRect(x, y, width, height);
    }

}