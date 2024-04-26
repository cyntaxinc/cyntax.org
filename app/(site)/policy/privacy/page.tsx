import SidebarLink from "@/components/Policy/Privacy/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyntax Inc. - Policy Page",
  description: "This is Policy page for Cyntax Inc.",
  // other metadata
};

export default function PrivacyPage() {
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
                <h1>Privacy Policy</h1>
                <h6 className="mb-4"><i>Last Updated: 2/29/2024</i></h6>

                <p className="text-body-color dark:text-body-color-dark text-base">
                    At Cyntax Inc., we are committed to ensuring the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and protect the data associated with our services, including Software as a Service (SaaS), Infrastructure as a Service (IaaS), and tools such as AWS, Google Cloud, Cloudflare, Terraform, and CloudFormation.
                </p>
                  <h3>1. Information Collection</h3>
                  <p>We collect minimal and essential information necessary for providing our services. This may include:</p>
                  <ol>
                  <li>User account details for SaaS and IaaS access.</li>
                  <li>Configuration data required for tool integration (e.g., AWS, Google Cloud, Cloudflare, Terraform, CloudFormation).</li>
                  </ol>
                  <h3>2. Usage of Information</h3>
                  <p>The information collected is used solely for the purpose of delivering and improving our services. This includes:</p>
                  <ol>
                  <li>Providing access to SaaS and IaaS platforms.</li>
                  <li>Integrating with specified tools for optimal functionality.</li>
                  <li>Enhancing and optimizing user experience.</li>
                  </ol>
                  <h3>3. Data Security</h3>
                  <p>We prioritize the security of your data. Measures are in place to prevent unauthorized access, disclosure, alteration, and destruction. Our commitment to industry best practices ensures your information is handled with the utmost care.</p>
                  <h3>4. No-Logging and Privacy Respected Policy</h3>
                  <p>Cyntax Inc. adheres to a strict no-logging policy. We do not store or track any user activity or personal information beyond what is necessary for the provision of our services. Your privacy is respected and honored at all times.</p>
                  <h3>5. Third-Party Tools</h3>
                  <p>In cases where our services integrate with third-party tools such as AWS, Google Cloud, Cloudflare, Terraform, and CloudFormation, please refer to the respective privacy policies of those providers for information on their data handling practices.</p>
                  <h3>6. Compliance with Laws</h3>
                  <p>Cyntax Inc. operates in compliance with applicable data protection laws and regulations. If there are changes to our privacy practices, we will update this policy accordingly.</p>
                  <h3>7. Contact Information</h3>
                  <p>For any questions or concerns regarding this Privacy Policy, please contact our Data Protection Officer at [policy@cyntax.org]. </p>
                  <p>By using our services, you agree to the terms outlined in this Privacy Policy. We encourage you to review this policy periodically for any updates.</p>

                  <p>Thank you for choosing Cyntax Inc.</p>

                  <p><i>This Privacy Policy is effective as of the last updated date indicated above.</i></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
