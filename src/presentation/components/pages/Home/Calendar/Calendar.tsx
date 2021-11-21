import { FC } from "react";
import { Modal } from "../../../common";

export interface CalendarProps {
  closeCalendar: () => void;
  calendarOpen: boolean;
}

export const Calendar: FC<CalendarProps> = ({ closeCalendar, calendarOpen }) => {

  return (
    <Modal isOpen={calendarOpen} closeModal={closeCalendar}>
      Calendar
    </Modal>
  );
};
