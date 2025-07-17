'use client';

import {Card, CardContent} from "@/components/ui/card";
import {DropdownMenu} from "@/components/ui/dropdown-menu";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import Spacer from "@/components/layout/spacer";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import NewIdentityForm from "@/components/identity/NewIdentityForm";

export default function IdentityBar() {

    return (
        <Card className={"w-full h-full"}>
            <CardContent>
                <div className={"max-w-xl mx-auto flex flex-row items-center justify-center"}>
                    <Select>
                        <SelectTrigger className="w-[180px] p-6">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                    <Spacer/>
                    <Dialog>
                        <DialogTrigger>

                                Create

                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Create a new identity</DialogTitle>
                                <DialogDescription>
                                    <NewIdentityForm/>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>

                </div>
            </CardContent>
        </Card>
    )
}