"use client"
import *as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Server name is required"
    }),
    imageUrl: z.string().min(1, {
        message: "Image url is required"
    })
});



export const InitialModal = () => {
    const form = useForm({

        defaultValues: {
            name: "",
            imageUrl: ""
        }
    });
    return (
        <Dialog open={true}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle>
                        Customize your Server Profile
                    </DialogTitle>
                    <DialogDescription className="text-2xl text-center text-zinc-500">
                        you can give some Creative thought to the server how you like
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}