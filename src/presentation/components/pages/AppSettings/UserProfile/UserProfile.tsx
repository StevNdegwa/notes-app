import { FC } from "react";
import { AppSettings, IUserProfile } from "../../../../../application";
import { Form } from "../../../common";
import { UpdateForm } from "./UpdateForm";
import { UserProfileWrapper } from "./styles";

export const UserProfile: FC = () => {
  
  const handleSubmit = (data: IUserProfile) => {
    new AppSettings().updateUserProfile(data);
  };

  return (
    <UserProfileWrapper>
      <Form<IUserProfile> legend="Update User Profile" handler={handleSubmit}>
        <UpdateForm />
      </Form>
    </UserProfileWrapper>
  );
};
