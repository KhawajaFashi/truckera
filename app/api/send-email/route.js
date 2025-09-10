export const runtime = "nodejs"; // <-- important

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { firstName, lastName, email, company, fleetSize } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'fashi449623@gmail.com', // use env instead of hardcoding
                pass: 'smcz eeyr oxzz rdgv', // app password
            },
        });

        const mailOptions = {
            from: 'fashi449623@gmail.com',
            to: "ammar449623@gmail.com",
            subject: "New Truck Dispatch Request",
            text: `New customer request:\n\n
        Name: ${firstName} ${lastName}
        Email: ${email}
        Company Name: ${company}
        Fleet Size: ${fleetSize}
        `,
        };


        console.log("Mail Options:", mailOptions);

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
