import React from "react";

import { ComingSoon, DashboardLayout } from "../../components";

const Pro = () => {
  return (
    <>
      <div>Pro</div>

      <ComingSoon />
    </>
  );
};

export default Pro;

Pro.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
