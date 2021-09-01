import { FC, useCallback, useContext, useState } from "react";
import { AppSettings, IUserProfile } from "../../../../../application";
import { FeedbackTypes } from "../../../FeedbackTypes";
import AppContext from "../../../../../AppContext";
import { Form, DbDataChangeAlert } from "../../../common";
import { UpdateForm } from "./UpdateForm";
import { UserProfileWrapper } from "./styles";

export const UserProfile: FC = () => {
  const application = useContext(AppContext);

  const [feedback, setFeedback] = useState<{
    status: FeedbackTypes;
    error?: Error | null;
  }>({
    status: FeedbackTypes.NONE,
    error: null,
  });

  const handleSubmit = useCallback(
    (data: IUserProfile) => {
      new AppSettings()
        .updateUserProfile(data)
        .then(() => {
          setFeedback({ status: FeedbackTypes.SUCCESS });
          if (application.loadApp) {
            application.loadApp();
          }
        })
        .catch((error: any) => {
          setFeedback({ status: FeedbackTypes.ERROR, error });
        });
    },
    [application]
  );

  return (
    <UserProfileWrapper>
      <Form<IUserProfile> legend="Update User Profile" handler={handleSubmit}>
        <UpdateForm />
        <DbDataChangeAlert
          status={feedback.status}
          successMessage={<>User profile updated successfuly.</>}
          errorMessage={
            <>
              User profile not updated. Error {feedback.error?.message} occured
            </>
          }
        />
      </Form>
    </UserProfileWrapper>
  );
};
