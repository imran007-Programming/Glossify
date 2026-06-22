import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCart } from "../hooks/useCart";
import { toast } from "sonner";
import Button from "../components/ui/Button";
import OrderSuccess from "../components/checkout/OrderSuccess";
import CustomerInfoSection from "../components/checkout/CustomerInfoSection";
import ShippingAddressSection from "../components/checkout/ShippingAddressSection";
import PaymentSection from "../components/checkout/PaymentSection";
import OrderSummary from "../components/checkout/OrderSummary";
import BreadCrumb from "../components/layout/Breadcrumb";
import type { CheckoutFormData, PaymentMethod } from "../types";

const SHIPPING_FEE = 60;
const FREE_SHIPPING_CRITERIA = 1500;

export default function CheckoutPage() {
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const [payment, setPayment] = useState<PaymentMethod>("card");
  const [placed, setPlaced] = useState(false);

  const shipping = totalPrice >= FREE_SHIPPING_CRITERIA ? 0 : SHIPPING_FEE;
  const grandTotal = totalPrice + shipping;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const onSubmit = () => {
    clearCart();
    setPlaced(true);
    toast.success("🎉 Order placed! Thank you for shopping with us.");
  };

  if (items.length === 0 && !placed) {
    return (
      <div className="section">
        <div className="section-wrap py-24 text-center">
          <h2 className="font-abigeta text-3xl text-gray-900">
            Nothing to checkout
          </h2>
          <p className="font-inter text-gray-400 mt-2 mb-6">
            Add some products to your cart first.
          </p>
          <Link to="/">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (placed) return <OrderSuccess />;

  return (
    <div>
      <BreadCrumb
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Cart", to: "/cart" },
          { label: "Checkout" },
        ]}
        title="Checkout"
        subtitle={`${totalItems} ${totalItems === 1 ? "item" : "items"}`}
      />
      <div className="section">
        <div className="section-wrap py-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1 flex flex-col gap-6">
                <CustomerInfoSection register={register} errors={errors} />
                <ShippingAddressSection register={register} errors={errors} />
                <PaymentSection
                  payment={payment}
                  onPaymentChange={setPayment}
                  register={register}
                  errors={errors}
                />
              </div>

              <OrderSummary
                items={items}
                totalItems={totalItems}
                totalPrice={totalPrice}
                shipping={shipping}
                grandTotal={grandTotal}
                freeShippingThreshold={FREE_SHIPPING_CRITERIA}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
