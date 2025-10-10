import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";
import { SignOutIcon } from "@phosphor-icons/react";
import { useAuthStore } from "../../stores/authStore";
import { useNavigate } from "react-router-dom";

export const UserMenu = () => {
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  // Get user data from GitHub
  const avatarUrl = user?.user_metadata?.avatar_url;
  const userName =
    user?.user_metadata?.user_name || user?.user_metadata?.full_name || "User";

  return (
    <Dropdown
      placement="bottom-end"
      classNames={{
        content: "bg-[#1a2332] border border-white/10 backdrop-blur-md p-2",
      }}
    >
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform cursor-pointer"
          color="primary"
          size="sm"
          src={avatarUrl}
          name={userName}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="User Actions"
        variant="flat"
        itemClasses={{
          base: [
            "!text-white",
            "rounded-md",
            "data-[hover=true]:bg-white/10",
            "data-[hover=true]:!text-white",
            "data-[selectable=true]:focus:bg-white/10",
            "data-[selectable=true]:focus:!text-white",
          ],
          title: "!text-white",
        }}
      >
        <DropdownItem
          key="logout"
          startContent={<SignOutIcon size={18} weight="regular" />}
          onPress={handleLogout}
          className="text-red-400 data-[hover=true]:text-red-300"
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
