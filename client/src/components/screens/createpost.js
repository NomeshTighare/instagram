import React,{useState} from "react"
import M from 'materialize-css';
import{useHistory} from 'react-router-dom'

const CreatePost = () => {
    const history = useHistory()
    const [title,setTitle] = useState("") 
    const [body,setBody] = useState("") 
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("") 

    const postDeatails = ()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","nomesh")
        fetch("https://api.cloudinary.com/v1_1/nomesh/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })

        fetch('/createpost', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                body,
                pic:url
            })
        }).then(res => res.json())
            .then(data => {
               
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" });
                }
                else {
                    M.toast({ html: "Cretaed Post Sucessfully", classes: "#43a047 green darken-1" });
                    history.push('/');
                }
            }).catch(err => {
                console.log(err)
            })
            
    }

    return (
        <div className="card input-filed"
        style={{
            margin:"30px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}
        >
            <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" placeholder="body" value={body} onChange={(e)=>setBody(e.target.value)}/>
            <div className="file-field input-field">
                <div className="btn #064b5f6 blue darken-1">
                    <span>Upload Image</span>
                    <input type="file"  onChange={(e)=>setImage(e.target.files)}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button className="btn waves-effect waves-light #064b5f6 blue darken-1"
            onClick={()=>postDeatails()}>Submit Post</button>
        </div>
    )
}


export default CreatePost