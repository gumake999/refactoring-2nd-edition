// Customer's discountRate => CustomerContract's discountRate

class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(dateToday());
    this._setDiscountRate(discountRate);
  }

  get discountRate() {
    return this._contract.discountRate;
  }

  _setDiscountRate(number) {
    this._contract.discountRate = number;
  }

  becomePreferred() {
    this._discountRate += 0.03;
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate)); // ?
  }

}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate; // 처음엔 null 인가?
  }

  get discountRate() {
    return this._discountRate;
  }

  set discountRate(arg) {
    this._discountRate = arg;
  }
}

function dateToday() {}