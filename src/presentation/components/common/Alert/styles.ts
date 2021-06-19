import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";
import { FeedbackTypes } from "../../FeedbackTypes";
import { Container } from "../Container";

export const Wrapper = styled(Container)`
position:relative;
border:2px solid;
&>div.alert-bg{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    opacity:0.4;
}
${({ theme, paint, feedback }: { theme: Theme; paint?: string; feedback?: FeedbackTypes; }) => {
    if (feedback) {
        paint = (feedback === FeedbackTypes.ERROR) ? theme.colors("error") :
            (feedback === FeedbackTypes.WARNING) ? theme.colors("warning") :
            (feedback === FeedbackTypes.SUCCESS) ? theme.colors("success") : undefined;
    }

    return !paint ?
        css`
        border-color: hsla(0, 0%, 47%, 1);
        box-shadow: 0px 0px 2px hsla(0, 0%, 77%, 1);
        &>div.alert-bg{
            background-color: hsla(0, 0%, 77%, 1);
        }
        `:
        css`
        border-color: ${paint};
        box-shadow: 0px 0px 3px ${paint};
        &>div.alert-bg{
            background-color: ${paint};
        }
        `
    }
}
`;