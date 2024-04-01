import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePersonAdd } from "react-icons/md";
import GuruTable from "../../Table";
import { membershipColumn, memberShipData } from "../../../db/memberData";
import { dashboardMembershipTable } from "../../../themes/tableThemes";

const Membership = () => {
  return (
    <>
      <div className="bg-white">
        <div>
          <div className="flex items-center justify-between py-[4px] px-4">
            <h1 className="text-32 font-600">Paid Member List</h1>
            <div className="flex items-center gap-x-2">
              <IoPersonOutline
                className="text-32"
                style={{
                  color: "#FD8533",
                }}
              />
              <div>
                <h1 className="text-20 font-600">541</h1>
                <p className="text-16 font-500">premium membership</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <MdOutlinePersonAdd
                className="text-32"
                style={{
                  color: "#FD8533",
                }}
              />

              <div>
                <h1 className="text-20 font-600">541</h1>
                <p className="text-16 font-500">pro membership</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <GuruTable
            theme={dashboardMembershipTable}
            loading={false}
            column={membershipColumn}
            data={memberShipData}
            total={memberShipData?.length}
            scroll={{ y: 220 }}
          />
        </div>
      </div>
    </>
  );
};

export default Membership;
