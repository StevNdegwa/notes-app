import { useFormContext } from "react-hook-form";
import { Radio } from "../../../../common";

export const DataBackupForm = () => {
  const { register } = useFormContext();

  return (
    <>
      <Radio value="local" {...register("backup")} checked>
        Download locally
      </Radio>
      <Radio value="g_drive" {...register("backup")} disabled>
        Google Drive
      </Radio>
    </>
  );
};
