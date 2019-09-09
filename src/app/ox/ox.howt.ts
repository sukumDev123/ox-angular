export class OxHowto {
    private datas : String[]
    constructor(datas ) {
        this.datas = datas 
    }

    checkOxHorizen() {
        const size =  this.datas.length
        const boxs = this.datas
        let gg = false
       
        for(let x = 0 ; x < size; x++) {
            if(boxs[x][0] == boxs[x][1] && boxs[x][1] == boxs[x][2]) {
                gg  = true
                break
            }
        }
        return gg
    }

    checkOxVertical(checkV = 0) {
        const size =  this.datas.length
        const boxs = this.datas
        let gg = false
        let hh = 0
        for(let x = 0 ; x < size ; x++) {
            let g0 = boxs[0][x]
            let g1 = boxs[1][x]
            let g2 = boxs[2][x]
            if(g0 == g1 && g1==g2) {
                gg = true
                break
            }
           
        }
        return gg
    }
    checkZ() {
        const boxs = this.datas
        if(boxs[0][0] == boxs[1][1] &&  boxs[1][1] == boxs[2][2]) {
            return true 
        } else if(boxs[0][2] == boxs[1][1] &&  boxs[1][1] == boxs[2][0]) {
            return true 
        }
        return false
    }
}