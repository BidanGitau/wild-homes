import LoginForm from "@/app/_components/LoginForm";

export const metadata = {
  title: "Tenant Login",
};

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-secondary-900 mb-8">
          Tenant Login
        </h1>
        <p className="text-center text-secondary-700 mb-8">
          Sign in to access your rental information and make payments
        </p>
        <LoginForm type="Tenant" />
        <div className="text-center mt-4">
          <a
            href="/management-login"
            className="text-blue-600 hover:text-blue-800"
          >
            Are you a property manager? Sign in here
          </a>
        </div>
      </div>
    </div>
  );
}
