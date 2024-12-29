import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";

const footerLinks = [
  { links: ["Solutions", "Marketing", "Analytics", "Commerce", "Insight"] },
  { links: ["Support", "Pricing", "Documentation", "Guides", "API Status"] },
  { links: ["Solutions", "Marketing", "Analytics", "Commerce", "Insight"] },
  { links: ["Support", "Pricing", "Documentation", "Guides", "API Status"] },
];

const Footer = () => {
  return (
    <div className="pt-10 mt-10 pb-5 flex gap-5 justify-around  font-['poppins']">
      <div className="w-1/4 flex flex-col gap-4">
        <div className="flex gap-1 items-center">
          <div className="text-xl font-semibold">
            <span className="text-red-600">RAF</span>CART
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300 ">
          Job Portal with user Profiles,Skill Updates, Certification, Work
          Experience and Admin Job Postings.
        </div>
        <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700">
          <div>
            <IconBrandFacebook />
          </div>
          <div>
            <IconBrandInstagram />
          </div>
          <div>
            <IconBrandX />
          </div>
        </div>
      </div>
      {footerLinks.map((item, index) => (
        <div key={index}>
          <div className="text-lg font-semibold mb-4 text-red"></div>
          {item.links.map((link, index) => (
            <div
              key={index}
              className="text-sm text-black hover:text-red cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out"
            >
              {link}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Footer;
