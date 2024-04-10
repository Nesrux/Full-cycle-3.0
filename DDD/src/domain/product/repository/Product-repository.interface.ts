import Product from "../entity/Product";
import RepositoryInterface from "../../@shared/repository/Repository-interface";

export default interface ProductRepositoryInterface
  extends RepositoryInterface<Product> {}