import { FaCloudUploadAlt } from "react-icons/fa";
import { Form, Button } from "../../../common";
import { DataBackupForm } from "./DataBackupForm";
import useExport from "./useExport";
import { DataBackupWrapper, DataBackupActions } from "./styles";

export type BackupFormType = {
  backup: BackupType;
};

export type BackupType = "G_DRIVE" | "LOCAL";

export const DataBackup = () => {
  const { downloadDBLocally } = useExport();

  const handler = (data: BackupFormType) => {
    downloadDBLocally(data.backup);
  };

  return (
    <DataBackupWrapper>
      <Form<BackupFormType> handler={handler} legend="Choose backup option">
        <DataBackupForm />
        <DataBackupActions>
          <Button type="submit" primary leftIcon={FaCloudUploadAlt}>
            Backup
          </Button>
        </DataBackupActions>
      </Form>
    </DataBackupWrapper>
  );
}