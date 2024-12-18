import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return (
        <Card className=" border-l-0 border-r-0">
            <CardContent className="px-5 py-4 justify-between flex flex-row">
                <Image src="/logo.svg" alt="Logo da barbearia" width={130} height={22}/>
                <Button variant="outline" size="icon">
                    <MenuIcon size={18}/>
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;