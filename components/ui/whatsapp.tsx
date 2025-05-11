'use client'

import { FloatingWhatsApp } from "react-floating-whatsapp";

function Whatsapp() {
    return ( <FloatingWhatsApp
        phoneNumber="94716730898"
        accountName="Tharu"
        allowEsc
        
        notification
        notificationSound
        darkMode
        avatar="/images/tharu-profile.png"
      /> );
}   

export default Whatsapp;

