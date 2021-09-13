import { atom } from "recoil";
import { FeedbackTypes } from "../../../shared";

export type NotificationType = {
  content: string;
  feedback: FeedbackTypes;
}

export const notificationsAtom = atom<NotificationType[]>({
  key: "notifications",
  default: []
})