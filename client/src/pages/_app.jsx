import "@/styles/loader.css";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { lazy } from "react";
import useLoader from "@/hooks/useLoader";
const Loader = lazy(() => import("@/components/common/Loader"));

export default function App({ Component, pageProps }) {
  const isLoading = useLoader(2000);

  return (
    <Provider store={store}>
      <div>{isLoading ? <Loader /> : <Component {...pageProps} />}</div>
    </Provider>
  );
}
