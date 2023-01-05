import React from "react";
import { useRouter } from 'next/router'

export default function EarthPage() {
    const routerNext = useRouter()
    return (
        <>
            <p> Hello! </p>
            <button type="button" onClick={() => routerNext.push('/about')}>
                Click me
            </button>
        </>
    )
}