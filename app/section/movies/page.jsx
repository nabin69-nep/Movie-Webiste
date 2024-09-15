import Popular from "@/app/component/Popular";
export default function page() {
  return (
    <Popular />
  )
}
export function generateMetadata({ data }) {
  return {
    title:"Herne/movies",
    description:"Get all your movies ",
  };

}
