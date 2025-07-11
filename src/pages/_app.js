import AuthGuard from "components/AuthGuard";
import "../styles/style.css";
AuthGuard

function MyApp({ Component, pageProps }) {
  const isAdminRoute = Component.name.includes('Admin');

  if (isAdminRoute) {
    return (
      <AuthGuard>
        <Component {...pageProps} />
      </AuthGuard>
    );
  }

  return <Component {...pageProps} />;
}

export default MyApp;