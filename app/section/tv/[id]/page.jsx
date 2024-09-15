
import TvDetail from "@/app/component/TvDetails"

export default function Page() {
  return (
<TvDetail />
  );
}
export function generateMetadata({ data }) {
  return {
    title:"Herne/tvdetails",
    description:"Get all your movies and show on herne",
  };

}
