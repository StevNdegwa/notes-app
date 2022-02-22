import { Dexie } from "dexie";
import { importDB } from "dexie-export-import";
import JSZip, { JSZipObject } from "jszip";

export async function loadDBs(file: File) {

  await Dexie.delete("app_settings");
  await Dexie.delete("workspaces");
  await Dexie.delete("notes");

  const zip = new JSZip();
  const zipData = await zip.loadAsync(file)

  zipData.forEach(
    async (relativePath: string, file: JSZipObject) => {
      let fileContent = await (file as any).async('arraybuffer')

      let db = await importDB(new Blob([fileContent]));

      let blob = await db.export()

      return db.import(blob);
    }
  );
}