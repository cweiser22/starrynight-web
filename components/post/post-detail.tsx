import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader
} from "@/components/ui/card";
import Spacer from "@/components/layout/spacer";
import {Button} from "@/components/ui/button";
import {MessageCircleIcon, MoreVertical} from "lucide-react";


interface Props{
    postPublicId: string;
}

export function PostDetail({postPublicId}: Props) {


    return (
        <Card>
            <CardHeader>
                <div className={"flex flex-row items-center space-x-2"}>
                    <img src={"https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Cooper+Weiser"} className={"w-6 h-6 aspect-square rounded-full"} alt={"Avatar"}/>
                    <CardDescription>posted by Anon5322</CardDescription>
                    <Spacer/>
                    <Button size={"icon"} className={"shadow-none text-black bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent"}>
                        <MoreVertical/>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <h3 className={"text-xl font-bold mb-2"}>Post Title Example</h3>
                <p className={"text-sm"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </CardContent>
            <CardFooter>
                <Button >
                    <MessageCircleIcon/>
                    Comments (12)
                </Button>
            </CardFooter>
        </Card>
    )
}