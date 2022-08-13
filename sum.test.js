const myfunctiontwo = require("./sum")

test("this is to return one number",()=>{
    expect (myfunctiontwo(10)).toBe(10)
})

test("test two numbers ",()=>{
    expect(myfunctiontwo(10,20)).toBe(30)
})

test("test two numbers ",()=>{
    expect(myfunctiontwo(5,8)).toBe(13)
})

test("test two numbers ",()=>{
    expect(myfunctiontwo(58)).toBe(58)
})

test("test three numbers ",()=>{
    expect(myfunctiontwo(5,9,5)).toBe(19)
})

test("test three numbers ",()=>{
    expect(myfunctiontwo(5,5,5,5,5,5,5,5)).toBe(40)
})

test("test three numbers ",()=>{
    expect(myfunctiontwo()).toBe(0)
})