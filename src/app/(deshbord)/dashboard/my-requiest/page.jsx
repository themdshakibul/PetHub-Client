import AdoptionRequestsHeader from "@/Components/App/MyRequist/AdoptionRequestsHeader";
import AdoptionStats from "@/Components/App/MyRequist/AdoptionStats";
import { auth } from "@/lib/auth";
import { getAdoptUserPet } from "@/lib/Data";
import { headers } from "next/headers";

const MyRequistPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const adoptUser = await getAdoptUserPet(user);
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-2">
        <AdoptionRequestsHeader adoptUser={adoptUser} />
        <AdoptionStats adoptUser={adoptUser} />
      </div>
    </div>
  );
};

export default MyRequistPage;
