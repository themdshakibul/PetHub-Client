"use client";

import { authClient } from "@/lib/auth-client";
import { getAdoptUserPetId } from "@/lib/Data";
import { AlertDialog, Button, Chip, ScrollShadow } from "@heroui/react";
import toast from "react-hot-toast";
import { FaHeart, FaTimes, FaUserFriends } from "react-icons/fa";

export function RequestModal({
  isOpen,
  onOpenChange,
  requests,
  petName,
  setPetRequests,
}) {
  const handleStatus = async (id, status, petId) => {
    try {
      const { data: tokenData } = await authClient.token();
      const token = tokenData?.token;

      // update
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/adopt/${id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status }),
        },
      );

      if (!res.ok) {
        throw new Error("Failed");
      }

      // updated requests
      const updatedRequests = await getAdoptUserPetId(petId, token);
      setPetRequests(updatedRequests);

      toast.success(`Request ${status}`);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <AlertDialog isOpen={isOpen} onOpenChange={onOpenChange}>
      <AlertDialog.Backdrop variant="blur">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-md">
            <AlertDialog.Header className="relative flex items-center gap-2 pr-10">
              <div className="flex items-center gap-2">
                <FaUserFriends className="text-xl" />

                <AlertDialog.Heading>
                  Adoption Requests for {petName}
                </AlertDialog.Heading>
              </div>
              <Button
                isIconOnly
                size="sm"
                variant="light"
                className="absolute top-2 right-2 min-w-0 w-7 h-7 rounded-full text-slate-400 hover:text-white"
                onPress={() => onOpenChange(false)}
              >
                <FaTimes size={11} />
              </Button>
            </AlertDialog.Header>

            <AlertDialog.Body className="py-6">
              {!requests || requests.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-6 text-slate-500">
                  <FaHeart className="text-4xl mb-4 opacity-50" />
                  <p className="text-center font-medium">
                    No requests yet for {petName}
                  </p>
                </div>
              ) : (
                <ScrollShadow className="max-h-[60vh]">
                  <div className="flex flex-col gap-3">
                    {requests.map(
                      (req) => (
                        console.log(JSON.stringify(req, null, 2), "requist"),
                        (
                          <div
                            key={req._id}
                            className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 overflow-hidden"
                          >
                            <div className="flex justify-between items-start gap-3 mb-3">
                              <div className="min-w-0 flex-1">
                                <p className="font-bold text-sm wrap-break-word text-white">
                                  {req.usrName}
                                </p>

                                <p className="text-[11px] text-slate-400 break-all">
                                  {req.email}
                                </p>
                              </div>

                              <Chip
                                size="sm"
                                color={
                                  req.status === "pending"
                                    ? "warning"
                                    : req.status === "approved"
                                      ? "success"
                                      : "danger"
                                }
                                className="capitalize"
                              >
                                {req.status}
                              </Chip>
                            </div>

                            {req.pickupDate && (
                              <div className="mb-2">
                                <p className="text-[11px] text-slate-500">
                                  Pickup Date:
                                </p>

                                <p className="text-xs text-slate-300">
                                  {new Date(req.pickupDate).toLocaleDateString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    },
                                  )}
                                </p>
                              </div>
                            )}

                            {req.requestDate && (
                              <div className="mb-2">
                                <p className="text-[11px] text-slate-500">
                                  Request Date:
                                </p>

                                <p className="text-xs text-slate-300">
                                  {new Date(req.requestDate).toLocaleDateString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    },
                                  )}
                                </p>
                              </div>
                            )}

                            {req.text && (
                              <div className="mb-3">
                                <p className="text-[11px] text-slate-500 mb-1">
                                  Message:
                                </p>

                                <div className="text-xs text-slate-300 bg-white/5 rounded-lg p-3 wrap-break-word whitespace-pre-wrap leading-relaxed">
                                  {req.text}
                                </div>
                              </div>
                            )}

                            {/* {req.status === "pending" && (
                              <div className="grid grid-cols-2 gap-3 mt-4">
                                <Button
                                  size="sm"
                                  radius="full"
                                  color="success"
                                  className="w-full font-semibold text-white"
                                  startContent={<span>✓</span>}
                                  onClick={() =>
                                    handleStatus(req._id, "approved", req.petId)
                                  }
                                >
                                  Approve
                                </Button>

                                <Button
                                  size="sm"
                                  radius="full"
                                  color="danger"
                                  className="w-full font-semibold text-white"
                                  startContent={<span>✕</span>}
                                  onClick={() =>
                                    handleStatus(req._id, "rejected", req.petId)
                                  }
                                >
                                  Reject
                                </Button>
                              </div>
                            )} */}

                            {(req.status === "pending" ||
                              req.status === "available" ||
                              req.status === "Available") && (
                              <div className="grid grid-cols-2 gap-3 mt-4">
                                <Button
                                  size="sm"
                                  radius="full"
                                  color="success"
                                  className="w-full font-semibold text-white bg-success"
                                  startContent={<span>✓</span>}
                                  onClick={() =>
                                    handleStatus(req._id, "approved", req.petId)
                                  }
                                >
                                  Approve
                                </Button>

                                <Button
                                  size="sm"
                                  radius="full"
                                  color="danger"
                                  className="w-full font-semibold text-white bg-red-500"
                                  startContent={<span>✕</span>}
                                  onClick={() =>
                                    handleStatus(req._id, "rejected", req.petId)
                                  }
                                >
                                  Reject
                                </Button>
                              </div>
                            )}
                          </div>
                        )
                      ),
                    )}
                  </div>
                </ScrollShadow>
              )}
            </AlertDialog.Body>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
