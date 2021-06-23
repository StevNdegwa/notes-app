import { atom } from "recoil";
import { WorkspaceListType } from "../../index";

export const currentWorkSpaceAtom = atom<WorkspaceListType | undefined>({
    key: "workSpaceName",
    default: undefined
})