import { Link,Outlet } from "react-router-dom"


const Navigation = () => {
  const navigate=[
    {id:1,link:"/",label:'Home'},
    {id:2,link:"/about",label:"About"}
  ]
 
  return (
    <div>
  
        <nav className='nav'>
          {navigate.map(n=><Link to={n.link} className="nav-L" key={n.id}>
        <p className='nav-label'>{n.label}</p>
        <div className="aside">
<Link className="aside-link" to='/'><p>HOME</p></Link>
<Link className="aside-link" to='/about'><p>ABOUT</p></Link>
        </div>
          
          </Link>)}
           
            <Outlet/>
        </nav>
    </div>
  )
}

export default Navigation