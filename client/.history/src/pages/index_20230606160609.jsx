import { Button } from "@/components/common";
import Layout from "@/layouts/Layouts";
import { logoutByToken } from "@/redux/slices/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
    {
    </>
  );
}
