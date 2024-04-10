import { app, sequelize } from "../express";
import request from "supertest";
describe("end to end test for customer", () => {

  beforeEach(async () => {
    await sequelize.sync({ force: true })
  })
  afterAll(async () => {
    await sequelize.close();
  })

  it("should create a customer", async () => {
    const response = await request(app)
      .post("/customer")
      .send({
        name: "cleiton",
        address: {
          street: "street",
          number: 123,
          zip: "zip 123",
          city: "city"
        }
      })
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("cleiton");
    expect(response.body.address.street).toBe("street");
    expect(response.body.address.number).toBe(123);
    expect(response.body.address.zip).toBe("zip 123");
    expect(response.body.address.city).toBe("city");
  })
  it("should not crate a customer", async () => {
    const response = await request(app)
      .post("/customer")
      .send({
        name: "joão ninguém",
      });
    expect(response.status).toBe(500)
  });

  it("should list all customer", async () => {
    const response = await request(app)
      .post("/customer")
      .send({
        name: "cleiton",
        address: {
          street: "street",
          number: 123,
          zip: "zip 123",
          city: "city"
        }
      })
    expect(response.status).toBe(200);

    const response2 = await request(app)
      .post("/customer")
      .send({
        name: "marcia",
        address: {
          street: "street 2",
          number: 124,
          zip: "zip 124",
          city: "city foda"
        }
      })
    expect(response2.status).toBe(200);

    const listResponse = await request(app).get("/customer").send();

    expect(listResponse.status).toBe(200);
    expect(listResponse.body.customers.length).toBe(2);
    
    const customer1 = listResponse.body.customers[0];
    expect(customer1.name).toBe("cleiton")
    expect(customer1.address.street).toBe("street")
    
    const customer2 = listResponse.body.customers[1];
    expect(customer2.name).toBe("marcia")
    expect(customer2.address.street).toBe("street 2")
  })
})