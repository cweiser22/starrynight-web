'use client'

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import useSWR from "swr";


const fetcher = (url: string | URL) => fetch(url).then((r) => r.json())


export default function SelectIdentity(){
    const { data, error, isLoading } = useSWR(
        `http://localhost:3000/api/identities`,
        fetcher
    );
    console.log(data)
return (
    <Select>
        <SelectTrigger className="w-[180px] p-6">
            <SelectValue placeholder="Browsing as ..." />
        </SelectTrigger>
        <SelectContent>

            {isLoading ? (<p>Loading...</p>) : data.map((identity) => (
                <SelectItem key={identity.publicId} value={identity.publicId}>{identity.displayName}</SelectItem>
            ))}

        </SelectContent>
    </Select>
)
}