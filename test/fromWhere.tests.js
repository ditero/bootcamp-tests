describe('The fromWhere function', function(){
  it('should check the location of the registration number', function(){
        //assert.equal('Bellville', fromWhere('CJ 3521, CY 5621, CJ 5621','CY'));
        assert.equal('Cape Town', fromWhere('CA 3521', 'CA'));

    });
    it('should check the location of the registration number', function(){
        // this test will fail - can you fix it?
        assert.equal('Paarl', fromWhere('CJ 3521', 'CJ'));
    });
});
