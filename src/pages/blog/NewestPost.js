import { Link } from "react-router-dom"
import blogImg1 from '../../assets/img/blog/blog-details-2.jpg';


const NewestPost = () =>{
    return (
        <>

                          <div className="sidebar__widge-title-box">
                            <h3 className="sidebar__widget-title">Recent Post</h3>
                          </div>
                          <div className="sidebar__widget-content">
                            <div className="sidebar__post rc__post">
                              <div className="rc__post mb-20 d-flex">
                                <div className="rc__post-thumb mr-20">
                                  <Link to="/blog-details">
                                    <img src={blogImg1} alt="" />
                                  </Link>
                                </div>
                                <div className="rc__post-content">
                                  <h3 className="rc__post-title">
                                    <Link to="/blog-details">
                                      We play chimney pot Chip bonne.
                                    </Link>
                                  </h3>
                                  <div className="rc__meta">
                                    <span>4 March. 2022</span>
                                  </div>
                                </div>
                              </div>
                              <div className="rc__post mb-20 d-flex">
                                <div className="rc__post-thumb mr-20">
                                  <Link to="/blog-details">
                                    <img src={blogImg1} alt="" />
                                  </Link>
                                </div>
                                <div className="rc__post-content">
                                  <h3 className="rc__post-title">
                                    <Link to="/blog-details">
                                      We play chimney pot Chip bonne.
                                    </Link>
                                  </h3>
                                  <div className="rc__meta">
                                    <span>4 March. 2022</span>
                                  </div>
                                </div>
                              </div>
                              <div className="rc__post d-flex">
                                <div className="rc__post-thumb mr-20">
                                  <Link to="/blog-details">
                                    <img src={blogImg1} alt="" />
                                  </Link>
                                </div>
                                <div className="rc__post-content">
                                  <h3 className="rc__post-title">
                                    <Link to="/blog-details">
                                      We play chimney pot Chip bonne.
                                    </Link>
                                  </h3>
                                  <div className="rc__meta">
                                    <span>4 March. 2022</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </>
    )
}


export default NewestPost