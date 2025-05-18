
import { LucideIcon } from "lucide-react";

interface BenefitItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const BenefitItem = ({ icon: Icon, title, description, bgColor, iconColor }: BenefitItemProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm">
      <div className={`h-10 w-10 rounded-full ${bgColor} flex items-center justify-center mb-4`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default BenefitItem;
