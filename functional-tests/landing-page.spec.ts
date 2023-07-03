import { test, expect } from "@playwright/test";
import { createWs, openNewSelectOptions } from "./functional-tests-utils";
import { LANDING_PAGE_URL } from "./constants";

const sampleWsName = "Sample Workspace";

test.describe("Landing page test suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LANDING_PAGE_URL);
  });

  test("has title", async ({ page }) => {
    expect(page).toHaveTitle(/Notes App | Start taking notes/);
  });

  test("has application settings", async ({ page }) => {
    const appOptionsControlBtn = page.getByTestId("app-options-control-btn");

    expect(page.getByTestId("app-options-container")).toBeHidden();

    await appOptionsControlBtn.click();

    expect(page.getByTestId("app-options-container")).toBeVisible();
  });

  test("can open the page to create a new workspace", async ({ page }) => {
    await page.getByTestId("create-new-workspace-link").click();
    expect(page).toHaveURL(/.*\/create-workspace/);
  });

  test("lists available workspaces", async ({ page }) => {
    const anotherWs = "Another sample ws";

    await createWs(page, sampleWsName);

    const newSelect = page.getByTestId("new-select");

    await newSelect.getByTestId("new-select-input-field").click();

    const optionsList = newSelect.getByTestId("new-select-options-list");

    expect(
      optionsList,
      // eslint-disable-next-line jest/valid-expect
      "should contain workspaces list"
    ).toBeVisible();

    expect(optionsList.getByText(sampleWsName)).toBeVisible();

    expect(optionsList).toHaveText(sampleWsName);

    await createWs(page, anotherWs);

    await openNewSelectOptions(page);

    expect(optionsList.getByText(anotherWs)).toBeVisible();

    expect(optionsList).toContainText(sampleWsName);
    expect(optionsList).toContainText(anotherWs);
  });

  test("selects a workspace", async ({ page }) => {
    await createWs(page, sampleWsName);

    await openNewSelectOptions(page);

    await page.getByText(sampleWsName).click();

    expect(page.getByTestId("new-select-input-field")).toHaveValue(
      sampleWsName
    );

    expect(page.getByTestId("new-select-options-list")).toBeHidden();
  });

  test("logs in to the application", async ({ page }) => {
    await createWs(page, sampleWsName);

    await openNewSelectOptions(page);

    await page.getByText(sampleWsName).click();

    await page.getByTestId("sign-in-btn").click();

    expect(page).toHaveURL("http://localhost:3000/home");
  });
});
