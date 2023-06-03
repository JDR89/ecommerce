


export const Toogle = ({onChangeTheme}) => {

  
const onClick=()=>{
    onChangeTheme()
}
  
  return (
    <input type="checkbox" onClick={onClick}  className="toggle ms-5"  />
  )
}
