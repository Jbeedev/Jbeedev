import HeaderBg from "../HeaderBg"
import PostImg1 from "../assets/News/news-10.jpg" 
import PostImg2 from "../assets/News/admin-1.png" 
import PostImg3 from "../assets/News/post-1.jpg" 
import PostImg4 from "../assets/News/post-2.jpg" 
import PostImg5 from "../assets/News/post-3.jpg" 
import PostImg6 from "../assets/News/admin-1.png" 



const Post = () => {
    return (
        <div>

            <HeaderBg />

            <section class="swan_sidebar-page-container" id="blogarea">
                <div class="swan_auto-container">
                    <div class="row clearfix">
                        <div class="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div class="blog-standard-content">
                                {/* <!-- Main Posts --> */}
                                <div class="swan_news-block wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div class="inner-box">
                                        <figure class="image-box">
                                            <a href="blog-details.html"><img src={PostImg1} alt="" /></a>
                                            <div class="post-date">
                                                <h4>31</h4>
                                                <p>AUG</p>
                                            </div>
                                        </figure>
                                        <div class="lower-content blog-details-content">
                                            <ul class="post-info clearfix">
                                                <li><i class="far fa-folder-open"></i>Human Resource</li>
                                                <li><i class="far fa-comments"></i><a href="blog-details.html">02 Comments</a></li>
                                            </ul>
                                            <h2><a href="blog-details.html">Get few solutions to hire a best candidate</a></h2>
                                            <div class="text">
                                                <p>There are not many of passages of lorem ipsum available alteration in some form. Donec scelerisque dolor id nunc dictum, interdum gravida.Donec scelerisque dolor id nunc dictum, interdum gravida mauris rhoncus. Aliquam at ultrices nunc. In sem leo, fermentum at lorem in, porta finibus mauris. Lorem ipsum dolor sit amet, conse ctetur adipisicing elit sed do eiusm od tempor ut labore. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctornisi elit consequat ipsum. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc					     rambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and
                            type setting Ipsum Take a look at our round up of the best shows coming soon to your telly box has been the is industrys. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has industr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of.</p>
                                            </div>
                                            <div class="post-share-option clearfix">
                                                <ul class="post-tags pull-left clearfix">
                                                    <li><h4>Tags</h4></li>
                                                    <li><a href="blog-details.html">Recruitment</a></li>
                                                    <li><a href="blog-details.html">Stuffing</a></li>
                                                </ul>
                                                <ul class="social-links pull-right clearfix">
                                                    <li><a href="blog-details.html"><i class="fab fa-facebook-square"></i></a></li>
                                                    <li><a href="blog-details.html"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="blog-details.html"><i class="fab fa-pinterest-p"></i></a></li>
                                                    <li><a href="blog-details.html"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog_comment-wrapper">
                                    <h4 class="capitalize">Comment</h4>
                                    <p class="blog-reply"><a href="#reply">Leave a reply <i
                                                class="fa fa-arrow-to-right"></i></a></p>
                                    <br />
                                    <div class="comment">
                                        <div class="container">
                                            <div class="row shadow p-4">
                                                <div class="col-2">
                                                    <img class="image-fluid" src={PostImg6} alt="" />
                                                </div>
                                                <div class="col-9">
                                                    <p class="cl">Ellen</p>
                                                    <small>25-04-2011 at <span class="time">11:03</span></small>
                                                    <br />
                                                    <p>This is a comment, I hope you like thi comment area, it is about comments
                                                        and gravatars :-)</p>
                                                    <br />
                                                    <p class="blog-reply"><a href="#reply">Reply</a></p>
                                                </div>
                                                <hr />
                                                {/* <!-- reply --> */}
                                                <div class="row comment-mr-5 border-left mb-3 ml-5">
                                                    <hr class="bg-secondary" />
                                                    <div class="col-2">
                                                        <img class="image-fluid" src={PostImg2} alt="" />
                                                    </div>
                                                    <div class="col-9">
                                                        <p class="cl">John</p>
                                                        <small>25-04-2011 at <span class="time">11:03</span></small>
                                                        <br />
                                                        <p> Hi ellen, <br /> This is a comment, I hope you like thi comment area,
                                                            it is about comments and gravatars :-)</p>
                                                        <br />
                                                        <p class="blog-reply"><a href="#reply">Reply</a></p>
                                                    </div>
                                                </div>
                                                <div class="comment-form bg-grey shadow w-75 m-auto p-3">
                                                    <form action="" id="reply">
                                                        <h4>Leave a reply</h4>
                                                        <small>Required fields are marked <span
                                                                class="text-danger">*</span></small>
                                                        <br />
                                                        <label>Name <span class="text-danger">*</span></label>
                                                        <input type="text" class=" form-control" required />
                                                        <br />
                                                        <label for="">Email <span class="text-danger">*</span></label>
                                                        <input type="email" required class="form-control" />
                                                        <br />
                                                        <label for="">Message <span class="text-danger">*</span></label>
                                                        <textarea name="" required class=" form-control" id="" cols="20"
                                                            rows="10"></textarea>
                                                        <br />
                                                        <input type="submit" value="Post comment"
                                                            class="blog-btn-submit hvr-bounce-to-right text-uppercase" />
                                                    </form>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div class="blog-sidebar">
                                <div class="sidebar-search">
                                    <form action="#" method="post" class="search-form">
                                        <div class="form-group">
                                            <input type="search" name="search-field" placeholder="Search" required="" />
                                            <button type="submit"><i class="flaticon-magnifying-glass"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div class="sidebar-widget sidebar-post">
                                    <div class="widget-title">
                                        <h4>Recent Posts</h4>
                                    </div>
                                    <div class="post-inner">
                                        <div class="post">
                                            <figure class="post-thumb"><a href="post.html"><img src={PostImg3} alt="" /></a></figure>
                                            <span class="post-date">20 Aug, 2020</span>
                                            <h6><a href="post.html">Hire easily HR candidate in few seconds</a></h6>
                                        </div>
                                        <div class="post">
                                            <figure class="post-thumb"><a href="post.html"><img src={PostImg4} alt="" /></a></figure>
                                            <span class="post-date">19 Aug, 2020</span>
                                            <h6><a href="post.html">Get few solutions to hire a best candidate</a></h6>
                                        </div>
                                        <div class="post">
                                            <figure class="post-thumb"><a href="post.html"><img src={PostImg5} alt="" /></a></figure>
                                            <span class="post-date">18 Aug, 2020</span>
                                            <h6><a href="post.html">We’re building a new business world</a></h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="sidebar-widget category-widget">
                                    <div class="widget-title">
                                        <h4>Categories</h4>
                                    </div>
                                    <div class="widget-content">
                                        <ul class="category-list clearfix">
                                            <li><a href="post.html">Recruitment</a></li>
                                            <li><a href="post.html">Stuffing Solutions</a></li>
                                            <li><a href="post.html">Improving Resources</a></li>
                                            <li><a href="post.html">Hiring Staff</a></li>
                                            <li><a href="post.html">Business Marketing</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="sidebar-widget tags-widget">
                                    <div class="widget-title">
                                        <h4>Popular Tags</h4>
                                    </div>
                                    <div class="widget-content">
                                        <ul class="tags-list clearfix">
                                            <li><a href="post.html">Recruitment</a></li>
                                            <li><a href="post.html">Stuffing</a></li>
                                            <li><a href="post.html">Business</a></li>
                                            <li><a href="post.html">Solutions</a></li>
                                            <li><a href="post.html">Technology</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
 
export default Post;