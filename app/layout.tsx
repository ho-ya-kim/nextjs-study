import Navigation from "../components/navigation";
import React from "react";
import {Metadata} from "next";
import "../styles/global.css";

export const metadata: Metadata = {
    title: {
        template: "%s | NextJS Study",
        default: "Loading...",
    },
    description: "Test Description"
}

export default function RootLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <html lang="en">
        <body>
        <div>
            <Navigation/>
            {children}
        </div>
        </body>
        </html>
    )
}
