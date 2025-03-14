import React, { useState } from "react";
import "../App.css";

const Slider = () => {
    const images = [
        "https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg",
        "https://static.vecteezy.com/system/resources/thumbnails/049/855/296/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg",
        "https://t4.ftcdn.net/jpg/04/39/89/01/360_F_439890152_sYbPxa1ANTSKcZuUsKzRAf9O7bJ1Tx5B.jpg",
        "https://wallpapers.com/images/featured/4k-nature-ztbad1qj8vdjqe0p.jpg",
        "https://img.freepik.com/free-photo/aerial-beautiful-shot-seashore-with-hills-background-sunset_181624-24143.jpg",
        "https://www.pixground.com/wp-content/uploads/2023/05/Windows-11-Abstract-Grey-Bloom-4K-Wallpaper-1081x608.jpg",
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg",
        "https://c4.wallpaperflare.com/wallpaper/12/1008/45/earth-4k-best-desktop-download-wallpaper-preview.jpg",
        "https://images.unsplash.com/photo-1461696114087-397271a7aedc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slider-container">
            <button className="slider-button left" onClick={handlePrev}>◀</button>
            <img src={images[currentIndex]} alt="slider" className="slider-image" />
            <button className="slider-button right" onClick={handleNext}>▶</button>
        </div>
    );
};

export default Slider;