import React from "react";

// function Header(){
//     return(
//         <div>
//             <h1>Header using FC</h1>
//         </div>
//     )
// }

const Header = ({brand, navData}) =>{

    return(
        <div className="bg-black flex justify-around text-white py-2 px-4 items-center">

            <h1 className="text-3xl">{brand}</h1>

            <ul className="flex gap-12 ">
                {
                    navData.map((link, index)=>{
                        return(
                            <li key={index}>{link}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Header;  //exporting the component