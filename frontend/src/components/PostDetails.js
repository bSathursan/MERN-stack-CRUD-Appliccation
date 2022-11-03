import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams(); 
  const [book, setBook] = useState({name: '', description:'', price:'', author:''});


  useEffect(() => {
    const postBook = async () => {
      const response = await fetch(`http://localhost:5000/post/${id}`); 
      const data = await response.json();
      setBook(data);
    }

    postBook();
  }, [id]);

  return (
    <div>
      <p>{book?.name}</p>
    </div>
  );

}

export default PostDetails;

