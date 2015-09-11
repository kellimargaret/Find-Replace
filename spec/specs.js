describe('findAndReplace', function() {
    it("will turn a string into an array of words", function() {
        expect(findAndReplace("Hello world", "world", "universe")).to.be.a("array");
    });
});
