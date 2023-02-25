const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Employee = require("./employee");
const Manager = require("./manager");

describe("calculateBonus method", () => {
  let Hobbes;
  let Calvin;
  let Susie;
  let Lily;
  let Clifford;
  beforeEach(() => {
    Hobbes = new Manager("Hobbes", 1000000, "Founder");
    Calvin = new Manager("Calvin", 130000, "Director", Hobbes);
    Susie = new Manager("Susie", 100000, "TA Manger", Calvin);
    Lily = new Employee("Lily", 90000, "TA", Susie);
    Clifford = new Employee("Clifford", 90000, "TA", Susie);
  });

  describe("Manager.calculateBonus()", () => {
    it("should multiply the Manager's salary + a total sub salary of employees under them by a passed in multiplier", () => {
      expect(Hobbes.calculateBonus(0.05)).to.eql(70500);
      expect(Calvin.calculateBonus(0.05)).to.eql(20500);
      expect(Susie.calculateBonus(0.05)).to.eql(14000);
      expect(Lily.calculateBonus(0.05)).to.eql(4500);
      expect(Clifford.calculateBonus(0.05)).to.eql(4500);
    });
  });
});
