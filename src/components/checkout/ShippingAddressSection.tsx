import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { CheckoutFormData } from "../../types";
import CheckoutSection from "./CheckoutSection";
import CheckoutField from "./CheckoutField";

type Props = {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
};

export default function ShippingAddressSection({ register, errors }: Props) {
  return (
    <CheckoutSection title="Shipping Address">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <CheckoutField
            id="address"
            label="Street Address"
            placeholder="House #, Road #, Area"
            error={errors.address?.message}
            registration={register("address", { required: "Street address is required" })}
          />
        </div>
        <CheckoutField
          id="city"
          label="City"
          placeholder="Dhaka"
          error={errors.city?.message}
          registration={register("city", { required: "City is required" })}
        />
        <CheckoutField
          id="district"
          label="District"
          placeholder="Dhaka"
          error={errors.district?.message}
          registration={register("district", { required: "District is required" })}
        />
        <CheckoutField
          id="postalCode"
          label="Postal Code"
          placeholder="1200"
          error={errors.postalCode?.message}
          registration={register("postalCode", { required: "Postal code is required" })}
        />
        <CheckoutField
          id="country"
          label="Country"
          placeholder="Bangladesh"
          error={errors.country?.message}
          registration={register("country", { required: "Country is required" })}
        />
      </div>
    </CheckoutSection>
  );
}
