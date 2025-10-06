import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const url = "https://boringapi.com/api/v1/photos"

export default async function Home() {
  const r = await fetch(url)
  const data = await r.json()

  const photoUrls: string[] = []

  for (let i = 0; i < data.photos.length; i++){
    
    photoUrls.push(data.photos[i].url)
    
  }

  console.log(photoUrls)

  const Carousel = () => {
    return(
      <div>
      <Carousel>
        <div>
        {
          photoUrls.map((x,i)=>(
            <Image alt={x} key={i} src={x} width={800} height={800} style={{objectFit: "cover"}}/>
          )
        )
        }
        </div>

      </Carousel>
      </div>
    )
  }
 
  return (
    <main>
      <div>
        <Carousel>
          
        {
          photoUrls.map((x,i)=>(
            <Image alt={x} key={i} src={x} width={800} height={800} style={{objectFit: "cover"}}/>
          )
        )
        }
        </Carousel>

      </div>
    </main>
  );
}
