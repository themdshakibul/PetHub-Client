"use client";

import { TriangleExclamation } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { FaTrash } from "react-icons/fa";

const DeleteCard = () => {
  const handleDelete = () => {
    console.log("hadel delte");
  };

  return (
    <AlertDialog>
      <Button
        onPress={handleDelete}
        size="sm"
        isDisabled={status === "Adopted"}
        className="flex-1 bg-red-100 hover:bg-red-200 dark:bg-red-950/20 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 font-black border border-red-300 dark:border-red-500/20 transition-all rounded-lg h-8 min-h-0 shadow-xs flex items-center justify-center"
      >
        <FaTrash size={13} />
      </Button>
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
              <AlertDialog.Heading>
                Permanently delete your account?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This action cannot be undone. All your data, settings, and
                content will be permanently removed from our servers. The
                dramatic red backdrop emphasizes the severity and
                irreversibility of this decision.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex-col-reverse">
              <Button className="w-full" slot="close">
                Keep Account
              </Button>
              <Button className="w-full" slot="close" variant="danger">
                Delete Forever
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteCard;
