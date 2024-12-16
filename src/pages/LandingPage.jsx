import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleLinkShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <section className="relative min-h-screen flex items-center flex-col pt-40">
      <img
        src="/swirl.svg"
        alt="swirl"
        className="w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1s"
      />
      <img
        src="/cubes.svg"
        alt="swirl"
        className="w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1s"
      />
      <div className="flex justify-center items-center flex-col z-10 px-4 sm:px-0">
        <h2 className="my-5 min-h-20 text-4xl sm:text-6xl lg:text-7xl text-center font-bold bg-gradient-to-r from-[#144EE3] via-[#EB568E] to-[#144EE3] inline-block text-transparent bg-clip-text">
          Shorten Your Loooong Links :)
        </h2>
        <p className="text-zinc-300 max-w-[600px] text-center mb-20">
          Shortify is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </p>
        <form
          onSubmit={handleLinkShorten}
          className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2 p-2 sm:rounded-full sm:border sm:border-gray-300"
        >
          <Input
            type="url"
            value={longUrl}
            placeholder="Enter your loooong URL"
            className="h-full flex-1 sm:border-none sm:rounded-s-full p-4 sm:p-2 mb-2 sm:mb-0"
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <Button className="h-full rounded-full" type="submit">
            Shorten Now!
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LandingPage;
