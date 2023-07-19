import { test, expect } from "@playwright/test";
import { createWs, openNewSelectOptions } from "./functional-tests-utils";
import { LANDING_PAGE_URL } from "./constants";

const sampleWsName = "Sample Workspace";

test.describe("Landing page test suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LANDING_PAGE_URL);
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/Notes App | Start taking notes/);
  });

  test("has application settings", async ({ page }) => {
    const appOptionsControlBtn = page.getByTestId("app-options-control-btn");

    await expect(page.getByTestId("app-options-container")).toBeHidden();

    await appOptionsControlBtn.click();

    await expect(page.getByTestId("app-options-container")).toBeVisible();
  });

  test("can open the page to create a new workspace", async ({ page }) => {
    await page.getByTestId("create-new-workspace-link").click();
    await expect(page).toHaveURL(/.*\/create-workspace/);
  });

  test("lists available workspaces", async ({ page }) => {
    const anotherWs = "Another sample ws";

    await createWs(page, sampleWsName);

    const newSelect = page.getByTestId("new-select");

    await newSelect.getByTestId("new-select-input-field").click();

    const optionsList = newSelect.getByTestId("new-select-options-list");

    await expect(
      optionsList,
      // eslint-disable-next-line jest/valid-expect
      "should contain workspaces list"
    ).toBeVisible();

    await expect(optionsList.getByText(sampleWsName)).toBeVisible();

    await expect(optionsList).toHaveText(sampleWsName);

    await createWs(page, anotherWs);

    await openNewSelectOptions(page);

    await expect(optionsList.getByText(anotherWs)).toBeVisible();

    await expect(optionsList).toContainText(sampleWsName);
    await expect(optionsList).toContainText(anotherWs);
  });

  test("selects a workspace", async ({ page }) => {
    await createWs(page, sampleWsName);

    await openNewSelectOptions(page);

    await page.getByText(sampleWsName).click();

    await expect(page.getByTestId("new-select-input-field")).toHaveValue(
      sampleWsName
    );

    await expect(page.getByTestId("new-select-options-list")).toBeHidden();
  });

  test("logs in to the application", async ({ page }) => {
    await createWs(page, sampleWsName);

    await openNewSelectOptions(page);

    await page.getByText(sampleWsName).click();

    await page.getByTestId("sign-in-btn").click();

    await expect(page).toHaveURL("http://localhost:3000/home");
  });
});
