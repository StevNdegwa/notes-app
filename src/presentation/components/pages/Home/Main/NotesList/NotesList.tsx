import { FC, useState } from "react";
import { Button } from "../../../../common";
import { NotesListWrapper, Note, Preamble, NoteControls } from "./styles";

export const NotesList: FC<{}> = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <NotesListWrapper animate={{ x: [-200, 0] }}>
      <Note>
        {!expanded && (
          <Preamble onClick={() => setExpanded(true)}>
            <h3>How great leaders inspire action</h3>
            <p>
              What is my ‘Why’ and can I inspire people to act if I know what it
              is? What is my organization’s ‘Why’? How is starting with ‘why’
              relevant for leaders across the world? Do sustainable successful
              organisations have clarity on their ‘why’? Is it same as the
              popular words of...
            </p>
          </Preamble>
        )}
        {expanded && (
          <>
            <div>
              <h3>How great leaders inspire action</h3>
              <p>
                What is my ‘Why’ and can I inspire people to act if I know what
                it is? What is my organization’s ‘Why’? How is starting with
                ‘why’ relevant for leaders across the world? Do sustainable
                successful organisations have clarity on their ‘why’? Is it same
                as the popular words of ‘vision’, ‘mission’ and ‘goals’ or the
                recent oft-discussed topic of ‘purpose’? These were some of the
                questions running through the eager minds of the future leaders
                attending Simon Sinek’s enthralling session in Orlando as part
                of our firm’s annual milestone event. Simon clarified our
                questions by walking us through how leaders and organisations
                can inspire action, work for the greater good and become great
                by starting with ‘why’ (also commonly known as purpose, cause,
                belief). According to him, ‘why’ is different from words, such
                as vision, mission and goals etc., in the sense that it is more
                powerful as it aligns every stakeholder (people we actually care
                about) to a common set of beliefs and inspires them to go above
                and beyond everyone else to become great. The point that
                resonated with me the most is that ‘why’ attains tremendous
                power when it has an underlying purpose of making the world a
                better place.
              </p>
            </div>
            <NoteControls>
              <Button onClick={() => setExpanded(false)} secondary>
                {" "}
                Close
              </Button>
            </NoteControls>
          </>
        )}
      </Note>
    </NotesListWrapper>
  );
};
