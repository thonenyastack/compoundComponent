function Description({title}){
    const data = {
    aboutus: "Trading company with micro focus on Diagnostics Products",
    contactus: "34, Maharbadoola Street, Bothataung, Yangon",
    ourteam: "YN, Team"
    }
    return(
        <div>{data[title]}</div>
    )
}

export default Description;