var oSerializer = new XMLSerializer();
describe("parseAsciiMath", function() {
  describe("��������� ������� �� ����� math_examples.js", function() {

    function makeTest(x) {
      it("��������� ������� " + x, function() {
        assert.equal(oSerializer.serializeToString( parseAsciiMath(test_formula[x]) ), expected[x]);
      });
    }
    for (var x = 2; x < test_formula.length; x++) {
      makeTest(x);
    }

  });
  
  describe("��������� ������� �������", function() {

    function makeTest(x) {
      it("��������� ������� " + x, function() {
        assert.equal(oSerializer.serializeToString( parseAsciiMath(simple_test_formula[x]) ), expected_simple[x]);
      });
    }
    for (var x = 0; x < simple_test_formula.length; x++) {
      makeTest(x);
    }

  });

  // ... ���������� ����� it � �������� describe ...
});