import { Application } from "pixi.js";
import { describe, test, expect } from "vitest";

describe("Test", () => {
  const app = new Application({
    width: 640,
    height: 480,
  });
  document.body.appendChild(app.view as HTMLCanvasElement);

  test("app should be exist", () => {
    expect(app).toBeTruthy();
  });

  test("app.render should execute without errors", () => {
    expect(app.render()).toBeUndefined();
  });
});
