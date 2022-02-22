import { ChangeEvent, useCallback, useState } from "react";
import { FaDesktop, FaGoogleDrive, FaAngleDoubleRight } from "react-icons/fa";
import { Button } from "../../../common";
import { loadDBs } from "./useImport";
import {
  DataImportWrapper,
  LocalDataImport,
  ProceedDataImport,
} from "./styles";

export const DataImport = () => {
  const [dataImported, setDataImported] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleChange = useCallback((change: ChangeEvent<HTMLInputElement>) => {
    try {
      if (change.target.files) {
        let file = change.target.files[0];
        if (file) {
          setDataImported(true);
          setFile(file);
        }
      }
    } catch (error) {
      console.log("Handle change");
    }
  }, []);

  const handleLoadFile = useCallback(() => file && loadDBs(file), [file]);

  return (
    <>
      <DataImportWrapper>
        <LocalDataImport>
          <input type="file" onChange={handleChange} />
          <Button secondary leftIcon={FaDesktop}>
            Computer
          </Button>
        </LocalDataImport>
        <Button secondary disabled leftIcon={FaGoogleDrive}>
          Google drive
        </Button>
      </DataImportWrapper>
      {dataImported && (
        <ProceedDataImport>
          <p>
            New application data has been imported. Moving forward with this action will replace the current data with
            the new one.
          </p>
          <Button
            primary
            rightIcon={FaAngleDoubleRight}
            onClick={handleLoadFile}
          >
            Proceed
          </Button>
        </ProceedDataImport>
      )}
    </>
  );
};
