import { AppLayout } from "@/layouts";
import { UserProfileForm } from "@/components/user";

import React from "react";

export default function UserProfile() {
  return (
    <AppLayout title="Box - Pandora">
      <div>
        <section className="flex flex-col gap-y-2 pb-4 border-b">
          <h3 className="font-medium text-lg text-heading-black">
            Account Management{" "}
          </h3>
          <p className="text-slate-grey text-sm">
            Update your personal details here.{" "}
          </p>
        </section>

        <section>
          <UserProfileForm />
        </section>
      </div>
    </AppLayout>
  );
}
