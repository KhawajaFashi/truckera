export const runtime = "nodejs"; // <-- important

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { firstName, lastName, email, phone, truckType } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.sender_mail, // use env instead of hardcoding
                pass: process.env.sender_password, // app password
            },
        });

        const mailOptions = {
            from: process.env.sender_mail,
            to: process.env.reciever_email,
            subject: "New Truck Dispatch Request",
            text: `New customer request:\n\n
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone Number: ${phone}
        Truck Type: ${truckType}
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
