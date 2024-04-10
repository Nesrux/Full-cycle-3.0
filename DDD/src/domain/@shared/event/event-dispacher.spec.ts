import ProductCreatedEvent from "../../product/event/Product-created.event";
import SendEmailWhenProductIsCreatedHandler from "../../product/event/handler/send-Email-When-Product-Is-created-Handler";
import EventDispacher from "./event-dispacher";

describe("domain events test", () => {
  it("should register an event handler", () => {
    const eventDispacher = new EventDispacher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispacher.register("ProductCreatedEvent", eventHandler);

    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"]).toBeDefined()
    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler)
  });

  it("shold unregister an event handler", () => {
    const eventDispacher = new EventDispacher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispacher.register("ProductCreatedEvent", eventHandler);

    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"]).toBeDefined()

    eventDispacher.unregister("ProductCreatedEvent", eventHandler)

    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();

    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"].length).toBe(0)

  })

  it("shold unregister all events", () => {
    const eventDispacher = new EventDispacher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispacher.register("ProductCreatedEvent", eventHandler);

    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"]).toBeDefined()


    eventDispacher.unregisterAll();

    expect(eventDispacher.getEventHandlers).toStrictEqual({})

  })

  it("shold notfy  all event handlers", () => {
    const eventDispacher = new EventDispacher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();
    const spyEventHandler = jest.spyOn(eventHandler, "handle");

    eventDispacher.register("ProductCreatedEvent", eventHandler);

    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler)

    const productCreatedEvent = new ProductCreatedEvent({
      product: {
        id: 1,
        name: "product 1",
        description: "product description 1",
        price: 10.0,
      }
    });
    //Quando o notify for executado o sendEMailProductIscreate deve ser chamado
    eventDispacher.notify(productCreatedEvent)

    expect(spyEventHandler).toHaveBeenCalled();
  })
});