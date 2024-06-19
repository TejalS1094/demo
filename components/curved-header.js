import Image from "next/image";
import SimpleHeader from "./header";
import Link from "next/link";

const CurvedHeader = ({ url, children }) => {
  return (
    <>
      <div className="">
        <SimpleHeader headername="simpleheader" url={url} />
      </div>
      <div className="overflow-x-hidden ">
        <div className=" curve-bg bg-yellow-300 pt-6 lg:pt-12  bg-opacity-100 mix-blend-hue">
          <div className="inner-content px-5 md:px-10 lg:px-20">
            {/* navigation */}
            <div>
              <span>
                <Link href={"/"}>Home</Link>{" "}
              </span>
              <span>{"> Start a Campaign"}</span>
            </div>
            <div className="mt-8 flex flex-col justify-center items-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurvedHeader;
