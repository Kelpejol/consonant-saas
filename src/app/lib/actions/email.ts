"use server";

import { auth } from "@/auth";
import { sendWelcomeEmail } from "@/lib/email";
import { revalidatePath } from "next/cache";

export async function sendTestEmailAction() {
    const session = await auth();
    if (!session?.user?.email) {
        throw new Error("Unauthorized");
    }

    const result = await sendWelcomeEmail(
        session.user.email,
        session.user.name || "Founder"
    );

    if (result.success) {
        return { success: true, simulated: result.simulated };
    } else {
        return { success: false, error: "Failed to send email" };
    }
}
