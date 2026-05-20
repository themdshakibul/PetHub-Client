"use client";

import { authClient } from "@/lib/auth-client";
import { adoptCansel } from "@/lib/Data";
import { TriangleExclamation } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { Candal } from "next/font/google";
import toast from "react-hot-toast";

const Cansel = ({ adoptId }) => {
  const handelCansel = async () => {

    const {data:tokenData} = await authClient.token()

    const canselData = await adoptCansel(adoptId, tokenData);
    if (canselData) {
      toast.success("Cansel Successfull!");
      window.location.reload();
    }
  };

  return (
    <AlertDialog>
      <Button
        variant="outline"
        className="text-red-500 border-red-200 dark:border-red-500/20 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
      >
        Cansel
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
              <AlertDialog.Heading>Permanently delete?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex-col-reverse">
              <Button className="w-full" slot="close">
                Keep
              </Button>
              <Button
                onClick={handelCansel}
                className="w-full"
                slot="close"
                variant="danger"
              >
                Cansel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default Cansel;
