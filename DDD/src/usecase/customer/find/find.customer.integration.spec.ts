import CustomerRepository from "../../../infrastructure/customer/repository/sequelize/Customer.repository";
import CustomerFactory from "../../../domain/customer/factory/customer.factory";
import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../../../infrastructure/customer/repository/sequelize/Customer.model";
import FindCustomerUseCase from "./find.customer.usecase";

describe("test find customer use case", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([CustomerModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });


  it("should find a customer", async () => {
    const customerRepository = new CustomerRepository();
    const usecase = new FindCustomerUseCase(customerRepository);

    //const customer = new Customer("123", "John");
    const customer = CustomerFactory.createTestCustomer();

    //const address = new Address("Street", 123, "Zip", "City");
    //customer.changeAddress(address);

    await customerRepository.create(customer);

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

})