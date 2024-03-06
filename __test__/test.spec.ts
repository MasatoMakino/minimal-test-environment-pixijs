import { Application } from "pixi.js";
import { describe, test, expect } from "vitest";

describe("Test", async () => {
  const app = new Application();
  await app.init({ width: 800, height: 600 });

  document.body.appendChild(app.canvas as HTMLCanvasElement);

  test("app should be exist", () => {
    expect(app).toBeTruthy();
  });

  test("app.render should execute without errors", () => {
    expect(app.render()).toBeUndefined();
  });
});
