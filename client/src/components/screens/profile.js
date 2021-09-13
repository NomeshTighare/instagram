import Recat from 'react'


const Profile = ()=>{
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                    src="https://www.roadtocode.org/static/media/aniket.c9b587ed.jpg"
                    />
                </div>
                <div>
                    <h4 style={{fontWeight:"bold"}}>Aniket Vairagade</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h6 style={{fontWeight:"bold"}}>82 Posts</h6>
                        <h6 style={{fontWeight:"bold"}}>681 Followers</h6>
                        <h6 style={{fontWeight:"bold"}}>611 Following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" src="https://www.roadtocode.org/static/media/aniket.c9b587ed.jpg"/>
                <img className="item" src="https://www.roadtocode.org/static/media/aniket.c9b587ed.jpg"/>
                <img className="item" src="https://www.roadtocode.org/static/media/aniket.c9b587ed.jpg"/>
                <img className="item" src="https://www.roadtocode.org/static/media/aniket.c9b587ed.jpg"/>
                <img className="item" src="https://www.roadtocode.org/static/media/aniket.c9b587ed.jpg"/>
                <img className="item" src="https://www.roadtocode.org/static/media/aniket.c9b587ed.jpg"/>
            </div>
            
      <div style={{margin:"50px", color:"grey", textAlign:"center"}}>
        <p> © 2021 INSTAGRAM FROM FACEBOOK </p>
      </div>
        </div>    
    )
}

export default Profile