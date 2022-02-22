import { useCallback } from "react";
import { exportDB } from "dexie-export-import";
import JSZip from "jszip";
import FileSaver from "file-saver";
import { Database } from "../../../../../infrastructure/db/classes";

export default function useExport() {

  const getDBSZip = useCallback(async () => {
    const zip = new JSZip();

    const notes = Database.getDB("notes", 1, {
      note: "++id,created,lastEdited,content,workspace,starred,pinned"
    });
    const notesBlob = await exportDB(notes);
    zip.file("notes.json", notesBlob);

    const appSettings = Database.getDB("app_settings", 1, {
      userProfile: "++id,name, ref",
      theme: ""
    });
    const appSettingsBlob = await exportDB(appSettings);
    zip.file("settings.json", appSettingsBlob);

    const workspaces = Database.getDB("workspaces", 1, { list: "++id,name,wsRef" });
    const workspacesBlob = await exportDB(workspaces);
    zip.file("workspaces.json", workspacesBlob);

    return zip.generateAsync({ type: 'blob' });
  }, []);

  const downloadDBLocally = useCallback(async (backup: string) => {
    try {
      const zipBlob = await getDBSZip();

      if (backup === "local") {
        FileSaver.saveAs(zipBlob, 'download.zip');
      }

    } catch (error) {
      console.log(error);
    }
  }, [getDBSZip]);

  return { downloadDBLocally };
}