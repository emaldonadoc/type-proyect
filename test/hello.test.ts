import { hello } from '../src/index';


describe("first ts test", () => {

    it("default hello", () => {
        expect(hello()).toBe("Hello word");
    });

    it("hello with custom name", () => {
        expect(hello("Jhon Doe")).toBe("Hello Jhon Doe");
    });
});