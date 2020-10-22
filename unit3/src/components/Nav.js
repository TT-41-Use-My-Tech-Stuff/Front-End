import React, { useState } from 'react'
import '../styles/matt.css'
import Navigation from './Navigation'

const initialOpen = false
const initialOnPage = true

export default function Nav() {

    const [isOpen, toggleOpen] = useState(initialOpen)
    const [onPage, setOnPage] = useState(initialOnPage)

    return (
        <div>
            <Navigation
            open={isOpen}
            page={onPage}
            />
        </div>
    )
}
