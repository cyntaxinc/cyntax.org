import SidebarLink from "@/components/Policy/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyntax Inc. - Policy Page",
  description: "This is Policy page for Cyntax Inc.",
  // other metadata
};

export default function PolicyPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Welcome to Cyntax Inc. Policy Guide</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Welcome to Cyntax Inc. Your trust is paramount, and we are committed to safeguarding your privacy and ensuring a secure experience. Our Privacy Policy outlines how we handle your data, adhering to a strict no-logging policy. The Terms of Service govern your use of our services. By engaging with Cyntax Inc., you agree to these terms, placing your privacy and satisfaction at the core of our commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
