import Address from "../value-object/Address";
import CustomerFactory from "./customer.factory";

describe("Custumer factory unit test", () => {
  it("shold create a customer", () => {
    let customer = CustomerFactory.create("João");
    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("João");
    expect(customer.address).toBeUndefined();
  })
  it("should create a custumer with an address", () => {
    const address = new Address("street", 12, "zip 123", "São paulo")
    let customer = CustomerFactory.createWhitAddress("João", address);

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("João");
    expect(customer.address).toBe(address);
  })
})