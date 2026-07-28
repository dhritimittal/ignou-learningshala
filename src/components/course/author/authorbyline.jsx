"use client";

import { useState } from "react";
import AuthorCard from "./authorcard";
import ReviewerCard from "./reviewercard";
import AuthorDialog from "./authordialog";

function formatDate(raw) {
  if (!raw) return "";
  return new Date(raw).toLocaleString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AuthorByline({ data }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-row items-center pt-8">

            <AuthorCard
                author={data.byline.author}
                onClick={() =>
                    setSelected({
                    ...data.byline.author,
                    verified: false,
                    })
                }
            />

            {/* Vertical Divider */}
            <div className="mx-12 self-stretch border-l border-slate-200" />

            <ReviewerCard
                reviewer={data.byline.reviewer}
                onClick={() =>
                    setSelected({
                    ...data.byline.reviewer,
                    verified: true,
                    })
                }
            />

          </div>

          <div className="pt-1">
            <p className="text-sm text-muted-foreground">
              Last Updated{" "}
              <span className="font-medium text-foreground">
                {formatDate(data.byline.updatedAt)}
              </span>
            </p>
          </div>

        </div>
      </section>

      <AuthorDialog
        person={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}