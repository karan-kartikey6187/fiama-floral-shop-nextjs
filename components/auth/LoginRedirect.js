"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginRedirect({ children }) {
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const login = localStorage.getItem("login");

        if (login === "true") {
            setIsLoggedIn(true);
            router.replace("/account");
        } else {
            setLoading(false);
        }
    }, [router]);

    if (loading || isLoggedIn) {
        return null;
    }

    return children;
}