import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { CheckoutFormData } from "../../types";
import CheckoutSection from "./CheckoutSection";
import CheckoutField from "./CheckoutField";

type Props = {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
};

export default function CustomerInfoSection({ register, errors }: Props) {
  return (
    <CheckoutSection title="Customer Information">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CheckoutField
          id="fullName"
          label="Full Name"
          placeholder="Imran Hasan"
          error={errors.fullName?.message}
          registration={register("fullName", { required: "Full name is required" })}
        />
        <CheckoutField
          id="email"
          label="Email Address"
          placeholder="you@email.com"
          type="email"
          error={errors.email?.message}
          registration={register("email", {
            required: "Email is required",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
          })}
        />
        <CheckoutField
          id="phone"
          label="Phone Number"
          placeholder="+880 1X00 000000"
          type="tel"
          error={errors.phone?.message}
          registration={register("phone", { required: "Phone number is required" })}
        />
      </div>
    </CheckoutSection>
  );
}
