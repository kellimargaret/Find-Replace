describe('findReplace', function() {
    it("will turn a string into an array of words", function() {
        expect(findReplace("Hello world", "world", "universe")).to.be.a("array");
    });
});
