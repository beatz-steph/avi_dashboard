import React from "react";

import { ComingSoon, DashboardLayout } from "../../components";

const Revise = () => {
  return (
    <>
      <div>Revise</div>

      <ComingSoon />
    </>
  );
};

export default Revise;

Revise.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
