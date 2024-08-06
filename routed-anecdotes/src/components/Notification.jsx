import { useNotificationDispatch, useNotificationValue } from "../NotificationContext";

export const Notification = () => {
  
  const notification = useNotificationValue()
  const notificationDispatch = useNotificationDispatch()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  };

  if (notification === '') return null;

  else {
    setTimeout(() => {
      notificationDispatch({ type: null })
    }, 5000);

    return (
      <div style={style}>
        {notification}
      </div>
    );
  }
};
