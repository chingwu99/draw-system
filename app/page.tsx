import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-3 md:p-10">
      <div className="grid md:grid-cols-2 items-start md:items-center  w-full  gap-4">
        <div className="col-span-1">
          <div className="max-w-full  w-full">
            <Label className="text-lg" htmlFor="lottery-key">
              抽獎時間（分鐘）
            </Label>

            <Input
              id="lottery-key"
              placeholder="請輸入抽獎時間（分鐘）"
              type="number"
              className=" my-2"
            />

            <Button className=" my-2">設定</Button>
          </div>

          <div className="flex flex-wrap items-center space-x-2 text-2xl max-w-full  w-full">
            <span className="font-semibold">開獎倒數時間還有：</span>
            <span className="font-semibold">00:42</span>
          </div>
        </div>
        <div className="col-span-1">
          <Card>
            <CardContent className="p-4 h-[400px] overflow-y-auto">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Alice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Bob</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Charlie</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">David</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Alice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Bob</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Charlie</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">David</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Alice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Bob</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Charlie</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">David</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Alice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Bob</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Charlie</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">David</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Alice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Bob</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Charlie</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">David</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Alice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Bob</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">Charlie</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 -translate-y-1" />
                  <span className="font-semibold">David</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
