import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://wallpaperbat.com/down/137577-amazons-new-kindle-app-adds-a-light-theme-and-deeper-goodreads" 
            alt="">
            </img>
                        
            {/*Product id, title, price, rating, image {properties or props} */}
           <div className="home__row">               
                <Product 
                id="12345"
                title="The lean Startup: How Constant Innovation Creates"
                price={11.96}
                rating={1}
                image="https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/Don-Quixote-cover.jpg?resize=500,766&quality=82&strip=all"            
                >                
                </Product>
           
                <Product 
                id="19995"
                title="Iphone is mad down here "
                price={400}
                rating={2}
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-xr-blue-gallery-2020?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1578943280133"            
                >                
                </Product>
           </div>
           <div className="home__row">               
                <Product 
                id="00011"
                title="Ipad is lit here"
                price={500.99}
                rating={1}
                image="https://images.immediate.co.uk/production/volatile/sites/3/2021/06/iPad-Pro-with-Apple-Pencil-on-top-bd42e70.jpg?webp=true&quality=90&resize=408%2C271"            
                >                
                </Product>

                <Product 
                id="19995"
                title="The lean Startup: How Constant Innovation Creates"
                price={11.96}
                rating={1}
                image="https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/Don-Quixote-cover.jpg?resize=500,766&quality=82&strip=all"            
                >                
                </Product>

                <Product 
                id="19995"
                title="The lean Startup: How Constant Innovation Creates"
                price={11.96}
                rating={1}
                image="https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/Don-Quixote-cover.jpg?resize=500,766&quality=82&strip=all"            
                >                
                </Product>

           </div>
           
           

            {/*Product id */}



        </div>
    )
}

export default Home
