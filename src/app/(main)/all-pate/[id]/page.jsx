import { AdoptionFormCard } from "@/Components/App/PetDetailsPage/AdoptionFormCard";
import PetInfoCard from "@/Components/App/PetDetailsPage/PetInfoCard";
import SuccessAdoptedCard from "@/Components/App/PetDetailsPage/SuccessAdoptedCard";
import { auth } from "@/lib/auth";
import { getPetsDataBYId } from "@/lib/Data";
import { headers } from "next/headers";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const petInfo = await getPetsDataBYId(id, token);

  const { petName, status } = petInfo;

  return (
    <div className="min-h-screen  text-white p-4 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <PetInfoCard petInfo={petInfo} />
        </div>

        <div className="lg:col-span-5">
          {status === "Available" ? (
            <AdoptionFormCard petInfo={petInfo} />
          ) : (
            <SuccessAdoptedCard petName={petName} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PetDetailsPage;
