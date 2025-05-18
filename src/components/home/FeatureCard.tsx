
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

const FeatureCard = ({ icon: Icon, title, description, iconBgColor, iconColor }: FeatureCardProps) => {
  return (
    <Card className="card-hover">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className={`h-12 w-12 rounded-full ${iconBgColor} flex items-center justify-center mb-4`}>
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
