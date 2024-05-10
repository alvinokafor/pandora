import { Heading } from "@radix-ui/themes";
import { AppLayout } from "@/layouts";
import { EmptyState, HomePageWithBoxes } from "@/components/home";
import { Search } from "@/components/general-ui";

export default function Home() {
  return (
    <AppLayout title="Home - Pandora">
      <div className="h-screen">
        <Search />
        {/* <EmptyState /> */}
        <HomePageWithBoxes />
      </div>
    </AppLayout>
  );
}
