import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setServices, setHome } from '../features/update';

const useGetData = (url, resource) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Authorization": `Bearer 4b9a64602ccdb433ea68fd5a9dfffa0dff82f40ecf20187dc6fa10d8fc571e7ef759391d48ee040cccd0af57bd68dd851d2098d0e59fd589760cfb961e9037240ceaba96eae727ec2ba4c1d4103bf53da89a52e8cb04914732c605be1aaaac96c6ab2d891428b4188ed320631cbf429ffb0e9c335425f844402a1edd5189c3e1`,
            "Content-Type": "application/json"
          }
        });

        if (response.ok) {
          const data = await response.json();
          if (data && data.data) {
            if (resource === "services") {
              dispatch(setServices(data));
            } else if (resource === "home") {
              dispatch(setHome(data));
            }
            setDataLoaded(true);
          } else {
            console.log("Error: No data found");
          }
        } else {
          console.log("Error: ", response.statusText);
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    getData();
  }, [url, resource, dispatch]);

  return dataLoaded;
};

export default useGetData;