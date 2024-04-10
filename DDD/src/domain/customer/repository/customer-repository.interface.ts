import Customer from "../entity/Customer";
import RepositoryInterface from "../../@shared/repository/Repository-interface";

export default interface CustomerRepositoryInterface
  extends RepositoryInterface<Customer> { }