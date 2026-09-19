"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {

    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        const login = localStorage.getItem("login");

        if (login === "true") {
            setIsLoggedIn(true);
        } else {
            router.replace("/signin");
        }

    }, [router]);

    if (!isLoggedIn) {
        return null;
    }

    return children;
}