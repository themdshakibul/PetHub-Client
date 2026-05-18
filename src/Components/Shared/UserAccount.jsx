import { Avatar, Dropdown, Label } from "@heroui/react";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const UserAccount = ({ user }) => {
  const handelLogout = async () => {
    await authClient.signOut();
    toast.success(`${user?.name} Log Out Successful`);
    redirect("/");
  };

  return (
    <section>
      <Dropdown>
        <Dropdown.Trigger className="rounded-full">
          <Avatar size="md">
            <Avatar.Image
              referrerPolicy="no-referrer"
              alt={user?.name}
              src={user?.image}
            />
            <Avatar.Fallback delayMs={600}>
              {user?.name?.charAt(0)}
            </Avatar.Fallback>
          </Avatar>
        </Dropdown.Trigger>
        <Dropdown.Popover>
          <div className="px-3 pt-3 pb-1">
            <div className="flex items-center gap-2">
              <Avatar size="sm">
                <Avatar.Image alt="Jane" src={user?.image} />
                <Avatar.Fallback delayMs={600}>
                  {user?.name?.charAt(0)}
                </Avatar.Fallback>
              </Avatar>
              <div className="flex flex-col gap-0">
                <p className="text-sm leading-5 font-medium">{user?.name}</p>
                <p className="text-xs leading-none text-muted">{user?.email}</p>
              </div>
            </div>
          </div>
          <Dropdown.Menu>
            <Dropdown.Item id="dashboard" textValue="Dashboard">
              <Link href={"/dashboard/my-requiest"}>
                <Label>Dashboard</Label>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handelLogout}
              id="logout"
              textValue="Logout"
              variant="danger"
            >
              <div className="flex w-full items-center justify-between gap-2">
                <Label>Log Out</Label>
                <ArrowRightFromSquare className="size-3.5 text-danger" />
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </section>
  );
};

export default UserAccount;
