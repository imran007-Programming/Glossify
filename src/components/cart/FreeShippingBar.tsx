import { BsTruck } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";

const THRESHOLD = 1500;

export default function FreeShippingBar({ total }: { total: number }) {
  const unlocked = total >= THRESHOLD;
  const remaining = Math.max(0, THRESHOLD - total);
  const progress = Math.min(100, (total / THRESHOLD) * 100);

  return (
    <div
      className={`mx-5 my-3 rounded-2xl px-4 py-3 transition-colors duration-500 ${
        unlocked ? "bg-emerald-100" : "bg-blue-50"
      }`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {unlocked ? (
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
              <FiCheck size={11} className="text-white" strokeWidth={3} />
            </div>
          ) : (
            <BsTruck size={16} className="text-blue-500 shrink-0" />
          )}
          <p className="font-inter text-sm text-gray-700">
            {unlocked ? (
              <>
                You unlocked <strong>FREE shipping!</strong> 🎉
              </>
            ) : (
              <>
                Add{" "}
                <strong>৳{remaining.toLocaleString()}</strong> more for{" "}
                <strong>FREE shipping!</strong>
              </>
            )}
          </p>
        </div>

        <span
          className={`font-inter text-xs font-bold shrink-0 ml-3 ${
            unlocked ? "text-emerald-600" : "text-blue-500"
          }`}
        >
          {unlocked ? "FREE ✓" : `৳${THRESHOLD.toLocaleString()}`}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full rounded-full bg-white/60 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${
            unlocked
              ? "bg-gradient-to-r from-blue-500 to-emerald-400"
              : "bg-blue-500"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
