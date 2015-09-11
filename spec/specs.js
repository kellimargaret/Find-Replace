describe('findReplace', function() {
    it("will turn a string into an array of words", function() {
        expect(findReplace("Hello world", "world", "universe")).to.be.a("array");
    });
    it("will change a specified word in the string to a new word", function() {
        expect(findReplace("Hello world", "world", "universe")).to.eql(["Hello", "universe"]);
    });
    it("will change multiple instances of the same word to a new word", function() {
        expect(findReplace("Hello world world", "world", "universe")).to.eql(["Hello", "universe", "universe"]);
    });
});
