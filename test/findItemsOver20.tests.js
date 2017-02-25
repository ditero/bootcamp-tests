describe('The findItemsOver20 function', function(){
  it('should count items over 20', function(){
        assert.equal(findItemsOver20([{name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},]]), 2);

    });
    it('should count items over 20', function(){
        // this test will fail - can you fix it?
        assert.equal(findItemsOver20([{name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},]]), 2);
    });
});
