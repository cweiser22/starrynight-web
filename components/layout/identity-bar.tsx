import {Card, CardContent} from "@/components/ui/card";
import {DropdownMenu} from "@/components/ui/dropdown-menu";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import Spacer from "@/components/layout/spacer";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import NewIdentityForm from "@/components/identity/new-identity-form";
import {listIdentites} from "@/app/actions";
import SelectIdentity from "@/components/identity/select-identity";


export default async function IdentityBar() {


    return (
        <Card className={"w-full h-full"}>
            <CardContent>
                <div className={"max-w-xl mx-auto flex flex-row items-center justify-center"}>
                    <SelectIdentity/>
                    <Spacer/>
                    <Dialog>
                        <DialogTrigger>

                                Create

                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Create a new identity</DialogTitle>
                                <DialogContent>
                                    <NewIdentityForm/>
                                </DialogContent>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </CardContent>
        </Card>
    )
}