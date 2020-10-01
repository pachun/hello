import { by, device, expect, element } from "detox"

describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it("should have welcome screen", async () => {
    await expect(
      element(by.label("Open up App.tsx to start working on your app!")),
    ).toBeVisible()
  })
})
