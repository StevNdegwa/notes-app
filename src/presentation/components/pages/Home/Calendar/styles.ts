import styled, {css} from "styled-components";
import { ThemeType } from "../../../../../ui/theme";

export const ReactCalendarContainer = styled.div`
${({theme}:{theme:ThemeType})=>css`
padding:1rem;
& button{
  color:inherit;
}
& abbr{
  text-decoration:none;
}
& .react-calendar {
  width: 800px;
  height: 500px;
  max-width: 100%;
  line-height: 1.125em;
}
& .react-calendar--doubleView {
  width: 700px;
}
& .react-calendar--doubleView .react-calendar__viewContainer {
  display: flex;
  margin: -0.5em;
}
& .react-calendar--doubleView .react-calendar__viewContainer > * {
  width: 50%;
  margin: 0.5em;
}
& .react-calendar,
.react-calendar *,
.react-calendar *:before,
.react-calendar *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
& .react-calendar__tile react-calendar__month-view__days__day{
  height: 100px;
}

& .react-calendar button {
  margin: 0;
  border: 0;
  outline: none;
}
& .react-calendar button:enabled:hover {
  cursor: pointer;
}
& .react-calendar__navigation {
  display: flex;
  height: 50px;
  width:80%;
  margin:auto;
  margin-bottom: 1em;
}
& .react-calendar__navigation button {
  min-width: 50px;
  background: none;
}
& .react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
}
& .react-calendar__navigation button[disabled] {
  background-color: #f0f0f0;
}
& .react-calendar__month-view__weekdays {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
}
& .react-calendar__month-view__weekdays__weekday {
  padding: 0.5em;
}
& .react-calendar__month-view__weekNumbers .react-calendar__tile {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
  padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
}
& .react-calendar__month-view__days__day--weekend {
  
}
& .react-calendar__month-view__days__day--neighboringMonth {
  
}
& .react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
  padding: 2em 0.5em;
}
& .react-calendar__tile {
  max-width: 100%;
  text-align: center;
  padding: 0.75em 0.5em;
  background: none;
}
& .react-calendar__tile:disabled {
  background-color: #f0f0f0;
}
& .react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: #e6e6e6;
}
& .react-calendar__tile--now {
  background: ${theme.colors.secondary[2]};
}
& .react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  background: ${theme.colors.secondary[4]};
}
& .react-calendar__tile--hasActive {
  background: #76baff;
}
& .react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: #a9d4ff;
}
& .react-calendar__tile--active {
  background: #006edc;
  
}
& .react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background: #1087ff;
}
& .react-calendar--selectRange .react-calendar__tile--hover {
  background-color: #e6e6e6;
}
`}
`;