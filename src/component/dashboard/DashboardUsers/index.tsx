import { memberShipData, userColumnsData } from "../../../db/memberData";
import { dashboardMembershipTable } from "../../../themes/tableThemes";
import GuruTable from "../../Table";

const DashboardUsers = () => {
  return (
    <div className="flex flex-col gap-y-4 ">
      <div className="bg-white rounded">
        <div>
          <div className="py-2 px-4">
            <h1 className="text-24 font-600">Active Users</h1>
          </div>
        </div>
        <div className="px-4">
          <GuruTable
            loading={false}
            theme={dashboardMembershipTable}
            column={userColumnsData}
            data={memberShipData}
            total={memberShipData?.length}
            scroll={{ y: 280 }}
          />
        </div>
      </div>
      <div className="bg-white rounded">
        <div>
          <div className="py-2 px-4">
            <h1 className="text-24 font-600">InActive Users</h1>
          </div>
        </div>
        <div className="px-4">
          <GuruTable
            loading={false}
            theme={dashboardMembershipTable}
            column={userColumnsData}
            data={memberShipData}
            total={memberShipData?.length}
            scroll={{ y: 280 }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardUsers;
