"use client";

import { authClient } from "@/lib/auth-client";
import { TriangleExclamation } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

const DeleteCard = ({ petId, status }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/mylisting/${petId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
      },
    );

    if (res.ok) {
      toast.success("Successfully deleted!");
      router.refresh();
    }
  };

  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <Button
          size="sm"
          isDisabled={status === "Adopted"}
          className="w-full px-10 flex-1 bg-red-100 hover:bg-red-200 dark:bg-red-950/20 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 font-black border border-red-300 dark:border-red-500/20 transition-all rounded-lg h-8 min-h-0 shadow-xs flex items-center justify-center"
        >
          <FaTrash size={13} />
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop
        className="bg-linear-to-t from-red-950/90 via-red-950/50 to-transparent dark:from-red-950/95 dark:via-red-950/60"
        variant="blur"
      >
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-105">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header className="items-center text-center">
              <AlertDialog.Icon status="danger">
                <TriangleExclamation className="size-5" />
              </AlertDialog.Icon>
              <AlertDialog.Heading>Delete this listing?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This action cannot be undone. This content will be permanently
                removed.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex-col-reverse">
              <Button className="w-full" slot="close">
                Cancel
              </Button>

              <Button
                className="w-full"
                slot="close"
                variant="danger"
                onPress={handleDelete}
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteCard;
