"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CustomInput } from "@/components/custom-input";

const contactFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  number: z.string(),
  purpose: z.string(),
  email: z.string(),
  message: z.string(),
});

type ProfileFormValues = z.infer<typeof contactFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {};

export function GetInTouchForm() {
  const { toast } = useToast();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    console.log("data", data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const samplePurpose = [
    "Feedbacks & Complaints",
    "Partners & Collaborations",
    "Enquiries",
  ];

  const { isValid } = form.formState;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full bg-white md:p-6"
      >
        <h3 className="text-3xl md:text-4xl font-bold">Get in touch with us</h3>

        <div className="flex-col md:flex-row flex w-full gap-6 md:gap-8">
          <CustomInput
            name="firstName"
            control={form.control}
            label="First Name"
            placeholder="First Name"
          />
          <CustomInput
            name="lastName"
            control={form.control}
            label="Last Name"
            placeholder="Last Name"
          />
        </div>

        <div className="flex-col md:flex-row flex w-full gap-6 md:gap-8">
          <div className="md:w-[50%]">
            <CustomInput
              name="number"
              control={form.control}
              label="Phone Number"
              placeholder="Phone"
            />
          </div>
          <FormField
            control={form.control}
            name="purpose"
            render={({ field }) => (
              <FormItem className="md:w-[50%]">
                <FormLabel className="text-[#51596c]">Purpose</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="h-[52px] px-7">
                    <SelectTrigger className="focus:outline-none focus:ring-transparent">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {samplePurpose.map((value, i) => (
                      <SelectItem key={i} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <CustomInput
          name="email"
          control={form.control}
          label="Email"
          placeholder="youremail@zabira.com"
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#51596c]">Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  className="px-7  placeholder:opacity-60 focus-visible:ring-[#e5e5e5] focus-visible:ring-offset-[#e5e5e5]"
                  placeholder="How would you like us to be of service?"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={!isValid}
          className="h-[52px] rounded-full bg-[#0083f8] text-white text-base"
        >
          Send Inquiry
        </Button>
      </form>
    </Form>
  );
}
