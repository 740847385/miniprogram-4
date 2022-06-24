import {Cell} from "./cell";

class Fence {
    cells =[]
    spece

    constructor(specs) {
        this.spece=specs
    }
    init(){
        this.spece.forEach(s=>{
            // this.pushValueTitle(s.value)
            const cell =new Cell(s)
            this.cells.push(cell)
        })
    }

}

export {
    Fence
}