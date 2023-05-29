import React,{FunctionComponent} from 'react';
import { Link } from 'react-router-dom';
import '../style/accueil.css';
import Bouton from '../components/Bouton';
import Footer from '../components/footerbar';
import '../style/script-navbar';
// import React from 'react';
// import { BiBookAlt  } from "react-icons/bi";
// // import $ from "jquery";
//  import image2 from '../image/icons8-menu-48.svg'


const Accueil: FunctionComponent=()=>{
  
        // useEffect(() => {
        //   $(window).scroll(() => {
        //     const navbar = $(".navbar"); /* Sélectionne la navbar */
      
        //     if ($(window).scrollTop() > 50) { /* Si l'utilisateur a fait défiler la page de plus de 50 pixels */
        //       navbar.css("background-color", "red"); /* Change la couleur de fond de la navbar à rouge */
        //     } else {
        //       navbar.css("background-color", "blue"); /* Sinon, remet la couleur de fond initiale de la navbar */
        //     }
        //   });
        // }, []);
    
      
return(
    <div className='body'>
{/* <!DOCTYPE html> */}


    <nav className="navbar navbar-expand-lg  fixed-top" >
    <div className="container">
       
        <a className="navbar-brand" href="google.comh"><span className="text-warning"><strong style={{color:'#22a2e3'}}><span style={{fontSize:"180%", color:"#22a2e3"}}>C</span>LASS</strong></span><strong style={{color:'rgba(0, 0, 0, 0.5)'}}>WORK</strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="google.comnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-1   mb-lg-0" style={{marginRight:"-5%"}}>
              <li className=" nav-item">
                <a className=" nav-link" href="#home" ><span>Home</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about"><span>Cours</span> </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#evaluation"><span>Evaluations</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team"><span>Devoirs</span></a>
              </li>
              <li className="" style={{marginTop:"3%",marginLeft:"2%" , background:"none"}}>
                <Link to="/signin"><Bouton name="S'inscrire" /></Link>
              </li>
              <li className="" style={{marginTop:"3%",marginLeft:"2%"}}>
                <Link to="/login" ><Bouton name="Se connecter" /></Link>
              </li>
              {/* <li className="nav-item" style={{marginTop:"1%",marginLeft:"2%", width:"50px", height:"50%"}}>
              
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="280%" height="280%" fillRule="nonzero">
  <defs>
    <linearGradient x1="12.066" y1="0.066" x2="34.891" y2="22.891" gradientUnits="userSpaceOnUse" id="color-1">
      <stop offset="0.237" stopColor="#3bc9f3"></stop>
      <stop offset="0.85" stopColor="#22a2e3"></stop>
    </linearGradient>
    <linearGradient x1="12.066" y1="12.066" x2="34.891" y2="34.891" gradientUnits="userSpaceOnUse" id="color-2">
      <stop offset="0.237" stopColor="#3bc9f3"></stop>
      <stop offset="0.85" stopColor="#22a2e3"></stop>
    </linearGradient>
    <linearGradient x1="12.066" y1="24.066" x2="34.891" y2="46.891" gradientUnits="userSpaceOnUse" id="color-3">
      <stop offset="0.237" stopColor="#3bc9f3"></stop>
      <stop offset="0.85" stopColor="#22a2e3"></stop>
    </linearGradient>
  </defs>
  <g transform="">
    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
      <g transform="scale(5.33333,5.33333)">
        <path d="M43,15h-38c-1.1,0 -2,-0.9 -2,-2v-2c0,-1.1 0.9,-2 2,-2h38c1.1,0 2,0.9 2,2v2c0,1.1 -0.9,2 -2,2z" fill="url(#color-1)"></path>
        <path d="M43,27h-38c-1.1,0 -2,-0.9 -2,-2v-2c0,-1.1 0.9,-2 2,-2h38c1.1,0 2,0.9 2,2v2c0,1.1 -0.9,2 -2,2z" fill="url(#color-2)"></path>
        <path d="M43,39h-38c-1.1,0 -2,-0.9 -2,-2v-2c0,-1.1 0.9,-2 2,-2h38c1.1,0 2,0.9 2,2v2c0,1.1 -0.9,2 -2,2z" fill="url(#color-3)"></path>
      </g>
    </g>
  </g>
</svg>

              </li> */}
            </ul>
          </div>
        </div>
    </nav>

    {/* <!-- id home --> */}
    <section id="home" style={{paddingBottom:"40%", paddingTop:"0%"}}>
    
    {/* <!-- carousel --> */}
    <div  className="center body-1" >
     <div className='cover-img'>
     <div className='textCover container'>
        <h2 > Bienvenu chez classwork</h2>
        <p >“Nous sommes ravis de vous offrir une expérience de qualité qui répondra à toutes vos attentes.” <br/></p>
        <div  style={{width:"45%"}}>
           <Link to="/signin"> <Bouton name="S'inscrire gratuitement"/></Link>
        </div>
    </div>
       
    </div>
    

                                                                                                        {/* <div className="carousel-indicators">
                                                                                                        <button type="button" data-bs-target="google.comcarouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                                                                        <button type="button" data-bs-target="google.comcarouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                                                                        <button type="button" data-bs-target="google.comcarouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                                                                        </div> */}
                                                                                                        
                                                                                                    
                                                                                                        {/* <div className='img-style' style={{marginTop:"0px", zIndex:"0", height:"100%"}}>
                                                                                                            <img src={Image} className="d-block w-100 h-10" style={{height:"100%"}}alt="..." />
                                                                                                            
                                                                                                        </div> */}
                                                                                                        
                                                                                                        {/* <button className="carousel-control-prev" type="button" data-bs-target="google.comcarouselExampleIndicators" data-bs-slide="prev">
                                                                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                                                        <span className="visually-hidden">Previous</span>
                                                                                                        </button>
                                                                                                        <button className="carousel-control-next" type="button" data-bs-target="google.comcarouselExampleIndicators" data-bs-slide="next">
                                                                                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                                                        <span className="visually-hidden">Next</span>
                                                                                                        </button> */}
                                                                                                        
                                                                                                    
    </div>
    </section>
      {/* <div style={{height:"200px", width:"100%"}}></div>  */}
   
   
    {/* <!-- about section --> */}
    <section id="about" className="about  section-padding" style={{marginTop:"5%"}}>
        <div className="about-block container" style={{height:"320px"}} >
            <div className="row" >
                 <div className="col-lg-4 col-md-12 col-12 h-100" >
                    <div className="about-img" style={{paddingTop:"10%"}}>
                        {/* <div className='cover-img' style={{width:"100%", height:"100%", background:"black"}}/> */}
                        <img className="img-F img-fluid" style={{borderRadius:"5%", width:"100%", height:"100%", opacity:"1"}} src="https://img.freepik.com/photos-premium/groupe-etude-du-peuple-africain_23-2149156404.jpg?size=626&ext=jpg&uid=R88506737&ga=GA1.2.1056666068.1682777573&semt=ais" alt="about" /> 
                       
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                    <div className="about-text">
                        <h2 style={{color:"#22a2e3", textAlign:"center", fontWeight:"bolder"}}>COURS </h2>
                        <p><span style={{color:"#22a2e3", fontWeight:"bold", fontSize:"200%"}}>N</span>ous proposons une variété de cours pour répondre à tous les niveaux de connaissances. Que vous soyez débutant ou avancé, nous avons des cours pour vous aider à apprendre. Nos instructeurs sont des experts dans leurs domaines et sont déterminés à vous aider à réussir.</p>
                        <Link to="/login" > <Bouton name='Rejoindre un cours'/> </Link>
                        {/* <a href="google.com" className="btn btn-warning">Learn More</a> */}
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- services section --> */}

    <section id="evaluation" className="services section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2 style={{color:"#22a2e3", textAlign:"center", fontWeight:"bolder"}}>Evaluations</h2>
                        <p style={{fontStyle:"italic"}}>Les evaluations ici se font sous forme de QCM <br/> Ces derniers sont soumis par les enseignants aux etudiants qui participent a leur cours!</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-white text-center bg-dark pb-2">
                        <div className="card-body">
                        <i className="bi bi-book-half" style={{color:"#22a2e3"}}></i>


                            <h3 className="card-title"  style={{color:"#22a2e3"}}>Meilleurs qualite</h3>
                            <p className="lead">De l'anglais à la médecine en passant par l'économie, Quizlet est utilisé par des étudiants et enseignants dans des centaines de matières, de l'enseignement secondaire à l'université et au-delà. Mémorisez davantage, plus efficacement, peu importe ce que vous étudiez.</p>
                            <div style={{marginLeft:"30%"}}><Link to="/" ><Bouton name='Voir plus'/></Link></div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-white text-center bg-dark pb-2">
                        <div className="card-body">
                        <i className="bi bi-journal-check"  style={{color:"#22a2e3"}}></i>

                            <h3 className="card-title"  style={{color:"#22a2e3"}}>Meilleurs resultat</h3>
                            <p className="lead">Les études scientifiques montrent que le fait de se tester avec des cartes mémo est plus efficace que de relire ses notes. Créez rapidement des cartes mémo grâce à des fonctionnalités gain de temps, comme les suggestions automatiques ou la conversion directe de vos documents en cartes mémo..</p>
                            <div style={{marginLeft:"30%"}}><Link to="/" ><Bouton name='Voir plus'/></Link></div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-white text-center bg-dark pb-2">
                        <div className="card-body">
                        <i className="bi bi-graph-up"  style={{color:"#22a2e3"}}></i>

                            <h3 className="card-title"  style={{color:"#22a2e3"}}>statistique</h3>
                            <p className="lead">Grace a classwork, vous travaillez tout en suivants votre evalution grace a aux statistique précis et concis offert. Les etudiants et enseignants peuvents ainsi juger de changer la methode de travail.</p>
                            <div style={{marginLeft:"30%"}}><Link to="/" ><Bouton name='Voir plus'/></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- portfolio section --> */}
    <section id="homework" className="portfolio section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2 style={{color:"#22a2e3", textAlign:"center", fontWeight:"bolder"}}>DEVOIS & TD</h2>
                        <p style={{fontStyle:"italic"}}>Les devoirs et travaux dirigé sont soumis par l'enseignant <br/> Ils sont essentiellement sous forme de fichiers numerique !</p>
                    </div>
                </div>
            </div>

            <div className="row">
                {/* <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-center bg-white pb-2">
                        <div className="card-body text-dark">
                            <div className="img-area mb-4">
                                <img src="project-1-img/project-1.jpg" alt="project1" className="img-fluid"/>
                            </div>
                            <h3 className="card-title">Building Make</h3>
                            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam placeat veritatis velit ut vitae sit enim corporis optio illum totam!</p>
                            <button className="btn btn-warning text-dark">Learn More</button>
                        </div>
                    </div>
                </div> */}
                <div className="col-12 col-md-12 col-lg-15 center">
                    <div className="card text-center bg-white pb-2">
                        <div className="card-body text-dark">
                            <div className="img-area mb-4">
                            <i className="bi bi-calendar"></i>
                            </div>
                            <h3 className="card-title">Building Make</h3>
                            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam placeat veritatis velit ut vitae sit enim corporis optio illum totam!</p>
                            <button className="btn btn-warning text-dark">Learn More</button>
                        </div>
                    </div>
                </div>
                {/* <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-center bg-white pb-2">
                        <div className="card-body text-dark">
                            <div className="img-area mb-4">
                                <img src="project-1-img/project-3.jpg" alt="project1" className="img-fluid" />
                            </div>
                            <h3 className="card-title">Building Make</h3>
                            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam placeat veritatis velit ut vitae sit enim corporis optio illum totam!</p>
                            <button className="btn btn-warning text-dark">Learn More</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>

    {/* <!-- team section --> */}
    <section id="team" className="team section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2>Our Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Molestias, dignissimos!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <img src="project-1-img/team-1.jpg" alt="team" className="img-fluid rounded-circle"/>
                            <h3 className="card-title py-2">Jack Wilson</h3>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, animi.</p>

                            <p className="socials">
                                <i className="bi bi-twitter text-dark mx=1"></i>
                                <i className="bi bi-facebook text-dark mx=1"></i>
                                <i className="bi bi-linkedin text-dark mx=1"></i>
                                <i className="bi bi-instagram text-dark mx=1"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <img src="project-1-img/team-2.jpg" alt="team" className="img-fluid rounded-circle"/>
                            <h3 className="card-title py-2">Jack Wilson</h3>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, animi.</p>

                            <p className="socials">
                                <i className="bi bi-twitter text-dark mx=1"></i>
                                <i className="bi bi-facebook text-dark mx=1"></i>
                                <i className="bi bi-linkedin text-dark mx=1"></i>
                                <i className="bi bi-instagram text-dark mx=1"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <img src="project-1-img/team-3.jpg" alt="team" className="img-fluid rounded-circle"/>
                            <h3 className="card-title py-2">Jack Wilson</h3>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, animi.</p>

                            <p className="socials">
                                <i className="bi bi-twitter text-dark mx=1"></i>
                                <i className="bi bi-facebook text-dark mx=1"></i>
                                <i className="bi bi-linkedin text-dark mx=1"></i>
                                <i className="bi bi-instagram text-dark mx=1"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <img src="project-1-img/team-4.jpg" alt="team" className="img-fluid rounded-circle"/>
                            <h3 className="card-title py-2">Jack Wilson</h3>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, animi.</p>

                            <p className="socials">
                                <i className="bi bi-twitter text-dark mx=1"></i>
                                <i className="bi bi-facebook text-dark mx=1"></i>
                                <i className="bi bi-linkedin text-dark mx=1"></i>
                                <i className="bi bi-instagram text-dark mx=1"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- contact section --> */}
    <section id="contact" className="contact section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Molestias, dignissimos!</p>
                    </div>
                </div>
            </div>

            <div className="row m-0">
                <div className="col-md-12 p-0 pt-4 p-4 pb-4">
                   <form action="google.com" className="bg-light p-4.m-auto">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <input type="email" className="form-control" required placeholder="Your Email Here"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <input type="email" className="form-control" required placeholder="Your Email Here"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <textarea rows={3} required className="form-control" placeholder="Your Query Here"></textarea>
                            </div>
                        </div>

                        <button className="btn btn-warning btn-lg btn-block mt-3">Send Now</button>
                    </div>
                   </form>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- footer --> */}

   <Footer />

    








    {/* <!-- link js bootstrap --> */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>

  {/* <nav className="navbar">
    
    <div className='bloc1' style={{width:"20%", height:"100%"}} >
       <img src={image} alt='logo' style={{width:"30%", height:"auto"}}/>
       <p className='titre'><p><text classNameName='titre1'>C</text>lassName<text classNameName='titre2'>work</text></p></p>
    </div>
    <div className='welcome'>
      <h4 style={{color:"google.com22a2e3"}}>WELCOME</h4>
    </div>
    
    <div className='help' >Help?</div>
  </nav>

  <div className="body">
<div className='body-head'>
  <img src={image2} alt='img'></img>
  <div className='cover'>
    <div className='bouton'>S'inscrire gratuitement</div>
  </div>
</div>
  </div> */}
    </div>
 

 
)
}
export default Accueil; 
