/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { db } from "../firebase";
import { getDoc, setDoc, doc } from "firebase/firestore";
import { moviesdata } from "../moviesdata";
import Movie from "./Movie";

const Row = ({ moviestitles, movieCategory }) => {
    console.log(movieCategory)
  const [onHover, setOnHover] = useState(false);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(true);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);
  const [movies, setMovies] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Check if the container is scrollable to the left
      setIsLeftArrowVisible(container.scrollLeft > 0);
      // Check if the container is scrollable to the right
      setIsRightArrowVisible(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  }, [onHover]);

  useEffect(() => {
    async function getMovies() {
      const docRef = doc(db, "movies", movieCategory);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        setMovies(data.movies);
      } else {
        console.log("Some error while fetching movies");
        setMovies([]);
      }
    }

    getMovies();
  }, []);

  function handleScroll() {
    const container = scrollContainerRef.current;
    if (container) {
      setIsLeftArrowVisible(container.scrollLeft > 0);
      setIsRightArrowVisible(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  }

  function sideLeft() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - 150,
        behavior: "smooth",
      }); // Adjust the value based on your image width
    }
  }

  function sideRigth() {
    async function add() {
      try {
        await setDoc(doc(db, "movies", "hindi"), {
          movies: moviesdata,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    add();

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + 150,
        behavior: "smooth",
      }); // Adjust the value based on your image width
    }
  }

  return (
    <div className="my-4">
      <div className="mx-6">
        <h2 className="font-bold text-xl">
          {moviestitles}{" "}
          <span>
            <ArrowRightAltIcon />
          </span>
        </h2>
      </div>

      <div
        className="flex  items-center   "
        onMouseEnter={() => {
          setOnHover(true);
        }}
        onMouseLeave={() => {
          setOnHover(false);
        }}
      >
        {isLeftArrowVisible && onHover ? (
          <div
            className=" cursor-pointer h-[160px] flex items-center mx-2 px-2 bg-slate-600 bg-opacity-30 backdrop-filter backdrop-blur-lg"
            onClick={sideLeft}
          >
            <ChevronLeftIcon />
          </div>
        ) : (
          <></>
        )}

        <div
          className=" flex overflow-x-scroll   pl-3 my-6"
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
            
           {movies.map((item, index)=>{
             return(
               <Movie item={item} key={index} />
             )
           })}
         
        </div>

        {isRightArrowVisible && onHover ? (
          <div
            className=" cursor-pointer h-[160px] flex items-center mx-2 px-2 bg-slate-600 bg-opacity-30 backdrop-filter backdrop-blur-lg"
            onClick={sideRigth}
          >
            <ChevronRightIcon />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Row;
