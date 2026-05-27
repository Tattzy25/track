import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Card className="w-full py-[1px]">
      <CardContent className="text-base flex items-center gap-2">
        <Button className="h-auto flex-col gap-[2px] text-[16px] [&>span]:leading-none" style={{paddingTop:"2px",paddingBottom:"2px"}}>
          <span>REQUEST</span>
          <span>BALANCE</span>
        </Button>
        <span className={`text-[32px] ${parseFloat("0000") < 0 ? "text-red-500" : ""}`}>0000</span>
      </CardContent>
    </Card>
  );
}
