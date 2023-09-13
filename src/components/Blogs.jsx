import { useEffect, useState } from "react";

export default function Blogs() {
    const [blogs, setBlock] = useState([])
    useEffect(() => {
        fetch('blogApi.json')
            .then(res => res.json())
            .then(data => setBlock(data))

    }, [])
    return (
        <div className="">
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
            }
        </div>
    )
};

function Blog({ blog }) {
    const { cover_img, author_name, author_img, } = blog
    return (
        <div className="mb-6 shadow-lg p-10 border-2 border-red-300">
            <img className="w-[600px] h-[350px]" src={cover_img} alt="" />
            <div className="flex items-center">
                <img className="w-[50px] h-[50px] rounded-full" src={author_img} alt="" />
                <h1>Author Name: {author_name}</h1>
            </div>
        </div>
    )
}
