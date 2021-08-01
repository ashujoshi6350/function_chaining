function calculate(initVal) {
	let total = initVal;

	return {
		add(val) {
			total = total + val;
			return this;
		},
		subtract(val) {
			total = total - val;
			return this;
		},
		print() {
			return total;
		}
	}

}

let calc = calculate(100);
console.log(calc.add(10).subtract(4).subtract(3).print());
