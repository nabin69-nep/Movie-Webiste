
import Trending from "./component/Trending";
export default function Home() {
  return (
  <Trending />
);
}
export function generateMetadata({ data }) {
  return {
    title:"Herne",
    description:"Get all your movies and show on herne",
  };

}