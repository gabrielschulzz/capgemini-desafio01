const { projecao } = require('./calculadora')
const { shareCycle } = require('./calculadora')

describe("Calcular projecao", () => {
    it("should be able to return the total projection views based on function argument", () => {
        expect(projecao(100)).toBe(8641)
    })

    it("should not be able to return the total projection if theres no value in the function argument", () => {
        expect(projecao()).toBeUndefined()
    })
})

describe("Ciclo de shares", () => {
    it("should be able to return the total share views based on views argument and clicker/shares ratio", () => {
        expect(shareCycle(3000)).toBe(2160)
    })

    it("should not able to return the total share views if theres no value in the function argument", () => {
        expect(shareCycle()).toBeUndefined()
    })
})