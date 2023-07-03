import { Page } from "@playwright/test";

export const createWs = async (page: Page, wsName: string) => {
  await page.getByTestId("create-new-workspace-link").click();

  await page
    .getByTestId("create-ws-name-input")
    .getByTestId("text-input")
    .fill(wsName);

  await page.getByTestId("create-ws-submit-btn").click();

  await page.getByTestId("to-home-link").click();
};

export const openNewSelectOptions = async (page: Page) => {
  await page
    .getByTestId("new-select")
    .getByTestId("new-select-input-field")
    .click();
};

export const openNewSelectOptionsAndPick = async (
  page: Page,
  wsName: string
) => {
  await openNewSelectOptions(page);
  await page
    .getByTestId("new-select")
    .getByTestId("new-select-options-list")
    .getByText(wsName)
    .click();
};
