
import React from 'react'
import { Carousel } from 'react-carousel-minimal';



export const About = () => {
    const data = [
        {
          image: "https://www.shutterstock.com/image-photo/cheerful-happy-woman-enjoying-shopping-260nw-1417347668.jpg",
          caption: "women shopping items"
        },
        {
          image: "https://media.gettyimages.com/id/1073935306/photo/girls-carrying-shopping-bags.jpg?s=612x612&w=gi&k=20&c=UH0AGnZDlFAS3LwbH13kQTCkoUuQYS1tZV9NwGnokY0=",
          caption: "shoppingggg"
        },
        {
          image: "https://img.freepik.com/photos-gratuite/jolie-jeune-femme-sexy-elegante-robe-luxe-rose-tendance-mode-estivale-style-chic-lunettes-soleil-fond-studio-bleu-shopping-tenant-sacs-papier-parler-au-telephone-mobile-accro-du-shopping_285396-2957.jpg?w=2000",
          caption: "styling wear"
        },
        {
          image: "https://st3.depositphotos.com/1158045/12792/i/950/depositphotos_127921320-stock-photo-woman-holding-a-shopping-bag.jpg",
          caption: "Dresses for women"
        },
        {
          image: "https://media.gettyimages.com/id/968906646/photo/young-woman-shopping-in-a-vintage-clothing-store.jpg?s=612x612&w=gi&k=20&c=ftFOuDSxGRS3us_xl8oE0r_BLkVqXW2MCz3M8P_RFqo=",
          caption: "Awesome fits for women"
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0v6DbdhjmPpT30cBU0GO4A2Xt7YPl9RePyg&usqp=CAU",
          caption: "western wear"
        },
        {
          image: "https://media.istockphoto.com/id/1131097418/photo/beautiful-woman-with-shopping-bags-in-the-city-sale-shopping-tourism-and-happy-people-concept.jpg?s=612x612&w=0&k=20&c=XzAFRIbtsDn4hRYNMyiNn88CuO76vqyKLFANzRzUBzE=",
          caption: "top products"
        },
        {
          image: "https://www.globalblue.com/business/images/article926851.ece/BINARY/TFS_Article_2019_970x643.jpg",
          caption: "Self made"
        },
        {
          image: "https://www.piramalrealty.com/blog/wp-content/uploads/2022/08/20220801-article-banner-01-1.jpg",
          caption: "Product items......"
        }
      ];
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
  return (
    <>
    <div>
    <Carousel
            data={data}
            time={2050}
            width="112.12rem"
            height="42.5rem"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100.87rem",
              maxHeight: "45rem",
              margin: "60px auto",
            }}
          />

<div style={{backgroundColor: 'palevioletred'}}>

    <h1 style={{color: '#253D4E', display: 'flex', justifyContent: 'center'}}>ABOUT SHOPPING CART PAGE </h1>
   <div style={{display:'flex', justifyContent: 'center'}}>
 <img src="https://img.freepik.com/free-photo/two-beautiful-women-shopping-town_1303-16426.jpg"/>
 </div>

  <h2>Most modern shopping carts are made of metal or a combination of metal and plastic and have been designed to nest within each other in a line to facilitate collecting and moving many at one time and also to save on storage space. The carts can come in many sizes, with larger ones able to carry a child. There are also specialized carts designed for two children, and electric mobility scooters with baskets designed for individuals with disabilities.

  In the United States, 24,000 children are injured each year in shopping carts.[2] Some stores both in the U.S. and internationally have child carrying carts that look like a car or van with a seat where a child can sit equipped with a steering wheel and sometimes a horn. Such "Car-Carts" may offer protection and convenience by keeping the child restrained, lower to the ground, protected from falling items, and amused.

  Shopping carts are usually fitted with four wheels, however if any one wheel jams the cart can become difficult to handle. Most carts in the United States have swivel wheels at the front, while the rear wheels are fixed in orientation, while in Europe it is more common to have four swivel wheels. This difference in design correlates with smaller retail premises in Europe. The front part of the cart is often sectioned off in order to place household goods such as bleach, cleaning products etc. so that they do not mix with edible products.

  An alternative to the shopping cart is a small hand-held shopping basket. A customer may prefer a basket for a small amount of merchandise. Small shops, where carts would be impractical, often supply only baskets, or may offer a small cart which uses an inserted shopping basket within the frame of the cart to provide either choice to a customer.</h2>

 </div>;



    </div>
    </>
  )
}
