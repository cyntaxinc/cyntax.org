import SidebarLink from "@/components/Policy/TermsOfService/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyntax Inc. - Policy Page",
  description: "This is Policy page for Cyntax Inc.",
  // other metadata
};

export default function TermsPage() {
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
                <h1>Terms of Service</h1>
                <h6 className="mb-4"><i>Last Updated: 2/29/2024</i></h6>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Welcome to Cyntax Inc. These Terms of Service ("Terms") govern your use of our services, including Software as a Service (SaaS), Infrastructure as a Service (IaaS), and tools such as AWS, Google Cloud, Cloudflare, Terraform, and CloudFormation. By accessing or using our services, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
                </p>

                  <h3>1. User Responsibilities</h3>
                  <p>1.1 <b>Account Registration:</b> To access certain services, you may be required to create an account. You are responsible for providing accurate and complete information during registration.</p>
                  <p>1.2 <b>Security</b>: You are responsible for maintaining the security of your account credentials. Notify us immediately of any unauthorized access or use of your account.</p>
                  <p>1.3 <b>Compliance</b>: Users must comply with all applicable laws and regulations when using our services.</p>

                  <h3>2. Use of Services</h3>
                  <p>2.1 Authorized Use: Our services are intended for your personal or business use, in compliance with these Terms.</p>
                  <p>2.2 Prohibited Conduct: Users must not engage in any unlawful or prohibited activities, including but not limited to unauthorized access, distribution of malware, or violation of third-party terms.</p>
                  <p>2.3 Integration with Third-Party Tools: If our services integrate with third-party tools, you agree to comply with the terms and policies of those providers.</p>

                  <h3>3. Data Handling and Privacy</h3>
                  <p>3.1 Information Collection: We collect and handle user data in accordance with our Privacy Policy. By using our services, you consent to the collection and use of your information as outlined in the Privacy Policy.</p>
                  <p>3.2 No-Logging Policy: Cyntax Inc. adheres to a strict no-logging policy, ensuring user activities are not tracked or stored.</p>

                  <h3>4. Intellectual Property</h3>
                  <p>4.1 Ownership: Cyntax Inc. retains ownership of all intellectual property associated with our services. Users may not reproduce, modify, or distribute any content without prior authorization.</p>

                  <h3>5. Service Availability</h3>
                  <p>5.1 Downtime: While we strive for continuous service availability, downtime may occur for maintenance or unforeseen circumstances. We will make reasonable efforts to notify users in advance.</p>

                  <h3>6. Termination</h3>
                  <p>6.1 Termination by Users: Users may terminate their account at any time.</p>
                  <p>6.2 Termination by Cyntax Inc.: We reserve the right to terminate accounts for violations of these Terms or any unlawful activities.</p>

                  <h3>7. Changes to Terms</h3>
                  <p>7.1 Updates: We may update these Terms from time to time. Users will be notified of significant changes. Continued use of our services after such changes constitutes acceptance of the revised Terms.</p>

                  <h3>8. Changes to Terms</h3>
                  <p>For any questions or concerns regarding these Terms of Service, please contact us at [policy@cyntax.org].</p>

                  <p>Thank you for choosing Cyntax Inc.</p>

                  <p><i>These Terms of Service are effective as of the last updated date indicated above.</i></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
