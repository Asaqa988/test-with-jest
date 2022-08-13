const myfunction = require("./data");


describe.skip("this our first two",()=>{
    test("to test if the username is return", () => {
        expect(myfunction("rahaf")).toBe("rahaf");
      });
      test("this is to test if the username  with space", () => {
        expect(myfunction("  hussam     ")).toBe("hus");
      });
      

})


describe.only("this is to test the last two cases",()=>{
    test("this is to test if the username is capital", () => {
        expect(myfunction("BATOOL")).toBe("batool");
      });
    
      test("this is to test if the username is capital", () => {
        expect(myfunction("ABEDALRAHEEM")).toBe("abeda");
      });
})


  
