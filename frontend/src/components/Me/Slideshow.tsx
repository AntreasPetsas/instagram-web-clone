import { useMemo, useState } from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import { PostType } from "../../types/PostTypes";

const SlideShow = ({ images }: { images: Array<PostType> }) => {
  const [index, setIndex] = useState<number>(0);
  const [indicatorDisabledClass, setIndicatorDisabledClass] = useState<string>('disable-left')
  const imagesLen = useMemo(()=>{
    return images.length
  },[images]);

  
  const handleSelect = (selectedIndex: number) => {
    if(selectedIndex === imagesLen - 1)
      setIndicatorDisabledClass('disable-right');
    else if(selectedIndex === 0)
      setIndicatorDisabledClass('disable-left');
    else
      setIndicatorDisabledClass('disable-none');
    setIndex(selectedIndex);
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={indicatorDisabledClass}> 
      {images.map((image, mapIndex) => {
        return (
          <Carousel.Item 
            key={mapIndex}
            interval={120000}
          >
            <img
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
              src={image.media_url}
              width="500"
              height="500"
              alt="image"
            />
            <Carousel.Caption>
              <p>
                {image.caption}
              </p> 
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default SlideShow;
