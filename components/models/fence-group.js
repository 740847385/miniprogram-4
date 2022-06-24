import {Matrix} from "./matrix";
import {Fence} from "./fence";

class FenceGroup {

    spu
    skuList = []
    fences = []

    constructor(spu) {
        this.spu = spu
        this.skuList = spu.sku_list
    }

    initFences() {
        const matrix = this._createMatrix(this.skuList)
        const fences = []
        let currentJ = -1;
        matrix.forEach((element, i, j) => {
            if (currentJ !== j) {
                currentJ = j
                fences[currentJ] = this._createFence(element)
            }
            fences[currentJ].pushValueTitle(element.value)
        })
        console.log(fences)
    }

    _createFence(element) {
        const fence = new Fence()
        // fence.pushValueTitle(element.value)
        return fence
    }

    _createMatrix(skuList) {
        const m = []
        skuList.forEach(sku => {
            m.push(sku.specs)
        })
        return new Matrix(m)
    }

}

export {
    FenceGroup
}