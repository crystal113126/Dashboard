import React from "react";

export default function Footbar() {
    const currentYear = new Date().getFullYear()
    return (
    <footer>
        <p> copyright © {currentYear} BrandPlus </p>
    </footer>
    )

}