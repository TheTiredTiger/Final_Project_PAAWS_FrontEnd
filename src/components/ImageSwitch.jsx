import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function ImageSwitcher({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const handleNext = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsFading(false);
        }, 500);
    };

    const handlePrevious = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            setIsFading(false);
        }, 500);
    };

    return (
        <div className="image-switcher">
            <Image
                src={images[currentIndex].image_url}
                fluid
                alt={`Image ${currentIndex + 1}`}
                className={isFading ? 'hidden' : ''}
            />
            {images.length > 1 && (
                <div className="image-controls mt-2">
                    <Button variant="secondary" onClick={handlePrevious}>
                        Previous
                    </Button>
                    <Button variant="secondary" onClick={handleNext}>
                        Next
                    </Button>
                </div>
            )}
        </div>
    );
}

export default ImageSwitcher;