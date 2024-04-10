import Customer from "../entity/Customer";
import { v4 as uuid } from "uuid";
import { faker as fake } from '@faker-js/faker';
import Address from "../value-object/Address";
export default class CustomerFactory {

  static create(nome: string): Customer {
    return new Customer(uuid(), nome)
  }
  static createWhitAddress(name: string, address: Address): Customer {
    const customer = this.create(name);
    customer.changeAddress(address)

    return customer;
  }

  static createTestCustomer(): Customer {

    const addres = new Address(fake.location.street(), fake.number.int(), "zip 123", fake.location.city())
    const customer = this.createWhitAddress(fake.person.fullName(), addres)

    return customer;
  }

}