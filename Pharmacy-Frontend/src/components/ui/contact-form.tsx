import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useLoading } from "@/hooks/use-loading";
import { useFormValidation } from "@/hooks/use-form-validation";
import { contactFormRules } from "@/lib/validation";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const ContactForm = () => {
  const { startLoading, stopLoading } = useLoading();
  const { data, errors, setFieldValue, validate, reset, getFieldError } =
    useFormValidation(initialData, contactFormRules);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFieldValue(name as keyof ContactFormData, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validate()) {
      toast.error("Validation Error", {
        description: "Please fix the errors in the form",
      });
      return;
    }

    startLoading("Sending your message...");

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message Sent!", {
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Error", {
        description: "Failed to send your message. Please try again.",
      });
      console.error("Form submission error:", error);
    } finally {
      stopLoading();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
      {/* Name Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <Input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="John Doe"
          className={`w-full ${getFieldError("name") ? "border-red-500" : ""}`}
        />
        {getFieldError("name") && (
          <p className="text-sm text-red-500 mt-1">{getFieldError("name")}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <Input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={`w-full ${getFieldError("email") ? "border-red-500" : ""}`}
        />
        {getFieldError("email") && (
          <p className="text-sm text-red-500 mt-1">{getFieldError("email")}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <Input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          placeholder="+265 994 399 885"
          className={`w-full ${getFieldError("phone") ? "border-red-500" : ""}`}
        />
        {getFieldError("phone") && (
          <p className="text-sm text-red-500 mt-1">{getFieldError("phone")}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <Textarea
          name="message"
          value={data.message}
          onChange={handleChange}
          placeholder="Your message here..."
          rows={4}
          className={`w-full ${getFieldError("message") ? "border-red-500" : ""}`}
        />
        {getFieldError("message") && (
          <p className="text-sm text-red-500 mt-1">
            {getFieldError("message")}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white"
      >
        Send Message
      </Button>
    </form>
  );
};
