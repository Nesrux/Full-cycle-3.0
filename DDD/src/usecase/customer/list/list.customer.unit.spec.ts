import CustomerFactory from "../../../domain/customer/factory/customer.factory";
import ListCustomerUseCase from "./list.customer.usecase";

const customer1 = CustomerFactory.createTestCustomer();
const customer2 = CustomerFactory.createTestCustomer();

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn().mockReturnValueOnce(Promise.resolve([customer1, customer2])),
    create: jest.fn(),
    update: jest.fn(),
  }
};

describe("unit test for listing customer use case", () => {
  it("should list a customer", async () => {
    const repository = MockRepository();
    const usecase = new ListCustomerUseCase(repository);
    const output = await usecase.execute({});

    expect(output.customers.length).toBe(2);

    expect(output.customers[0].id).toBe(customer1.id)
    expect(output.customers[0].name).toBe(customer1.name)
    expect(output.customers[0].address.street).toBe(customer1.address.street)

    expect(output.customers[1].id).toBe(customer2.id)
    expect(output.customers[1].name).toBe(customer2.name)
    expect(output.customers[1].address.street).toBe(customer2.address.street)
  })
})