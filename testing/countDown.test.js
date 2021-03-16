
const countDown = require('./countDown');

describe('count down',()=>{
    it('count down numbers 7', ()=>{
        const result = countDown(7)
        expect(result).toBe(7, 6, 5, 4 ,3, 2 ,1)
    })
    it('count down numbers 2', ()=>{
        const result = countDown(2)
        expect(result).toBe(2 ,1)
    })
    it('string received', ()=>{
        const result = countDown("fgh")
        expect(result).toBe("Значение введено не верно! Введите число")
    })
    it('string received', ()=>{
        const result = countDown(-5)
        expect(result).toBe("Введите число больше 1")
    })
})
