import React from "react";
import Links from "./Links";
// import exampleImage from ""

const varUse = [
  {
    point:
      "High-paying, meaningful missions with the most audacious companies ",
    para: " sent your way; generally $90-$150+/hr, with vetted, fascinating clients doing work that matters. We're picky about who we partner with; new clients only come in via trusted referral. We've worked with Lyft, McGraw Hill, ClearCo, Pepsi, Walmart, the former CEO of Waze, the leading vaccine production software, several new unicorns we can't say here, and dozens of startups backed by a16z/YC/Softbank/Insight/Tiger/etc.",
  },
  {
    point: "Work alongside friends old & new:",
    para: "our niche is small/diverse product teams, since clients with larger budgets and higher-impact work tell us they want teams, not individuals. Of course, we keep friends together whenever we can.",
  },
  {
    point: "Full autonomy:",
    para: "say 'no' to things that don't excite you. The most talented builders often juggle a few things at once, so there's never pressure to join an A·Team mission if you don't have the bandwidth. If we're no longer a fit, it's easy to leave or pause too. ",
  },
];
const Do = [
  "Once part of A.Team, you’ll regularly be invited to impactful missions that match your interests. Find the right pick from early-stage incubations with world-class founders, to fast-growing super-funded companies, to old school non-tech incumbents looking to build as a tech giant would",
  "Missions usually involve building an ambitious piece of software from 0 to 1 as part of a small 3-4 person team. ",
  "You’ll be paid to scope it out, give the client options, guide strategy, and execute on the selected solution. Sometimes the client has a clear vision, sometimes not; which is why A.Team builders tend to be senior folks who can work together to find the right direction. ",
];

const Expect = () => {
  return (
    <div className="space-y-6">
      <h2 className="italic">As part of A·Team, you can expect:</h2>

      <div className="text-wrap">
        <ul className="list-inside list-disc space-y-3">
          {varUse.map((item) => (
            <li key={item} className="font-semibold">
              {item.point}
              <span className="font-normal">{item.para}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-wrap *:py-2">
        <h2 className="font-semibold">How to apply :</h2>
        <a
          href=" https://build.a.team/remotivereferral"
          className="cursor-pointer"
        >
          Go here: https://build.a.team/remotivereferral
        </a>
        <span>
          + mention Remotive. We respect your time so the application is short.
          We're also much more interested in seeing what you've made, and
          excited to chat more if there’s a fit.
        </span>
      </div>

      <div className="text-wrap">
        <h2 className="font-semibold py-2">What you'll do:</h2>
        <ul className="list-inside list-disc space-y-3">
          {Do.map((item) => (
            <li className="">{item}</li>
          ))}
        </ul>
      </div>

      <div className="text-wrap">
        <h2 className="font-semibold py-2">Who A·Team is for:</h2>
        <ul className="list-inside list-disc space-y-3">
          {Do.map((item) => (
            <li className="">{item}</li>
          ))}
        </ul>
      </div>

      <div className="text-wrap">
        <h2 className="font-semibold">Who A·Team is not for:</h2>
        <ul className="list-inside list-disc">
          {Do.map((item) => (
            <li className="">{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">Our long-term vision:</h2>
        <p>
          A·Team is a new type of company for a new kind of independent software
          builder. We call them "unhirables": people who traditional companies
          couldn’t hire full-time even if they wanted to, but who want to do
          their most meaningful work with their favorite people in small,
          autonomous, distributed expert teams.{" "}
        </p>
        <p>
          To help us secure amazing missions, we raised $60 million+ from
          Insight Partenrs, Tiger Global, NFX, RocNation, along with the former
          CEO of Upwork, the founders of Fiverr and Lemonade, Apple's Global
          Head of Recruiting, YC Partner Aaron Harris, Wharton's Adam Grant, and
          Duke's Dan Ariely. About The Company
        </p>
      </div>
      <div className="space-y-3 ">
        <h2 className="font-semibold text-lg">About the company</h2>
        <div className="space-y-2 bg-pink-100 shadow p-4 rounded-2xl">
          <div className="flex items-center space-x-3 p-2">
            <div className="w-16 h-16 overflow-hidden rounded-full">
              <img
                className="w-15 h-15  object-cover object-center"
                src="https://source.unsplash.com/random/flower"
              />
            </div>
            <div className="">
              <h2 className="text-2xl font-bold">A.Team</h2>
              <p className="text-wrap">
                An invite-only collective for the world's best independent
                software developers
              </p>
            </div>
          </div>
          <p>
            A·Team helps the world's top independent software builders team up
            and create things that matter.
          </p>
        </div>
      </div>
      <Links />
    </div>
  );
};

export default Expect;
