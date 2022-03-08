import { Link } from 'react-router-dom'
import Shape6 from './assets/Shapes/shape-6.png'
import Shape7 from './assets/Shapes/shape-7.png';
import BrandImg3 from './assets/Images/Printing-Services.png';

const HeaderBg = () => {
    return (
        <div>
            <section class="swanky_blog_banner centred" style={{backgroundImage: `url( ${ BrandImg3})` }}>
                <div class="auto-container">
                    <div class="inner-box color-overlay-blo">
                        <div class="text">
                            <div class="shape">
                                <div class="shape-1" style={{ backgroundImage: `url( ${Shape6} )` }}></div>
                                <div class="shape-2" style={{ backgroundImage: `url( ${Shape7} )` }}></div>
                            </div>
                            <h2 class="blog-h2 hvr-underline-from-center ">Welcome To TenPlus Blog</h2>
                            <p>Here you can read articles and get more information about Tech-related matters and lots more</p>
                        </div>
                        <div class="btn-box">
                            <Link to="" class="swan_btn">Explore <i class="fa fa-angle-double-down"></i> </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default HeaderBg;