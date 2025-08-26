import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchedPostById, isLoading, Error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchedPostById(params.id);
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу поста с ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
