import { v4 } from "uuid";
import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository.interface";
import { InputCreateCustomerDto, OutputCreateCustomerDto } from "./create.customer.dto";
import CustomerFactory from "../../../domain/customer/factory/customer.factory";
import Address from "../../../domain/customer/value-object/Address";

export default class CreateCustomerUseCase {
  private customerRepository: CustomerRepositoryInterface

  constructor(repository: CustomerRepositoryInterface) {
    this.customerRepository = repository;
  }

  async execute(input: InputCreateCustomerDto): Promise<OutputCreateCustomerDto> {
    const customer = CustomerFactory.createWhitAddress(input.name,
      new Address(input.address.street, input.address.number, input.address.zip, input.address.city));

      await this.customerRepository.create(customer);
      
      return {
        id: customer.id,
        name: customer.name,
        address: {
          street: customer.address.street,
          number: customer.address.number,
          zip: customer.address.zip,
          city: customer.address.city 
        }
      }
    }

}
