import { useEffect, useState } from "react";

const FetchData = () => {
    const [users,setUsers]=useState([]);
    const [usersLoading,setUsersLoading]=useState(false);
    const [usersError,setUsersError]=useState('');
    const [posts,setPosts]=useState([]);
    const [postsLoading,setPostsLoading]=useState(false);
    const [postsError,setPostsError]=useState('');


    useEffect(()=>{
        fetchUsers()
        fetchPosts()
    },[])

    const fetchUsers = async()=>{
        setUsersLoading(true)
    }
    const fetchPosts = async()=>{

    }

    return (
        <div>
            
        </div>
    );
};

export default FetchData;