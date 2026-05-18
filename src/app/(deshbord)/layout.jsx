const DashboardLayout = ({ children }) => {
  return (
    <section>
      <div className="text-end py-5 border-2 border-green-500">
        <h2>Navbar and user</h2>
      </div>

      <main>{children}</main>
    </section>
  );
};

export default DashboardLayout;
