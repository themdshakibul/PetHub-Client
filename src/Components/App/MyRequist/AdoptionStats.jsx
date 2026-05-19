"use client";

import { Button, Table } from "@heroui/react";
import Cansel from "./Cansel";
import Link from "next/link";

const AdoptionStats = ({ adoptUser }) => {
  return (
    <section className="w-full overflow-hidden px-5">
      <Table aria-label="Adoption stats table">
        <Table.ScrollContainer>
          <Table.Content aria-label="Adoption stats table" className="w-full">
            <Table.Header>
              <Table.Column key="petName">Pet Name</Table.Column>
              <Table.Column key="requestDate">Request Date</Table.Column>
              <Table.Column key="pickupDate">Pickup Date</Table.Column>
              <Table.Column key="status">Status</Table.Column>
              <Table.Column key="actions" className="text-right">
                Actions
              </Table.Column>
            </Table.Header>
            <Table.Body>
              {adoptUser.map((item) => (
                <Table.Row key={item._id}>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.pickupDate}</Table.Cell>
                  <Table.Cell>
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                        item.status === "approved"
                          ? "bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400"
                          : item.status === "rejected"
                            ? "bg-red-100 dark:bg-red-500/10 text-red-500 dark:text-red-400"
                            : "bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.status === "approved"
                            ? "bg-green-500"
                            : item.status === "rejected"
                              ? "bg-red-500"
                              : "bg-yellow-500"
                        }`}
                      />
                      {item.status}
                    </span>
                  </Table.Cell>
                  <Table.Cell className="text-right">
                    <div className="flex gap-2 items-center justify-end">
                      <Button
                        size="sm"
                        variant="bordered"
                        className="text-slate-600 dark:text-slate-300 border-slate-300 dark:border-white/10 hover:border-rose-400 hover:text-rose-500 transition-all"
                      >
                        View
                      </Button>

                      <Cansel />
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
        <Table.Footer />
      </Table>
    </section>
  );
};

export default AdoptionStats;
