var exprEq = function (a, b) {
	if (typeof a.expr === 'object' && typeof b.expr === 'object') {
		var ab = a.expr.equals(b.expr);
		var ba = b.expr.equals(a.expr);
		if (ab != ba)
			throw null;
		return ab && ba;
	}
};

describe('Pythagoras', function () {
	beforeEach(function () {
		jasmine.addCustomEqualityTester(exprEq);
	});

	var eq = CQ('a**2 + b**2 = c**2');
	it('solve a', function () {
		var actual   = eq.solve('a')[0];
		alert(actual.toString());
		var expected = CQ('(c**2 - b**2)**(1/2)');
		expect(actual).toEqual(expected);
	});
});

