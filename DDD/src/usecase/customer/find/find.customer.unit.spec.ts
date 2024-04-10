import CustomerFactory from "../../../domain/customer/factory/customer.factory";
import FindCustomerUseCase from "./find.customer.usecase";

const customer = CustomerFactory.createTestCustomer();

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(customer)),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  }
}

describe("test find customer use case", () => {

  it("should find a customer", async () => {
    const customerRepository = MockRepository();
    const usecase = new FindCustomerUseCase(customerRepository);

    const input = {
      id: customer.id,
    };

    const output = {
      id: customer.id,
      name: customer.name,
      address: {
        street: customer.address.street,
        city: customer.address.city,
        number: customer.address.number,
        zip: customer.address.zip
      },
    };

    const result = await usecase.execute(input);

    expect(result).toEqual(output);
  })
  it("should not find a customer", async () => {
    const customerRepository = MockRepository();
    customerRepository.find.mockImplementation(() => {
      throw new Error("Customer not found")
    })
    const usecase = new FindCustomerUseCase(customerRepository);

    const input = {
      id: customer.id,
    };

    expect(() => {
      return usecase.execute(input);
    }).rejects.toThrow("Customer not found")

  })

})