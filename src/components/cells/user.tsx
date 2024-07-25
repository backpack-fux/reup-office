import { User } from "@/types";
import { User as NextUiUser } from "@nextui-org/user";

export const UserCell: React.FC<{ user: User }> = ({ user }) => (
  <NextUiUser
    avatarProps={{ radius: "lg", src: user.customer.avatar }}
    description={user.customer.email}
    name={user.customer.name}>
    {user.customer.email}
  </NextUiUser>
);
