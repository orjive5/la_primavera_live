import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navSections } from "@/constants/navSections"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Separator } from "../ui/separator"

const SideDrawer = () => {

    return (
        <div className="block lg:hidden">
            <Sheet>
                <SheetTrigger>
                    <Menu className="w-6 h-6 xl:w-7 xl:h-7 text-black opacity-80 hover:opacity-100 cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="bg-[#fefbef] w-[200px] sm:w-[300px]">
                    <SheetHeader>
                        <SheetTitle className="text-base xl:text-lg">
                            La Primavera
                        </SheetTitle>
                        <Separator />
                        <SheetDescription>
                            {navSections.map(nav => (
                                <Link
                                    key={nav.title}
                                    href={nav.scrollTo}
                                    className="text-accent block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                    <SheetTrigger className="w-full p-3">
                                        <p className="sm:text-start w-full text-sm font-medium leading-none">
                                            {nav.title}
                                        </p>
                                    </SheetTrigger>
                                </Link>
                            ))}
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default SideDrawer;
