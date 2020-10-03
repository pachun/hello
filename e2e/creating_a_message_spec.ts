import { by, device, expect, element } from "detox"

describe("Creating a message", () => {
  it("adds the message to the list", async () => {
    await device.reloadReactNative()

    await expect(element(by.label("New message 1"))).not.toBeVisible()
    await expect(element(by.label("New message 2"))).not.toBeVisible()

    await element(by.id("messageText")).tap()
    await element(by.id("messageText")).typeText("New message 1")
    await element(by.id("sendButton")).tap()

    await expect(element(by.id("messageText"))).toHaveText("")
    await expect(element(by.label("New message 1"))).toBeVisible()

    await element(by.id("messageText")).tap()
    await element(by.id("messageText")).typeText("New message 2")
    await element(by.id("sendButton")).tap()

    await expect(element(by.id("messageText"))).toHaveText("")
    await expect(element(by.label("New message 2"))).toBeVisible()
  })
})
