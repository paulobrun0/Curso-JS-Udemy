class Cachorro {
    constructor(raca, cor){
        this.raca = raca
        this.cor = cor
    }
    
    latir(){
        console.log("Au Au")
    }
    
    get getcor(){
        return this.cor
    }

    set setcor(cor){
        this.cor = cor
    }
}

let pastor = new Cachorro("Pastor Alemão", 'sem cor')

console.log(pastor)

pastor.setcor = 'Marrom'

console.log(pastor.getcor)