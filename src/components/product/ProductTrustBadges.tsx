import { BsShieldCheck, BsTruck, BsArrowCounterclockwise } from "react-icons/bs";

const badges = [
  { icon: <BsTruck size={16} />, label: "Free Delivery", sub: "Orders over ৳999" },
  { icon: <BsArrowCounterclockwise size={16} />, label: "Easy Returns", sub: "7-day return" },
  { icon: <BsShieldCheck size={16} />, label: "100% Genuine", sub: "Verified products" },
];

export default function ProductTrustBadges() {
  return (
    <div className="grid grid-cols-3 gap-3 pt-2 border-t border-gray-100">
      {badges.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-1.5 text-center p-3 rounded-xl bg-gray-50"
        >
          <span className="text-gray-600">{item.icon}</span>
          <span className="font-inter text-xs font-semibold text-gray-800">{item.label}</span>
          <span className="font-inter text-[10px] text-gray-400">{item.sub}</span>
        </div>
      ))}
    </div>
  );
}
