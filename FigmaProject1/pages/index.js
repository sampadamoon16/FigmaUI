import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import PhoneIcon from '@mui/icons-material/PhoneIcon';
import PhoneIcon from '@mui/icons-material/Phone';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#000000'}}>
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{}}>
        <img src={"./Logo.PNG"} className="" alt="..." style={{width:"90px"}}/>
          <div className="navbar-nav" style={{color:"white", marginLeft:"800px"}}>
            <a className="nav-link active" href="#" style={{color:"white"}}>Home</a>
            <a className="nav-link" href="#" style={{color:"white"}}>Services</a>
            <a className="nav-link" href="#" style={{color:"white"}}>About Us</a>
            <a className="nav-link disabled" style={{color:"white"}}>Contact Us</a>
          </div>
        </div>
      </nav>

      <div style={{backgroundColor:"#000000", width:"100%", height:"540px", display:"flex"}}>
        <div style={{marginLeft:"100px", marginTop:"100px"}}>
        <h1 style={{color:'white'}}>TransForming Ideas</h1>
        <h1 style={{color:"white"}}>Into <span style={{color:"#FDBC58"}}>Powerful Solutions</span></h1>
        <p style={{color:'white'}}>FOR STARTUPS AND GROWING BUSINESS, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC 
        DIGITAL MARKETING STRATEGES, PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM</p>

        {/* <button><LocalPhoneIcon style={{height:'36px', backgroundColor:'#FDBC58'}}/></button><input type='search' placeholder='Get a Free Consulting' style={{height:"40px", width:"300px", backgroundColor:'#000000', color:"white"}}/> */}
        <PhoneIcon sx={{ backgroundColor: '#ff6f00', height: '40px', width: '40px', borderRadius: '5px', marginTop: '' }} />
        <input type='search' placeholder='Get a Free Consulting' style={{height:"40px", width:"300px", backgroundColor:'#000000', color:"white", marginTop:""}}/>
        </div>
        <div>
        <img src={"./Logo2.PNG"} className="" alt="..." style={{width:"600px", marginLeft:"50px"}}/>
        </div>
        
      </div>
      <hr style={{ height:"0", margin:"0px",border:'1px solid red', backgroundColor:'rgb(131,58,180)'}}/>
      <div style={{width:'100%', height:'540px', backgroundColor:'#000000', display:'flex'}}>
      
        <div style={{marginLeft:"80px", color:'white', marginTop:"50px"}}>
          <h3>We provide the best web services</h3>
          <p>information, knowledge or stories about a particular subject that is not written down but passed on from one person to another the set of beliefs, traditions and stories of a particular group of people or community</p>
          <ul>
            <li>MOST EASY PREMUM WEB DESGN PROCESS</li>
            <li>RESEARCH & DEVELOPMENT BEFORE STARTING</li>
            <li>MAKING A QULITY DESIGN IDEAS</li>
            <li>MAKING A QULITY DESIGN IDEAS</li>
            <li>MAKING A QULITY DESIGN IDEAS</li>
          </ul>
        </div>
        <div style={{marginTop:"50px", marginRight:"50px"}}>
        <img src={"./Logo3.PNG"} className="" alt="..." style={{width:"500px", marginLeft:"50px"}}/>
        </div>
      </div>
      <div style={{width:'100%', height:'1200px', backgroundColor:'#000000'}}>
        <h1 style={{color:'white', marginLeft:"500px"}}>Services We're Offering</h1>
        <div style={{display:'flex', marginLeft:"80px", justifyContent:'', marginTop:"50px"}}>
         <div>
          <div className="card" style={{width: "500px", height:'300px', backgroundColor:'#4d4242'}}>
            <div className="card-body">
              <img src={'./Logo7.PNG'} alt='' style={{width:"70px"}}/>
              <h5 className="card-title" style={{color:"white", marginTop:"50px"}}>Web Dessign</h5>
              <p className="card-text" style={{color:"white"}}>Some quick example text to build on the card title and make up the bulk of the card's content.title and make up the bulk of the card's content.</p>
            </div>
          </div>
         </div>
         <div>
         <div className="card" style={{width: "500px", height:'300px', marginLeft:'200px', backgroundColor:'#4d4242'}}>
            <div className="card-body">
              <img src={'./logo8.PNG'} alt='' style={{width:"70px"}}/>
              <h5 className="card-title" style={{color:"white", marginTop:"50px"}}>Web/Mobile Application</h5>
              <p className="card-text" style={{color:"white"}}>Some quick example text to build on the card title and make up the bulk of the card's content. and make up the bulk of the card's content. and make up the bulk of the card's content. and make up the bulk of the card's content.</p>
            </div>
          </div>
         </div>
        </div>
        <div style={{display:'flex', marginLeft:"80px", justifyContent:'', marginTop:"50px"}}>
         <div>
          <div className="card" style={{width: "500px", height:'300px', backgroundColor:'#4d4242'}}>
            <div className="card-body">
              <img src={'./logo10.PNG'} alt='' style={{width:"70px"}}/>
              <h5 className="card-title" style={{color:"white", marginTop:"50px"}}>SEO</h5>
              <p className="card-text" style={{color:"white"}}>Some quick example text to build on the card title and make up the bulk of the card's content.title and make up the bulk of the card's content.</p>
            </div>
          </div>
         </div>
         <div>
         <div className="card" style={{width: "500px", height:'300px', marginLeft:'200px', backgroundColor:'#4d4242'}}>
            <div className="card-body">
              <img src={'./logo11.PNG'} alt='' style={{width:"70px"}}/>
              <h5 className="card-title" style={{color:"white", marginTop:"50px"}}>Digital Marketing</h5>
              <p className="card-text" style={{color:"white"}}>Some quick example text to build on the card title and make up the bulk of the card's content. and make up the bulk of the card's content. and make up the bulk of the card's content. and make up the bulk of the card's content.</p>
            </div>
          </div>
         </div>
        </div>
        <div style={{display:'flex', marginLeft:"80px", justifyContent:'', marginTop:"50px"}}>
         <div>
          <div className="card" style={{width: "500px", height:'300px', backgroundColor:'#4d4242'}}>
            <div className="card-body">
              <img src={'./logo12.PNG'} alt='' style={{width:"70px"}}/>
              <h5 className="card-title" style={{color:"white", marginTop:"50px"}}>Dev Ops</h5>
              <p className="card-text" style={{color:"white"}}>Some quick example text to build on the card title and make up the bulk of the card's content.title and make up the bulk of the card's content.</p>
            </div>
          </div>
         </div>
         <div>
         <div className="card" style={{width: "500px", height:'300px', marginLeft:'200px', backgroundColor:'#4d4242'}}>
            <div className="card-body">
              <img src={'./logo13.PNG'} alt='' style={{width:"70px"}}/>
              <h5 className="card-title" style={{color:"white", marginTop:"50px"}}>Data Science</h5>
              <p className="card-text" style={{color:"white"}}>Some quick example text to build on the card title and make up the bulk of the card's content. and make up the bulk of the card's content. and make up the bulk of the card's content. and make up the bulk of the card's content.</p>
            </div>
          </div>
         </div>
        </div>
      </div>
      <div style={{width:'100%', height:'800px', backgroundColor:'#000000'}}>
        <div style={{marginLeft:'500px'}}>
          <h1 style={{color:"white"}}>Contact Us</h1>
        </div>
        <div style={{marginLeft:"50px"}}>
          <img src={"./logo18.PNG"} alt='' />
        </div>
        <div style={{display:'flex', marginLeft:"200px", marginTop:"100px"}}>
          <div>
            <img src={"./logo15.PNG"} alt='' />
          </div>
          <div style={{marginLeft:"100px"}}>
          <img src={"./logo16.PNG"} alt='' />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
