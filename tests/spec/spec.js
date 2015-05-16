var exprEq = function (a, b) {
	if (typeof a.equals === 'function')
		return a.equals(b);

	if (typeof b.equals === 'function')
		return b.equals(a);
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

