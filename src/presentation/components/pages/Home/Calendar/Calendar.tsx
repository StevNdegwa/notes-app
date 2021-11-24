import { FC } from "react";
import ReactCalendar from "react-calendar";
import {
  FaAngleRight,
  FaAngleLeft,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { Modal, Button } from "../../../common";
import { ReactCalendarContainer } from "./styles";

export interface CalendarProps {
  closeCalendar: () => void;
  calendarOpen: boolean;
}

const nextLabel = (
  <Button transparent>
    <FaAngleRight />
  </Button>
);
const next2Label = (
  <Button transparent>
    <FaAngleDoubleRight />
  </Button>
);

const prevLabel = (
  <Button transparent>
    <FaAngleLeft />
  </Button>
);

const prev2Label = (
  <Button transparent>
    <FaAngleDoubleLeft />
  </Button>
);

export const Calendar: FC<CalendarProps> = ({ closeCalendar, calendarOpen }) => {

  return (
    <Modal isOpen={calendarOpen} closeModal={closeCalendar}>
      <ReactCalendarContainer>
        <ReactCalendar
          nextLabel={nextLabel}
          next2Label={next2Label}
          prevLabel={prevLabel}
          prev2Label={prev2Label}
        />
      </ReactCalendarContainer>
    </Modal>
  );
};
