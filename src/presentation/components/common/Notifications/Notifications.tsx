import { FC, memo, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Alert } from "../Alert";
import { notificationsAtom, NotificationType } from "../../../../application";
import { NotificationsWrapper } from "./styles";

export const Notifications: FC = memo(() => {
  const [notifications, setNotifications] = useRecoilState(notificationsAtom);

  useEffect(() => {
    let timeout: any;
    if (notifications.length) {
      timeout = setTimeout(() => {
        setNotifications((n: NotificationType[]) => {
          let nn = [...n];
          nn.shift();
          return [...nn];
        });
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [notifications, setNotifications]);

  return notifications[0] ? (
    <NotificationsWrapper animate={{ top: "20px" }}>
      <Alert feedback={notifications[0].feedback}>
        {notifications[0].content}
      </Alert>
    </NotificationsWrapper>
  ) : null;
});
