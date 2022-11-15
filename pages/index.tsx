import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getPositionOfLineAndCharacter } from 'typescript'
import Post from './../components/Post';
import Pagination from './../components/Pagination';

export default function Home() {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);

  const getPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await response.json();
    setData(res);
  }

  useEffect(() => {
    getPost();
  }, [])


  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPage = indexOfLastPost - dataPerPage;
  const currentData = data.slice(indexOfFirstPage, indexOfLastPost);

  const handlePrevPage = () => {

    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }

  }

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber)
  }

  return (

    <>
      <Post posts={currentData} />
      {/* <div className='my-[20px] flex justify-between'>
        <button className='bg-blue-300 p-2 w-[200px]' onClick={handlePrevPage}>prev</button>
        <button className='bg-blue-300 p-2 w-[200px]' onClick={() => setCurrentPage(currentPage + 1)}>next</button>
      </div> */}
      <Pagination postPerPage={dataPerPage} totalPage={data.length} paginate={paginate} />

    </>

  )
}
