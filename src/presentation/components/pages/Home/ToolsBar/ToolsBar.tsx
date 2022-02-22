import { useCallback, useContext } from "react";

import {
  FaRegMoon,
  FaSun,
  FaCalendarAlt,
} from "react-icons/fa";
import { Tooltip, TooltipPosition, useModal } from "../../../common";
import { ThemeMode } from "../../../../../ui/theme";
import AppContext from "../../../../../AppContext";
import { Calendar } from "../Calendar";
import { ToolsBarWrapper, Tool, ThemeToggle } from "./styles";

export const ToolsBar = () => {
  const appContext = useContext(AppContext);

  const handleThemeToggleClick = useCallback(
    () => appContext.toggleLightDark?.(),
    [appContext]
  );

  const {
    isOpen: calendarOpen,
    closeModal: closeCalendar,
    openModal: openCalendar,
  } = useModal();

  return (
    <ToolsBarWrapper>
      <Tooltip content="Toggle theme" position={TooltipPosition.LEFT}>
        <ThemeToggle transparent onClick={handleThemeToggleClick}>
          {appContext.themeMode === ThemeMode.LIGHT ? (
            <span className="dark">
              <FaRegMoon />
            </span>
          ) : (
            <span className="light">
              <FaSun />
            </span>
          )}
        </ThemeToggle>
      </Tooltip>
      <Tooltip content="Calendar" position={TooltipPosition.LEFT}>
        <Tool transparent onClick={openCalendar}>
          <FaCalendarAlt />
        </Tool>
      </Tooltip>
      <Calendar calendarOpen={calendarOpen} closeCalendar={closeCalendar} />
    </ToolsBarWrapper>
  );
};
