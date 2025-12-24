import { useLoaderData } from "react-router-dom";
import NewsPage from "../component/NewsPage";


function News() {
const newsData =useLoaderData();
// console.log(newsData)
  return (
    <div>
    {
      newsData.map(news =><NewsPage key={news.id} news={news}></NewsPage>)
    }
      
    </div>
  )
}

export default News;