'use client';

import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import { z } from "zod"
import {Button} from "@/components/ui/button";
import {createIdentity} from "@/app/actions";

const formSchema = z.object({
    displayName: z.string().min(8).max(30),
})


export default function NewIdentityForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            displayName: ''
        }
    });

    function handleSubmit(form: z.infer<typeof formSchema>) {
        console.log(form);
        createIdentity(form.displayName);
    }

    return (
        <div>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="displayName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Display Name</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn32323" {...field} />
                        </FormControl>
                        <FormDescription>This is your public display name.</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
                    <Button>
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
}