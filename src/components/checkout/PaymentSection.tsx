import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { CheckoutFormData, PaymentMethod } from "../../types";
import { BsCreditCard2Front, BsPhone, BsCashCoin } from "react-icons/bs";
import CheckoutSection from "./CheckoutSection";
import CheckoutField from "./CheckoutField";
import PaymentOption from "./PaymentOption";

type Props = {
  payment: PaymentMethod;
  onPaymentChange: (method: PaymentMethod) => void;
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
};

type FieldProps = Pick<Props, "register" | "errors" | "payment">;

function CardFields({ register, errors, payment }: FieldProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4 border-l-2 border-gray-900 ml-5">
      <div className="sm:col-span-2">
        <CheckoutField
          id="cardNumber"
          label="Card Number"
          placeholder="0000 0000 0000 0000"
          error={errors.cardNumber?.message}
          registration={register("cardNumber", {
            validate: (val) => {
              if (payment !== "card") return true;
              if (!val?.trim()) return "Card number is required";
              if (val.replace(/\s/g, "").length !== 16) return "Must be 16 digits";
              return true;
            },
          })}
        />
      </div>
      <CheckoutField
        id="cardName"
        label="Name on Card"
        placeholder="IMRAN HASAN"
        error={errors.cardName?.message}
        registration={register("cardName", {
          validate: (val) => payment !== "card" || !!val?.trim() || "Name on card is required",
        })}
      />
      <div className="grid grid-cols-2 gap-4">
        <CheckoutField
          id="expiry"
          label="Expiry"
          placeholder="MM/YY"
          error={errors.expiry?.message}
          registration={register("expiry", {
            validate: (val) => {
              if (payment !== "card") return true;
              if (!val?.trim()) return "Expiry is required";
              if (!/^\d{2}\/\d{2}$/.test(val)) return "Use MM/YY format";
              return true;
            },
          })}
        />
        <CheckoutField
          id="cvv"
          label="CVV"
          placeholder="•••"
          error={errors.cvv?.message}
          registration={register("cvv", {
            validate: (val) => {
              if (payment !== "card") return true;
              if (!val?.trim()) return "CVV is required";
              if (!/^\d{3,4}$/.test(val)) return "Must be 3–4 digits";
              return true;
            },
          })}
        />
      </div>
    </div>
  );
}

function MobileFields({ register, errors, payment }: FieldProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4 border-l-2 border-gray-900 ml-5">
      <div>
        <label className="font-inter text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
          Provider
        </label>
        <select className="w-full h-11 px-4 rounded-xl border border-gray-200 font-inter text-sm text-gray-700 outline-none focus:border-gray-400 bg-white">
          <option>bKash</option>
          <option>Nagad</option>
          <option>Rocket</option>
        </select>
      </div>
      <CheckoutField
        id="mobileNumber"
        label="Mobile Number"
        placeholder="+880 1X00 000000"
        type="tel"
        error={errors.mobileNumber?.message}
        registration={register("mobileNumber", {
          validate: (val) => payment !== "mobile" || !!val?.trim() || "Mobile number is required",
        })}
      />
    </div>
  );
}

export default function PaymentSection({ payment, onPaymentChange, register, errors }: Props) {
  return (
    <CheckoutSection title="Payment Method">
      <div className="flex flex-col gap-3">
        <PaymentOption
          id="card"
          active={payment === "card"}
          icon={<BsCreditCard2Front size={18} />}
          label="Credit / Debit Card"
          onSelect={() => onPaymentChange("card")}
        />
        {payment === "card" && <CardFields register={register} errors={errors} payment={payment} />}

        <PaymentOption
          id="mobile"
          active={payment === "mobile"}
          icon={<BsPhone size={18} />}
          label="Mobile Banking"
          sublabel="bKash · Nagad · Rocket"
          onSelect={() => onPaymentChange("mobile")}
        />
        {payment === "mobile" && <MobileFields register={register} errors={errors} payment={payment} />}

        <PaymentOption
          id="cod"
          active={payment === "cod"}
          icon={<BsCashCoin size={18} />}
          label="Cash on Delivery"
          sublabel="Pay when you receive"
          onSelect={() => onPaymentChange("cod")}
        />
        {payment === "cod" && (
          <p className="pl-9 font-inter text-sm text-gray-400">
            Our delivery agent will collect payment at your doorstep.
          </p>
        )}
      </div>
    </CheckoutSection>
  );
}
