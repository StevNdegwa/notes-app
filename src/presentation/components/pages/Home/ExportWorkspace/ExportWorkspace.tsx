import { FC } from "react";
import { FaFileExport, FaGoogleDrive, FaFile } from "react-icons/fa";
import { Modal, Tooltip, TooltipPosition } from "../../../common";
import { ExportWorkspaceWrapper, ExportOption } from "./styles";

export interface ExportWorkspaceProps {
  close: () => void;
  isOpen: boolean;
}

export const ExportWorkspace: FC<ExportWorkspaceProps> = ({ close, isOpen }) => {
  
  return (
    <Modal
      closeModal={close}
      isOpen={isOpen}
      title="Export workspace"
      titleIcon={FaFileExport}
    >
      <ExportWorkspaceWrapper>
        <Tooltip content="Save to google drive">
          <ExportOption>
            <FaGoogleDrive />
          </ExportOption>
        </Tooltip>
        <Tooltip content="Save to local drive" position={TooltipPosition.LEFT}>
          <ExportOption>
            <FaFile />
          </ExportOption>
        </Tooltip>
      </ExportWorkspaceWrapper>
    </Modal>
  );
}

