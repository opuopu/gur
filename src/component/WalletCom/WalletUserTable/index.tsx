import { membershipColumn, memberShipData } from "../../../db/memberData";
import { dashboardMembershipTable } from "../../../themes/tableThemes";
import GuruTable from "../../Table";

const WalletIncomeTable = () => {
  return (
    <div className="bg-black px-4 pb-4">
      <h1 className="text-center text-32 font-600 py-2 text-white ">
        Transaction Activities
      </h1>

      <div>
        <GuruTable
          theme={dashboardMembershipTable}
          loading={false}
          column={membershipColumn}
          data={memberShipData}
          total={memberShipData?.length}
          scroll={{ y: 638 }}
        />
      </div>
    </div>
  );
};

export default WalletIncomeTable;
