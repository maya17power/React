const earthquakeApi = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";

async function eqData(){
    try{
        const response = await fetch(earthquakeApi);
        if(response.ok){
            const data = await response.json();
            return data;
        }
    }catch(error){
        console.log(error);
    };
};

const earthquake = await eqData();
const {url, title, count} = earthquake.metadata;
const featureArray = earthquake.features.map((m)=> (m.properties.title));
const magArray = earthquake.features.map((m)=> (m.properties.mag));

console.log(
    title,
    count, 
);
console.log(
    featureArray 
);