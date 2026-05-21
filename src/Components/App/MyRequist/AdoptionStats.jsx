"use client";

import { Button, Table } from "@heroui/react";
import Cansel from "./Cansel";
import Link from "next/link";

const AdoptionStats = ({ adoptUser = [] }) => {
  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="w-full overflow-hidden">
      <Table aria-label="Adoption stats table">
        <Table.ScrollContainer>
          <Table.Content aria-label="Adoption stats table" className="w-full">
            <Table.Header>
              <Table.Column key="petName" isRowHeader>
                Pet Name
              </Table.Column>
              <Table.Column key="requestDate">Request Date</Table.Column>
              <Table.Column key="pickupDate">Pickup Date</Table.Column>
              <Table.Column key="status">Status</Table.Column>
              <Table.Column key="actions" className="text-right">
                Actions
              </Table.Column>
            </Table.Header>
            <Table.Body>
              {adoptUser.map((item) => {
                const currentStatus = item.status || "pending";

                const displayPickupDate = item.pickupDate || item.date;

                const displayRequestDate = item.requestDate || null;

                return (
                  <Table.Row key={item._id}>
                    <Table.Cell>{item.petName || item.name || "—"}</Table.Cell>

                    <Table.Cell>
                      {formatDate(displayPickupDate) || "—"}
                    </Table.Cell>

                    <Table.Cell>
                      {displayRequestDate ? (
                        <span className="text-slate-300 font-semibold bg-blue-500/10 px-2 py-1 rounded-lg text-xs establishment-badge">
                          📅 {formatDate(displayRequestDate)}
                        </span>
                      ) : (
                        <span className="text-slate-500">—</span>
                      )}
                    </Table.Cell>

                    <Table.Cell>
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                          currentStatus === "approved"
                            ? "bg-green-500/10 text-green-400"
                            : currentStatus === "rejected"
                              ? "bg-red-500/10 text-red-400"
                              : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            currentStatus === "approved"
                              ? "bg-green-500"
                              : currentStatus === "rejected"
                                ? "bg-red-500"
                                : "bg-yellow-500"
                          }`}
                        />
                        {currentStatus.charAt(0).toUpperCase() +
                          currentStatus.slice(1)}
                      </span>
                    </Table.Cell>

                    <Table.Cell className="text-right">
                      <div className="flex gap-2 items-center justify-end">
                        <Link
                          href={`/all-pate/${item.petId}`}
                          passHref
                          legacyBehavior
                        >
                          <Button
                            size="sm"
                            variant="bordered"
                            className="text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-rose-400 dark:hover:border-rose-400 hover:text-rose-500 dark:hover:text-rose-500 transition-all font-medium"
                          >
                            View
                          </Button>
                        </Link>

                        {/* Cancel Button / Component */}
                        <Cansel adoptId={item._id} />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
        <Table.Footer />
      </Table>
    </section>
  );
};

export default AdoptionStats;
