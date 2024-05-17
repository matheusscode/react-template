import AdminContainer from "./AdminContainer";
import AuthContainer from "./AuthContainer";
import PlatformContainer from "./PlatformContainer";

export const Container = {
  Platform: PlatformContainer,
  Auth: AuthContainer,
  Dashboard: AuthContainer,
  Admin: AdminContainer,
};
