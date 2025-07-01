import { assets } from "../../../assets/assets";

function Banner() {
  return (
    <div className="relative bg-blue-banner grid grid-cols-3 rounded-4xl p-6">
      <div className="col-span-2 flex flex-col justify-between gap-12">
        <div className="">
          <h2 className="text-2xl text-white">
            Premium Features. Instant Impact.
          </h2>
          <p className="text-white/80">
            Join thousands who’ve upgraded their health with Jermai. Start your
            journey today — it's worth it.
          </p>
        </div>
        <a className="bg-white text-darker-gray p-2 rounded-xl w-fit">
          Choose Your Plan
        </a>
      </div>

      <img
        src={assets.bannerImage}
        alt="Choose a plan"
        className="h-70 absolute right-0 -bottom-4"
      />
    </div>
  );
}

export default Banner;
