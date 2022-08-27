import type { AppProps } from "next/app";
import { injectGlobalStyles } from "../styles/stiches";
import { RelayEnvironmentProvider } from "relay-hooks";
import { useEnvironment } from "../relay/relayEnvironment";

function MyApp({ Component, pageProps }: AppProps) {
  const environment = useEnvironment(pageProps.initialRecords);

  injectGlobalStyles();
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
