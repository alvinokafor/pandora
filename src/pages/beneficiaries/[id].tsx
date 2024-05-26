import { AppLayout } from "@/layouts";
import { Search, BeneficiariesTable } from "@/components/general-ui";

export default function Beneficiaries() {
  return (
    <AppLayout title="Beneficiaries">
      <div className="">
        <Search />
        <BeneficiariesTable />
      </div>
    </AppLayout>
  );
}
