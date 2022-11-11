const findStudentScoreByName = require("../src/solution.js");
const  expect = require("chai").expect;

describe("findStudentScoreByName", () => {
    it("should return the select student's score when a correct name is given", () => {
        const students = [
          { name: "Leo Yeon-Joo", score: 8.9 },
          { name: "Morgan Sutton", score: 7.4 },
          { name: "Natalee Vargas", score: 9.2 },
        ]; 
        const expected = 8.9;
        const actual = findStudentScoreByName(students, "Leo Yeon-Joo");
        expect(actual).to.equal(expected);
    });

    describe("findStudentScoreByName", () => {
        it("should return 'null' if the given name does not match", () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
        ];
        const actual = findStudentScoreByName(students, "Ethan Ramsey");
        const expected = null;
        expect(actual).to.equal(expected);
        });
    });
});
