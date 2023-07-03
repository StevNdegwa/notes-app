import { test, expect } from "@playwright/test";
import {
  createWs,
  openNewSelectOptionsAndPick,
} from "./functional-tests-utils";
import { LANDING_PAGE_URL, MOBILE_HEIGHT, MOBILE_WIDTH } from "./constants";

test.describe("Mobile landing page test suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: MOBILE_HEIGHT });
    await page.goto(LANDING_PAGE_URL);
  });

  test("hides the landing page controls section by default", ({ page }) => {
    expect(page.getByTestId("landing-page-ads-section")).toBeVisible();
    expect(page.getByTestId("landing-page-controls-section")).toBeHidden();
  });

  test("show the landing page controls sections", async ({ page }) => {
    await page.getByTestId("move-to-login-btn").click();

    expect(page.getByTestId("landing-page-controls-section")).toBeVisible();
    expect(page.getByTestId("landing-page-ads-section")).toBeHidden();
  });

  test("logs in application", async ({ page }) => {
    const sampleWsName = "Sample Workspace";
    await page.getByTestId("move-to-login-btn").click();
    await createWs(page, sampleWsName);
    await openNewSelectOptionsAndPick(page, sampleWsName);
    await page.getByTestId("sign-in-btn").click();

    expect(page).toHaveURL("http://localhost:3000/home");
  });
});
