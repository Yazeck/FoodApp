import { Menu} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-3xl text-orange-500" />

            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    <span>Bienvenidos a AppITZFood.com</span>

                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-orange-500">Login</Button>
                </SheetDescription>
            </SheetContent>

        </Sheet>
    )
}