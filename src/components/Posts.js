import React,{useState} from 'react';


function Posts(){
 const[allposts,setAllposts]=useState([
   {
     userId: 1,
     id: 1,
     title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
   },
   {
     userId: 1,
     id: 2,
     title: "qui est esse",
     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
   },
   {
     userId: 1,
     id: 3,
     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
     body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
   },
   {
     userId: 1,
     id: 4,
     title: "eum et est occaecati",
     body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
   },
   {
     userId: 1,
     id: 5,
     title: "nesciunt quas odio",
     body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
   },
 ]);

 const [filteredPosts,setFilteredPosts]=useState(()=>allposts);
//  console.log(filteredPosts);
 const [filterData,setFilterData]=useState({userId:"",body:""});
// const [userId ,setUserId]=useState(0);
// const [body, setBody] = useState("");
// console.log(filterData)
const handleChange=(e)=>{

    setFilterData({...filterData,[e.target.name]:e.target.value})
   setFilteredPosts(allposts.filter((post) => post.body.indexOf(filterData.body) !==-1))
  
  setFilteredPosts((posts) => {
    return posts.filter(
      (post) => post.userId.toString().indexOf(filterData.userId) !== -1
    );
  });
  
  }

  

  return (
    <div>
      <h2>Filters</h2>
      <div>
        <label htmlFor="userId">User Id :</label>
        <input
          type="text"
          name="userId"
          id="userId"
          value={filterData.userId}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="body">Body :</label>
        <input
          type="text"
          name="body"
          id="body"
          value={filterData.body}
          onChange={handleChange} 
        ></input>
      </div>
      <h2>Posts</h2>
      {filteredPosts.map((post, index) => {
        return (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>by:{post.id}</p>
          </div>
        );
      })}
    </div>
  );
}
 
export default Posts