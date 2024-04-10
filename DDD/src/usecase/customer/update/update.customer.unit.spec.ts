import CustomerFactory from "../../../domain/customer/factory/customer.factory";
import UpdateCostomerUseCase from "./update.customer.usecase";

const customer = CustomerFactory.createTestCustomer();
const input = {
  id: customer.id,
  name: "Jorge ATUALIZADO 2012",
  address: {
    street: "rua atualizada",
    number: 125,
    zip: "zip zop",
    city: "Cidade De Deus!"
  }
}
const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(customer)),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  }
};

describe("unit test for customer update use case", () => {
  it("should update a customer", async () => {
    const customerRepository = MockRepository();
    const customerUpdateUsecase = new UpdateCostomerUseCase(customerRepository);

    const output = await customerUpdateUsecase.execute(input);

    expect(output).toEqual(input);
  })
})