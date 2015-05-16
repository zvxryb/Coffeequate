var exprEq = function (a, b) {
	if (typeof a.expr === 'object' && typeof b.expr === 'object') {
		var ab = a.expr.equals(b.expr);
		var ba = b.expr.equals(a.expr);
		if (ab != ba)
			throw null;
		return ab && ba;
	}
};

var exprMatch = {
	toEqualExpr: function (util, eq) {
		return {
			compare: function (actual, expected) {
				var pass = util.equals(actual, expected, eq);
				return {
					pass:    pass,
					message: actual.toString() + (pass ? ' equals ' : ' does not equal ') + expected.toString()
				};
			}
		};
	}
};

describe('Pythagoras', function () {
	beforeEach(function () {
		jasmine.addCustomEqualityTester(exprEq);
		jasmine.addMatchers(exprMatch);
	});

	var eq = CQ('a**2 + b**2 = c**2');
	it('solve a', function () {
		var actual   = eq.solve('a')[0];
		var expected = CQ('(c**2 - b**2)**(1/2)');
		expect(actual).toEqualExpr(expected);
	});
});

