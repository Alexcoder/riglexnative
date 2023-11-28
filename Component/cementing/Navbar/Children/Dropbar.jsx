import React from 'react';
import "../Styles.jsx";


const DropBar = (props) => {
  const { setDropBar, navigate } = props;

  const handleClick = (item) =>{
    const { title, page } = item;
      if(title==="Logout"){
        localStorage.clear('riglex');
        navigate(page)
      } else if(title==="Login"){
        navigate(page)
      }
      else { 
        navigate(page) ;
      }
      setDropBar(prev=> !prev)
  };
    


  const user = JSON.parse(localStorage.getItem('riglex'))
  const dropBarLink= [
    {
      title : "Profile",
      page  : "/chat/editProfile",
      className : "nav-dropbar-profile",
    },
    {
      title : "Setting",
      page  : "/setting",
      className : "nav-dropbar-setting"
    },
    {
      title : !user ? "Login" : "Logout",
      page  : "/login",
      className : "nav-dropbar-access"
    },
  ]
  return (
    <div className="nav-dropbar-cont">
      <div className="nav-dropbar-wrapper">
        {
          dropBarLink.map((item)=>(
            <div 
              key={item.title}
              className={item.className}
              onPress={()=>handleClick(item)}>
              <div>{ item.title} </div>
            </div> 
          ))
        }

      </div>   
    </div>
  )
}

export default DropBar
