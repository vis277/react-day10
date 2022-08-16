import { useEffect, useState } from "react";

const APiCall = () => {
  // console.log("inside");
  const [list, setList] = useState([]);

  const [search, setSearch] = useState("");
  const [displayList, setdisplayList] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/airing_today?api_key=24661393e867b3b4a85f3f759a76a9d5"
    )
      .then((res) => res.json())
      .then((data) => {
        setList(data.results);
        setdisplayList(data.results);
      });
  }, []);

  useEffect(() => {
    // console.log("search", search);
    // if (search === null || search === "") {
    //   console.log("ln19", displayList);
    //   setList("");
    //   setList(displayList);
    //   return;
    // }

    let finalList = displayList.filter((item) => {
      if (
        item.name
          .toLowerCase()
          .match(search.toLowerCase() || search.toUpperCase())
      ) {
        return item.name;
      }
    });

    setList(finalList);
    // console.log("ln36", list);
  }, [search]);

  console.log("ln43", list);
  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <ul>
          {list.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default APiCall;
