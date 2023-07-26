import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import Thumbnail from "./Thumbnail";

function GeneralInfoSection() {
    const [name, setName] = useState("Indiana Jones");
    const [title, setTitle] = useState("Archaeologist-Adventurer");
    const [email, setEmail] = useState("henryjonesjr@princeton.edu");
    const [phone, setPhone] = useState("(609) 258-0103");
    const [location, setLocation] = useState("Princeton, New Jersey");
    const [thumbnail, setThumbnail] = useState({
        url: "https://theenchantedmanor.com/wp-content/uploads/2016/06/Professor-Henry-Jones-Jr.jpg",
        size: 110,
        posX: 0,
        posY: 0,
    });

    const handleEditSubmit = (e) => {
        e.preventDefault();

        setName(e.target.elements.name.value);
        setTitle(e.target.elements.title.value);
        setEmail(e.target.elements.email.value);
        setPhone(e.target.elements.phone.value);
        setLocation(e.target.elements.location.value);
    };

    const handleThumbnailEditSubmit = (e) => {
        e.preventDefault();

        setThumbnail({
            url: e.target.elements.imageUrl.value,
            size: Number(e.target.elements.size.value),
            posX: Number(e.target.elements.posX.value),
            posY: Number(e.target.elements.posY.value),
        });
    };

    return (
        <article id="general-info-section">
            <Thumbnail
                imageUrl={thumbnail.url}
                size={thumbnail.size}
                posX={thumbnail.posX}
                posY={thumbnail.posY}
                handleEditSubmit={handleThumbnailEditSubmit}
            />
            <GeneralInfo
                name={name}
                title={title}
                email={email}
                phone={phone}
                location={location}
                handleEditSubmit={handleEditSubmit}
            />
        </article>
    );
}

export default GeneralInfoSection;
