import { Outlet } from "react-router-dom";
import Header from "./Header";

function ApplayOut() {
  return (
    <div>
      <Header />
      <div style={{ overflowY: "scroll", height: "calc(100vh - 50px)" }}>
        <Outlet />
      </div>
    </div>
  );
}
export default ApplayOut;
