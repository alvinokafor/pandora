import React from "react";
import { AppLayout } from "@/layouts";
import { CategoryPageWithBoxes } from "@/components/categories";
import { Search } from "@/components/general-ui";

export default function Categories() {
  return (
    <AppLayout title="Categories - Pandora">
      <div>
        <Search />
        <CategoryPageWithBoxes />
      </div>
    </AppLayout>
  );
}
