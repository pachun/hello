import { by, device, expect, element } from "detox"

describe("Showing existing messages", () => {
  it("prepopulates the list with existing messages", async () => {
    await device.reloadReactNative()

    expect(element(by.label("delectus aut autem"))).toBeVisible()
  })
})
