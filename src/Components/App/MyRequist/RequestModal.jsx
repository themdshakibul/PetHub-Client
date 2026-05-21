"use client";

import { AlertDialog, Button, Chip, ScrollShadow } from "@heroui/react";
import { FaHeart, FaUserFriends } from "react-icons/fa";

export function RequestModal({ isOpen, onOpenChange, requests, petName }) {
  console.log("Received requests:", requests);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:5000/requests/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        alert(`Request ${newStatus}ed successfully!`);
        onOpenChange(false);
        window.location.reload();
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <AlertDialog isOpen={isOpen} onOpenChange={onOpenChange}>
      <AlertDialog.Backdrop variant="blur">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-md">
            <AlertDialog.Header className="flex flex-row items-center gap-2">
              <FaUserFriends className="text-xl" />
              <AlertDialog.Heading>
                Adoption Requests for {petName}
              </AlertDialog.Heading>
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
                    {requests.map((req) => (
                      <div
                        key={req._id}
                        className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <p className="font-bold text-sm">{req.userName}</p>
                            <p className="text-[10px] text-slate-500">
                              {req.userEmail}
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
                          >
                            {req.status}
                          </Chip>
                        </div>

                        {req.pickupDate && (
                          <p className="text-xs text-slate-400 mb-2">
                            Pickup:{" "}
                            {new Date(req.pickupDate).toLocaleDateString()}
                          </p>
                        )}

                        {/* স্ট্যাটাস যদি pending থাকে শুধু তখনই বাটনগুলো দেখাবে */}
                        {req.status === "pending" && (
                          <div className="flex gap-2 mt-3">
                            <Button
                              size="sm"
                              color="success"
                              className="flex-1 text-white"
                              onPress={() =>
                                handleStatusUpdate(req._id, "approved")
                              }
                            >
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              color="danger"
                              className="flex-1 text-white"
                              onPress={() =>
                                handleStatusUpdate(req._id, "rejected")
                              }
                            >
                              Reject
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollShadow>
              )}
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" className="w-full">
                Close
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
