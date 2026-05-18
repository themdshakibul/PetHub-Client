import { AdoptionFormCard } from "@/Components/App/PetDetailsPage/AdoptionFormCard";
import PetInfoCard from "@/Components/App/PetDetailsPage/PetInfoCard";
import SuccessAdoptedCard from "@/Components/App/PetDetailsPage/SuccessAdoptedCard";
import { getPetsDataBYId } from "@/lib/Data";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;
  const petInfo = await getPetsDataBYId(id);

  const {
    petName,
    status,
  } = petInfo;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Pet Info (Always Visible) */}
        <div className="lg:col-span-7">
          <PetInfoCard petInfo={petInfo} />
        </div>

        {/* Right Side: Dynamic Content (Form or Success) */}
        <div className="lg:col-span-5">
          {status === "Available" ? (
            <AdoptionFormCard petName={petName} />
          ) : (
            <SuccessAdoptedCard petName={petName} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PetDetailsPage;
