import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-sm text-amber-600 mt-2">This is a placeholder. Final content requires client/legal approval.</p>
        </div>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-8 prose prose-gray max-w-none">
            <h2>Information We Collect</h2>
            <p>
              When you contact us through our contact form, we collect the information you provide
              (name, email address, phone number, subject, and message). This information is used
              solely to respond to your inquiry.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              The information you submit is stored securely and used only for the purpose of
              responding to your inquiry. We do not sell, trade, or share your personal information
              with third parties for marketing purposes.
            </p>

            <h2>Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information. However, no method
              of transmission over the internet is 100% secure.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@metmmapharmacy.com">info@metmmapharmacy.com</a>.
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
