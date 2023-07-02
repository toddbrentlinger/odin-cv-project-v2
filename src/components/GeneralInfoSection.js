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
        url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.18172-8/24883563_474515209616195_175625574350703270_o.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=111&ccb=1-7&_nc_sid=8024bb&_nc_ohc=iXYv1CfC8O4AX9wJ59L&_nc_ht=scontent-sjc3-1.xx&oh=00_AfAMPdHJXyHK5IqWa3gIcSESr51SwqZmRMBlOBx__RfKHA&oe=64AECB4C",
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
