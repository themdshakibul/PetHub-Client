import { Spinner } from "@heroui/react";

const lodingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-50 dark:bg-[#060b13]">
      <Spinner
        size="lg"
        color="secondary"
        label="Loading..."
        className="text-pink-500"
      />
      <p className="mt-4 text-slate-500 dark:text-slate-400 font-medium">
        Please wait, fetching your data...
      </p>
    </div>
  );
};

export default lodingPage;
