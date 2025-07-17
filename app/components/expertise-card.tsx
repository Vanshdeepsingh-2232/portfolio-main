import { Card, CardContent } from "@/components/ui/card";

interface ExpertiseCardProps {
  title: string;
  description: string;
}

export default function ExpertiseCard({ title, description }: ExpertiseCardProps) {
  return (
    <Card className="bg-white/5 dark:bg-black/5 backdrop-blur-lg border border-white/10 dark:border-black/10 p-6 rounded-lg text-center">
      <CardContent>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
