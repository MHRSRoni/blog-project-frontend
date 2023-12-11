import toast from "react-hot-toast";

class NotificationHelper {
  successNotification(message) {
    toast.success(message);
  }
  errorNotification(message) {
    toast.error(message);
  }
}

export const { successNotification, errorNotification } =
  new NotificationHelper();
