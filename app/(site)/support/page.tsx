import React from "react";
import SignIn from "@/components/Auth/Signin";
import Support from "@/components/Support";
import { Metadata } from "next";
import SectionHeader from "@/components/Common/SectionHeader";

export const metadata: Metadata = {
  title: "Cyntax Inc. - Support Page",
  description: "This is Support page for Cyntax Inc.",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-20">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Support",
              subtitle: "We are here to help",
              description: `Sign in to create a new support ticket. If you are unable to sign in, please fill out the form below or contact [support@cyntax.org]`,
            }}
          />
        </div>
      <SignIn />
      <Support />
    </div>
  );
};

export default SupportPage;
