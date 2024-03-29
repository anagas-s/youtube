import React from "react"



const commentsData =  [
{
    name:"Yoyo",
    text:"Lorem ipsum dolor sit amet,consectetur adip",
    replies:[

    ],
},
{
    name:"Yoyo",
    text:"Lorem ipsum dolor sit amet,consectetur adip",
    replies:[
        {
            name:"Yoyo",
            text:"Lorem ipsum dolor sit amet,consectetur adip",
            replies:[
                {
                    name:"Yoyo",
                    text:"Lorem ipsum dolor sit amet,consectetur adip",
                    replies:[
                
                    ],
                },
            ],
        },

    ],
},
{
    name:"Yoyo",
    text:"Lorem ipsum dolor sit amet,consectetur adip",
    replies:[

    ],
},

]

const Comment = ({data}) => {
    const {name,text,replies} = data
    return( 
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
        <img className="w-10" alt="user" src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png"/>
        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
        
        
        </div>
        
    )
}


const CommentsContainer = () => {
    return (
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Comments</h1>
            <Comment data={commentsData[0]}/>
        </div>
    )
}

export default CommentsContainer