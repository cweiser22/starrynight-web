import {Card, CardContent} from "@/components/ui/card";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


export default function AddComment(){
    return <Card>
        <CardContent>

                <form className="space-y-8">
                    <FormField render={({field}) => {
                        return <FormItem>
                            <FormLabel>Comment</FormLabel>
                            <FormControl>
                                <textarea className={"w-full h-24 p-2 border rounded"} {...field} />
                            </FormControl>
                            <FormDescription>Add a new comment</FormDescription>
                            <FormMessage />
                        </FormItem>
                    }} name={"body"}></FormField>
                </form>

        </CardContent>
    </Card>;
}