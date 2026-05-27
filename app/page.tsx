import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Card className="w-full pb-1">
      <CardHeader>
        <CardTitle>Request Balance</CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <Button className="h-[18px] text-[16px]">REQUEST</Button>
      </CardContent>
    </Card>
  );
}
