import { test, expect } from "@playwright/test";
import { LANDING_PAGE_URL, CREATE_WS_PAGE_URL } from "./constants";

const sampleWsName = "Sample Workspace";

test.describe("Create Workspace Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(CREATE_WS_PAGE_URL);
  });

  test("can create a new workspace", async ({ page }) => {
    await page
      .getByTestId("create-ws-name-input")
      .getByTestId("text-input")
      .fill(sampleWsName);

    await page.getByTestId("create-ws-submit-btn").click();

    const dbDataChangeAlertWrapper = page.getByTestId(
      "db-data-change-alert-wrapper"
    );

    await expect(dbDataChangeAlertWrapper).toBeVisible();

    await expect(dbDataChangeAlertWrapper).toContainText(
      `Created ${sampleWsName} successfully`
    );

    await page.getByTestId("to-home-link").click();

    await expect(page).toHaveURL(LANDING_PAGE_URL + "?login=true");
  });
});
