
import Detail from "@/app/component/Details"
export default function Page() {

  return (
   <Detail />
  );
}
export function generateMetadata({ data }) {
  return {
    title:"Herne | moviesdetails",
    description:"Get all your movies and show on herne",
  };

}