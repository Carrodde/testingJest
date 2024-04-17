import { sendMessage } from "../ts/main";

test("should be what goes in", () => {
  let theMessage = sendMessage("Hello world");
  expect(theMessage).toBe("Hello world");
});
